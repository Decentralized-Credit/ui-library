import { cn } from "@/lib/utils";

interface CardStepProps {
  number: number;
  title: string;
  description: React.ReactNode;
  className?: string;
}

export const CardStep: React.FC<CardStepProps> = ({
  number,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-2 rounded-sm border border-muted bg-black/30 p-4 backdrop-blur-sm md:flex-row md:items-center",
        className,
      )}
    >
      <div className="text-foreground-muted flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-sm border border-primary/20 bg-primary/10 font-display text-5xl text-primary">
        {number}
      </div>
      <div className="flex-grow p-3">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
