import type { Meta, StoryObj } from "@storybook/react";
import { GPU } from "@/components";
import { args } from "./args";

const meta = {
  title: "Components/SVGs/GPU",
  component: GPU,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: args,
} satisfies Meta<typeof GPU>;

export default meta;
export const Primary: StoryObj<typeof meta> = {};
