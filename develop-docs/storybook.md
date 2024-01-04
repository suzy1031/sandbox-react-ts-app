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

## test runner の動かし方

ref: https://storybook.js.org/docs/writing-tests/test-runner

---

1. ドキュメントに沿って､必要なパッケージ群を install
2. ドキュメントに沿って､各種ファイルの設定を追加
3. `npm run sb:dev`で storybook を立ち上げておく
4. 別タブでターミナルを立ち上げ､`npm run test-storybook`を実行
5. `/coverage`ディレクトリに json ファイルが output される

※ storybook を立ち上げていないと､`--coverage`オプションをつけるとエラーが発生する

### error log

```
[Test runner] An error occurred when evaluating code coverage:
      The code in this story is not instrumented, which means the coverage setup is likely not correct.
      More info: https://github.com/storybookjs/test-runner#setting-up-code-coverage
```
