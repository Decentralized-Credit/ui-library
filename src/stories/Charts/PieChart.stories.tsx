import type { Meta, StoryObj } from "@storybook/react";
import { CustomPieChart } from "@/components";
import {
  pieChartConfig1,
  pieChartData1,
  pieChartConfig2,
  pieChartData2,
} from "./data";

const meta = {
  title: "Components/Charts/PieChart",
  component: CustomPieChart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CustomPieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example1: Story = {
  args: {
    chartConfig: pieChartConfig1,
    chartData: pieChartData1,
    dataKey: "visitors",
    nameKey: "browser",
    size: "h-[280px] sm:h-[400px]",
    innerRadius: 60,
  },
};

export const Example2: Story = {
  args: {
    chartConfig: pieChartConfig2,
    chartData: pieChartData2,
    dataKey: "share",
    nameKey: "company",
    size: "h-[300px]",
  },
};
