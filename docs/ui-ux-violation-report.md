# UI/UX Global Rules Violation Report

- Project: seiren-corporate
- Generated: 2026-03-20T00:13:16.133Z
- Scope: UI files (20 files)
- Method: static analysis (regex-based heuristic)

## Critical

- なし

## High

- なし

## Medium

1. absolute指定が多い
- 判定理由: absolute系記述が 37 件。レスポンシブ再配置時に崩れやすい構造の可能性。
- 根拠:
- seiren-corporate/public/assets/styles.css:292 `position: absolute;`
- seiren-corporate/public/assets/styles.css:305 `position: absolute;`
- seiren-corporate/public/assets/styles.css:370 `position: absolute;`
- seiren-corporate/public/assets/styles.css:394 `position: absolute;`
- seiren-corporate/public/assets/styles.css:488 `position: absolute;`
- seiren-corporate/public/assets/styles.css:595 `position: absolute;`

2. 行間不足の疑い
- 判定理由: line-height が詰まる指定を 32 件検出。可読性低下の可能性。
- 根拠:
- seiren-corporate/public/assets/styles.css:99 `line-height: 1.85;`
- seiren-corporate/public/assets/styles.css:168 `line-height: 1.35;`
- seiren-corporate/public/assets/styles.css:346 `line-height: 1.25;`
- seiren-corporate/public/assets/styles.css:353 `line-height: 1.8;`
- seiren-corporate/public/assets/styles.css:658 `line-height: 1.9;`
- seiren-corporate/public/assets/styles.css:710 `line-height: 1.9;`
- seiren-corporate/public/assets/styles.css:776 `line-height: 1.9;`
- seiren-corporate/public/assets/styles.css:985 `line-height: 1.6;`

## Low

- なし

## Notes

- このレポートは静的解析ベースのため、最終判断は実機表示（1920/1440/1024/768/430/390/375）で確認すること。
- Fixed要素・重なり・改行崩れは、実際のDOM/表示幅で再検証すること。
