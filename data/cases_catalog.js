/*
 * H-CR — Catálogo público de casos
 *
 * Este archivo contiene únicamente metadatos visibles antes de iniciar un caso.
 * No incluir diagnóstico definitivo, etiología, claves de evaluación, resultados
 * de paraclínicos decisivos ni rutas a recursos que revelen la respuesta.
 *
 * Contrato público:
 *   window.HCR_CASES_CATALOG = {
 *     version,
 *     settings,
 *     filters,
 *     cases
 *   }
 *
 * La portada debe usar este archivo para construir automáticamente la biblioteca,
 * los filtros, el buscador, la paginación y las colecciones. El progreso debe
 * calcularse desde localStorage; no se guarda aquí.
 */

window.HCR_CASES_CATALOG = {
  version: "1.0.0",

  settings: {
    defaultPageSize: 24,
    pageSizeOptions: [12, 24, 48],
    defaultSort: "recommended",
    diagnosisPolicy: "hidden_until_module_7_evaluation"
  },

  filters: {
    symptoms: [
      "Disnea",
      "Dolor torácico",
      "Fiebre",
      "Fatiga",
      "Cefalea",
      "Dolor abdominal",
      "Mareo / Síncope",
      "Edema"
    ],
    systems: [
      "Cardiovascular",
      "Respiratorio",
      "Digestivo",
      "Neurológico",
      "Endocrinológico",
      "Infeccioso",
      "Nefrológico",
      "Hematológico"
    ],
    difficulties: ["Básico", "Intermedio", "Avanzado"],
    levels: ["Nivel I", "Nivel II", "Nivel III", "Nivel IV", "Nivel V"],
    formats: ["Caso completo", "Caso focalizado", "Reto diagnóstico"],
    availability: ["Disponible", "En desarrollo"]
  },

  collections: [
    { id: "cardiovascular", label: "Cardiología" },
    { id: "infectologia", label: "Infectología" },
    { id: "urgencias", label: "Urgencias" },
    { id: "neurologia", label: "Neurología" },
    { id: "respiratorio", label: "Respiratorio" },
    { id: "gastroenterologia", label: "Gastroenterología" },
    { id: "endocrinologia", label: "Endocrinología" },
    { id: "nefrologia", label: "Nefrología" }
  ],

  cases: [
    {
      id: "RC1",
      route: "caso-demo.html",
      availability: "Disponible",
      format: "Caso completo",
      modules: 8,
      difficulty: "Intermedio",
      level: "Nivel III",
      collections: ["respiratorio", "infectologia", "urgencias"],

      patient: {
        displayName: "José Ramírez",
        initials: "JR",
        age: 68,
        sex: "Masculino",
        setting: "Urgencias"
      },

      chiefConcern: "Fiebre, tos y dificultad para respirar",
      publicPresentation:
        "Paciente adulto mayor con fiebre, tos y disnea de evolución aguda. Acude al servicio de urgencias acompañado por un familiar.",

      /* Etiquetas seguras: permiten buscar sin revelar el diagnóstico definitivo. */
      publicTags: {
        symptoms: ["Fiebre", "Tos", "Disnea"],
        syndromes: ["Síndrome respiratorio agudo"],
        systems: ["Respiratorio", "Infeccioso"],
        context: ["Urgencias", "Adulto mayor", "Cuadro agudo"],
        keywords: [
          "fiebre",
          "tos",
          "disnea",
          "dificultad para respirar",
          "urgencias",
          "adulto mayor"
        ]
      },

      sort: {
        recommendedRank: 1,
        publishedAt: "2026-06-27"
      }
    }
  ]
};
