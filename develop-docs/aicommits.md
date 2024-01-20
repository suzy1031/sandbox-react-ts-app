## aicommits

ref: https://github.com/Nutlope/aicommits?tab=readme-ov-file

### Setup

README通りに進める
適当にdiffがあるファイルをaddして､`aicommits`コマンドが実行できればOK

### 追加している設定

conventional commits

```
aicommits --type conventional
```

commit messageを複数提案

```
aicommits --generate <i> # or -g <i>
```

`npm install -g aicommits`すると､home dirに`.aicommits`が作成されるので､configにセットしておく

```
aicommits config set OPENAI_KEY=<your-api-key> generate=3
aicommits config set type=conventional
```

alias

commit message作成のたびに`aicommits`を打つのは手間なので`zshrc`にaliasを登録
zshrcに以下､追加してzshに反映(`source ~/.zshrc`)させて､`ai`が実行されていればOK

zshrc以外は､適宜読み替え

```
alias ai="aicommits"
```

### その他

**日本語化**

```
aicommits config set OPENAI_KEY=<your-api-key> locale=en
```
1. チームの方針で､commit messageを日本語で書くのであれば､これをセットしておくのもOK
2. enに比べると､あまり最適なcommit messageを生成してくれない気もする

**model**

defaultは`gpt-3.5-turbo`

`gpt-4`も使えるが､`3.5`で問題無い気がする