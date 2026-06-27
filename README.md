# H-CR v3 — Guía de arquitectura

## ¿Qué archivo controla el diseño?

**`app/styles.css`**

Contiene todo el diseño visual: colores, tipografía, layout de columnas, Pad diagnóstico, tabs, acordeones, tabla de paraclínicos, diagrama de Venn, botones.

Si quieres cambiar un color, un tamaño o el diseño de un componente, edita solo este archivo y el cambio afecta a todos los casos.

---

## ¿Qué archivo controla el funcionamiento?

**`app/core.js`** — el motor compartido:
- Guarda y carga el progreso del estudiante en el navegador (`localStorage`)
- Selecciona y deselecciona hallazgos
- Actualiza el Pad diagnóstico en tiempo real
- Persiste los textos escritos por el estudiante
- Exporta el desempeño a JSON y TXT
- Reinicia el caso

**`app/modules.js`** — la interfaz compartida:
- Convierte los datos del caso en pantallas HTML
- Controla la navegación entre módulos (pestañas)
- Construye acordeones, hallazgos seleccionables, conversaciones y tablas
- Controla el diagrama de Venn (drag and drop)
- Controla la pantalla de evaluación

**`app/bootstrap.js`** — arranca la aplicación:
- Conecta los botones con las funciones
- Restaura el estado si el estudiante ya había iniciado el caso

---

## ¿Qué archivo contiene los datos de cada caso?

**`cases/demo_case.js`** (o `cases/caso-1.js`, `cases/caso-2.js`, etc.)

Contiene exclusivamente los datos del paciente: triage, interrogatorio, historial, hallazgos del examen físico, resultados de paraclínicos y campos de manejo. No contiene lógica, ni HTML, ni funciones.

---

## ¿Cómo agregar un caso nuevo?

1. Crea un archivo `cases/caso-2.js` con la misma estructura de objeto que `cases/demo_case.js`. Cambia el `storage`, el `caseId`, el `title`, los datos del `patient`, y los módulos.

2. Crea un archivo `caso-2.html` copiando `caso-demo.html`. Cambia solo la línea del script del caso:
   ```html
   <script defer src="cases/caso-2.js"></script>
   ```

3. Agrega el nuevo caso en la tabla de `index.html`.

Eso es todo. El motor (`app/`) es compartido y no necesita modificarse.

---

## ¿Qué no debo modificar manualmente?

- **`legacy/caso-1_original.html`** — copia de seguridad del prototipo original. Solo sirve como referencia.
- **`caso-1.html`** — el prototipo original funcional. No forma parte de la nueva arquitectura.
- **La clave `storage` de un caso** — si cambias esta clave, el progreso guardado de los estudiantes se pierde.
- **Los `id` de los hallazgos** (`t01`, `f01`, `p01`, etc.) — si los cambias en un caso que ya tiene datos guardados, los hallazgos seleccionados anteriormente dejan de funcionar.

---

## Estructura de archivos

```
index.html               ← página de inicio (biblioteca de casos)
caso-demo.html           ← laboratorio técnico (prueba del motor)
caso-1.html              ← prototipo original (referencia)
server.py                ← servidor de desarrollo

app/
  styles.css             ← diseño visual de toda la app
  core.js                ← motor: guardado, selección, exportación
  modules.js             ← interfaz: módulos, Venn, navegación
  bootstrap.js           ← inicio: conecta botones y restaura estado

cases/
  demo_case.js           ← datos del caso de demostración

legacy/
  caso-1_original.html   ← copia de seguridad del prototipo
```
