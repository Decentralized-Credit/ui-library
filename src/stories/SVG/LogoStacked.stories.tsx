import type { Meta, StoryObj } from "@storybook/react";
import { Insights } from "@/components";
import { colorSchemeMeta } from "./args";

const meta = {
  title: "Components/SVGs/Insights",
  component: Insights,
  ...colorSchemeMeta,
} satisfies Meta<typeof Insights>;

export default meta;
export const Primary: StoryObj<typeof meta> = {};
