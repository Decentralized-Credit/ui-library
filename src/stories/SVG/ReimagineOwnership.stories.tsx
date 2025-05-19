import type { Meta, StoryObj } from "@storybook/react";
import { ReimagineOwnership } from "@/components";
import { colorSchemeMeta } from "./args";

const meta = {
  title: "Components/SVGs/ReimagineOwnership",
  component: ReimagineOwnership,
  ...colorSchemeMeta,
} satisfies Meta<typeof ReimagineOwnership>;

export default meta;
export const Primary: StoryObj<typeof meta> = {};
