import { cn } from "@/lib/utils";
import { CardContentProps } from "@/types";

export function CardContent({
  icon,
  title,
  description,
  backgroundDark = false,
  className,
}: CardContentProps) {
  return (
    <div
      className={cn(
        "border-accent/20 rounded-sm border p-8 transition-all duration-300",
        "hover:border-accent/30 hover:-translate-y-1 hover:bg-black/30",
        backgroundDark
          ? "border-white/10 bg-black/100 hover:border-white/15 hover:bg-black/80"
          : "border-accent/20 bg-primary/5 hover:bg-primary/10",
        className,
      )}
    >
      <div className="flex flex-col">
        <div
          className={cn(
            "mb-6 flex h-12 w-12 items-center justify-center rounded-sm border",
            backgroundDark
              ? "border-primary/40 bg-primary/5 text-primary"
              : "border-accent/40 text-accent",
          )}
        >
          {icon}
        </div>
        <h3
          className={cn(
            "mb-3 text-xl font-semibold tracking-wide uppercase",
            backgroundDark ? "text-primary" : "text-foreground",
          )}
        >
          {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
