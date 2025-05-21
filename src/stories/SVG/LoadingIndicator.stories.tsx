import type { Meta, StoryObj } from "@storybook/react";
import { LoadingIndicator } from "@/components";
import { args } from "./args";

const meta = {
  title: "Components/SVGs/LoadingIndicator",
  component: LoadingIndicator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: { ...args, isLoading: { control: "boolean" } },
} satisfies Meta<typeof LoadingIndicator>;

export default meta;
export const Primary: StoryObj<typeof meta> = {};
