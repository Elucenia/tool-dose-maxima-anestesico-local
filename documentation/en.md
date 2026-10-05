<!-- ELUCENIA technical documentation · dose-maxima-anestesico-local · en · no clinical/professional/rights approval -->

# Local anesthetic: protocol limit

[conditions, sources and permissions](https://elucenia.org/en/tools/dose-maxima-anestesico-local)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Local anesthetic

`droga`

- `lido` — Lidocaine without vasoconstrictor
- `lidoepi` — Lidocaine with epinephrine
- `bupi` — Bupivacaine without vasoconstrictor
- `bupiepi` — Bupivacaine with epinephrine
- `ropi` — Ropivacaine

### Weight

`peso`

kg · range: 3–200

### Protocol weight-based dose limit

`limite`

mg/kg · range: 0.1–20

### Absolute protocol limit

`teto`

mg · range: 1–2000

### Solution concentration

`conc`

% · range: 0.1–5

### Route, technique, population, formulation and product-label/protocol limits checked; absence of mixtures or other exposures confirmed?

`contexto`

- `0` — No
- `1` — Yes

## Method edition

Conversion of the limit documented in the protocol; no universal maximum

## Documented formula

Entered mathematical limit = min(weight × mg/kg limit, mg cap); corresponding volume = mg limit/(concentration % × 10).

## Limits and population

No drug limit is filled in or recommended automatically. Does not calculate individual toxicity or guarantee safety; mixtures and cumulative doses require specific assessment.

## References

- [DailyMed · lidocaine HCl · formulation- and population-specific limits](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a7529e5b-47b1-4148-98dd-65aecc33a8c3)

- [Rosenberg PH, Veering BT, Urmey WF. Maximum recommended doses of local anesthetics: a multifactorial concept. Reg Anesth Pain Med, 2004.](https://doi.org/10.1016/j.rapm.2004.08.003)

- [Neal JM et al. The Third American Society of Regional Anesthesia and Pain Medicine Practice Advisory on Local Anesthetic Systemic Toxicity: executive summary 2017. Reg Anesth Pain Med, 2018.](https://doi.org/10.1097/AAP.0000000000000720)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
