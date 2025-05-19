import type { Meta, StoryObj } from "@storybook/react";
import { SectionFadeIn, CardStep } from "@/components";

const meta = {
  title: "Components/SectionFadeIn",
  component: SectionFadeIn,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The SectionFadeIn component is used to fade in a section of the page when it comes into view. It uses the IntersectionObserver API to detect when the section is in view and then applies a fade-in animation to it.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    delay: {
      control: "number",
      description: "The delay in ms before the fade animation starts",
    },
    rootMargin: {
      control: "text",
      description: "The root margin for the intersection observer",
    },
    threshold: {
      control: "number",
      min: 0,
      max: 1,
      step: 0.1,
      description: "Threshold for the intersection observer (0-1)",
    },
    className: {
      control: "text",
      description: "The class name of the component",
    },
    children: {
      control: "object",
      description: "React node to be rendered inside the component",
    },
  },
} satisfies Meta<typeof SectionFadeIn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className: "",
    children: <CardStep number={1} title="wooosh" description="wooosh" />,
  },
};
