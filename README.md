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

## PR-Agent

- ref
  - [PR-Agent を使って Pull Request を AI レビューしてみた。（日本語対応もしてみた）](https://tech.layerx.co.jp/entry/2023/09/01/102612)

### prepare

- OpenAI に課金が必要
- 10 ドルを credit しておく
- api key をコピー

```
// github
open target repository
select Setting and open "Secrets and variables"
select "Actions"
add "OPENAI_KEY" in Repository Secrets

// your repository
create .github/workflows/pr-agent.yaml
```

## tests

```
npm i @testing-library/react-hooks
// -> install error
```

react 18.x 系に未対応

```
npm i @testing-library/react-hooks --legacy-peer-deps
// -> install完了
```

```
npm run test

Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot

✓ src/tests/hooks/useHandleModal.test.ts (3)
   ✓ useHandleModal hook (3)
     ✓ should start with modal closed
     ✓ should open modal when handleOpen is called
     ✓ should close modal when handleClose is called

 Test Files  1 passed (1)
      Tests  3 passed (3)
   Start at  09:40:58
   Duration  55ms`
```

Warning が出るが､テストは実行されることを確認

### github actions でエラー

```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR!
npm ERR! While resolving: @testing-library/react-hooks@8.0.1
npm ERR! Found: @types/react@18.2.45
npm ERR! node_modules/@types/react
npm ERR!   dev @types/react@"^18.2.43" from the root project
npm ERR!   peerOptional @types/react@"^17.0.0 || ^18.0.0" from @mui/base@5.0.0-beta.28
npm ERR!   node_modules/@mui/base
npm ERR!     @mui/base@"5.0.0-beta.28" from @mui/material@5.15.1
npm ERR!     node_modules/@mui/material
npm ERR!       @mui/material@"^5.15.1" from the root project
npm ERR!   7 more (@mui/material, @mui/private-theming, @mui/system, ...)
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peerOptional @types/react@"^16.9.0 || ^17.0.0" from @testing-library/react-hooks@8.0.1
npm ERR! node_modules/@testing-library/react-hooks
npm ERR!   @testing-library/react-hooks@"^8.0.1" from the root project
npm ERR!
npm ERR! Conflicting peer dependency: @types/react@17.0.73
npm ERR! node_modules/@types/react
npm ERR!   peerOptional @types/react@"^16.9.0 || ^17.0.0" from @testing-library/react-hooks@8.0.1
npm ERR!   node_modules/@testing-library/react-hooks
npm ERR!     @testing-library/react-hooks@"^8.0.1" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR!
npm ERR! For a full report see:
npm ERR! /home/runner/.npm/_logs/2023-12-24T00_45_35_583Z-eresolve-report.txt

npm ERR! A complete log of this run can be found in: /home/runner/.npm/_logs/2023-12-24T00_45_35_583Z-debug-0.log
Error: Process completed with exit code 1.
```

- refs

  - https://www.npmjs.com/package/@testing-library/react-hooks#a-note-about-react-18-support
  - [React 18 で Custom Hooks のテストを書くときの注意点](https://zenn.dev/k_kazukiiiiii/articles/9f48bdd20435d2)
  - [[Github Actions] CI が`npm ci`の段階で失敗する事象に対応した](https://zenn.dev/fugithora812/scraps/fd3eceedbfc393)

- fix

```diff
// ci.yaml
- - run: npm ci
+ - run: npm ci --legacy-peer-deps
```
