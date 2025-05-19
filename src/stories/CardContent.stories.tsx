import type { Meta, StoryObj } from "@storybook/react";
import { CardContent } from "@/components";
import { ArrowRightIcon } from "lucide-react";

const meta = {
  title: "Components/Cards/CardContent",
  component: CardContent,
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
    backgroundDark: {
      control: "boolean",
      description: "Background color",
    },
    className: {
      control: "text",
      description: "The class name",
    },
    icon: {
      description: "Provide a ReactNode",
    },
  },
} satisfies Meta<typeof CardContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Some title",
    description: "Some description",
    icon: <ArrowRightIcon />,
    backgroundDark: true,
  },
};
