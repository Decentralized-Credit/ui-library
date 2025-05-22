# Decentralized Credit UI Library

A React-based UI library. Built with TypeScript, Tailwind CSS, and shadcn/ui components.
Check out the [Storybook](https://ui-library-41075982134.europe-west1.run.app/) for documentation.

## Install

To install it in your project:

```bash
pnpm i @metaversal.gg/ui-library
```

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

```bash
pnpm i @metaversal.gg/ui-library
```

### Basic Usage

```jsx
import { EmptyStateAnimation } from "@metaversal.gg/ui-library";

function MyComponent() {
  return <EmptyStateAnimation />;
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
// Example Breadcrumbs.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumbs from "@/components/Breadcrumbs";

const meta = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes to add to the component",
    },
  },
  args: {},
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
};
```

## External Links

- [Storybook Documentation](https://ui-library-41075982134.europe-west1.run.app/)
- [GitHub Repository](https://github.com/decentralized-credit/ui-library)
