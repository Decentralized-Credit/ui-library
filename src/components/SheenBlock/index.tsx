import { cn } from "@/lib/utils";
import { BaseComponentProps } from "@/types";

export default function SheenBlock({
  children,
  className,
}: BaseComponentProps) {
  return (
    <div
      className={cn(
        "relative flex items-center gap-3 px-8 py-6",
        "border-accent/10 rounded-sm border",
        "bg-accent/5 text-accent",
        "font-mono text-base uppercase",
        // Sheen effect container
        "overflow-hidden",
        "after:absolute after:inset-0",
        "after:translate-x-[-100%]",
        "after:via-accent/10 after:bg-gradient-to-r after:from-transparent after:to-transparent",
        "after:animate-[sheen_3s_ease-in-out_infinite]",
        className,
      )}
    >
      {children}
    </div>
  );
}
