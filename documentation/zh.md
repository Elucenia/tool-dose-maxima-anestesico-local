<!-- ELUCENIA technical documentation · dose-maxima-anestesico-local · zh · no clinical/professional/rights approval -->

# 局部麻醉药：方案规定的限量

[条件、来源与许可](https://elucenia.org/zh/tools/dose-maxima-anestesico-local)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 局部麻醉药

`droga`

- `lido` — 不含血管收缩剂的利多卡因
- `lidoepi` — 含肾上腺素的利多卡因
- `bupi` — 不含血管收缩剂的布比卡因
- `bupiepi` — 含肾上腺素的布比卡因
- `ropi` — 罗哌卡因

### 体重

`peso`

kg · 范围: 3–200

### 方案规定的按体重剂量上限

`limite`

mg/kg · 范围: 0.1–20

### 方案规定的绝对上限

`teto`

mg · 范围: 1–2000

### 溶液浓度

`conc`

% · 范围: 0.1–5

### 已核对给药途径、技术、人群、制剂及说明书/方案上限，并确认无混合或其他暴露？

`contexto`

- `0` — 否
- `1` — 是

## 方法版本

换算方案中记录的限值；不设通用最大值

## 已记录的公式

输入的数学限量 = min（体重 × mg/kg限量，mg上限）；相应容量 = mg限量/（浓度% × 10）。

## 限制与适用人群

不自动填写或建议任何药物限量。不计算个体毒性，也不保证安全；混合用药和累积剂量需专项评估。

## 参考文献

- [DailyMed · 盐酸利多卡因 · 剂型和人群特定限量](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a7529e5b-47b1-4148-98dd-65aecc33a8c3)

- [Rosenberg PH, Veering BT, Urmey WF. Maximum recommended doses of local anesthetics: a multifactorial concept. Reg Anesth Pain Med, 2004.](https://doi.org/10.1016/j.rapm.2004.08.003)

- [Neal JM et al. The Third American Society of Regional Anesthesia and Pain Medicine Practice Advisory on Local Anesthetic Systemic Toxicity: executive summary 2017. Reg Anesth Pain Med, 2018.](https://doi.org/10.1097/AAP.0000000000000720)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
