import type { Meta, StoryObj } from "@storybook/react";
import { CardList } from "@/components";
import { SparklesIcon } from "lucide-react";

const items = [
  {
    title: "Item 1",
    description: "Description 1",
    icon: <SparklesIcon />,
  },
];

const meta = {
  title: "Components/Cards/CardList",
  component: CardList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    heading: {
      control: "text",
      description: "The heading",
    },
    items: {
      control: "object",
      description: "An array of items",
    },
    backgroundDark: {
      control: "boolean",
      description: "Background color",
    },
    className: {
      control: "text",
      description: "The class name",
    },
  },
} satisfies Meta<typeof CardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    heading: "Some heading",
    items: items,
    backgroundDark: true,
  },
};
