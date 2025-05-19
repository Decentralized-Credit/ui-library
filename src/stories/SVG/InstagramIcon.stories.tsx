import type { Meta, StoryObj } from "@storybook/react";
import { InstagramIcon } from "@/components";
import { args } from "./args";

const meta = {
  title: "Components/SVGs/InstagramIcon",
  component: InstagramIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: args,
} satisfies Meta<typeof InstagramIcon>;

export default meta;
export const Primary: StoryObj<typeof meta> = {};
