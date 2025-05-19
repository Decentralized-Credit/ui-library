import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { cn } from "@/lib/utils";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CustomLineChartProps } from "@/types";

export default function CustomLineChart({
  chartConfig,
  chartData,
  xAxisKey,
  lineKeys,
  height = "h-auto",
  width = "w-auto",
  className,
  showLegend = true,
  showTooltip = true,
  tooltipIndicator = "line",
  hideTooltipLabel = false,
}: CustomLineChartProps) {
  return (
    <ChartContainer
      config={chartConfig}
      className={cn(height, width, "max-w-full", className)}
    >
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey={xAxisKey}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.toLocaleString()}
        />
        {showTooltip && (
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                indicator={tooltipIndicator}
                hideLabel={hideTooltipLabel}
              />
            }
          />
        )}
        {showLegend && <ChartLegend content={<ChartLegendContent />} />}
        {lineKeys.map((key) => (
          <Line
            key={key.dataKey}
            type={key.type || "natural"}
            dataKey={key.dataKey}
            stroke={key.stroke}
            strokeWidth={key.strokeWidth || 2}
            dot={false}
          />
        ))}
      </LineChart>
    </ChartContainer>
  );
}
