import type { Meta, StoryObj } from "@storybook/react";
import { AccentLine } from "@/components";

const meta = {
  title: "Components/AccentLine",
  component: AccentLine,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "The class name of the component",
    },
    accentWidth: {
      control: "number",
      description: "The width of the accent line",
    },
  },
} satisfies Meta<typeof AccentLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className: "",
  },
};
