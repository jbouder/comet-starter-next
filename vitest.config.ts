import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    coverage: {
      all: false,
      provider: "v8",
      thresholds: {
        global: {
          statements: 95,
          branches: 95,
          functions: 95,
          lines: 95,
        },
      },
    },
    css: false,
    alias: {
      // This is necessary to prevent cjs/esm conflicts
      "@components/comet": path.resolve(
        __dirname,
        "node_modules/@metrostar/comet-uswds/dist/esm/index.js"
      ),
    },
  },
});
