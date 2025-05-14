import type { Meta, StoryObj } from "@storybook/react";
import CustomLoader from "@/components/custom/CustomLoader";

const meta = {
  title: "Components/CustomLoader",
  component: CustomLoader,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The color of the loader is set using tailwind color classes. Eg: text-accent",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "number",
      description: "The size of the loader",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to add to the component",
    },
  },
  args: {},
} satisfies Meta<typeof CustomLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 16,
  },
};

export const Green: Story = {
  args: {
    size: 16,
    className: "text-accent",
  },
};
