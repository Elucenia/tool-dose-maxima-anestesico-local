<!-- ELUCENIA technical documentation · dose-maxima-anestesico-local · es · no clinical/professional/rights approval -->

# Anestésico local: límite del protocolo

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/dose-maxima-anestesico-local)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Anestésico local

`droga`

- `lido` — Lidocaína sin vasoconstrictor
- `lidoepi` — Lidocaína con adrenalina
- `bupi` — Bupivacaína sin vasoconstrictor
- `bupiepi` — Bupivacaína con adrenalina
- `ropi` — Ropivacaína

### Peso

`peso`

kg · intervalo: 3–200

### Límite de dosis por peso en el protocolo

`limite`

mg/kg · intervalo: 0,1–20

### Límite absoluto del protocolo

`teto`

mg · intervalo: 1–2000

### Concentración de la solución

`conc`

% · intervalo: 0,1–5

### ¿Vía, técnica, población, formulación y límites de ficha técnica/protocolo comprobados; ausencia de mezclas u otras exposiciones confirmada?

`contexto`

- `0` — No
- `1` — Sí

## Edición del método

Conversión del límite documentado en el protocolo; sin máximo universal

## Fórmula documentada

Límite matemático introducido = min(peso × límite mg/kg, máximo mg); volumen correspondiente = límite mg/(concentración % × 10).

## Límites y población

No se introduce ni recomienda automáticamente ningún límite de fármaco. No calcula la toxicidad individual ni garantiza seguridad; las mezclas y las dosis acumuladas requieren evaluación específica.

## Referencias

- [DailyMed · lidocaína HCl · límites específicos de la formulación y la población](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a7529e5b-47b1-4148-98dd-65aecc33a8c3)

- [Rosenberg PH, Veering BT, Urmey WF. Maximum recommended doses of local anesthetics: a multifactorial concept. Reg Anesth Pain Med, 2004.](https://doi.org/10.1016/j.rapm.2004.08.003)

- [Neal JM et al. The Third American Society of Regional Anesthesia and Pain Medicine Practice Advisory on Local Anesthetic Systemic Toxicity: executive summary 2017. Reg Anesth Pain Med, 2018.](https://doi.org/10.1097/AAP.0000000000000720)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
