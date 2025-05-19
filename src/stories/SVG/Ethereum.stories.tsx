import type { Meta, StoryObj } from "@storybook/react";
import { Ethereum } from "@/components";
import { args } from "./args";

const meta = {
  title: "Components/SVGs/Ethereum",
  component: Ethereum,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: args,
} satisfies Meta<typeof Ethereum>;

export default meta;
export const Primary: StoryObj<typeof meta> = {};
