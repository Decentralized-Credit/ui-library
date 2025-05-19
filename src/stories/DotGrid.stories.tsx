import type { Meta, StoryObj } from "@storybook/react";
import { DotGrid } from "@/components";

const meta = {
  title: "Components/Animated/DotGrid",
  component: DotGrid,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "This component requires a width and height to be set. This can be done using the `className` prop. Eg: `className='w-[300px] h-[300px]'`. If no width and height is set, the component will grow to the size of its parent container.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
      description: "The background color",
    },
    squareColor: {
      control: "color",
      description: "The square color",
    },
    animationSpeed: {
      control: "number",
      description: "The animation speed",
      min: 0,
      max: 5000,
      step: 100,
    },
    maxActiveSquares: {
      control: "number",
      description: "The maximum number of active squares",
      min: 1,
      max: 200,
      step: 5,
    },
    transitionDuration: {
      control: "number",
      description: "The transition duration in milliseconds",
      min: 100,
      max: 5000,
      step: 100,
    },
    className: {
      control: "text",
      description: "The class name",
    },
  },
} satisfies Meta<typeof DotGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    backgroundColor: "#000",
    squareColor: "#fff",
    animationSpeed: 1000,
    maxActiveSquares: 100,
    transitionDuration: 500,
    className: "w-[300px] h-[300px]",
  },
};
