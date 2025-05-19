import type { Meta, StoryObj } from "@storybook/react";
import { InvestmentsGraphic } from "@/components";
import { args } from "./args";

const meta = {
  title: "Components/SVGs/InvestmentsGraphic",
  component: InvestmentsGraphic,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: args,
} satisfies Meta<typeof InvestmentsGraphic>;

export default meta;
export const Primary: StoryObj<typeof meta> = {};
