import { create } from "zustand";

interface SocketIoState {
  isConnected: boolean;
  transport: string;
  setIsConnected: (value: boolean) => void;
  setTransport: (value: string) => void;
}

export const useSocketIoStore = create<SocketIoState>()((set) => ({
  isConnected: false,
  transport: "N/A",
  setIsConnected: (value) => set({ isConnected: value }),
  setTransport: (value) => set({ transport: value }),
}));
