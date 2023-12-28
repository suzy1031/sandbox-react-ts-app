/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    include: ["src/tests/**/*.test.tsx", "src/tests/**/*.test.ts"],
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "html"],
      reportsDirectory: "./coverage",
    },
    // これを有効にしないとexpect関数でエラーする
    // ReferenceError: expect is not defined
    globals: true,
  },
});
