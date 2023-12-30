## storybook を React × vite × material UI 環境に作成する

- refs:
  - [React+Vite プロジェクトに Storybook（v7）を導入する](https://dev.classmethod.jp/articles/react-vite-storybook/)
  - [Storybook（v7, vite build）を React/tailwind/MUI に入れる](https://zenn.dev/nnt/scraps/5d62fe2ce88378)

```
npx sb init --builder=vite
npm i -D @storybook/addon-styling
```

```ts
// ./storybook/main.ts
addons: ["@storybook/addon-styling"];
```

```ts
// .storybook/preview.ts
decorators: [
  withThemeFromJSXProvider({
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
    themes: { light: theme }, // your mui theme file
  }),
],
```
