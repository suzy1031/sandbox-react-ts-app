# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Start project

```
nvm use
// => v20.10.0
npm i
npm run dev
```

## ref

- [React×TypeScript ではじめる Vitest](React×TypeScriptではじめるVitest)

- [Vitest で React のテストを書いてみる](https://zenn.dev/collabostyle/articles/15883dcd38c9ff)

- [Vite は使ってないけど Jest を Vitest に移行する](https://zenn.dev/sa2knight/articles/migrating_vitest_from_jest)

- [テストフレームワークを Jest から Vitest に移管した手順と得た知見](https://qiita.com/itouoti/items/6f03065c68baf4245b2f)

- [Storybook 7 を Vue 3 + TypeScript ではじめよう！](https://zenn.dev/sa2knight/books/storybook-7-with-vue-3)

- [Build your own Storybook GPT](https://storybook.js.org/blog/build-your-own-storybook-gpt/)

- [@storybook-test: more streamlined and powerful testing](https://storybook.js.org/blog/storybook-test/)

## Storybook

- Component を追加したとき､`/stories`配下に`*.stories.tsx`ファイルを作成し､`Story`` をつくる

```
npm run sb:dev
```

## Vitest(Function Tests)と Storybook(UI Tests)の migration

両方で output された coverage report ファイルをマージして､1 つのファイルにまとめるコマンド

ref: [Next.js & Tailwind CSS & Storybook のフロントエンド環境の構築メモ](https://qiita.com/hiroaki-suzuki/items/a0196357a4bca7415727)

```
npm run test-merge-coverage
npm run coverage-report
```

## Github Actions

`create-pr.yaml`

- staging ブランチへのマージを検知して､main へ本番反映用の PR を作成する

---

`storybook-tests.yaml`

- `*stories.tsx`の`play`を実行し､interaction test を実行する

---

`ci.yaml`

- `*.test.ts|tsx`を実行し､coverage report を output する

- davelosert/vitest-coverage-report-action@v2.2.0

  - vitest 公式ではないので注意
  - refs:
    - [【2022/9 時点】vitest のカバレッジを GitHub PR 上に連携する](https://magicode.io/Sumiren/articles/f0455cc2cc9a4dde88ab994807ecdd56)
    - [Vitest Coverage Report](https://github.com/marketplace/actions/vitest-coverage-report)

---

`pr-agent.yaml`

- PR の内容を走査し､サマリ生成やコードの修正を提案する

- PR-Agent
  - refs:
    - [github](https://github.com/Codium-ai/pr-agent)
    - [PR-Agent を使って Pull Request を AI レビューしてみた。（日本語対応もしてみた）](https://tech.layerx.co.jp/entry/2023/09/01/102612)
