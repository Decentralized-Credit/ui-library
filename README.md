# Decentralized Credit UI Library

A React-based UI library. Built with TypeScript, Tailwind CSS, and shadcn/ui components.
Check out the [Storybook](https://ui-library-41075982134.europe-west1.run.app/) for documentation.

install with `pnpm i @decentralized-credit/ui-library`

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

## External Links

- [Storybook Documentation](https://ui-library-41075982134.europe-west1.run.app/)
- [GitHub Repository](https://github.com/decentralized-credit/ui-library)
