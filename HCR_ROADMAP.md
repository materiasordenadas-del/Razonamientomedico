# H-CR — Roadmap de producto

> Documento de referencia para el desarrollo de **H-CR (Healer-style Clinical Reasoning)**.
>
> H-CR es una aplicación educativa de razonamiento clínico. Su propósito no es revelar respuestas de inmediato, sino entrenar adquisición de datos, representación del problema, diagnóstico sindromático, diferencial jerarquizado, manejo y retroalimentación experta.

---

## 1. Principios no negociables

1. **El estudiante razona; la app no le da pistas prematuras.**
2. **Los datos clínicos del caso y el motor de la app están separados.**
   - `app/` = interfaz y funcionamiento común.
   - `cases/` = datos clínicos específicos de cada paciente.
3. **No usar imágenes diagnósticas falsas.** Solo recursos reales, con fuente/licencia adecuada y sin identificadores de pacientes.
4. **No copiar el caso ni modificar su evolución para adaptarlo a una hipótesis del estudiante.**
5. **Toda información seleccionable debe conservarse, poder deseleccionarse y alimentar el Pad diagnóstico.**
6. **El rendimiento debe evaluarse por calidad y eficiencia**, no por marcar todo.
7. **La evaluación experta pertenece al caso**, no se importa manualmente desde un archivo externo.
8. **La publicación pública no debe incluir recursos sin derechos de uso compatibles.**

---

## 2. Arquitectura actual

```text
index.html                 Biblioteca de casos
caso-demo.html             Laboratorio técnico del motor
caso-1.html                Prototipo original; no modificar
server.py                  Servidor de desarrollo

app/
  styles.css               Diseño visual compartido
  core.js                  Estado, localStorage, Pad, exportación, reinicio
  modules.js               Módulos, acordeones, Venn, navegación, evaluación
  bootstrap.js             Arranque y listeners

cases/
  demo_case.js             Caso técnico de demostración

legacy/
  caso-1_original.html     Copia protegida del prototipo

data/
  diagnoses.js             Banco de diagnósticos para Tier 3
  drugs.js                 Banco farmacológico para manejo asistido
```

La arquitectura debe mantenerse simple: HTML, CSS y JavaScript puro. No introducir React, Node, npm, Vite, TypeScript, backend o base de datos sin una decisión explícita del proyecto.

---

## 3. Flujo clínico objetivo

```text
Pantalla de inicio
↓
M1 — Triage + Interrogatorio / anamnesis
↓
M2 — Historial + Examen funcional subjetivo
↓
M3 — Examen físico
↓
M4 — Paraclínicos
↓
M5 — Pausa diagnóstica
↓
Selección de manejo (no es módulo)
↓
M6 — Manejo clínico
↓
M7 — Evaluación
↓
M8 — Exportar desempeño
```

### Bloqueos de flujo

- M6, M7 y M8 no deben estar accesibles hasta completar M5.
- La modalidad de manejo se elige una sola vez por caso:
  - **Sin asistencia**
  - **Con asistencia**
- La modalidad queda bloqueada durante ese caso y debe guardarse en el estado.

---

## 4. Estado de desarrollo

### Base del motor

- [x] Pantalla de inicio y navegación por pestañas.
- [x] Pad diagnóstico agrupado por fuente.
- [x] Selección/deselección de hallazgos.
- [x] Persistencia con `localStorage`.
- [x] Campos clínicos persistentes.
- [x] Acordeones reutilizables.
- [x] Pausa diagnóstica con Venn.
- [x] Exportación JSON/TXT.
- [x] Reinicio de caso.

### Diagnóstico

- [x] Diagnóstico sindromático y Tier 3 como capas del proceso.
- [x] Buscador/autocompletado de diagnósticos.
- [x] Diagnósticos seleccionados persistentes entre módulos.
- [ ] Verificar que `diagnoses.js` use el contrato actual `window.HCR_DIAGNOSES`.
- [ ] Mostrar Tier 3 de forma consistente en M6 y M7.

### Módulos 2 y 3

- [x] Arquitectura de acordeones por historia, examen funcional y sistemas físicos.
- [ ] Confirmar que todos los acordeones conservan su estado al seleccionar hallazgos.
- [ ] Completar el patrón clínico final para futuros casos: diálogo natural, expansiones limitadas y hallazgos positivos/negativos/distractores.

