import { cn } from "@/lib/utils";
import styles from "./styles.module.css";

export default function CustomLoader({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const viewBoxSize = size * 1.625;
  const rectSize = size * 0.8125;

  return (
    <span className={cn(styles.loader, className)}>
      <svg
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y={rectSize}
          width={rectSize}
          height={rectSize}
          fill="currentColor"
        />
        <rect
          x={rectSize}
          width={rectSize}
          height={rectSize}
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
