# P0 Walkthrough: aftercare admin auth — fail-closed fix

Date: 2026-04-14  
Severity: P0 (authentication bypass)  
Author: Claude Sonnet 4.6 (emergency auth fix agent)

---

## 問題の概要

`src/lib/aftercare/admin-auth.ts` の `hasAftercareAdminAccess()` 関数において、
環境変数 `AFTERCARE_ADMIN_ACCESS_KEY` が未設定の場合に `return true` が実行され、
**認証なしで管理画面へフルアクセスできる状態（fail-open）**だった。

---

## 根本原因

```ts
// 修正前（脆弱）
if (!adminKey) {
  return true;  // ← env 未設定 = 無条件アクセス許可
}
```

`getConfiguredAdminKey()` は `process.env.AFTERCARE_ADMIN_ACCESS_KEY?.trim() || ""` を返す。
つまり env が未定義・空文字・空白のみの場合に `adminKey = ""` となり、
`!adminKey` が `true` → `return true` でアクセス許可されていた。

---

## 影響範囲

この関数を呼び出しているすべての箇所が影響を受けていた：

| ファイル | 呼び出し関数 | 影響 |
|--------|------------|------|
| `src/app/aftercare/admin/page.tsx` | `requireAftercareAdminAccess()` | 管理画面トップへの無認証アクセス |
| `src/app/aftercare/admin/[caseId]/page.tsx` | `requireAftercareAdminAccess()` | 個別ケース管理画面への無認証アクセス |
| `src/app/api/aftercare/admin/cases/[caseId]/route.ts` | `hasAftercareAdminAccess()` | 管理用ケースAPIへの無認証アクセス |
| `src/app/api/aftercare/cases/[caseId]/template/route.ts` | `hasAftercareAdminAccess()` | テンプレートAPIへの無認証アクセス |

---

## 修正内容

### 変更ファイル: `src/lib/aftercare/admin-auth.ts`

```diff
-  if (!adminKey) {
-    return true;
-  }
+  if (!adminKey) {
+    console.warn("[admin-auth] AFTERCARE_ADMIN_ACCESS_KEY is not set. Access denied.");
+    return false;
+  }
```

- **変更行数**: 1行（`return true` → `return false`） + `console.warn` 1行追加
- **正常系への影響**: なし（`adminKey` が正しく設定されている場合の処理フローは変わらない）
- **fail-closed 動作**: env 未設定時はアクセス拒否。`requireAftercareAdminAccess()` はログインページへリダイレクト、API routes は 401 を返す。

### 新規ファイル: `.env.example`

`AFTERCARE_ADMIN_ACCESS_KEY` が必須であることを明示するサンプル env ファイルを追加。

---

## 検証

1. `src/lib/aftercare/admin-auth.ts` の修正が最小差分であること — 確認済み（2行の変更のみ）
2. 呼び出し元ファイルへの変更なし — 確認済み（auth の判定ロジックは `hasAftercareAdminAccess()` 内で完結）
3. `.env.example` に secret の実値が含まれていないこと — 確認済み（プレースホルダーのみ）

---

## 残るリスク

1. **`.env.local` の内容は検査していない** — 実際の環境で `AFTERCARE_ADMIN_ACCESS_KEY` が設定されているかは実行環境側で確認が必要。
2. **キーの強度は保証しない** — 短い・推測可能なキーが設定されている場合はブルートフォースリスクが残る。ランダム 32 バイト以上のキーを推奨。
3. **ログイン後のセッション管理は変更していない** — `aftercare_admin_access` クッキーの有効期限・HttpOnly・Secure 属性は本修正のスコープ外。
4. **レート制限なし** — ログイン API へのブルートフォース対策は未実装。

---

## 未実施項目

- `npm run lint` / `npm run build` による動作検証（ローカル環境で実施してください）
- 本番環境での `AFTERCARE_ADMIN_ACCESS_KEY` 設定確認
- ステージング環境での E2E テスト

---

## 承認・レビュー

この変更は P0 緊急対応として `CLAUDE.md` の「01 — Core Operating Rules」に従い、
最小差分・スコープ限定で実施した。コミット前に必ず `npm run lint && npm run build` を実行すること。
