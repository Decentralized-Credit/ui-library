import type { Meta, StoryObj } from "@storybook/react";
import { ArrowIcon } from "@/components";
import { args } from "./args";

const meta = {
  title: "Components/SVGs/ArrowIcon",
  component: ArrowIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: args,
} satisfies Meta<typeof ArrowIcon>;

export default meta;
export const Primary: StoryObj<typeof meta> = {};
