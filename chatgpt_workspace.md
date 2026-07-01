# Workspace H-CR — Protocolo Operativo Compacto

> **Uso exclusivo de ChatGPT en este proyecto.** Este archivo guía la creación, ensamblaje e integración de casos H-CR. No es contenido para estudiantes ni documentación pública de la app.

---

## 1. Alcance y separación obligatoria

Este workspace regula solo el **contenido clínico del caso** y su ensamblaje:

- autoría clínica y pedagógica;
- módulos M1–M7;
- experto bloqueado;
- caso ciego;
- selección de imágenes desde el catálogo maestro;
- JSON fuente para el Constructor;
- conversión a paquete RC##;
- publicación del caso en GitHub.

No regula ni debe modificar por defecto:

- diseño global, Firebase, login, hosting o navegación de la app;
- motor farmacológico global;
- app de organización de imágenes;
- cambios de arquitectura técnica no necesarios para un caso.

**Regla:** contenido clínico y desarrollo general de la app son líneas distintas.

---

## 2. Principio clínico H-CR

> El caso es el profesor.

El estudiante debe poder recorrer una cadena causal:

> contexto → anatomía/estructura → fisiología normal → fisiopatología → síntoma/signo → paraclínico → hipótesis → decisión.

Cada dato del caso debe cumplir al menos una función:

1. expresar fisiopatología;
2. modificar diferencial;
3. definir gravedad o manejo;
4. aportar realismo sin contradicción.

Antes de redactar módulos, construir internamente una cronología completa y una Ficha experta bloqueada.

---

## 3. Niveles de complejidad

- **Nivel I:** fisiopatología aplicada; no requiere diagnóstico completo.
- **Nivel II:** enfermedad y semiología explicadas; mecanismo → manifestación → prueba.
- **Nivel III:** caso clínico completo y razonamiento estándar.
- **Nivel IV:** presentación atípica **o** fase de complicación. No usar “presentación diferente”.
- **Nivel V:** paciente complejo con hasta cinco procesos activos. Separar diagnóstico dominante, diagnósticos concurrentes, complicaciones, comorbilidades y conflictos terapéuticos.

La complejidad se aumenta con incertidumbre, superposición, riesgo, atipia, priorización y conflicto terapéutico; nunca con datos aleatorios.

---

## 4. Política de caso ciego

Mientras Adriel no haya jugado el caso, ChatGPT no debe revelar en el chat:

- diagnóstico, diferenciales o diagnóstico no perder;
- signos vitales, laboratorios o hallazgo pivote;
- microorganismos, interpretación de imagen, ECG, RX, TC u otra prueba clave;
- manejo correcto, respuesta experta, rúbrica o fuentes del caso;
- nombres de archivos que revelen patología.

Al exportar el caso fuente, responder solo:

```text
Caso H-CR exportado.
[Descargar archivo]
```

Al publicar la versión final, responder solo:

```text
Caso integrado en GitHub.
```

---

## 5. Diseño clínico interno obligatorio

Antes de crear cualquier archivo, ChatGPT debe definir internamente:

- diagnóstico principal;
- Top 3 y diagnóstico no perder;
- nivel H-CR;
- síndrome dominante;
- cronología patobiológica;
- datos positivos, negativos relevantes y distractores plausibles;
- datos pivote;
- gravedad y acciones no demorables;
- sesgos/trampas cognitivas;
- evaluación experta;
- imágenes realmente necesarias.

### Calidad por módulo

- **M1:** contexto, urgencia, triage y motivo de consulta en lenguaje del paciente; sin diagnóstico.
- **M2:** historia cronológica, antecedentes y revisión por sistemas dirigida; positivos y negativos con función.
- **M3:** examen físico dirigido; hallazgos útiles, normales relevantes y signos de gravedad.
- **M4:** pruebas solicitables, resultados plausibles, unidades/referencias y estudios visuales solo si existe asset real congruente.
- **M5:** visible como `{}`; razonamiento experto queda en `experto.comparisonByModule.m5`.
- **M6:** siempre existe, pero visible y neutral: campos de escritura sin pistas terapéuticas específicas; manejo correcto queda en experto.
- **M7:** visible como `{}`; evaluación real queda en experto.

