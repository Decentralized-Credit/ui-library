import type { Meta, StoryObj } from "@storybook/react";
import { AnimatedPathGraphic, M } from "@/components";

const meta = {
  title: "Components/Animated/AnimatedPathGraphic",
  component: AnimatedPathGraphic,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    svg: {
      control: "object",
      description: `The SVG to animate. It must be a valid SVG in a React component. Refer to <a href="/?path=/docs/components-svgs-documentation--docs">SVGs</a>`,
    },
    width: {
      control: "number",
      description: "The width of the SVG",
    },
    height: {
      control: "number",
      description: "The height of the SVG",
    },
    baseColor: {
      control: "color",
      description: "The color of the SVG",
    },
    glowColor: {
      control: "color",
      description: "The color of the glow",
    },
    glowIntensity: {
      control: "number",
      description: "The intensity of the glow",
    },
    duration: {
      control: "number",
      description: "The duration of the animation (seconds)",
    },
    delay: {
      control: "number",
      description: "The delay of the animation",
    },
    stagger: {
      control: "number",
      description: "The stagger of the animation",
    },
    useStroke: {
      control: "boolean",
      description: "Filled SVG or just stroke/ outline",
    },
    strokeWidth: {
      control: "number",
      description: "The width of the stroke",
    },
    loop: {
      control: "boolean",
      description: "Whether to loop the animation",
    },
    loopCount: {
      control: "text",
      text: "infinite",
      description: "The number of times to loop the animation",
    },
  },
} satisfies Meta<typeof AnimatedPathGraphic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    svg: <M width={40} />,
    width: 500,
    duration: 6,
    delay: -20,
    stagger: 0.4,
    glowColor: "text-green-500",
    baseColor: "text-green-500",
    glowIntensity: 7,
    strokeWidth: 2,
    useStroke: true,
    loopCount: "infinite",
    className: "text-green-500",
  },
};
