import type { Meta, StoryObj } from "@storybook/react";
import { YoutubeIcon } from "@/components";
import { args } from "./args";

const meta = {
  title: "Components/SVGs/YoutubeIcon",
  component: YoutubeIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: args,
} satisfies Meta<typeof YoutubeIcon>;

export default meta;
export const Primary: StoryObj<typeof meta> = {};
