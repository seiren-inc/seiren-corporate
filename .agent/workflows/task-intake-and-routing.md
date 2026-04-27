# Task Intake and Routing — seiren-corporate

> 対象: Antigravity / Codex / Claude Code
> 更新: 2026-04-14

---

## ワークフロー概要

新規タスクを受け取ったとき、このワークフローに従ってルーティングを決定する。

---

## Step 1: タスク分類

| 種別 | 判断基準 | 担当 |
|---|---|---|
| **設計・構成・方針** | UI設計・アーキテクチャ決定・ドキュメント | Antigravity |
| **実装・コード変更** | ファイル編集・diff生成・リファクタ | Codex |
| **分析・監査** | 横断レビュー・品質確認・深堀り調査 | Claude Code |
| **複合タスク** | 設計+実装が混在 | Antigravity → Codex の分担 |

---

## Step 2: スコープ確認

```
[ ] 問題・ゴールが明確か
[ ] 対象ファイルが特定されているか
[ ] SEO/UI/ブランド保護ルールに抵触しないか
[ ] このリポジトリのスコープ内か
```

いずれかが NO の場合 → **即時停止してユーザーに確認**

---

## Step 3: 実行フロー

```
Analysis → Plan → Approval → Execution → Verification
```

---

## Step 4: 完了報告テンプレート

```markdown
## 完了報告

### 変更ファイル
- `path/to/file.ts`

### diff
（変更前/変更後 または patch 形式）

### 検証
- コマンド: `npm run lint && npm run build`
- 結果: PASS / FAIL

### Skill Usage Report
- 使用: skill-name（理由）
```

---

## seiren-corporate 固有チェックポイント

- `tailwind.config.ts` ブランドカラートークンは変更禁止
- GSAP: ScrollTrigger は useEffect 内で登録
- Lenis: `layout.tsx` でのみ初期化
- Three.js: `dynamic import + ssr: false + Suspense` 必須
- Embla Carousel v8: `"use client"` 必須
- JSON-LD 変更時: `schema-markup` Skill を使用してから実施
