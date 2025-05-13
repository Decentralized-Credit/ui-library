import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button, buttonVariants } from "@/components/ui/button";

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
      options: buttonVariants.variants,
      description: "The visual style of the button",
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
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
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
};

// variants: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
