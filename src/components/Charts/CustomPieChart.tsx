import { Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PieChartProps } from "@/types";
import { cn } from "@/lib/utils";

export default function CustomPieChart({
  chartConfig,
  chartData,
  size = "h-auto",
  className,
  dataKey,
  nameKey,
  innerRadius = 0,
  children,
}: PieChartProps) {
  return (
    <ChartContainer
      config={chartConfig}
      className={cn(size, "aspect-square max-w-full", className)}
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey={dataKey}
          nameKey={nameKey}
          innerRadius={innerRadius}
          strokeWidth={5}
        >
          {children}
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