### Módulo 5 — Pausa diagnóstica

- [x] Diagnósticos editables Dx1, Dx2 y Dx3.
- [x] Drag and drop de hallazgos hacia Venn.
- [x] Reinicio del diagrama sin borrar el resto del caso.
- [ ] Registro de colocaciones agrupado por zona diagnóstica, no solo por orden cronológico.
- [ ] Confirmar que un hallazgo nunca quede duplicado entre Findings y Venn.

### Módulo 6 — Manejo clínico

- [x] Selección de modalidad de manejo.
- [x] Modo sin asistencia.
- [x] Base inicial de modo con asistencia.
- [x] Banco farmacológico inicial (`data/drugs.js`).
- [ ] Ocultar el Pad diagnóstico en selección de manejo y en M6.
- [ ] Mostrar tarjeta Dx1/Dx2/Dx3 en M6, con `Pendiente` cuando corresponda.
- [ ] Layout final en modo asistido:
  - izquierda = órdenes seleccionadas;
  - derecha = biblioteca de manejo.
- [ ] Todo seleccionable en modo asistido salvo `Precauciones y conductas a evitar`.
- [ ] Formularios clínicos compactos para oxígeno, fármacos y procedimientos.
- [ ] Mantener acordeones abiertos al seleccionar opciones de monitorización y procedimientos.
- [ ] Completar grupos farmacológicos mínimos visibles fuera de cardiovasculares.

### Módulo 7 — Evaluación

- [ ] Ocultar Pad diagnóstico en M7.
- [ ] Eliminar “Importar evaluación experta”.
- [ ] Nunca mostrar JSON crudo al estudiante.
- [ ] Comparar hallazgos por módulo:
  - verde = seleccionado por estudiante y esperado por experto;
  - rojo = omitido / `MISSED`;
  - amarillo = bajo valor o distractor seleccionado.
- [ ] Evaluar manejo clínico en formato legible.
- [ ] Mostrar modalidad de manejo elegida.
- [ ] Usar únicamente evaluación experta definida dentro de cada caso.

---

## 5. Formato oficial de un caso

Cada caso nuevo debe incluir:

```text
cases/caso_xxx.js         Datos clínicos y evaluación experta
caso-xxx.html             Cáscara que carga el caso y el motor compartido
assets/caso_xxx/          Solo recursos usados por ese caso, cuando existan
```

Un caso no debe contener lógica de interfaz ni funciones como `renderM1()` o `renderM3()`.

### Datos mínimos por caso

- Identidad general del paciente.
- Datos de M1–M4.
- Textos/estructuras de M6 cuando sean necesarios.
- Evaluación experta completa.
- Referencias a recursos multimedia por ID o ruta local.

### Evaluación experta mínima

```javascript
expertEvaluation: {
  findings: {
    selectedExpected: [],
    missedImportant: [],
    lowValueSelected: []
  },
  management: {
    expected: [],
    dangerousOmissions: [],
    monitoringOmitted: [],
    destination: {}
  }
}
```

La versión final debe organizar los hallazgos por módulo y explicar por qué un dato u omisión importa.

---

## 6. Estándar para el primer caso clínico completo

### Caso objetivo

**Neumonía adquirida en la comunidad (NAC)**.

Este caso será el caso de referencia para definir el estándar de calidad de H-CR.

Debe incluir:

- Datos coherentes de triage, interrogatorio, historia, examen físico y paraclínicos.
- Positivos, negativos útiles, normales significativos y distractores.
- Rx de tórax real o informe textual realista; nunca una imagen diagnóstica generada.
- Auscultación pulmonar real cuando exista recurso adecuado.
- Diferenciales pertinentes.
- Manejo con y sin asistencia.
- Evaluación experta completa de hallazgos y manejo.
- Recursos multimedia opcionales asociados al caso, sin revelar anticipadamente el diagnóstico.

### Definición de terminado para un caso

Un caso no está terminado hasta que:

- [ ] Funciona de M1 a M8 sin errores de consola.
- [ ] Los datos seleccionados se conservan al navegar.
- [ ] El Venn no duplica ni pierde hallazgos.
- [ ] La elección de manejo queda bloqueada correctamente.
- [ ] M6 y M7 se ven sin Pad lateral.
- [ ] Exportación JSON conserva todo el desempeño.
- [ ] La evaluación experta es completa y legible.
- [ ] Los recursos multimedia cargan de forma estable o se sustituyen por informe textual.

