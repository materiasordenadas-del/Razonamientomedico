const sourceOrder = [
  'Triage',
  'Interrogatorio',
  'Historial',
  'Examen funcional',
  'Examen físico',
  'Paraclínicos'
];

const state = JSON.parse(localStorage.getItem(STORAGE) || 'null') || {
  started:  false,
  current:  'm1',
  selected: {},
  fields:   {},
  diagnoses: {},
  diagnosisSearch: {},
  diagnosisTouched: {},
  expanded: {},
  venn:     { placed: {} },
  diagnosticPauseCompleted: false,
  managementMode: '',
  manualManagement: {},
  guidedManagement: null,
  expert:   null
};

const removedM5FieldKeys = [
  'm5_pivotFinding',
  'm5_pivot',
  'm5_sharedFinding',
  'm5_shared',
  'm5_discriminatingFinding',
  'm5_discriminator',
  'm5_reducesLeader',
  'm5_reduceLeader',
  'm5_fatalStillOpen',
  'm5_fatalDiagnosis',
  'm5_omittedTest',
  'm5_omittedQuestion',
  'venn_pivotFinding',
  'venn_pivot',
  'venn_sharedFinding',
  'venn_shared',
  'venn_discriminatingFinding',
  'venn_discriminator',
  'venn_reducesLeader',
  'venn_reduceLeader',
  'venn_fatalStillOpen',
  'venn_fatalDiagnosis',
  'venn_omittedTest',
  'venn_omittedQuestion',
  'pivotFinding',
  'sharedFinding',
  'discriminatingFinding',
  'reducesLeader',
  'fatalStillOpen',
  'omittedTest'
];

const removedTierExplanationKeys = [];
['m1','m2','m3','m4'].forEach(phase => {
  [1,2,3].forEach(i => {
    removedTierExplanationKeys.push(`tier_${phase}_${i}_explanation`);
    removedTierExplanationKeys.push(`tier_${phase}_${i}_reason`);
  });
});

function defaultGuidedManagement() {
  return {
    general: {},
    drugs: {},
    procedures: {},
    monitoring: {},
    consults: [],
    destination: '',
    precautions: ''
  };
}

function normalizeState() {
  let changed = false;

  state.selected = state.selected || {};
  state.fields   = state.fields   || {};
  state.diagnoses = state.diagnoses || {};
  state.diagnosisSearch = state.diagnosisSearch || {};
  state.diagnosisTouched = state.diagnosisTouched || {};
  state.expanded = state.expanded || {};
  state.venn     = state.venn     || { placed: {} };
  state.venn.placed = state.venn.placed || {};
  state.diagnosticPauseCompleted = !!state.diagnosticPauseCompleted;
  state.managementMode = state.managementMode || '';
  state.manualManagement = state.manualManagement || {};
  state.guidedManagement = {
    ...defaultGuidedManagement(),
    ...(state.guidedManagement || {})
  };
  state.guidedManagement.general = state.guidedManagement.general || {};
  state.guidedManagement.drugs = state.guidedManagement.drugs || {};
  state.guidedManagement.procedures = state.guidedManagement.procedures || {};
  state.guidedManagement.monitoring = state.guidedManagement.monitoring || {};
  state.guidedManagement.consults = state.guidedManagement.consults || [];

  removedM5FieldKeys.forEach(key => {
    if (Object.prototype.hasOwnProperty.call(state.fields, key)) {
      delete state.fields[key];
      changed = true;
    }
  });

  removedTierExplanationKeys.forEach(key => {
    if (Object.prototype.hasOwnProperty.call(state.fields, key)) {
      delete state.fields[key];
      changed = true;
    }
  });

  Object.keys(state.venn.placed).forEach(id => {
    if (!state.selected[id]) {
      delete state.venn.placed[id];
      changed = true;
    }
  });

  if (changed) save();
}

function save() {
  localStorage.setItem(STORAGE, JSON.stringify(state));
}

normalizeState();

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, m => (
    { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#039;' }[m]
  ));
}

function selectedCount() {
  return Object.keys(state.selected).length;
}

