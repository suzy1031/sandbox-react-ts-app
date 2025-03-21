/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

export default defineConfig({
  test: {
    include: ['src/**/*.test.{js,ts,jsx,tsx}'],
    environment: 'happy-dom',
    coverage: {
      reporter: ['text', 'json-summary', 'json'],
      reportsDirectory: './coverage/vitest',
      // カバレッジレポートに表示しないファイルを指定
      exclude: [
        'postcss.config.js',
        'tailwind.config.js',
        '.eslintrc.cjs',
        '.storybook/',
        'src/stories/',
        'src/App.tsx',
        'src/main.tsx',
        'src/routeTree.gen.ts',
        'src/components/',
        'src/constants/',
        'src/libs',
        'src/routes/',
        'src/ui/',
      ],
      // all: true, // これをtrueにすると全てのファイルがカバレッジレポートに表示される
    },
    // これを有効にしないとexpect関数でエラーする
    // ReferenceError: expect is not defined
    globals: true,
  },
  plugins: [TanStackRouterVite()], // ref: https://tanstack.com/router/latest/docs/framework/react/quick-start
});
