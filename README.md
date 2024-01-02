# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Start project

```
nvm use
// => v20.10.0
npm i --legacy-peer-deps
npm run dev
```

## ref

- [React×TypeScript ではじめる Vitest](React×TypeScriptではじめるVitest)

- [Vitest で React のテストを書いてみる](https://zenn.dev/collabostyle/articles/15883dcd38c9ff)

- [Vite は使ってないけど Jest を Vitest に移行する](https://zenn.dev/sa2knight/articles/migrating_vitest_from_jest)

- [テストフレームワークを Jest から Vitest に移管した手順と得た知見](https://qiita.com/itouoti/items/6f03065c68baf4245b2f)

- [Storybook 7 を Vue 3 + TypeScript ではじめよう！](https://zenn.dev/sa2knight/books/storybook-7-with-vue-3)

- [Build your own Storybook GPT](https://storybook.js.org/blog/build-your-own-storybook-gpt/)

## TypeDoc

- refs:
  - https://typedoc.org/

```
npm run doc
// => output docs dir
```

## Storybook

- Component を追加したとき､`/stories`配下に`*.stories.tsx`ファイルを作成し､`Story`` をつくる

```
npm run sb:dev
```

## Snapshot test by @testing-library/react

- 意図しない変更･デグレを検知する
- github actions で CI が失敗した場合､該当の\*.test.tsx ファイルで snapshot の差分を確認
- 変更が意図した通りであれば､update する
- `__snapshots__`配下の該当する`*.test.tsx.snap`が更新を確認後､commit する

```
npm run test
// press u
```

## Github Actions

### packages

- davelosert/vitest-coverage-report-action@v2.2.0

  - vitest 公式ではないので注意
  - refs:
    - [【2022/9 時点】vitest のカバレッジを GitHub PR 上に連携する](https://magicode.io/Sumiren/articles/f0455cc2cc9a4dde88ab994807ecdd56)
    - [Vitest Coverage Report](https://github.com/marketplace/actions/vitest-coverage-report)

- PR-Agent
  - refs:
    - [github](https://github.com/Codium-ai/pr-agent)
    - [PR-Agent を使って Pull Request を AI レビューしてみた。（日本語対応もしてみた）](https://tech.layerx.co.jp/entry/2023/09/01/102612)
