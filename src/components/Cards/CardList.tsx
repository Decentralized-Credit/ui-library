import { cn } from "@/lib/utils";
import { CardListProps } from "@/types";

export function CardList({
  heading,
  items,
  noIcons = false,
  backgroundDark = false,
  className,
}: CardListProps) {
  return (
    <div
      className={cn(
        "border-accent/20 rounded-sm border p-8 transition-all duration-300",
        "hover:border-accent/20 hover:-translate-y-1 hover:bg-black/30",
        backgroundDark
          ? "border-white/10 bg-black/100 hover:border-white/15 hover:bg-black/80"
          : "border-accent/20 bg-primary/5 hover:bg-primary/10",
        className,
      )}
    >
      <h3
        className={cn(
          "mb-6 text-xl font-bold",
          backgroundDark ? "text-grey-100" : "text-accent",
        )}
      >
        {heading}
      </h3>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex gap-3">
            <div
              className={cn(
                "flex-shrink-0 rounded-sm",
                noIcons ? "mt-1.5 h-2.5 w-2.5" : "h-6 w-6",
                backgroundDark
                  ? noIcons
                    ? "bg-primary/40"
                    : "bg-primary/10 text-primary"
                  : noIcons
                    ? "bg-accent/40"
                    : "bg-accent/10 text-accent",
                !noIcons && "flex items-center justify-center",
              )}
            >
              {!noIcons && item.icon}
            </div>
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">{item.title}</span>:{" "}
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
