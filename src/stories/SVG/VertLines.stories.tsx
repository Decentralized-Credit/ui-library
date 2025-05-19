import type { Meta, StoryObj } from "@storybook/react";
import { VertLines } from "@/components";
import { args } from "./args";

const meta = {
  title: "Components/SVGs/VertLines",
  component: VertLines,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: args,
} satisfies Meta<typeof VertLines>;

export default meta;
export const Primary: StoryObj<typeof meta> = {};
