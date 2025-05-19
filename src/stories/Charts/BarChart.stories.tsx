import type { Meta, StoryObj } from "@storybook/react";
import { CustomBarChart } from "@/components";
import {
  barchartConfig1,
  barchartData1,
  barchartConfig2,
  barchartData2,
} from "./data";

const meta = {
  title: "Components/Charts/BarChart",
  component: CustomBarChart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CustomBarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example1: Story = {
  args: {
    chartConfig: barchartConfig1,
    chartData: barchartData1,
    xAxisKey: "month",
    className: "mx-auto",
    width: "w-[600px]",
    barKeys: [
      { dataKey: "desktop", fill: "#0f0" },
      { dataKey: "mobile", fill: "#fff" },
    ],
  },
};

export const Example2: Story = {
  args: {
    chartConfig: barchartConfig2,
    chartData: barchartData2,
    xAxisKey: "category",
    className: "mx-auto",
    width: "w-[600px]",
    barKeys: [{ dataKey: "sales", fill: "rebeccapurple" }],
  },
};
