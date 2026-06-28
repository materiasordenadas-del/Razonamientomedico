window.HCR_CASES_CATALOG = {
  version: "1.1.2",
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
    }
  ]
};

function openCaseLibrary() {
  document.querySelectorAll('.filter-opt input:checked').forEach((input) => {
    input.checked = false;
    input.parentElement.classList.remove('active-filter');
  });
  const search = document.getElementById('searchInput');
  if (search) search.value = '';
  if (typeof applyFilters === 'function') applyFilters();
  const breadcrumb = document.querySelector('.breadcrumb');
  if (breadcrumb) breadcrumb.innerHTML = 'Biblioteca <b>› Todos los casos</b>';
  document.querySelector('.table-wrap')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

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

const libraryTab = document.querySelector('.sidebar-link.active');
if (libraryTab) {
  libraryTab.setAttribute('role', 'button');
  libraryTab.setAttribute('tabindex', '0');
  libraryTab.setAttribute('aria-label', 'Abrir biblioteca de casos');
  libraryTab.onclick = openCaseLibrary;
  libraryTab.onkeydown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openCaseLibrary();
    }
  };
}
