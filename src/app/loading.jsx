import { Spinner } from "@heroui/react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center gap-2 min-h-screen">
      <div className="flex flex-col items-center gap-1">
        <Spinner size="xl" color="danger" />
        <span className="text-xs text-muted">Please wait...</span>
      </div>
    </div>
  );
};

export default Loading;
