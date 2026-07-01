window.HCR_CASE_EXPERT = window.HCR_CASE_EXPERT || {};

window.HCR_CASE_EXPERT.RC4 = {
  expertEvaluation: {
  "evaluationSchemaVersion": "2.0",
  "findings": {
    "selectedExpected": [
      "t02",
      "t03",
      "t04",
      "i02",
      "i05",
      "i06",
      "f03",
      "f06",
      "f07",
      "p11",
      "p12",
      "p14",
      "p15",
      "p16"
    ],
    "missedImportant": [
      "t02",
      "t03",
      "t04",
      "f03",
      "f07",
      "p12",
      "p14",
      "p16"
    ],
    "lowValueSelected": [
      "t01",
      "h07"
    ]
  },
  "comparisonByModule": {
    "m1": {
      "sourceComparison": {
        "expectedUrgency": "Emergencia neurológica tiempo-dependiente con síndrome febril sistémico concomitante.",
        "expectedProblemRepresentation": "Adulto con fiebre subaguda y deterioro funcional reciente que presenta déficit cortical focal súbito dentro de ventana aguda.",
        "minimumFindings": [
          "t02",
          "t03",
          "t04"
        ]
      },
      "illnessActual": "La representación debe integrar cronología bifásica: síndrome febril de semanas seguido de déficit neurológico focal abrupto.",
      "tier3": [
        "Evento cerebrovascular isquémico agudo de probable mecanismo embólico",
        "Proceso infeccioso intravascular con embolización sistémica",
        "Hemorragia intracraneal o lesión vascular infecciosa no descartada inicialmente"
      ]
    },
    "m2": {
      "sourceComparison": {
        "keyDiscriminators": [
          "i02",
          "i05",
          "i06",
          "i08",
          "i09",
          "h01",
          "h04",
          "ef01",
          "ef02"
        ],
        "expectedReasoning": "Valorar el antecedente estructural cardiaco, la puerta de entrada, la fiebre persistente y la ausencia de factores vasculares convencionales."
      },
      "illnessActual": "Los antecedentes no son decorativos: la lesión valvular previa y el procedimiento dental modifican la probabilidad preprueba; el antibiótico incompleto puede alterar microbiología."
    },
    "m3": {
      "sourceComparison": {
        "keyDiscriminators": [
          "f01",
          "f03",
          "f05",
          "f06",
          "f07",
          "f08"
        ],
        "expectedReasoning": "Reconocer que soplo, estigmas periféricos, esplenomegalia leve y déficit cortical focal pueden provenir de un único proceso intravascular."
      },
      "illnessActual": "No exigir todos los estigmas clásicos. La fuerza del examen proviene de su convergencia con cronología y microbiología."
    },
    "m4": {
      "sourceComparison": {
        "keyDiscriminators": [
          "p01",
          "p03",
          "p06",
          "p09",
          "p11",
          "p12",
          "p14",
          "p15",
          "p16"
        ],
        "expectedReasoning": "Integrar inflamación sistémica, lesión renal/urinaria, hemocultivos concordantes, embolias multifocales y lesión valvular móvil."
      },
      "illnessActual": "La distribución multifocal de infartos y el estudio cardiaco permiten superar un enfoque centrado solo en ictus."
    },
    "m5": {
      "expectedVenn": {
        "diagnosticos": [
          {
            "name": "Endocarditis infecciosa izquierda con embolización cerebral",
            "favorecen": [
              "fiebre subaguda",
              "soplo mitral",
              "hemocultivos concordantes",
              "masa valvular móvil",
              "émbolos en más de un territorio"
            ],
            "refutan": []
          },
          {
            "name": "Ictus isquémico cardioembólico no infeccioso",
            "favorecen": [
              "déficit focal súbito",
              "oclusión M2",
              "lesiones isquémicas múltiples"
            ],
            "refutan": [
              "fiebre persistente",
              "inflamación marcada",
              "hemocultivos positivos",
              "signos periféricos sistémicos"
            ]
          },
          {
            "name": "Vasculitis sistémica con evento neurológico",
            "favorecen": [
              "fiebre",
              "hematuria",
              "inflamación",
              "artralgias"
            ],
            "refutan": [
              "microbiología repetidamente positiva y lesión intracardíaca móvil"
            ]
          }
        ],
        "pivot": "p16",
        "shared": [
          "t02",
          "p14",
          "p15"
        ]
      }
    },
    "m6": {
      "expectedPlanSummary": "Activar manejo multidisciplinario inmediato de infección intravascular complicada con evento neurovascular, equilibrando control microbiológico, seguridad neurológica y evaluación quirúrgica temprana.",
      "management": [
        "Ingreso en unidad con monitorización neurológica y hemodinámica estrecha.",
        "Obtener y documentar hemocultivos adecuados antes de antimicrobianos cuando esto no retrase de forma relevante el tratamiento.",
        "Iniciar antimicrobianos intravenosos empíricos para endocarditis de válvula nativa según epidemiología local y ajuste posterior a identificación/sensibilidad.",
        "Solicitar ecocardiograma transesofágico urgente y valoración temprana por cardiología, infectología, neurología y cirugía cardiovascular.",
        "Individualizar reperfusión y antitrombóticos con neurología: la sospecha de infección intravascular y lesión vascular asociada modifica el balance hemorrágico.",
        "Vigilar insuficiencia cardiaca, trastornos de conducción, bacteriemia persistente, nuevas embolias, función renal y hemorragia intracraneal."
      ],
      "dangerousOmissions": [
        "Tratar el déficit focal como ictus aislado sin explicar la fiebre y el soplo.",
        "Retrasar antimicrobianos o cultivos por falta de coordinación.",
        "Ignorar necesidad de evaluación quirúrgica ante lesión móvil grande, embolización y regurgitación.",
        "Indicar tratamientos antitrombóticos o fibrinolíticos sin evaluar riesgo de sangrado asociado al contexto infeccioso."
      ],
      "monitoringOmitted": [
        "estado neurológico seriado",
        "signos de falla cardiaca",
        "hemocultivos de control",
        "función renal",
        "ritmo y conducción"
      ],
      "destination": "Unidad de cuidados monitorizados con capacidad de neurología, ecocardiografía avanzada y cirugía cardiovascular; traslado urgente si no se dispone."
    }
  },
  "expertEvaluation": {
    "diagnosis": "Endocarditis infecciosa de válvula mitral nativa complicada por embolización cerebral isquémica múltiple",
    "etiology": "Probable estreptococo de origen oral, pendiente de identificación definitiva y sensibilidad",
    "dominantSyndrome": "Síndrome febril subagudo con evento neurovascular cardioembólico",
    "noMissDiagnosis": "Lesión vascular intracraneal infecciosa o hemorragia asociada a endocarditis que altere decisiones de reperfusión/antitrombosis",
    "problemRepresentation": "Hombre de 46 años con valvulopatía mitral conocida y procedimiento dental reciente, tres semanas de fiebre, sudoración nocturna, anemia e inflamación sistémica, que desarrolla afasia y hemiparesia derecha de inicio súbito; presenta soplo mitral, estigmas periféricos, hemocultivos concordantes, embolias cerebrales multifocales y masa mitral móvil.",
    "top3": [
      {
        "diagnosis": "Endocarditis infecciosa izquierda con embolización cerebral",
        "rationale": "Integra todos los dominios clínicos, microbiológicos, ecocardiográficos y neurológicos."
      },
      {
        "diagnosis": "Ictus isquémico cardioembólico no infeccioso",
        "rationale": "Explica déficit focal y oclusión arterial, pero no fiebre persistente, cultivos ni inflamación sistémica."
      },
      {
        "diagnosis": "Vasculitis sistémica con compromiso cerebral",
        "rationale": "Puede combinar fiebre, hematuria y lesión vascular, pero queda fuertemente alejada por hemocultivos y ecocardiografía."
      }
    ],
    "cognitiveTraps": [
      "Anclaje en código ictus y omisión del síndrome febril subagudo.",
      "Cierre prematuro al identificar una oclusión arterial sin buscar fuente.",
      "Sobreponderar la extracción dental como explicación única y subestimar la valvulopatía previa.",
      "Aplicar protocolos de reperfusión de forma automática sin reevaluar contexto infeccioso y riesgo hemorrágico."
    ],
    "rubric": {
      "0": "No reconoce emergencia neurológica ni integra fiebre con el déficit focal.",
      "1": "Reconoce ictus o infección, pero los maneja como procesos independientes.",
      "2": "Sospecha fuente embólica/infecciosa, pero omite datos críticos o seguridad terapéutica.",
      "3": "Integra síndrome sistémico, embolización y estudio cardiaco; prioriza cultivos, antimicrobianos y equipo multidisciplinario.",
      "4": "Construye una representación completa, reconoce riesgos neurovasculares y valvulares, prioriza intervenciones tiempo-dependientes y evita conductas potencialmente peligrosas."
    },
    "teachingPearls": [
      "Un evento neurológico agudo puede ser la primera manifestación dramática de un proceso intravascular subagudo.",
      "El patrón de embolias en territorios múltiples obliga a buscar una fuente proximal.",
      "Los hallazgos clásicos no tienen que estar todos presentes para que el conjunto sea convincente.",
      "El manejo seguro requiere que infección, neurología, cardiología y cirugía se consideren desde el inicio."
    ]
  }
}
};
