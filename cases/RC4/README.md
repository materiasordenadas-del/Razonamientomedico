# RC4 — Dolor torácico progresivo con infarto agudo de miocardio sin elevación del ST

## Contenido

- `case_data.js`: integración del caso.
- `metadata.json`: metadatos públicos de biblioteca.
- `modules/`: datos por módulo.
- `expert/expert_comparison.js`: ficha experta, comparación por fases, manejo esperado, evaluación enriquecida del Módulo 7 y referencias.
- `assets/`: recursos diagnósticos declarados en `HCR_ASSETS`.

## Marco clínico usado

Caso ficticio de una mujer de 59 años con factores de riesgo aterosclerótico acumulados y angina progresiva que evoluciona a infarto agudo de miocardio sin elevación del ST, probablemente por mecanismo tipo 1. El caso obliga a distinguir:

1. lesión miocárdica aguda versus infarto;
2. infarto tipo 1 versus infarto tipo 2;
3. síndrome coronario agudo versus síndrome aórtico agudo como diagnóstico que no se puede perder antes de automatizar antitrombóticos;
4. estabilidad hemodinámica actual versus riesgo isquémico alto.

## Recursos declarados

Los activos de M4 se definen dentro de `HCR_ASSETS` y se vinculan exclusivamente desde `module4.diagnosticImages`.

- ECG inicial: descenso horizontal del segmento ST.
- ECG durante recurrencia de dolor: cambios laterales de repolarización.
- Radiografía de tórax: estudio en dos proyecciones sin hallazgos agudos descritos.

No se declaró imagen tipo carnet porque el catálogo disponible no contenía un recurso no diagnóstico, verificable y apropiado para representar a esta paciente sin revelar hallazgos del caso.

## Referencias de diseño clínico

- Rao SV, O’Donoghue ML, Ruel M, et al. 2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for the Management of Patients With Acute Coronary Syndromes. *Circulation*. 2025.
- Byrne RA, Rossello X, Coughlan JJ, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. *Eur Heart J.* 2023;44:3720–3826. doi:10.1093/eurheartj/ehad191.
- Thygesen K, Alpert JS, Jaffe AS, et al. Fourth Universal Definition of Myocardial Infarction. *Eur Heart J.* 2019;40:237–269. doi:10.1093/eurheartj/ehy462.
