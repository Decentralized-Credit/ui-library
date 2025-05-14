import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss(),
    dts({
      include: [
        "src/components/**/*.ts",
        "src/components/**/*.tsx",
        "src/index.css",
        "src/types/**/*.d.ts",
      ],
      exclude: [
        "**/*.stories.tsx",
        "**/*.test.tsx",
        "src/App.tsx",
        "src/main.tsx",
      ],
      outDir: "dist",
      tsconfigPath: path.resolve(__dirname, "tsconfig.build.json"),
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      formats: ["es"],
      fileName: () => "index.js",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        /^@radix-ui\/.*/, // All Radix UI packages
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src/components",
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    outDir: "dist",
  },
});
