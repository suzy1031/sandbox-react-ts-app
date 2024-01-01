/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    include: ["src/tests/**/*.test.tsx", "src/tests/**/*.test.ts"],
    environment: "happy-dom",
    coverage: {
      reporter: ["text", "json-summary", "json"],
      reportsDirectory: "./coverage",
    },
    // これを有効にしないとexpect関数でエラーする
    // ReferenceError: expect is not defined
    globals: true,
  },
});