La foto circular de triage solo puede provenir de `metadata.visual.fotoCircular`; no duplicarla dentro de M1.

---

## 6. Flujo definitivo de un caso

### Fase A — Autoría clínica ciega: ChatGPT

1. Adriel solicita RC## con restricciones generales: área, nivel, escenario, complejidad y módulos.
2. ChatGPT diseña el caso completo internamente según las secciones 2–5.
3. ChatGPT consulta el catálogo maestro solo cuando el caso requiere un recurso visual.
4. ChatGPT genera un único archivo fuente:

```text
RC##_caso_fuente_constructor.json
```

5. ChatGPT no entrega un ZIP final antes de que el Constructor resuelva los assets.

### Fase B — Constructor de Casos H-CR: usuario

6. Adriel entrega ese JSON al Constructor local, junto con biblioteca, catálogo maestro e índice técnico.
7. El Constructor resuelve únicamente las imágenes declaradas, las copia con nombre anónimo y devuelve el mismo JSON enriquecido con rutas relativas.
8. Adriel sube aquí la carpeta final del Constructor o el ZIP completo.

### Fase C — Conversión e integración: ChatGPT

9. ChatGPT verifica assets, integra rutas en destinos declarados y genera el paquete RC## real.
10. ChatGPT crea/actualiza archivos del caso, catálogo global y página HTML.
11. ChatGPT publica en GitHub y responde solo: `Caso integrado en GitHub.`

---

## 7. Contrato del archivo fuente para el Constructor

Nombre obligatorio:

```text
RC##_caso_fuente_constructor.json
```

Debe ser JSON UTF-8 estricto: comillas dobles, sin comentarios, sin trailing commas, IDs como cadenas y sin rutas locales como fuente de verdad.

Estructura superior mínima:

```json
{
  "schema_version": "hcr_caso_fuente_constructor_v2",
  "constructor": {},
  "case": {},
  "catalogo_biblioteca": {},
  "metadata_json": {},
  "metadata": {},
  "modulos": {
    "module1_triage": {},
    "module2_history": {},
    "module3_physical": {},
    "module4_diagnostics": {},
    "module5_pause": {},
    "module6_management": {},
    "module7_evaluation": {}
  },
  "experto": {},
  "case_data": {},
  "imagenes": [],
  "validacion_autor": {}
}
```

Correspondencia posterior:

| Bloque fuente | Destino H-CR |
|---|---|
| `case` | `cases/RC##/case.json` |
| `catalogo_biblioteca` | entrada en `data/cases_catalog.js` |
| `metadata_json` | `cases/RC##/metadata.json` |
| `metadata` | `cases/RC##/metadata.js` |
| `modulos.*` | `cases/RC##/modules/*.js` |
| `experto` | `cases/RC##/expert/expert_comparison.js` |
| `case_data` | configuración de `cases/RC##/case_data.js` |
| `imagenes` | entrada/salida del Constructor |
| `validacion_autor` | validación interna; no se publica |

---

## 8. Imágenes: selección exacta desde el catálogo maestro

### 8.1 Regla absoluta

Antes de incluir una imagen, ChatGPT debe revisar:

1. `catalogo_maestro.csv` para selección clínica;
2. `indice_maestro.csv` para validación técnica;
3. opcionalmente `catalogo_maestro.txt` como consulta rápida.

La única referencia autoritativa para el Constructor es:

```text
id_imagen
```

Debe conservar ceros a la izquierda. No usar como referencia nombre, ruta, página, descripción parcial o apariencia presunta.

### 8.2 Secuencia por imagen

1. Definir el rol clínico/visual exacto.
2. Buscar candidato en catálogo maestro.
3. Validar en índice técnico: modalidad, órgano/región, descripción, hash y formato.
4. Confirmar estado permitido.
5. Escribir `id_imagen` exacto y `hash_sha256_esperado` en el JSON fuente.
6. Si no existe recurso válido, no inventar ni sustituir.

