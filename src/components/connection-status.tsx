"use client";

import { cn } from "@/lib/utils";
import { useSocketIoStore } from "@/store/global";

const ConnectionStatus = () => {
  const { isConnected } = useSocketIoStore();

  return (
    <div>
      <div
        className={cn(
          "px-4 py-1 rounded-full w-fit",
          isConnected ? "bg-emerald-500" : "bg-rose-500"
        )}
      >
        {isConnected ? "connected" : "not connected"}
      </div>
    </div>
  );
};
export default ConnectionStatus;
