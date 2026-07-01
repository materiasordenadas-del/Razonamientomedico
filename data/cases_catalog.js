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
      patient: { displayName: "Jose Ramirez", initials: "JR", age: 68, sex: "Masculino", setting: "Urgencias" },
      chiefConcern: "Fiebre, tos y dificultad para respirar",
      publicPresentation: "Paciente adulto mayor con fiebre, tos y disnea de evolucion aguda. Acude al servicio de urgencias acompanado por un familiar.",
      publicTags: { symptoms: ["Fiebre", "Tos", "Disnea"], syndromes: ["Sindrome respiratorio agudo"], systems: ["Respiratorio", "Infeccioso"], context: ["Urgencias", "Adulto mayor", "Cuadro agudo"], keywords: ["fiebre", "tos", "disnea", "dificultad para respirar", "urgencias", "adulto mayor"] },
      sort: { recommendedRank: 1, publishedAt: "2026-06-27" }
    },
    {
      id: "RC2", route: "caso-RC2.html", availability: "Disponible", format: "Caso completo", modules: 8, difficulty: "Nivel 3", level: "Nivel III", collections: ["cardiovascular", "urgencias"],
      patient: { displayName: "Elena M.", initials: "EM", age: 61, sex: "Femenino", setting: "Urgencias" },
      chiefConcern: "Dolor toracico opresivo con nauseas",
      publicPresentation: "Paciente con dolor retroesternal de inicio reciente, acompanado de nauseas y sudor frio. Refiere episodios similares de menor intensidad durante el esfuerzo en los ultimos dias.",
      publicTags: { symptoms: ["Dolor toracico", "Disnea"], syndromes: ["Sindrome de dolor toracico agudo"], systems: ["Cardiovascular"], context: ["Urgencias", "Adulto", "Cuadro agudo"], keywords: ["dolor toracico", "presion en el pecho", "nauseas", "sudor frio", "dolor de esfuerzo", "urgencias"] },
      sort: { recommendedRank: 2, publishedAt: "2026-06-27" }
    },
    {
      id: "RC3", route: "caso-RC3.html", availability: "Disponible", format: "Caso completo", modules: 8, difficulty: "Nivel 3", level: "Nivel III", collections: ["infectologia", "neurologia", "urgencias"],
      patient: { displayName: "Andres R.", initials: "AR", age: 34, sex: "Masculino", setting: "Urgencias" },
      chiefConcern: "Fiebre, cefalea intensa y confusion",
      publicPresentation: "Paciente adulto joven con cuadro febril agudo, cefalea intensa, vomitos y dificultad para responder con claridad.",
      publicTags: { symptoms: ["Fiebre", "Cefalea"], syndromes: ["Sindrome febril agudo"], systems: ["Infeccioso", "Neurologico"], context: ["Urgencias", "Adulto joven", "Cuadro agudo"], keywords: ["fiebre", "cefalea", "confusion", "vomitos", "fotofobia", "urgencias"] },
      sort: { recommendedRank: 3, publishedAt: "2026-06-30" }
    },
    {
      id: "RC4", route: "caso-RC4.html", availability: "Disponible", format: "Caso completo", modules: 8, difficulty: "Nivel 4", level: "Nivel IV", collections: ["infectologia", "cardiovascular", "neurologia", "urgencias"],
      patient: { displayName: "Pablo M.", initials: "PM", age: 46, sex: "Masculino", setting: "Urgencias" },
      chiefConcern: "Fiebre de semanas de evolucion y dificultad subita para hablar",
      publicPresentation: "Paciente adulto con sindrome febril de varias semanas y deficit neurologico focal de instauracion reciente, trasladado a urgencias por un familiar.",
      publicTags: { symptoms: ["Fiebre", "Fatiga", "Mareo / Sincope"], syndromes: ["Sindrome febril subagudo", "Deficit neurologico focal agudo"], systems: ["Infeccioso", "Cardiovascular", "Neurologico"], context: ["Urgencias", "Adulto", "Cuadro tiempo-dependiente"], keywords: ["fiebre", "fatiga", "lenguaje", "debilidad", "urgencias", "deficit focal"] },
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