Solo está permitido:

```text
estado = util_movida
```

Nunca seleccionar:

```text
revision_manual
descarte_revisar
duplicado_omitido
estado no aprobado
```

### 8.3 Si no existe una imagen válida

- Imagen diagnóstica imprescindible: no exportar el caso todavía.
- Foto de triage o portada no imprescindible: omitir solicitud y usar avatar/fondo neutral.
- Imagen opcional de examen físico: no añadirla.
- Nunca usar coincidencia parecida, revisión manual, descarte, duplicado o imagen diagnóstica generada.

### 8.4 Roles válidos

```text
portada
triage
examen_fisico
diagnostica_ecg
diagnostica_rx
diagnostica_ecografia
diagnostica_tc
diagnostica_rmc
diagnostica_angiografia
diagnostica_histologia
diagnostica_otra
audio_auscultacion
documento_apoyo
```

### 8.5 Contrato mínimo de cada solicitud

```json
{
  "solicitud_id": "img_triage_01",
  "id_imagen": "000000",
  "hash_sha256_esperado": "",
  "rol": "triage",
  "obligatoria": false,
  "estado": "pendiente_resolucion",
  "asset_relativo": null,
  "resultado_resolucion": null,
  "destinos_hcr": ["/metadata/visual/fotoCircular"],
  "titulo_visible": "",
  "alt_estudiante": "Retrato clínico neutral del paciente.",
  "descripcion_visible": "",
  "selectable": false
}
```

`destinos_hcr` es una lista de JSON Pointer. El Constructor no la interpreta; ChatGPT la aplica después al convertir el paquete final.

### 8.6 Reglas visuales

- **Portada:** contexto, nunca diagnóstico; puede estar ausente.
- **Triage:** foto circular neutral, congruente con edad/sexo/entorno; sin hallazgo específico. Si falta, avatar neutro.
- **Examen físico:** solo cuando existe hallazgo visual que el estudiante deba observar; no decorativa.
- **Diagnóstica:** debe coincidir exactamente con M4, título y descripción neutrales, sin contradicción con tabla/informe. Si es clave, `selectable: true`.

---

## 9. Responsabilidad del Constructor

El Constructor debe:

- leer solo `imagenes`;
- resolver cada `id_imagen` como cadena exacta;
- validar `estado = util_movida`;
- validar hash si se proporciona;
- copiar, nunca mover ni borrar;
- crear assets anónimos y deterministas, por ejemplo `asset_001.webp`;
- actualizar solo `asset_relativo`, `resultado_resolucion` y `estado` de cada solicitud;
- conservar intacto el resto del JSON;
- crear `manifest_student.json`, `locked/`, log y faltantes.

El Constructor no debe:

- crear o interpretar contenido clínico;
- elegir imágenes;
- usar ranking, fuzzy matching o sustitución automática;
- crear módulos JS, `case_data.js`, HTML o GitHub;
- exponer rutas, hash, fuente, libro o hallazgos internos en modo estudiante.

### Estado técnico actual

La versión actual del Constructor usa `imagenes_requeridas` y puntaje semántico. Antes de usar este protocolo para nuevos casos finales, debe actualizarse al contrato anterior. Esa modificación técnica es un pendiente explícito, no una licencia para usar el flujo viejo como definitivo.

---

## 10. Resultado que devuelve el Constructor

Carpeta esperada:

```text
RC##/
  case.json
  manifest_student.json
  assets/
    asset_001.ext
  locked/
    manifest_admin_locked.json
    source_map_locked.json
  README.md
  build_log.txt
  missing_assets.txt   # solo si aplica
```

`case.json` debe conservar el archivo fuente y contener las solicitudes de `imagenes` enriquecidas con `asset_relativo` y estado de resolución.

Adriel debe devolver el ZIP completo o, como mínimo, `case.json`, manifests, logs y todos los assets.

---

## 11. Conversión a paquete H-CR y GitHub

Después de recibir la salida del Constructor, ChatGPT debe:

