window.HCR_CASES_CATALOG = {
  version: "1.0.0",
  settings: { defaultPageSize: 24, pageSizeOptions: [12, 24, 48], defaultSort: "recommended", diagnosisPolicy: "hidden_until_module_7_evaluation" },
  filters: {
    symptoms: ["Disnea", "Dolor torácico", "Fiebre", "Fatiga", "Cefalea", "Dolor abdominal", "Mareo / Síncope", "Edema"],
    systems: ["Cardiovascular", "Respiratorio", "Digestivo", "Neurológico", "Endocrinológico", "Infeccioso", "Nefrológico", "Hematológico"],
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
      route: "caso-RC1.html",
      availability: "Disponible",
      format: "Caso completo",
      modules: 8,
      difficulty: "Intermedio",
      level: "Nivel III",
      collections: ["respiratorio", "infectologia", "urgencias"],
      patient: { displayName: "José Ramírez", initials: "JR", age: 68, sex: "Masculino", setting: "Urgencias" },
      chiefConcern: "Fiebre, tos y dificultad para respirar",
      publicPresentation: "Paciente adulto mayor con fiebre, tos y disnea de evolución aguda. Acude al servicio de urgencias acompañado por un familiar.",
      publicTags: { symptoms: ["Fiebre", "Tos", "Disnea"], syndromes: ["Síndrome respiratorio agudo"], systems: ["Respiratorio", "Infeccioso"], context: ["Urgencias", "Adulto mayor", "Cuadro agudo"], keywords: ["fiebre", "tos", "disnea", "dificultad para respirar", "urgencias", "adulto mayor"] },
      sort: { recommendedRank: 1, publishedAt: "2026-06-27" }
    },
    {
      id: "RC2",
      route: "caso-RC2.html",
      availability: "Disponible",
      format: "Caso completo",
      modules: 8,
      difficulty: "Intermedio",
      level: "Nivel III",
      collections: ["cardiovascular", "urgencias"],
      patient: { displayName: "Elena M.", initials: "EM", age: 61, sex: "Femenino", setting: "Urgencias" },
      chiefConcern: "Dolor torácico opresivo con náuseas",
      publicPresentation: "Paciente con dolor retroesternal de inicio reciente, acompañado de náuseas y sudor frío. Refiere episodios similares de menor intensidad durante el esfuerzo en los últimos días.",
      publicTags: { symptoms: ["Dolor torácico", "Disnea"], syndromes: ["Síndrome de dolor torácico agudo"], systems: ["Cardiovascular"], context: ["Urgencias", "Adulto", "Cuadro agudo"], keywords: ["dolor torácico", "presión en el pecho", "náuseas", "sudor frío", "dolor de esfuerzo", "urgencias"] },
      sort: { recommendedRank: 2, publishedAt: "2026-06-27" }
    }
  ]
};

/* La biblioteca debe abrir mostrando todos los casos disponibles.
   Los filtros iniciales heredados de la maqueta se limpian antes del renderizado. */
document.querySelectorAll('.filter-opt input:checked').forEach((input) => {
  input.checked = false;
  input.parentElement.classList.remove('active-filter');
});
