import type { Meta, StoryObj } from "@storybook/react";
import { LinkedInIcon } from "@/components";
import { args } from "./args";

const meta = {
  title: "Components/SVGs/LinkedInIcon",
  component: LinkedInIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: args,
} satisfies Meta<typeof LinkedInIcon>;

export default meta;
export const Primary: StoryObj<typeof meta> = {};
