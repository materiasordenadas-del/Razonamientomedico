# Workspace H-CR — Protocolo Operativo

> Uso exclusivo de ChatGPT en este proyecto. Regula autoría clínica, assets, empaquetado e integración de casos. No es documentación pública ni contenido para estudiantes.

## 1. Regla de alcance

No modificar por iniciativa propia la app H-CR, Constructor, organizador de imágenes, Firebase, diseño global, navegación, wrappers ni arquitectura. Solo crear contenido compatible con la versión vigente. Cualquier cambio técnico requiere propuesta previa y aprobación explícita de Adriel.

## 2. Sincronización técnica obligatoria con GitHub

Antes de crear, convertir o empaquetar cada RC nuevo, revisar GitHub y tomar como referencia el caso más reciente de la rama activa, no wrappers históricos de `main`.

Verificar siempre:

1. `caso-RC##.html`: scripts, orden, botón de biblioteca y versiones `?v=`.
2. `cases/RC##/`: `metadata.js`, M1–M7, `expert/expert_comparison.js` y `case_data.js` ensamblador.
3. `data/cases_catalog.js` y su versión.
4. Cambios recientes de Codex que afecten ayudas, términos, renderizadores o assets.

La rama de referencia actual es `module7-layout`, salvo indicación posterior de Adriel.

## 3. Baseline actual del wrapper RC (2026-07-01)

El wrapper debe incorporar el patrón técnico actual:

- `app/styles.css?v=16`
- `app/core.js?v=3`
- `app/modules.js?v=14`
- `app/bootstrap.js?v=2`
- `data/ui_icons.js?v=1`
- `data/module_help.js?v=2`
- `data/clinical_terms.js?v=2`
- `app/help_system.js?v=2`
- metadata, módulos M1–M7, experto y `case_data.js` del RC correspondiente.
- botón de topbar para volver a `index.html`.

Estas versiones son una línea base. Antes de cada caso hay que comprobar si GitHub ya las cambió.

Nunca generar el wrapper antiguo con solo `styles?v=2`, `core?v=2` y `modules?v=2`.

El paquete debe traer una entrada lista para `window.HCR_CASES_CATALOG.cases`. Al integrar, actualizar `data/cases_catalog.js` e incrementar la versión conforme a la convención vigente.

## 4. Principio clínico

> El caso es el profesor.

Todo caso debe seguir: contexto → estructura → fisiología → fisiopatología → síntoma/signo → prueba → hipótesis → decisión.

Cada dato debe expresar fisiopatología, modificar diferencial, definir gravedad/manejo o aportar realismo sin contradicción. Antes de redactar, construir cronología y Ficha experta bloqueada.

## 5. Niveles H-CR

- Nivel I: fisiopatología aplicada.
- Nivel II: enfermedad y semiología explicadas.
- Nivel III: caso clínico completo.
- Nivel IV: presentación atípica o fase de complicación.
- Nivel V: hasta cinco procesos activos; separar dominante, concurrentes, complicaciones, comorbilidades y conflictos terapéuticos.

## 6. Caso ciego

Hasta que Adriel juegue el caso, no revelar diagnóstico, microorganismo, hallazgo pivote, laboratorios, imágenes clave, manejo, rúbrica ni fuentes específicas.

Al exportar: `Caso H-CR exportado. [Descargar archivo]`

Al integrar: `Caso integrado en GitHub.`

## 7. Contenido interno obligatorio

Definir antes del archivo:

- diagnóstico principal, Top 3 y diagnóstico no perder;
- síndrome dominante, cronología y gravedad;
- positivos, negativos relevantes, distractores y pivotes;
- sesgos cognitivos;
- evaluación experta y manejo experto;
- imágenes estrictamente necesarias.

M1: triage y motivo en lenguaje del paciente.  
M2: historia cronológica y dirigida.  
M3: examen físico dirigido.  
M4: paraclínicos plausibles y assets reales congruentes.  
M5: `{}` visible; razonamiento en experto.  
M6: existe, visible y neutral; manejo correcto en experto.  
M7: `{}` visible; evaluación real en experto.

La foto circular solo se asigna mediante `metadata.visual.fotoCircular`.

## 8. Flujo estándar

1. Adriel solicita RC## con área, nivel, entorno y módulos.
2. ChatGPT diseña el caso completo internamente.
3. ChatGPT selecciona imágenes válidas desde catálogo maestro.
4. ChatGPT entrega `RC##_caso_fuente_constructor.json`.
5. Adriel lo ejecuta en HCR Case Builder.
6. Adriel devuelve el ZIP/carpeta con `case.json`, assets, manifests y logs.
7. ChatGPT verifica assets, aplica rutas, genera el paquete modular vigente y lo integra en GitHub.

## 9. Imágenes: regla estricta

Para cada imagen:

1. Consultar `catalogo_maestro.csv`.
2. Validar en `indice_maestro.csv` modalidad, órgano, estado, hash y formato.
3. Seleccionar solo `id_imagen` exacto como cadena, preservando ceros iniciales.
4. Permitir únicamente `estado = util_movida`.
5. Incluir hash esperado, rol, destinos H-CR y metadatos visibles neutrales.

Nunca usar revisión manual, descarte, duplicados, fuzzy matching, sustitución automática, rutas locales como referencia, ni imágenes parecidas.

Si no existe una imagen válida: diagnóstica obligatoria = no exportar; portada/triage opcional = fallback neutral; examen físico opcional = omitir.

## 10. Contrato fuente mínimo

El JSON contiene: `schema_version`, `constructor`, `case`, `catalogo_biblioteca`, `metadata_json`, `metadata`, `modulos`, `experto`, `case_data`, `imagenes` y `validacion_autor`.

`imagenes` contiene solicitud, ID exacto, hash, rol, obligatoriedad, estado, `asset_relativo`, resultado, destinos y textos neutrales.

## 11. Responsabilidad del Constructor

El Constructor solo resuelve assets: ID exacto, estado/hash, copia sin mover y anonimización. No crea contenido clínico, JS, HTML ni GitHub.

## 12. Integración final

Después del Constructor, ChatGPT debe:

- verificar assets obligatorios;
- aplicar rutas a destinos;
- generar archivos siguiendo la plantilla vigente de GitHub;
- ubicar assets por modalidad;
- actualizar catálogo y versión;
- excluir del repositorio final `INSTRUCCIONES_PARA_CODEX.md`, `README.md`, manifests temporales, JSON temporal de catálogo, `locked/`, rutas locales, hashes y archivos intermedios.

## 13. Checklist final

- [ ] Caso clínicamente coherente y cronología completa.
- [ ] Sin spoilers públicos.
- [ ] Imagen por ID exacto validado o fallback neutral.
- [ ] Assets obligatorios resueltos.
- [ ] Plantilla técnica vigente revisada en GitHub.
- [ ] Wrapper contiene scripts, orden, versiones y botón de biblioteca actuales.
- [ ] Paquete incluye metadata, M1–M7, experto y ensamblador actuales.
- [ ] Catálogo actualizado y versionado.
- [ ] No se incluyen auxiliares ni archivos sensibles.

## Historial

- 2026-06-29: workspace creado.
- 2026-06-30: consolidación de flujo clínico, Constructor e imágenes.
- 2026-07-01: regla de sincronización con GitHub y baseline actual del wrapper RC añadidos.
