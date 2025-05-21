# Decentralized Credit UI Library

A React-based UI library. Built with TypeScript, Tailwind CSS, and shadcn/ui components.
Check out the [Storybook](https://ui-library-41075982134.europe-west1.run.app/) for documentation.

## Install

This package is published to GitHub Packages, not npm. To install it in your project:

1. Create a `.npmrc` file in your project and add the following:

```
@decentralized-credit:registry=https://npm.pkg.github.com
```

2. Install with `pnpm i @decentralized-credit/ui-library`

## About

- Modern and accessible UI components
- Built with TypeScript
- Tailwind CSS for styling
- Storybook for documentation and development
- ESLint and Prettier for code quality
- Vite for fast development and building.

### Prerequisites

- Node.js >= v18
- pnpm >= v8

### Setup

```bash
pnpm install
```

## Usage

### Development

To start the development server, run:

```bash
pnpm storybook
```

This will start Storybook on port 6006, where you can view and interact with all components.

### Staging & Production

```bash
pnpm build
```

## Documentation

### Installing the package

The package is publicly available on GitHub Packages. You can install it directly with:

```
pnpm i @decentralized-credit/ui-library
```

### Basic Usage

```jsx
import { Button } from "@decentralized-credit/ui-library";

function MyComponent() {
  return <Button variant="primary">Click me</Button>;
}
```

## Contributing

### Version Management Requirements

**Important:** When pushing to the main branch, you must update the package version.

To update the version:

```bash
# For bug fixes and patch updates
pnpm version patch

# For new features (backwards compatible)
pnpm version minor

# For breaking changes
pnpm version major
```

This command will:

1. Update the version in package.json
2. Create a git tag for the new version
3. Commit the changes

After running the version command, push both the commit and the tags:

```bash
git push && git push --tags
```

The GitHub Actions workflow will then build and publish your updated package to GitHub Packages.

### Development Workflow

**When adding a new component:**

- Open an issue in the repository with the name of the component. Example: `Add Button component`
- Include:
  - Component name and purpose
  - Expected behaviors and variants
  - Props and API design
  - Visual mockups or design references (if available)

#### Folder Structure

```
.
├── public                  # public assets, eg: fonts & images
├── src
│   ├── components          # components folder
│   │   ├── svg             # svg components
│   │   └── ui              # shadcn components only
│   ├── lib                 # utility and other functions
│   ├── stories             # storybook stories
│   └── types               # type interfaces and types

```

#### Creating new components

When adding a new component, import it and then export it in the `src/components/index.ts` file.

When adding new type definitions, add them to the `src/types/index.d.ts` file.

#### Component Implementation Guidelines

1. **TypeScript and Typing**:

   - Use TypeScript interfaces for props
   - Export types for consumers
   - Avoid using `any` and use proper type constraints

2. **Accessibility**:

   - Follow WAI-ARIA practices
   - Include proper ARIA attributes
   - Ensure keyboard navigation support

3. **Styling**:

   - Use Tailwind CSS for styling
   - Ensure responsiveness across breakpoints

4. **Best Practices**:
   - Keep components focused on a single responsibility
   - Implement proper prop validation
   - Prefer functional components with hooks

#### Storybook Stories

- Basic usage example
- Variants showcase
- Interactive controls for all props
- Dark mode example when applicable
- Responsive behavior demonstrations
- Accessibility status and notes

```tsx
// Example Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "@/components/ui/button";

const variants = [
  "default",
  "destructive",
  "outline",
  "secondary",
  "ghost",
  "link",
] as const;

const sizes = ["default", "sm", "lg", "icon"] as const;

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: variants,
      description: "The visual style of the button",
    },
    size: {
      control: { type: "select" },
      options: sizes,
      description: "The size of the button",
    },
    asChild: {
      control: "boolean",
      description: "When true, the button will be rendered as its child",
    },
    disabled: {
      control: "boolean",
      description: "When true, the button is disabled",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to add to the button",
    },
    children: {
      control: "text",
      description: "The content of the button",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Button",
  },
};
```

## External Links

- [Storybook Documentation](https://ui-library-41075982134.europe-west1.run.app/)
- [GitHub Repository](https://github.com/decentralized-credit/ui-library)
