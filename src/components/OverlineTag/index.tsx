import { cn } from "@/lib/utils";
import { OverlineTagProps } from "@/types";

export default function OverlineTag({
  children,
  className = "",
  color = "accent",
}: OverlineTagProps) {
  const colorClasses = {
    accent: "border-accent/20 text-accent",
    gray: "border-gray-500/40 text-gray-300",
  };

  return (
    <div
      className={cn(
        "inline-block px-3 py-1",
        "rounded-sm border",
        "font-mono text-sm uppercase",
        colorClasses[color],
        className,
      )}
    >
      {children}
    </div>
  );
}
