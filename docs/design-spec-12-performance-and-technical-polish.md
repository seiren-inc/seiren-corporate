# 清蓮コーポレートサイト デザイン設計書 12

## パフォーマンス / 技術的完成度向上設計

---

# 目標値

- LCP: 2.0秒以内 / CLS: 0 / FID/INP: 良好 / PageSpeed 90点以上

# 画像最適化

- Hero: loading="eager" / fetchpriority="high" / width+height必須 / WebP併用
- その他: loading="lazy" / decoding="async" / 200KB以下

# CSS最適化

- !important禁止 / 階層深すぎ禁止 / 1ファイル構成維持

# JS最適化

- Vanilla JSのみ / IntersectionObserver / requestAnimationFrame / 重いライブラリ禁止

# フォント最適化

- Google Fonts preconnect / display=swap / ウェイト最小限（400/600/700のみ）

# レンダリング最適化

- main.js は </body> 直前 / ブロッキングJS禁止 / CSSはhead内リンク

# レスポンシブ最適化

- Hero テキスト折り返し破綻なし / ボタン幅100%（SP）/ 余白80px基準

# SEO技術維持

- canonical / JSON-LD / sitemap / title重複禁止

# セキュリティ基本

- target="\_blank" → rel="noopener" 必須 / インラインJS最小化

# 禁止事項

- アニメーションライブラリ / Webフォント過多 / 背景動画 / 巨大画像
