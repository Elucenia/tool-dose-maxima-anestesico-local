<!-- ELUCENIA technical documentation · dose-maxima-anestesico-local · de · no clinical/professional/rights approval -->

# Lokalanästhetikum: Protokollgrenze

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/dose-maxima-anestesico-local)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Lokalanästhetikum

`droga`

- `lido` — Lidocain ohne Vasokonstriktor
- `lidoepi` — Lidocain mit Adrenalin
- `bupi` — Bupivacain ohne Vasokonstriktor
- `bupiepi` — Bupivacain mit Adrenalin
- `ropi` — Ropivacain

### Gewicht

`peso`

kg · Bereich: 3–200

### Gewichtsbezogene Dosisgrenze im Protokoll

`limite`

mg/kg · Bereich: 0,1–20

### Absolute Protokollgrenze

`teto`

mg · Bereich: 1–2000

### Lösungskonzentration

`conc`

% · Bereich: 0,1–5

### Applikationsweg, Technik, Population, Formulierung und Grenzen laut Fachinformation/Protokoll geprüft; keine Mischungen oder anderen Expositionen bestätigt?

`contexto`

- `0` — Nein
- `1` — Ja

## Fassung der Methode

Umrechnung der im Protokoll dokumentierten Grenze; kein universelles Maximum

## Dokumentierte Formel

Eingegebene mathematische Grenze = min(Gewicht × mg/kg-Grenze, mg-Obergrenze); entsprechendes Volumen = mg-Grenze/(Konzentration % × 10).

## Grenzen und Population

Kein Arzneimittelgrenzwert wird automatisch eingetragen oder empfohlen. Berechnet keine individuelle Toxizität und garantiert keine Sicherheit; Mischungen und kumulative Dosen erfordern eine gesonderte Beurteilung.

## Referenzen

- [DailyMed · Lidocain HCl · formulierungsspezifische und populationsspezifische Grenzen](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a7529e5b-47b1-4148-98dd-65aecc33a8c3)

- [Rosenberg PH, Veering BT, Urmey WF. Maximum recommended doses of local anesthetics: a multifactorial concept. Reg Anesth Pain Med, 2004.](https://doi.org/10.1016/j.rapm.2004.08.003)

- [Neal JM et al. The Third American Society of Regional Anesthesia and Pain Medicine Practice Advisory on Local Anesthetic Systemic Toxicity: executive summary 2017. Reg Anesth Pain Med, 2018.](https://doi.org/10.1097/AAP.0000000000000720)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
