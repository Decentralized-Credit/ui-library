import type { Meta, StoryObj } from "@storybook/react";
import { CardStep } from "@/components";

const meta = {
  title: "Components/Cards/CardStep",
  component: CardStep,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The title",
    },
    description: {
      control: "text",
      description: "The description",
    },
    number: {
      control: "number",
      description: "The number",
    },
    className: {
      control: "text",
      description: "The class name",
    },
  },
} satisfies Meta<typeof CardStep>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    number: 1,
    title: "Some title",
    description: "Some description",
  },
};
