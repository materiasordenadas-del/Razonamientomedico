window.HCR_CASE_EXPERT = window.HCR_CASE_EXPERT || {};

window.HCR_CASE_EXPERT.CR8 = {
  expertEvaluation: {
  "evaluationSchemaVersion": "2.0",
  "findings": {
    "selectedExpected": [],
    "missedImportant": [],
    "lowValueSelected": []
  },
  "comparisonByModule": {},
  "management": {
    "expected": [
      {
        "id": "manejo-esp-01",
        "label": "Proteger el proceso de decisión antes de tratar el déficit como ictus arterial.",
        "rationale": "Una conducta competente comienza con neuroimagen urgente, vigilancia y rechazo de intervenciones que serían peligrosas si hay sangre. Después, la venografía permite pasar de una precaución general a un tratamiento dirigido al mecanismo venoso bajo supervisión."
      },
      {
        "id": "manejo-esp-02",
        "label": "Tratar la trombosis y vigilar simultáneamente la hemorragia.",
        "rationale": "En este caso, anticoagular no significa ignorar el hematoma; significa reconocer que la hemorragia se originó dentro de un proceso venoso que puede empeorar si no se trata. La respuesta correcta exige condiciones, imagen de control, reevaluación neurológica y posibilidad de escalamiento."
      }
    ],
    "dangerousOmissions": [
      {
        "id": "manejo-pel-01",
        "label": "Atribuir todo a la crisis focal y omitir neuroimagen.",
        "rationale": "El evento motor fue real, pero ocurrió después de un déficit cortical persistente. Tratar únicamente la crisis habría dejado sin explicación una lesión hemorrágica venosa activa y habría retrasado decisiones de monitorización y tratamiento causal."
      },
      {
        "id": "manejo-pel-02",
        "label": "Aplicar una regla absoluta de “hemorragia igual a no anticoagular”.",
        "rationale": "Las reglas de seguridad sirven cuando preservan mecanismo y contexto. Aquí, la presencia de sangre cambia la forma de anticoagular y vigilar, no elimina la necesidad de tratar el trombo venoso demostrado. La conducta debe ser interdisciplinaria y dependiente de estabilidad, no automática."
      }
    ],
    "monitoringOmitted": [
      {
        "id": "manejo-mon-01",
        "label": "Vigilar lenguaje, alerta, pupilas, fuerza y nuevas crisis.",
        "rationale": "Estas variables son el termómetro clínico de expansión, edema, propagación y actividad epiléptica. Una cifra de presión arterial aislada no sustituye una exploración neurológica seriada."
      }
    ],
    "destination": {
      "id": "manejo-des-01",
      "label": "Unidad neurovascular o neurocrítica, no observación ambulatoria.",
      "rationale": "El destino se justifica por el riesgo dinámico de una lesión hemorrágica venosa y por la necesidad de iniciar, ajustar o suspender intervenciones según cambios clínicos e imagenológicos. La estabilidad inicial no reduce esa necesidad."
    }
  }
}
};
