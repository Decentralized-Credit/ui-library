import type { Meta, StoryObj } from "@storybook/react";
import { XIcon } from "@/components";
import { args } from "./args";

const meta = {
  title: "Components/SVGs/XIcon",
  component: XIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: args,
} satisfies Meta<typeof XIcon>;

export default meta;
export const Primary: StoryObj<typeof meta> = {};
