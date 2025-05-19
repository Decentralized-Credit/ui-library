import type { Meta, StoryObj } from "@storybook/react";
import { LogoStacked } from "@/components";

const meta = {
  title: "Components/SVGs/LogoStacked",
  component: LogoStacked,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "In addition to the base svg props, the logo stacked component also accepts a `variant` prop that determines the arrangement of letters in the logo.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: "number",
      description: "The width of the SVG",
    },
    height: {
      control: "number",
      description: "The height of the SVG",
    },
    fill: {
      control: "color",
      description: "The fill color of the SVG",
    },
    stroke: {
      control: "color",
      description: "The stroke color of the SVG",
    },
    strokeWidth: {
      control: "number",
      description: "The stroke width of the SVG",
    },
    className: {
      control: "text",
      description: "The class name of the SVG",
    },
    variant: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Determines the arrangement of letters in the logo",
    },
  },
} satisfies Meta<typeof LogoStacked>;

export default meta;
export const Primary: StoryObj<typeof meta> = {};
