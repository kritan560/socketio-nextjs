import ConnectionStatus from "@/components/connection-status";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ConnectionStatus />
      {children}
    </div>
  );
};
export default layout;
