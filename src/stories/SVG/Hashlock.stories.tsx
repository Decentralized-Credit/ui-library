import type { Meta, StoryObj } from "@storybook/react";
import { Hashlock } from "@/components";
import { args } from "./args";

const meta = {
  title: "Components/SVGs/Hashlock",
  component: Hashlock,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: args,
} satisfies Meta<typeof Hashlock>;

export default meta;
export const Primary: StoryObj<typeof meta> = {};
