## PR-Agent を利用する前に準備すること

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
