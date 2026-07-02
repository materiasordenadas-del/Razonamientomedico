window.HCR_CASES_CATALOG = {
  version: "1.1.3",
  settings: { defaultPageSize: 24, pageSizeOptions: [12, 24, 48], defaultSort: "recommended", diagnosisPolicy: "hidden_until_module_7_evaluation" },
  filters: {
    symptoms: ["Disnea", "Dolor toracico", "Fiebre", "Fatiga", "Cefalea", "Dolor abdominal", "Mareo / Sincope", "Edema"],
    systems: ["Cardiovascular", "Respiratorio", "Digestivo", "Neurologico", "Endocrinologico", "Infeccioso", "Nefrologico", "Hematologico"],
    difficulties: ["Nivel 1", "Nivel 2", "Nivel 3", "Nivel 4", "Nivel 5"],
    levels: ["Nivel I", "Nivel II", "Nivel III", "Nivel IV", "Nivel V"],
    formats: ["Caso completo", "Caso focalizado", "Reto diagnostico"],
    availability: ["Disponible", "En desarrollo"]
  },
  collections: [
    { id: "cardiovascular", label: "Cardiologia" },
    { id: "infectologia", label: "Infectologia" },
    { id: "urgencias", label: "Urgencias" },
    { id: "neurologia", label: "Neurologia" },
    { id: "respiratorio", label: "Respiratorio" },
    { id: "gastroenterologia", label: "Gastroenterologia" },
    { id: "endocrinologia", label: "Endocrinologia" },
    { id: "nefrologia", label: "Nefrologia" }
  ],
  cases: [
    {
      id: "RC1", route: "caso-RC1.html", availability: "Disponible", format: "Caso completo", modules: 8, difficulty: "Nivel 3", level: "Nivel III", collections: ["respiratorio", "infectologia", "urgencias"],
      imagenPortada: "",
      patient: { displayName: "Jose Ramirez", initials: "JR", age: 68, sex: "Masculino", setting: "Urgencias" },
      chiefConcern: "Fiebre, tos y dificultad para respirar",
      publicPresentation: "Paciente adulto mayor con fiebre, tos y disnea de evolucion aguda. Acude al servicio de urgencias acompanado por un familiar.",
      publicTags: { symptoms: ["Fiebre", "Tos", "Disnea"], syndromes: ["Sindrome respiratorio agudo"], systems: ["Respiratorio", "Infeccioso"], context: ["Urgencias", "Adulto mayor", "Cuadro agudo"], keywords: ["fiebre", "tos", "disnea", "dificultad para respirar", "urgencias", "adulto mayor"] },
      sort: { recommendedRank: 1, publishedAt: "2026-06-27" }
    },
    {
      id: "RC2", route: "caso-RC2.html", availability: "Disponible", format: "Caso completo", modules: 8, difficulty: "Nivel 3", level: "Nivel III", collections: ["cardiovascular", "urgencias"],
      imagenPortada: "",
      patient: { displayName: "Elena M.", initials: "EM", age: 61, sex: "Femenino", setting: "Urgencias" },
      chiefConcern: "Dolor toracico opresivo con nauseas",
      publicPresentation: "Paciente con dolor retroesternal de inicio reciente, acompanado de nauseas y sudor frio. Refiere episodios similares de menor intensidad durante el esfuerzo en los ultimos dias.",
      publicTags: { symptoms: ["Dolor toracico", "Disnea"], syndromes: ["Sindrome de dolor toracico agudo"], systems: ["Cardiovascular"], context: ["Urgencias", "Adulto", "Cuadro agudo"], keywords: ["dolor toracico", "presion en el pecho", "nauseas", "sudor frio", "dolor de esfuerzo", "urgencias"] },
      sort: { recommendedRank: 2, publishedAt: "2026-06-27" }
    },
    {
      id: "RC4", route: "caso-RC4.html", availability: "Disponible", format: "Caso completo", modules: 8, difficulty: "Nivel 3", level: "Nivel III", collections: ["cardiovascular", "urgencias", "medicina-interna"],
      imagenPortada: "",
      patient: { displayName: "Mariana R.", initials: "MR", age: 59, sex: "Femenino", setting: "Urgencias" },
      chiefConcern: "Opresión torácica en reposo y diaforesis",
      publicPresentation: "Paciente adulta con opresión torácica progresiva, síntomas autonómicos y factores de riesgo cardiovascular que requiere razonamiento diagnóstico y manejo urgente.",
      publicTags: { symptoms: ["Dolor torácico", "Náuseas", "Diaforesis"], syndromes: ["Síndrome de dolor torácico agudo"], systems: ["Cardiovascular"], context: ["Urgencias", "Adulto", "Dolor en reposo"], keywords: ["dolor torácico", "opresión", "diaforesis", "troponina", "electrocardiograma", "urgencias"] },
      sort: { recommendedRank: 4, publishedAt: "2026-07-01" }
    }
  ]
};

document.querySelectorAll('.filter-opt input:checked').forEach((input) => {
  input.checked = false;
  input.parentElement.classList.remove('active-filter');
});

const difficultyGroup = document.querySelector('[data-filter-group="difficulties"] .filter-options');
if (difficultyGroup) {
  difficultyGroup.innerHTML = window.HCR_CASES_CATALOG.filters.difficulties.map((level) =>
    `<label class="filter-opt"><input type="checkbox" onchange="applyFilters()"> ${level}</label>`
  ).join('');
}
