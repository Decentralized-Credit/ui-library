import type { Meta, StoryObj } from "@storybook/react";
import { SpotifyIcon } from "@/components";
import { args } from "./args";

const meta = {
  title: "Components/SVGs/SpotifyIcon",
  component: SpotifyIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: args,
} satisfies Meta<typeof SpotifyIcon>;

export default meta;
export const Primary: StoryObj<typeof meta> = {};
