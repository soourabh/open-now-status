import { cn } from "@/lib/utils";

interface StatusPillProps {
  status: "OPEN" | "CLOSED";
  updatedAt?: Date;
  className?: string;
}

export function StatusPill({ status, updatedAt, className }: StatusPillProps) {
  const getTimeAgo = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMins / 60);
    
    if (diffHours >= 2) {
      return `${diffHours}h ago (may be outdated)`;
    } else if (diffMins >= 60) {
      return `${diffHours}h ago`;
    } else {
      return `${diffMins}m ago`;
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span
        className={cn(
          "status-pill",
          status === "OPEN" ? "status-open" : "status-closed"
        )}
      >
        {status}
      </span>
      {updatedAt && (
        <span className="text-xs text-muted-foreground">
          Updated {getTimeAgo(updatedAt)}
        </span>
      )}
    </div>
  );
}