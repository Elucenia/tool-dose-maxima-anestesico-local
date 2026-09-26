/* tool-dose-maxima-anestesico-local · Elucenia · https://github.com/Elucenia/tool-dose-maxima-anestesico-local
   Copyright (c) 2026 Elucenia · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"dose-maxima-anestesico-local","title":"Dose máxima de anestésico local","fields":[["droga","Anestésico local","sel",{"opts":{"lido":"Lidocaína sem vasoconstritor","lidoepi":"Lidocaína com epinefrina","bupi":"Bupivacaína sem vasoconstritor","bupiepi":"Bupivacaína com epinefrina","ropi":"Ropivacaína"}}],["peso","Peso","num",{"min":3,"max":200,"step":0.1,"unit":"kg","ph":"70"}],["conc","Concentração da solução","num",{"min":0.1,"max":5,"step":0.05,"unit":"%","ph":"1","opt":true}]],"config":null,"reviewStatus":"restricted","clinicalValidation":"not-performed"});
function calculate(){return {error:'Cálculo suspenso: consulte a revisão e a fonte oficial.',code:'REVIEW_REQUIRED',id:TOOL.id};}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
