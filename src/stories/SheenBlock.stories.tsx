import type { Meta, StoryObj } from "@storybook/react";
import { SheenBlock, CardStep } from "@/components";

const meta = {
  title: "Components/SheenBlock",
  component: SheenBlock,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "object",
      description: "React node to be rendered inside the component",
    },
    className: {
      control: "text",
      description: "The class name of the component",
    },
  },
} satisfies Meta<typeof SheenBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className: "",
    children: <CardStep number={1} title="wooosh" description="wooosh" />,
  },
};
