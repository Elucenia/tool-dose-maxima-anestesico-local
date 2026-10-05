<!-- ELUCENIA technical documentation · dose-maxima-anestesico-local · fr · no clinical/professional/rights approval -->

# Anesthésique local : limite du protocole

[conditions, sources et autorisations](https://elucenia.org/fr/outils/dose-maxima-anestesico-local)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Anesthésique local

`droga`

- `lido` — Lidocaïne sans vasoconstricteur
- `lidoepi` — Lidocaïne avec adrénaline
- `bupi` — Bupivacaïne sans vasoconstricteur
- `bupiepi` — Bupivacaïne avec adrénaline
- `ropi` — Ropivacaïne

### Poids

`peso`

kg · intervalle: 3–200

### Dose maximale par poids dans le protocole

`limite`

mg/kg · intervalle: 0,1–20

### Limite absolue du protocole

`teto`

mg · intervalle: 1–2000

### Concentration de la solution

`conc`

% · intervalle: 0,1–5

### Voie, technique, population, formulation et limites de la notice/du protocole vérifiées ; absence de mélange ou d’autres expositions confirmée ?

`contexto`

- `0` — Non
- `1` — Oui

## Édition de la méthode

Conversion de la limite documentée dans le protocole ; aucun maximum universel

## Formule documentée

Limite mathématique renseignée = min(poids × limite mg/kg, plafond mg) ; volume correspondant = limite mg/(concentration % × 10).

## Limites et population

Aucune limite de médicament n’est renseignée ou recommandée automatiquement. Ne calcule pas la toxicité individuelle et ne garantit pas la sécurité ; mélanges et doses cumulées exigent une évaluation spécifique.

## Références

- [DailyMed · lidocaïne HCl · limites propres à la formulation et à la population](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a7529e5b-47b1-4148-98dd-65aecc33a8c3)

- [Rosenberg PH, Veering BT, Urmey WF. Maximum recommended doses of local anesthetics: a multifactorial concept. Reg Anesth Pain Med, 2004.](https://doi.org/10.1016/j.rapm.2004.08.003)

- [Neal JM et al. The Third American Society of Regional Anesthesia and Pain Medicine Practice Advisory on Local Anesthetic Systemic Toxicity: executive summary 2017. Reg Anesth Pain Med, 2018.](https://doi.org/10.1097/AAP.0000000000000720)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
