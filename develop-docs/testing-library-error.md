## Vitest で､hook を使う場合に testing-library でエラー

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

## github Actions でエラー

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