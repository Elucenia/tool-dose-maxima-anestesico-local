<!-- ELUCENIA technical documentation · dose-maxima-anestesico-local · it · no clinical/professional/rights approval -->

# Anestetico locale: limite del protocollo

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/dose-maxima-anestesico-local)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Anestetico locale

`droga`

- `lido` — Lidocaina senza vasocostrittore
- `lidoepi` — Lidocaina con adrenalina
- `bupi` — Bupivacaina senza vasocostrittore
- `bupiepi` — Bupivacaina con adrenalina
- `ropi` — Ropivacaina

### Peso

`peso`

kg · intervallo: 3–200

### Limite di dose per peso nel protocollo

`limite`

mg/kg · intervallo: 0,1–20

### Limite assoluto nel protocollo

`teto`

mg · intervallo: 1–2000

### Concentrazione della soluzione

`conc`

% · intervallo: 0,1–5

### Via, tecnica, popolazione, formulazione e limiti da scheda tecnica/protocollo verificati; assenza di miscele o altre esposizioni confermata?

`contexto`

- `0` — No
- `1` — Sì

## Edizione del metodo

Conversione del limite documentato nel protocollo; nessun massimo universale

## Formula documentata

Limite matematico inserito = min(peso × limite mg/kg, tetto mg); volume corrispondente = limite mg/(concentrazione % × 10).

## Limiti e popolazione

Nessun limite di farmaco viene inserito o raccomandato automaticamente. Non calcola la tossicità individuale né garantisce sicurezza; miscele e dosi cumulative richiedono valutazione specifica.

## Riferimenti

- [DailyMed · lidocaina HCl · limiti specifici della formulazione e della popolazione](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a7529e5b-47b1-4148-98dd-65aecc33a8c3)

- [Rosenberg PH, Veering BT, Urmey WF. Maximum recommended doses of local anesthetics: a multifactorial concept. Reg Anesth Pain Med, 2004.](https://doi.org/10.1016/j.rapm.2004.08.003)

- [Neal JM et al. The Third American Society of Regional Anesthesia and Pain Medicine Practice Advisory on Local Anesthetic Systemic Toxicity: executive summary 2017. Reg Anesth Pain Med, 2018.](https://doi.org/10.1097/AAP.0000000000000720)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
