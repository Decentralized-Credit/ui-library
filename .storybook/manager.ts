import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "dark",
  fontBase: '"Space Grotesk", sans-serif',
  fontCode: "monospace",

  brandTitle: "Decentralized Credit UI Library",
  brandUrl: "https://metaversal.gg",
  brandTarget: "/",
});

addons.setConfig({
  theme: theme,
});