function isSelected(id) {
  return !!state.selected[id];
}

function selectFinding(id, source, text, checked) {
  if (checked) {
    state.selected[id] = { id, source, text };
  } else {
    delete state.selected[id];
  }
  save();
  renderPad();
}

function markExpanded(id, open) {
  state.expanded[id] = open;
  save();
}

function setField(key, val) {
  state.fields[key] = val;
  save();
  renderPad();
}

function completeDiagnosticPause() {
  state.diagnosticPauseCompleted = true;
  state.current = state.managementMode ? 'm6' : 'managementSelect';
  save();
  renderModules();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectManagementMode(mode) {
  if (state.managementMode) return;
  state.managementMode = mode;
  state.current = 'm6';
  save();
  renderModules();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function managementModeLabel() {
  return state.managementMode === 'guided' ? 'Con asistencia'
    : state.managementMode === 'manual' ? 'Sin asistencia'
    : 'Pendiente';
}

function setManualManagementField(key, val) {
  state.manualManagement[key] = val;
  save();
}

function setGuidedGeneral(id, checked) {
  if (checked) {
    state.guidedManagement.general[id] = state.guidedManagement.general[id] || { details: {} };
  } else {
    delete state.guidedManagement.general[id];
  }
  save();
  renderModules();
}

function setGuidedGeneralDetail(id, field, val) {
  state.guidedManagement.general[id] = state.guidedManagement.general[id] || { details: {} };
  state.guidedManagement.general[id].details = state.guidedManagement.general[id].details || {};
  state.guidedManagement.general[id].details[field] = val;
  save();
}

function setGuidedMonitoring(id, checked) {
  if (checked) state.guidedManagement.monitoring[id] = true;
  else delete state.guidedManagement.monitoring[id];
  save();
  renderModules();
}

function setGuidedProcedure(id, checked) {
  if (checked) {
    state.guidedManagement.procedures[id] = state.guidedManagement.procedures[id] || {};
  } else {
    delete state.guidedManagement.procedures[id];
  }
  save();
  renderModules();
}

function setGuidedProcedureDetail(id, field, val) {
  state.guidedManagement.procedures[id] = state.guidedManagement.procedures[id] || {};
  state.guidedManagement.procedures[id][field] = val;
  save();
}

function setGuidedDestination(val) {
  state.guidedManagement.destination = val;
  save();
  renderModules();
}

function setGuidedPrecautions(val) {
  state.guidedManagement.precautions = val;
  save();
}

function addGuidedConsult() {
  state.guidedManagement.consults.push({
    id: 'consult_' + Date.now(),
    service: '',
    reason: '',
    priority: '',
    destination: ''
  });
  save();
  renderModules();
}

function setGuidedConsultOption(id, label, checked) {
  state.guidedManagement.consults = state.guidedManagement.consults || [];
  if (checked) {
    if (!state.guidedManagement.consults.some(c => c.id === id)) {
      state.guidedManagement.consults.push({
        id,
        service: label,
        reason: '',
        priority: '',
        destination: ''
      });
    }
  } else {
    state.guidedManagement.consults = state.guidedManagement.consults.filter(c => c.id !== id);
  }
  save();
  renderModules();
}

function updateGuidedConsult(id, field, val) {
  const consult = state.guidedManagement.consults.find(c => c.id === id);
  if (!consult) return;
  consult[field] = val;
  save();
}

function removeGuidedConsult(id) {
  state.guidedManagement.consults = state.guidedManagement.consults.filter(c => c.id !== id);
  save();
  renderModules();
}

function resetGuidedSection(section) {
  if (section === 'general') {
    state.guidedManagement.general = {};
  } else if (section === 'drugs') {
    state.guidedManagement.drugs = {};
  } else if (section === 'procedures') {
    state.guidedManagement.procedures = {};
  } else if (section === 'monitoring') {
    state.guidedManagement.monitoring = {};
  } else if (section === 'consultDestination') {
    state.guidedManagement.consults = [];
    state.guidedManagement.destination = '';
  } else if (section === 'precautions') {
    state.guidedManagement.precautions = '';
  }
  save();
  renderModules();
}

function drugBank() {
  return Array.isArray(window.HCR_DRUGS) ? window.HCR_DRUGS : [];
}

function findDrugById(id, nodes = drugBank(), path = []) {
  for (const node of nodes) {
    const nextPath = node.group ? path.concat(node.group) : path;
    const foundDrug = (node.drugs || []).find(drug => drug.id === id);
    if (foundDrug) return { ...foundDrug, groupPath: nextPath };
    const foundChild = node.children ? findDrugById(id, node.children, nextPath) : null;
    if (foundChild) return foundChild;
  }
  return null;
}

function selectGuidedDrug(id) {
  const drug = findDrugById(id);
  if (!drug) return;
  (drug.groupPath || []).forEach((_, idx, path) => {
    const key = 'drug_' + path.slice(0, idx + 1).join('_').replace(/[^A-Za-z0-9]+/g, '_');
    state.expanded[key] = true;
  });
  state.guidedManagement.drugs[id] = state.guidedManagement.drugs[id] || {
    id: drug.id,
    name: drug.name,
    categoryPath: drug.groupPath || [],
    presentation: '',
    route: '',
    frequency: '',
    duration: '',
    indication: '',
    precautions: ''
  };
  save();
  renderModules();
}

function updateGuidedDrug(id, field, val) {
  const drug = findDrugById(id);
  state.guidedManagement.drugs[id] = state.guidedManagement.drugs[id] || {
    id,
    name: drug?.name || id,
    categoryPath: drug?.groupPath || []
  };
  state.guidedManagement.drugs[id][field] = val;
  save();
}

function setGuidedDrugSchema(id, presentation, route) {
  updateGuidedDrug(id, 'presentation', presentation);
  updateGuidedDrug(id, 'route', route);
  updateGuidedDrug(id, 'customDoseOpen', false);
  renderModules();
}

function setGuidedDrugPresentation(id, val) {
  updateGuidedDrug(id, 'presentation', val);
  updateGuidedDrug(id, 'customDoseOpen', false);
  renderModules();
}

function setGuidedDrugRoute(id, val) {
  updateGuidedDrug(id, 'route', val);
  renderModules();
}

function setGuidedDrugFrequency(id, val) {
  updateGuidedDrug(id, 'frequency', val);
  updateGuidedDrug(id, 'customFrequencyOpen', false);
  renderModules();
}

function setGuidedDrugDuration(id, val) {
  updateGuidedDrug(id, 'duration', val);
  updateGuidedDrug(id, 'customDurationOpen', false);
  renderModules();
}

function showGuidedDrugCustom(id, field) {
  const key = field === 'frequency' ? 'customFrequencyOpen'
    : field === 'duration' ? 'customDurationOpen'
    : 'customDoseOpen';
  updateGuidedDrug(id, key, true);
  renderModules();
}

function removeGuidedDrug(id) {
  delete state.guidedManagement.drugs[id];
  save();
  renderModules();
}

function findDrugBySearchValue(value, nodes = drugBank()) {
  const query = normalizeText(value);
  if (!query) return null;
  for (const node of nodes) {
    const foundDrug = (node.drugs || []).find(drug => {
      const names = [drug.name, drug.id, ...(drug.aliases || [])];
      return names.some(name => normalizeText(name) === query);
    });
    if (foundDrug) return foundDrug;
    const foundChild = node.children ? findDrugBySearchValue(value, node.children) : null;
    if (foundChild) return foundChild;
  }
  return null;
}

function collectDrugSearchOptions(nodes = drugBank(), path = [], out = []) {
  nodes.forEach(node => {
    const nextPath = node.group ? path.concat(node.group) : path;
    (node.drugs || []).forEach(drug => out.push({ ...drug, groupPath: nextPath }));
    if (node.children) collectDrugSearchOptions(node.children, nextPath, out);
  });
  return out;
}

function searchGuidedDrugs(query) {
  const q = normalizeText(query).trim();
  if (!q) return [];
  return collectDrugSearchOptions().filter(drug => {
    const names = [drug.name, ...(drug.aliases || [])];
    return names.some(name => normalizeText(name).startsWith(q));
  }).slice(0, 12);
}

function guidedDrugSuggestionsHTML(query) {
  const q = String(query || '').trim();
  if (!q) return '';
  const matches = searchGuidedDrugs(q);
  if (!matches.length) {
    return `<div class="m6-med-no-results">No hay medicamentos que comiencen con "${esc(q)}".</div>`;
  }
  return matches.map(drug =>
    `<button type="button" class="diagnosis-option m6-med-option" onclick="selectGuidedDrugFromSuggestion(${JSON.stringify(drug.id).replace(/</g, '\\u003C').replace(/"/g, '&quot;')})">
      <span>${esc(drug.name)}</span>
      <small>${esc((drug.groupPath || []).join(' / '))}</small>
    </button>`
  ).join('');
}

function refreshGuidedDrugSuggestions(value) {
  const el = document.getElementById('m6DrugSuggestions');
  if (el) el.innerHTML = guidedDrugSuggestionsHTML(value);
}

function selectGuidedDrugFromSuggestion(id) {
  selectGuidedDrug(id);
}

function selectGuidedDrugFromSearch(value) {
  const drug = findDrugBySearchValue(value) || searchGuidedDrugs(value)[0];
  if (!drug) return;
  selectGuidedDrug(drug.id);
}

function normalizeText(s) {
  return String(s || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function diagnosisBank() {
  return Array.isArray(window.HCR_DIAGNOSES) ? window.HCR_DIAGNOSES : [];
}

function diagnosisDisplay(key) {
  return state.diagnoses[key]?.name || state.fields[key] || '';
}

function diagnosisData(key) {
  if (state.diagnoses[key]) return { ...state.diagnoses[key] };
  const name = state.fields[key] || '';
  return name ? { id: null, name, category: 'Texto libre', manual: true } : null;
}

function searchDiagnoses(query) {
  const q = normalizeText(query).trim();
  if (!q) return [];
  return diagnosisBank()
    .filter(d => normalizeText([d.name].concat(d.synonyms || []).join(' ')).includes(q))
    .slice(0, 8);
}

function setDiagnosisSearch(key, val) {
  state.diagnosisSearch[key] = val;
  save();
}

function diagnosisSuggestionsHTML(key) {
  const query = state.diagnosisSearch[key] || '';
  const matches = searchDiagnoses(query);
  if (!query) return '';

  const options = matches.map(d =>
    `<button type="button" class="diagnosis-option" onclick="selectDiagnosis('${key}','${esc(d.id)}')">
      <span>${esc(d.name)}</span>
      <small>${esc(d.category)}</small>
    </button>`
  ).join('');

  return `${options}
    <button type="button" class="diagnosis-option manual" onclick="selectManualDiagnosis('${key}')">
      <span>Otro diagnóstico / escribir manualmente</span>
      <small>Texto libre</small>
    </button>`;
}

function refreshDiagnosisSuggestions(key) {
  const el = document.getElementById('suggestions_' + key);
  if (el) el.innerHTML = diagnosisSuggestionsHTML(key);
}

function selectDiagnosis(key, id) {
  const diagnosis = diagnosisBank().find(d => d.id === id);
  if (!diagnosis) return;

  state.diagnoses[key] = {
    id: diagnosis.id,
    name: diagnosis.name,
    category: diagnosis.category,
    manual: false
  };
  state.fields[key] = diagnosis.name;
  state.diagnosisSearch[key] = '';
  state.diagnosisTouched[key] = true;
  syncTierDescendants(key);
  save();
  renderModules();
}

function selectManualDiagnosis(key) {
  const name = state.diagnosisSearch[key] || state.fields[key] || '';
  state.diagnoses[key] = {
    id: null,
    name,
    category: 'Manual',
    manual: true
  };
  state.fields[key] = name;
  state.diagnosisSearch[key] = '';
  state.diagnosisTouched[key] = true;
  syncTierDescendants(key);
  save();
  renderModules();
}

function setManualDiagnosis(key, val) {
  state.diagnoses[key] = {
    id: null,
    name: val,
    category: 'Manual',
    manual: true
  };
  state.fields[key] = val;
  state.diagnosisTouched[key] = true;
  const selectedName = document.querySelector(`[data-diagnosis-name="${key}"]`);
  if (selectedName) selectedName.textContent = val;
  syncTierDescendants(key);
  save();
  renderPad();
}

function clearDiagnosis(key) {
  delete state.diagnoses[key];
  delete state.fields[key];
  state.diagnosisSearch[key] = '';
  state.diagnosisTouched[key] = true;
  syncTierDescendants(key);
  save();
  renderModules();
}

function inheritPreviousTier(phase) {
  const prev = previousPhase(phase);
  if (!prev) return;

  let changed = false;
  [1,2,3].forEach(i => {
    const from = `tier_${prev}_${i}`;
    const to = `tier_${phase}_${i}`;
    if (state.diagnosisTouched[to]) return;

    if (state.diagnoses[from]) {
      state.diagnoses[to] = { ...state.diagnoses[from] };
      state.fields[to] = state.diagnoses[from].name || state.fields[from] || '';
      changed = true;
    } else if (state.fields[from]) {
      state.fields[to] = state.fields[from];
      delete state.diagnoses[to];
      changed = true;
    } else if (state.diagnoses[to] || state.fields[to]) {
      delete state.diagnoses[to];
      delete state.fields[to];
      changed = true;
    }
  });

  if (changed) save();
}

function syncTierDescendants(changedKey) {
  const match = /^tier_m([1-4])_([1-3])$/.exec(changedKey);
  if (!match) return;

  const start = Number(match[1]);
  const slot = match[2];
  for (let phaseNumber = start + 1; phaseNumber <= 4; phaseNumber++) {
    const from = `tier_m${phaseNumber - 1}_${slot}`;
    const to = `tier_m${phaseNumber}_${slot}`;
    if (state.diagnosisTouched[to]) break;

    if (state.diagnoses[from]) {
      state.diagnoses[to] = { ...state.diagnoses[from] };
      state.fields[to] = state.diagnoses[from].name || state.fields[from] || '';
    } else if (state.fields[from]) {
      delete state.diagnoses[to];
      state.fields[to] = state.fields[from];
    } else {
      delete state.diagnoses[to];
      delete state.fields[to];
    }
  }
}

function previousPhase(phase) {
  const phases = ['m1', 'm2', 'm3', 'm4'];
  const idx = phases.indexOf(phase);
  return idx > 0 ? phases[idx - 1] : null;
}

function copyPreviousIllness(phase) {
  const prev = previousPhase(phase);
  if (!prev) return;

  const from = 'ill_' + prev;
  const to = 'ill_' + phase;
  const previousText = state.fields[from] || '';

  if (!previousText) {
    alert('No hay una enfermedad actual previa para cargar.');
    return;
  }

  if (state.fields[to] && !confirm('Ya existe una enfermedad actual escrita en este módulo. ¿Quieres reemplazarla por la versión anterior?')) {
    return;
  }

  state.fields[to] = previousText;
  save();
  renderModules();
}

function tierKeys(phase) {
  const keys = [];
  [1,2,3].forEach(i => keys.push(`tier_${phase}_${i}`));
  return keys;
}

function copyPreviousTier(phase) {
  const prev = previousPhase(phase);
  if (!prev) return;

  const fromKeys = tierKeys(prev);
  const toKeys = tierKeys(phase);
  const hasPrevious = fromKeys.some(key => state.fields[key] || state.diagnoses[key]);

  if (!hasPrevious) {
    alert('No hay hipótesis diagnósticas previas para cargar.');
    return;
  }

  if (toKeys.some(key => state.fields[key] || state.diagnoses[key]) && !confirm('Ya existen hipótesis diagnósticas escritas en este módulo. ¿Quieres reemplazarlas por la versión anterior?')) {
    return;
  }

  fromKeys.forEach((fromKey, idx) => {
    const toKey = toKeys[idx];
    if (state.diagnoses[fromKey]) {
      state.diagnoses[toKey] = { ...state.diagnoses[fromKey] };
      state.diagnosisTouched[toKey] = true;
    } else {
      delete state.diagnoses[toKey];
    }
    if (state.fields[fromKey]) {
      state.fields[toKey] = state.fields[fromKey];
    } else {
      delete state.fields[toKey];
    }
  });
  save();
  renderModules();
}

function currentIllness() {
  return state.fields.ill_m4 || state.fields.ill_m3 || state.fields.ill_m2 || state.fields.ill_m1 || '';
}

function currentSyndrome() {
  return state.fields.syndrome_m4 || state.fields.syndrome_m3 || state.fields.syndrome_m2 || '';
}

function currentTierPrefix() {
  if (['m1','m2','m3','m4'].includes(state.current)) return `tier_${state.current}`;
  const found = ['m4','m3','m2','m1'].find(phase =>
    [1,2,3].some(i => diagnosisDisplay(`tier_${phase}_${i}`))
  );
  return found ? `tier_${found}` : 'tier_m1';
}

function currentTierItems() {
  const labels = ['Diagnóstico principal', 'Diagnóstico secundario', 'Diagnóstico fatal'];
  const prefix = currentTierPrefix();
  return [1,2,3].map((i, idx) => ({
    label: labels[idx],
    diagnosis: diagnosisData(`${prefix}_${i}`)
  }));
}

function currentTierHTML() {
  return `<div class="pad-tier-box">
    ${currentTierItems().map(item => `
      <div class="pad-tier-item">
        <div class="pad-tier-label">${esc(item.label)}</div>
        <div class="pad-tier-name">${esc(item.diagnosis?.name || 'pendiente')}</div>
      </div>
    `).join('')}
  </div>`;
}

function renderPad() {
  document.getElementById('timeBadge').textContent =
    'Módulo ' + state.current.replace('m', '');
  document.getElementById('selectedBadge').textContent =
    selectedCount() + ' dato' + (selectedCount() === 1 ? '' : 's');

  const groups = {};
  Object.values(state.selected).forEach(f => {
    (groups[f.source] = groups[f.source] || []).push(f.text);
  });

  document.getElementById('padGroups').innerHTML = sourceOrder.map(s => {
    const a = groups[s] || [];
    return `<details ${a.length ? 'open' : ''}>
      <summary>${esc(s)} (${a.length})</summary>
      ${a.length
        ? '<ul>' + a.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>'
        : '<div class="empty">Sin datos seleccionados.</div>'}
    </details>`;
  }).join('');

  document.getElementById('padIllness').textContent = currentIllness() || 'Pendiente';
  document.getElementById('padSyndrome').textContent = currentSyndrome() || 'Pendiente';
  document.getElementById('padTier').innerHTML      = currentTierHTML();
}

function phaseData(phase) {
  const map = {
    m1: ['ill_m1','tier_m1'], m2: ['ill_m2','tier_m2'],
    m3: ['ill_m3','tier_m3'], m4: ['ill_m4','tier_m4']
  };
  const [ill, prefix] = map[phase] || ['',''];
  return {
    illness: state.fields[ill] || '',
    tiers:   [1,2,3].map(i => diagnosisDisplay(`${prefix}_${i}`))
  };
}

function studentEvalRows() {
  return [
    ['Triage e interrogatorio', phaseData('m1')],
    ['Tras Historial',          phaseData('m2')],
    ['Tras examen físico',      phaseData('m3')],
    ['Tras Paraclínicos',       phaseData('m4')]
  ].map(([title, d]) =>
    `<div class="eval-row">
      <div class="eval-label">${title}</div>
      <div class="eval-value">
        <b>Enfermedad actual:</b> ${esc(d.illness || 'Pendiente')}<br>
        <b>Tier 3:</b> ${esc(d.tiers.filter(Boolean).join(' · ') || 'Pendiente')}
      </div>
    </div>`
  ).join('');
}

function expertEvalRows() {
  return '<div class="placeholder">La evaluación experta se lee desde los datos del caso.</div>';
}

function findingsEval() {
  const groups = {};
  Object.values(state.selected).forEach(f => {
    (groups[f.source] = groups[f.source] || []).push(f.text);
  });
  return Object.entries(groups).map(([s, a]) =>
    `<div class="eval-row">
      <div class="eval-label">${esc(s)}</div>
      <div class="eval-value">${a.map(x => '• ' + esc(x)).join('<br>')}</div>
    </div>`
  ).join('') || '<div class="placeholder">Aún no hay hallazgos seleccionados.</div>';
}

function managementEvalRows() {
  const mode = managementModeLabel();
  return `<div class="eval-row">
    <div class="eval-label">Modo de manejo elegido</div>
    <div class="eval-value">${esc(mode)}</div>
  </div>`;
}

function exportPayload() {
  return {
    format:           'H-CR v3 performance',
    exportedAt:       new Date().toISOString(),
    caseId:           CASE_DATA.caseId,
    selectedFindings: Object.values(state.selected),
    fields:           state.fields,
    diagnoses:        state.diagnoses,
    expanded:         state.expanded,
    venn:             state.venn,
    managementMode:   state.managementMode,
    guidedManagement: state.guidedManagement,
    manualManagement: state.manualManagement,
    currentModule:    state.current
  };
}

function download(name, text, type) {
  const b = new Blob([text], { type });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(b);
  a.download = name;
  a.click();
  URL.revokeObjectURL(a.href);
}

function exportPerformance() {
  download(
    `HCR_v3_desempeno_${CASE_DATA.caseId}.json`,
    JSON.stringify(exportPayload(), null, 2),
    'application/json'
  );
}

function exportSummary() {
  const d = exportPayload();
  let out = 'H-CR v3 — DESEMPEÑO\n\nHALLAZGOS SELECCIONADOS\n';
  sourceOrder.forEach(s => {
    const a = d.selectedFindings.filter(f => f.source === s);
    out += `\n${s.toUpperCase()} (${a.length})\n` + a.map(f => '• ' + f.text).join('\n') + '\n';
  });
  out += '\nENFERMEDAD ACTUAL Y DIAGNÓSTICOS\n';
  Object.entries(d.fields).forEach(([k, v]) => { if (v) out += `${k}: ${v}\n`; });
  out += '\nPAUSA DIAGNÓSTICA\n';
  Object.entries(d.venn.placed).forEach(([id, p]) => {
    const f = d.selectedFindings.find(x => x.id === id);
    if (f) out += `• ${f.text} → ${p.zone} [${p.direction}]\n`;
  });
  download(`HCR_v3_desempeno_${CASE_DATA.caseId}.txt`, out, 'text/plain;charset=utf-8');
}

function resetVenn() {
  state.venn.placed = {};
  save();
  clearVennVisuals();
  renderVenn();
}

function resetCase() {
  if (confirm('¿Borrar todos los datos de este caso?')) {
    localStorage.removeItem(STORAGE);
    location.reload();
  }
}

function centerM5VennBoard() {
  const app = document.getElementById('app');
  if (!app || !app.classList.contains('m5-pad-collapsed')) return;
  const board = document.querySelector('.m5-card .venn-board');
  if (!board) return;
  requestAnimationFrame(() => {
    board.scrollLeft = Math.max(0, (board.scrollWidth - board.clientWidth) / 2);
    board.scrollTop = Math.max(0, (board.scrollHeight - board.clientHeight) / 2);
  });
}

function togglePad() {
  document.getElementById('app').classList.toggle('pad-collapsed');
  const btn = document.getElementById('togglePad');
  if (btn) {
    btn.textContent = document.getElementById('app').classList.contains('pad-collapsed')
      ? 'Mostrar Pad diagnóstico'
      : 'Minimizar Pad diagnóstico';
  }
  centerM5VennBoard();
}
