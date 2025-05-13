import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "@/components/ui/button";

const variants = [
  "default",
  "destructive",
  "outline",
  "secondary",
  "ghost",
  "link",
] as const;

const sizes = ["default", "sm", "lg", "icon"] as const;

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: variants,
      description: "The visual style of the button",
    },
    size: {
      control: { type: "select" },
      options: sizes,
      description: "The size of the button",
    },
    asChild: {
      control: "boolean",
      description: "When true, the button will be rendered as its child",
    },
    disabled: {
      control: "boolean",
      description: "When true, the button is disabled",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to add to the button",
    },
    children: {
      control: "text",
      description: "The content of the button",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Button",
  },
};
