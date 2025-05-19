import type { Meta, StoryObj } from "@storybook/react";
import { PodcastIcon } from "@/components";
import { args } from "./args";

const meta = {
  title: "Components/SVGs/PodcastIcon",
  component: PodcastIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: args,
} satisfies Meta<typeof PodcastIcon>;

export default meta;
export const Primary: StoryObj<typeof meta> = {};
