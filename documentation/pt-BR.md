<!-- ELUCENIA technical documentation · dose-maxima-anestesico-local · pt-BR · no clinical/professional/rights approval -->

# Anestésico local: limite do protocolo

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/dose-maxima-anestesico-local)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Anestésico local

`droga`

- `lido` — Lidocaína sem vasoconstritor
- `lidoepi` — Lidocaína com epinefrina
- `bupi` — Bupivacaína sem vasoconstritor
- `bupiepi` — Bupivacaína com epinefrina
- `ropi` — Ropivacaína

### Peso

`peso`

kg · intervalo: 3–200

### Limite de dose por peso no protocolo

`limite`

mg/kg · intervalo: 0,1–20

### Limite absoluto no protocolo

`teto`

mg · intervalo: 1–2000

### Concentração da solução

`conc`

% · intervalo: 0,1–5

### Via, técnica, população, formulação e limites na bula/protocolo foram conferidos; ausência de mistura ou outras exposições confirmada?

`contexto`

- `0` — Não
- `1` — Sim

## Edição do método

Conversão de limite documentado no protocolo; sem máximo universal

## Fórmula documentada

Limite matemático informado = min(peso × limite mg/kg, teto mg); volume correspondente = limite mg/(concentração % × 10).

## Limites e população

Nenhum limite de fármaco é preenchido ou recomendado automaticamente. Não calcula toxicidade individual nem garante segurança; misturas e doses acumuladas exigem avaliação específica.

## Referências

- [DailyMed · lidocaína HCl · limites específicos da formulação e população](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a7529e5b-47b1-4148-98dd-65aecc33a8c3)

- [Rosenberg PH, Veering BT, Urmey WF. Maximum recommended doses of local anesthetics: a multifactorial concept. Reg Anesth Pain Med, 2004.](https://doi.org/10.1016/j.rapm.2004.08.003)

- [Neal JM et al. The Third American Society of Regional Anesthesia and Pain Medicine Practice Advisory on Local Anesthetic Systemic Toxicity: executive summary 2017. Reg Anesth Pain Med, 2018.](https://doi.org/10.1097/AAP.0000000000000720)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
