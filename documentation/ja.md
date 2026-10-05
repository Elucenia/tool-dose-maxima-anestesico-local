<!-- ELUCENIA technical documentation · dose-maxima-anestesico-local · ja · no clinical/professional/rights approval -->

# 局所麻酔薬：プロトコルで定めた上限

[条件・出典・許諾](https://elucenia.org/ja/tools/dose-maxima-anestesico-local)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 局所麻酔薬

`droga`

- `lido` — 血管収縮薬なしのリドカイン
- `lidoepi` — エピネフリン含有リドカイン
- `bupi` — 血管収縮薬なしのブピバカイン
- `bupiepi` — エピネフリン含有ブピバカイン
- `ropi` — ロピバカイン

### 体重

`peso`

kg · 範囲: 3–200

### プロトコルの体重当たり用量上限

`limite`

mg/kg · 範囲: 0.1–20

### プロトコルの絶対上限

`teto`

mg · 範囲: 1–2000

### 溶液濃度

`conc`

% · 範囲: 0.1–5

### 投与経路・手技・対象集団・製剤・添付文書／プロトコルの上限、混合や他の曝露がないことを確認しましたか？

`contexto`

- `0` — いいえ
- `1` — はい

## 方法の版

プロトコルに記載された上限の換算；一律の最大値は設定しない

## 記載された計算式

入力した数学的上限 = min（体重 × mg/kg上限，mg最大量）；対応する容量 = mg上限/（濃度% × 10）。

## 限界・対象集団

薬剤の上限を自動入力したり推奨したりしません。個々の毒性を計算せず、安全性を保証しません。混合や累積投与量には個別評価が必要です。

## 参考文献

- [DailyMed · リドカイン塩酸塩 · 製剤と対象集団に固有の上限](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a7529e5b-47b1-4148-98dd-65aecc33a8c3)

- [Rosenberg PH, Veering BT, Urmey WF. Maximum recommended doses of local anesthetics: a multifactorial concept. Reg Anesth Pain Med, 2004.](https://doi.org/10.1016/j.rapm.2004.08.003)

- [Neal JM et al. The Third American Society of Regional Anesthesia and Pain Medicine Practice Advisory on Local Anesthetic Systemic Toxicity: executive summary 2017. Reg Anesth Pain Med, 2018.](https://doi.org/10.1097/AAP.0000000000000720)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
