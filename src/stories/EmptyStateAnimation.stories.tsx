import type { Meta, StoryObj } from "@storybook/react";
import { EmptyStateAnimation } from "@/components";

const meta = {
  title: "Components/Animated/EmptyStateAnimation",
  component: EmptyStateAnimation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EmptyStateAnimation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
