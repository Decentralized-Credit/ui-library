import type { Meta, StoryObj } from "@storybook/react";
import { AnimatedPathGraphic } from "@/components";

const meta = {
  title: "Components/Animated/AnimatedPathGraphic",
  component: AnimatedPathGraphic,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    svg: {
      control: "object",
    },
  },
} satisfies Meta<typeof AnimatedPathGraphic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    svg: <svg></svg>,
  },
};