---

## 7. Biblioteca de recursos multimedia

### Objetivo

Permitir que casos futuros usen imágenes y sonidos sin que el creador del caso vea previamente el contenido clínico elegido para su simulación.

### Modelo previsto

```text
Repositorio maestro de recursos (por ejemplo Google Drive)
↓
Índice de recursos con metadatos
↓
Selección de recurso para un caso
↓
assets/caso_xxx/ o recurso publicado compatible
↓
case_xxx.js referencia el recurso por ID/ruta
```

### Organización mínima del repositorio maestro

```text
ECG/
Rx_Torax/
TC/
Auscultacion_pulmonar/
Auscultacion_cardiaca/
Atlas_Medicina_Interna/
Otros/
```

No se exige clasificación manual de miles de archivos. Se buscará e indexará por nombre/carpeta de forma progresiva.

### Reglas de publicación

- No usar imágenes de pacientes identificables.
- No publicar escaneos, figuras o audios protegidos sin derechos/licencia adecuada.
- El recurso de un caso debe tener atribución interna y fuente registrada.

---

## 8. Backlog priorizado

### Próxima prioridad — estabilizar el producto

1. Corregir scroll global y scroll interno.
2. Cerrar rediseño de M6.
3. Cerrar rediseño de M7.
4. Completar y probar `diagnoses.js`.
5. Confirmar uso de `drugs.js` en la interfaz farmacológica.
6. Construir el primer caso NAC completo, incluida evaluación experta.

### Segunda prioridad — reutilización clínica

1. Banco de procedimientos.
2. Banco de monitorización.
3. Banco de soporte general: oxígeno, líquidos, aislamiento, etc.
4. Índice de assets multimedia.
5. Plantilla formal para crear casos.

### Tercera prioridad — publicación y docentes

1. Página de biblioteca de casos funcional.
2. Gestión de casos disponibles/bloqueados.
3. Datos de desempeño exportables.
4. Alojamiento público estático.
5. Control de derechos de recursos multimedia.

### Fuera de alcance por ahora

- Paciente conversacional con IA en tiempo real.
- Multijugador.
- Dashboard docente completo.
- Adaptación móvil nativa.
- Backend, autenticación y base de datos.

---

## 9. Método de trabajo

1. El usuario define el objetivo clínico o de UX.
2. Se especifica qué no debe cambiar.
3. Codex implementa cambios pequeños o una tarea de rediseño delimitada.
4. Se prueba visualmente y en consola.
5. Solo después de probar, se hace commit.
6. Las decisiones importantes se registran en este documento.

### Regla de seguridad

Antes de cambios grandes:

- revisar qué archivos se tocarán;
- crear commit o checkpoint;
- no modificar `caso-1.html`, `index.html` ni `legacy/` sin autorización explícita.

---

## 10. Decisiones de nomenclatura

- **Pad diagnóstico**: panel de datos seleccionados y síntesis clínica.
- **Enfermedad actual**: representación escrita por fase.
- **Diagnóstico sindromático**: capa clínica entre datos y etiología.
- **Tier 3**:
  1. diagnóstico líder;
  2. diagnóstico secundario/mímico principal;
  3. diagnóstico grave que no se puede perder.
- **Con asistencia**: modo de manejo guiado por categorías, sin revelar la respuesta.
- **Sin asistencia**: modo de manejo libre.
- **Manejo con ayuda**: término discontinuado; usar siempre **Con asistencia**.

---

## 11. Registro de decisiones

| Fecha | Decisión | Motivo |
|---|---|---|
| 2026-06-27 | Separar motor de app y datos de casos | Evitar repetir interfaz y lógica en cada caso. |
| 2026-06-27 | Mantener `caso-1.html` como prototipo protegido | Conservar referencia funcional histórica. |
| 2026-06-27 | Implementar dos modalidades de manejo en un solo M6 | Evitar duplicar módulos y facilitar evaluación. |
| 2026-06-27 | Usar bancos reutilizables de diagnósticos y fármacos | Mantener nomenclatura consistente y escalar casos. |
| 2026-06-27 | Evaluación experta dentro de cada caso | Evitar importaciones manuales y preservar evaluación específica. |
