/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

export default defineConfig({
  server: {
    host: true,
  },
  test: {
    include: ['src/tests/**/*.test.tsx', 'src/tests/**/*.test.ts'],
    environment: 'happy-dom',
    coverage: {
      reporter: ['text', 'json-summary', 'json'],
      reportsDirectory: './coverage/vitest',
    },
    // これを有効にしないとexpect関数でエラーする
    // ReferenceError: expect is not defined
    globals: true,
  },
  plugins: [TanStackRouterVite()], // ref: https://tanstack.com/router/latest/docs/framework/react/quick-start
});
