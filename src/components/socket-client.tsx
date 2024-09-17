"use client";

import { socket } from "@/app/socket";
import { useSocketIoStore } from "@/store/global";
import { useEffect } from "react";

export default function SocketClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setIsConnected, setTransport } = useSocketIoStore();

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, [setIsConnected, setTransport]);

  return <>{children}</>;
}
