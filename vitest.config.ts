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
    exclude: ["**/node_modules/**", "**/dist/**", "**/e2e/**"],
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
      "@metrostar/comet-uswds": path.resolve(
        __dirname,
        "node_modules/@metrostar/comet-uswds/dist/esm/index.js"
      ),
      "@metrostar/comet-extras": path.resolve(
        __dirname,
        "node_modules/@metrostar/comet-extras/dist/esm/index.js"
      ),
      "@components/comet": path.resolve(
        __dirname,
        "node_modules/@metrostar/comet-uswds/dist/esm/index.js"
      ), // This is necessary to prevent cjs/esm conflicts
    },
  },
});
