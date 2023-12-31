/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    include: ["src/tests/**/*.test.tsx", "src/tests/**/*.test.ts"],
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json-summary", "json"],
      reportsDirectory: "./coverage",
      thresholds: {
        lines: 60,
        branches: 60,
        functions: 60,
        statements: 60,
      },
    },
    // これを有効にしないとexpect関数でエラーする
    // ReferenceError: expect is not defined
    globals: true,
  },
});
