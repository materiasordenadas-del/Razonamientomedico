# Workspace H-CR — Protocolo Operativo

> Uso exclusivo de ChatGPT en este proyecto. Regula autoría clínica, assets, empaquetado e integración de casos. No es documentación pública ni contenido para estudiantes.

## 1. Regla de alcance

No modificar por iniciativa propia la app H-CR, Constructor, organizador de imágenes, Firebase, diseño global, navegación, wrappers ni arquitectura. Solo crear contenido compatible con la versión vigente. Cualquier cambio técnico requiere propuesta previa y aprobación explícita de Adriel.

## 2. Regla de sincronización con GitHub

**Antes de crear, convertir o empaquetar cualquier RC nuevo, ChatGPT debe revisar GitHub y usar como plantilla la implementación más reciente de la rama de trabajo activa.**

Verificar siempre:

1. El wrapper HTML más reciente (`caso-RC##.html`): scripts, orden y versiones `?v=`.
2. La estructura modular más reciente en `cases/RC##/`:
   - `metadata.js`;
   - `modules/module1_triage.js` a `module7_evaluation.js`;
   - `expert/expert_comparison.js`;
   - `case_data.js` ensamblador.
3. `data/cases_catalog.js` vigente.
4. Cambios recientes de Codex que afecten módulos, renderizadores, ayudas, términos clínicos o assets.

Nunca reutilizar wrappers de casos antiguos solo porque existen en `main`. La referencia técnica es el caso más actualizado en la rama activa, actualmente `module7-layout`, salvo que Adriel indique otra.

## 3. Principio clínico

> El caso es el profesor.

Todo caso debe seguir una cadena causal: contexto → estructura → fisiología → fisiopatología → síntoma/signo → prueba → hipótesis → decisión.

Cada dato debe expresar fisiopatología, modificar diferencial, definir gravedad/manejo o aportar realismo sin contradicción. Antes de redactar, construir internamente cronología y Ficha experta bloqueada.

## 4. Niveles H-CR

- Nivel I: fisiopatología aplicada.
- Nivel II: enfermedad y semiología explicadas.
- Nivel III: caso clínico completo.
- Nivel IV: presentación atípica o fase de complicación.
- Nivel V: hasta cinco procesos activos; separar dominante, concurrentes, complicaciones, comorbilidades y conflictos terapéuticos.

## 5. Caso ciego

Hasta que Adriel juegue el caso, no revelar diagnóstico, microorganismo, hallazgo pivote, laboratorios, imágenes clave, manejo, rúbrica ni fuentes específicas.

Al exportar: `Caso H-CR exportado. [Descargar archivo]`

Al integrar: `Caso integrado en GitHub.`

## 6. Contenido interno obligatorio

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

## 7. Flujo estándar

1. Adriel solicita RC## con área, nivel, entorno y módulos.
2. ChatGPT diseña el caso completo internamente.
3. ChatGPT selecciona imágenes válidas desde catálogo maestro.
4. ChatGPT entrega un único archivo fuente:

```text
RC##_caso_fuente_constructor.json
```

5. Adriel lo ejecuta en HCR Case Builder.
6. Adriel devuelve el ZIP/carpeta resultante con `case.json`, assets, manifests y logs.
7. ChatGPT verifica assets, aplica rutas, genera el paquete modular vigente y lo integra en GitHub.

## 8. Imágenes: regla estricta

Para cada imagen:

1. Consultar `catalogo_maestro.csv`.
2. Validar en `indice_maestro.csv` modalidad, órgano, estado, hash y formato.
3. Seleccionar solo `id_imagen` exacto como cadena, preservando ceros iniciales.
4. Permitir únicamente `estado = util_movida`.
5. Incluir `hash_sha256_esperado`, rol, `destinos_hcr` y metadatos visibles neutrales.

Nunca usar `revision_manual`, `descarte_revisar`, `duplicado_omitido`, fuzzy matching, sustitución automática, rutas locales como referencia, ni una imagen “parecida”.

Si no existe una imagen válida:

- diagnóstica obligatoria: no exportar;
- portada/triage opcional: avatar o fallback neutral;
- examen físico opcional: omitir.

## 9. Contrato fuente mínimo

El JSON debe contener:

```json
{
  "schema_version": "hcr_caso_fuente_constructor_v2",
  "constructor": {},
  "case": {},
  "catalogo_biblioteca": {},
  "metadata_json": {},
  "metadata": {},
  "modulos": {},
  "experto": {},
  "case_data": {},
  "imagenes": [],
  "validacion_autor": {}
}
```

`imagenes` contiene solicitudes con `solicitud_id`, `id_imagen`, hash, rol, obligatoriedad, `asset_relativo`, `resultado_resolucion`, `destinos_hcr`, textos neutrales y `selectable`.

## 10. Responsabilidad del Constructor

El Constructor solo resuelve assets. Debe leer `imagenes`, resolver ID exacto, validar estado/hash, copiar sin mover, anonimizar assets y actualizar solo estado/ruta de resolución. No crea contenido clínico, JS, HTML ni GitHub.

## 11. Integración final

Después del Constructor, ChatGPT debe:

- verificar assets obligatorios;
- aplicar `asset_relativo` a cada destino;
- usar la estructura y versiones vigentes verificadas en GitHub;
- generar `metadata.js`, módulos separados, experto, `case_data.js` ensamblador y `caso-RC##.html` conforme a la plantilla vigente;
- ubicar assets por modalidad;
- actualizar `data/cases_catalog.js` con presentación pública no diagnóstica;
- no publicar `locked/`, rutas locales, hashes ni contenido experto visible.

## 12. Checklist final

- [ ] Caso clínicamente coherente y cronología completa.
- [ ] Sin spoilers públicos.
- [ ] Imagen por ID exacto validado o fallback neutral.
- [ ] Assets obligatorios resueltos.
- [ ] Plantilla técnica vigente revisada en GitHub antes de generar archivos.
- [ ] Wrapper, scripts y módulos copian la versión actual, no una versión histórica.
- [ ] Catálogo actualizado sin duplicar entrada.
- [ ] Ningún archivo sensible publicado.

## Historial

- 2026-06-29: workspace creado.
- 2026-06-30: consolidación de flujo clínico, Constructor e imágenes.
- 2026-07-01: añadida regla obligatoria de sincronización con GitHub antes de construir casos; la plantilla técnica se toma de la rama activa, no de casos antiguos.
