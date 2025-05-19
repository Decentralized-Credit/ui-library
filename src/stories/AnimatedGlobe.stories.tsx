import type { Meta, StoryObj } from "@storybook/react";
import { AnimatedGlobe } from "@/components";

const meta = {
  title: "Components/Animated/AnimatedGlobe",
  component: AnimatedGlobe,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "number",
      description: "The size",
    },
    lineColor: {
      control: "color",
      description: "The line color",
    },
    speed: {
      control: "number",
      description: "The speed",
    },
    latLineSpacing: {
      control: "number",
      description: "The lat line spacing",
    },
    longLineSpacing: {
      control: "number",
      description: "The long line spacing",
    },
    numDots: {
      control: "number",
      description: "The number of dots",
    },
    dotColor: {
      control: "color",
      description: "The dot color",
    },
    dotSize: {
      control: "number",
      description: "The dot size",
    },
    dotShape: {
      control: "select",
      options: ["circle", "square", "diamond"],
      description: "The dot shape",
    },
    className: {
      control: "text",
      description: "The class name",
    },
  },
} satisfies Meta<typeof AnimatedGlobe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 300,
    lineColor: "#00FF66",
    speed: 0.00025,
    latLineSpacing: 12,
    longLineSpacing: 12,
    numDots: 50,
    dotColor: "#00FF66",
    dotSize: 0.01,
    dotShape: "diamond",
  },
};