1. Verificar que no falte ningún asset obligatorio.
2. Aplicar cada `asset_relativo` a sus `destinos_hcr`.
3. Ubicar/copiar assets bajo la modalidad final:

```text
portada/triage        → cases/RC##/assets/images/
examen físico         → cases/RC##/assets/physical/
ECG                   → cases/RC##/assets/ecg/
RX                    → cases/RC##/assets/xray/
audio                 → cases/RC##/assets/audio/
documento             → cases/RC##/assets/documents/
laboratorio adjunto   → cases/RC##/assets/labs/
```

4. Generar:

```text
cases/RC##/case.json
cases/RC##/metadata.json
cases/RC##/metadata.js
cases/RC##/modules/module1_triage.js
cases/RC##/modules/module2_history.js
cases/RC##/modules/module3_physical.js
cases/RC##/modules/module4_diagnostics.js
cases/RC##/modules/module5_pause.js
cases/RC##/modules/module6_management.js
cases/RC##/modules/module7_evaluation.js
cases/RC##/expert/expert_comparison.js
cases/RC##/case_data.js
caso-RC##.html
```

5. Actualizar `data/cases_catalog.js` con una entrada pública no diagnóstica.
6. Confirmar que `metadata`, `metadata_json` y catálogo no se contradigan.
7. Confirmar que M4 declare `module4Media = module4.diagnosticImages` cuando corresponda.
8. Publicar en GitHub sin exponer información de `locked/`.

---

## 12. Validación antes de exportar e integrar

### Antes de exportar el JSON fuente

- [ ] ID, rutas públicas y `caseId` son coherentes.
- [ ] Ficha experta y cronología completas internamente.
- [ ] M1 no revela diagnóstico.
- [ ] M2 y M3 liberan datos de forma progresiva.
- [ ] M4 es fisiopatológicamente congruente.
- [ ] M5 = `{}`; M6 existe y es neutral; M7 = `{}`.
- [ ] Todos los IDs usados por experto existen en módulos.
- [ ] Datos públicos no incluyen diagnóstico, microorganismo, hallazgo decisivo ni fuente específica.
- [ ] Todas las imágenes tienen ID exacto válido, estado `util_movida`, hash compatible y destino válido.
- [ ] No hay rutas locales ni nombres diagnósticos expuestos.

### Después del Constructor

- [ ] `case.json` contiene cada asset obligatorio resuelto.
- [ ] No hay sustituciones semánticas ni assets ambiguos.
- [ ] Assets copiados existen y tienen ruta relativa válida.
- [ ] Destinos H-CR reciben la ruta correcta.
- [ ] El paquete RC## contiene todos los archivos obligatorios.
- [ ] El HTML carga los scripts del caso en orden compatible.
- [ ] El catálogo global contiene una sola entrada pública no diagnóstica.
- [ ] No se publica `locked/`, rutas locales, hashes, fuentes o contenido experto visible.

---

## 13. Próximo trabajo técnico autorizado

Antes del próximo caso definitivo, solicitar/crear una actualización mínima de `hcr_case_builder` para que:

1. acepte `RC##_caso_fuente_constructor.json`;
2. lea únicamente la lista top-level `imagenes`;
3. resuelva `id_imagen` exacto sin fuzzy matching;
4. valide `util_movida` y hash;
5. preserve todos los bloques clínicos byte a byte;
6. actualice solo campos de resolución;
7. detenga el build si falla una imagen obligatoria;
8. mantenga información sensible exclusivamente en `locked/`.

No implementar cambios de UI o arquitectura general sin solicitud explícita.

---

## Historial de cambios

- 2026-06-29: workspace creado.
- 2026-06-29: primer Manual Maestro clínico añadido.
- 2026-06-30: consolidación compacta de las reglas clínicas, flujo de caso ciego y Contrato Maestro v2.
- 2026-06-30: se reemplaza el flujo provisional de búsqueda semántica por la regla definitiva de imágenes con `id_imagen` exacto validado en catálogo maestro + índice técnico.
- 2026-06-30: se declara pendiente la actualización del Constructor para cumplir el contrato v2 antes de nuevos casos finales.
