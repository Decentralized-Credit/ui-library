import type { Meta, StoryObj } from "@storybook/react";
import { Diamond } from "@/components";
import { args } from "./args";

const meta = {
  title: "Components/SVGs/Diamond",
  component: Diamond,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: args,
} satisfies Meta<typeof Diamond>;

export default meta;
export const Primary: StoryObj<typeof meta> = {};
