# Dose máxima de anestésico local

Identificador: `dose-maxima-anestesico-local`. Pacote independente da plataforma ELUCENIA, para navegador e Node.js.

## Situação

- Revisão: **restricted**. O teto único por fármaco do ZIP não distingue técnica, via, população ou mistura. A bula de ropivacaína apresenta doses específicas por procedimento. Não publicar o valor como máximo seguro universal; suspender execução até revisão por anestesiologia/farmácia.
- Execução: **desativada; o adaptador retorna REVIEW_REQUIRED**.
- Validação clínica independente: **não realizada**. Os testes abaixo verificam aritmética e transporte dos campos.
- 4 casos de referência em `examples.json`, conferidos por `test.cjs`. Verificação aritmética independente da fórmula (reimplementação a partir da literatura, entradas aleatórias): **pendente**.
- Dados: o exemplo funciona localmente, sem rede, armazenamento ou identificação de pacientes.

## Uso no Node.js

```js
const { calculate } = require('./calculator.js');
const example = require('./examples.json')[0];
console.log(calculate(example.input));
```

Execute `node test.cjs` (ou `npm test`) para conferir os exemplos. Abra `index.html` para usar a versão local do navegador. Não há dependências npm.

## Contrato

`calculate(input)` recebe um objeto, devolve `{id, main, label, raw, clinicalValidation}` ou `{error, code, field?}`. Consulte `tool.json` e `metadata.fields` para nomes, unidades, opções e intervalos. Números aceitam valores finitos ou strings numéricas; opções precisam corresponder às chaves documentadas. Campos obrigatórios vazios, booleanos inválidos, valores fora de intervalo e resultados não finitos são rejeitados. Somente checkbox omitido representa falso; um campo numérico ou uma opção obrigatória nunca é preenchido automaticamente.

Interpretações, ordens terapêuticas e tabelas herdadas não são retornadas pelo adaptador. Classificações e valores ainda dependem da população e das limitações da fonte.

## Fórmula / versão

A dose de anestésico local depende de fármaco, concentração, via, técnica, paciente e exposições combinadas. Os tetos fixos do importador aguardam revisão.

A transcrição acima documenta o acervo de origem e pode requerer atualização. Revisão documental: https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=23d2d448-a744-4877-9f2d-7e57c198da89

## Condições e limites

Estima a dose máxima recomendada de anestésico local pelo peso, respeitando o teto absoluto, e converte em volume na concentração usada, para prevenir intoxicação sistêmica.

Confirme população, exclusões, unidades, versão e diretriz aplicável ao país e serviço. O resultado não deve ser utilizado isoladamente para diagnóstico, alta ou prescrição. O pacote não representa certificação clínica, aprovação regulatória ou indicação para toda população. Veja a revisão completa em `tool.json`.

## Fontes originais

- [Rosenberg PH, Veering BT, Urmey WF. Maximum recommended doses of local anesthetics: a multifactorial concept. Reg Anesth Pain Med, 2004.](https://doi.org/10.1016/j.rapm.2004.08.003)
- [Neal JM et al. The Third American Society of Regional Anesthesia and Pain Medicine Practice Advisory on Local Anesthetic Systemic Toxicity: executive summary 2017. Reg Anesth Pain Med, 2018.](https://doi.org/10.1097/AAP.0000000000000720)

## Exemplos e rastreabilidade

`examples.json` preserva `originalInput`, expectativa e entrada explícita do exemplo. Não foi necessário expandir opções zero nos exemplos.

## O que esta ferramenta não faz

- Não diagnostica, não prescreve e não substitui a avaliação de um médico. O resultado é a reprodução técnica de uma fórmula ou escore publicado.
- Não envia dados a lugar nenhum: roda no navegador ou no Node.js, sem rede, sem telemetria, sem armazenamento.
- Não guarda nem identifica pacientes. Não use com dados identificáveis fora de um ambiente que você controla.
- Não tem validação clínica independente nem aprovação regulatória (ver "Situação").

## Autoria e licença

Criado e mantido por **Felipe Guedes** (Engenheiro de Software e Arquiteto de Sistemas, Toledo, Paraná, Brasil) para a **ELUCENIA**, uma cadeia médica e científica global para acelerar a descoberta. Criado em 2026-09-25 na organização [github.com/Elucenia](https://github.com/Elucenia).

Licença **Apache-2.0** (arquivo `LICENSE`): você pode usar, copiar, modificar e embutir este código no seu site ou sistema, inclusive comercial, desde que mantenha o arquivo `NOTICE` e o aviso de copyright e declare as modificações. A licença cobre o código deste pacote; instrumentos, questionários, tabelas, traduções e marcas citados nas fontes mantêm os direitos dos seus titulares (ver `NOTICE`). Detalhes em `AUTHORSHIP.md`, `CITATION.cff`, `SECURITY.md` e `CONTRIBUTING.md`. Contato: contato@elucenia.org.
