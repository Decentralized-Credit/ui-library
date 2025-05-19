import { ArgTypes } from "@storybook/react";

export const args: ArgTypes = {
  width: {
    control: "number",
    description: "The width of the SVG",
  },
  height: {
    control: "number",
    description: "The height of the SVG",
  },
  fill: {
    control: "color",
    description: "The fill color of the SVG",
  },
  stroke: {
    control: "color",
    description: "The stroke color of the SVG",
  },
  strokeWidth: {
    control: "number",
    description: "The stroke width of the SVG",
    min: 0,
    max: 50,
  },
  className: {
    control: "text",
    description: "Additional CSS classes to add to the component",
  },
};

export const colorSchemeArgs: ArgTypes = {
  width: {
    control: "number",
    description: "The width of the SVG",
  },
  height: {
    control: "number",
    description: "The height of the SVG",
  },
  className: {
    control: "text",
    description: "The class name of the SVG",
  },
  primaryColor: {
    control: "color",
    description: "The primary color of the SVG",
  },
  secondaryColor: {
    control: "color",
    description: "The secondary color of the SVG",
  },
};

export const colorSchemeMeta = {
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "This component accepts width, height, className, and also a primary and secondary color as props.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: colorSchemeArgs,
};
