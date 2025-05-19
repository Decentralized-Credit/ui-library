import type { Meta, StoryObj } from "@storybook/react";
import { M } from "@/components";
import { args } from "./args";

const meta = {
  title: "Components/SVGs/M",
  component: M,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: args,
} satisfies Meta<typeof M>;

export default meta;
export const Primary: StoryObj<typeof meta> = {};
