## default theme を拡張する

ref: [MUI v5 Theme ～基本の使い方からカスタマイズまで～](https://zenn.dev/longbridge/articles/c100d0311ed1be)

---

- libs 配下に`themeOption.d.ts`を定義
- 既存の mui が提供する`PaletteOptions`を拡張する
- 独自に追加したい key 名を追加する
- これにより､既存の interface だと､`primary`, `secondary` etc...のみしか使えなかったが､独自カラーを使えるようになる
