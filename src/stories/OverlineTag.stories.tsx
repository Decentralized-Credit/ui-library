import type { Meta, StoryObj } from "@storybook/react";
import { OverlineTag } from "@/components";

const meta = {
  title: "Components/OverlineTag",
  component: OverlineTag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "The class name of the component",
    },
    color: {
      control: "select",
      options: ["accent", "gray"],
      description: "The color of the tag",
    },
  },
} satisfies Meta<typeof OverlineTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className: "",
    color: "accent",
    children: "wooosh",
  },
};
