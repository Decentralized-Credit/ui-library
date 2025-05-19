import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "@/components";
import { args } from "./args";

const meta = {
  title: "Components/SVGs/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: args,
} satisfies Meta<typeof Logo>;

export default meta;
export const Primary: StoryObj<typeof meta> = {};
