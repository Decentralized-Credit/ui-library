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
