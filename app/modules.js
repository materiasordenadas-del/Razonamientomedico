function hcrModuleHelpKeyForTitle(title) {
  const text = String(title || '').toLowerCase();
  if (text.includes('enfermedad actual')) return 'enfermedad_actual';
  if (text.includes('motivo')) return 'motivo_consulta';
  if (text.includes('diagnóstico principal') || text.includes('diagnostico principal')) return 'diagnostico_principal';
  if (text.includes('diagnóstico secundario') || text.includes('diagnostico secundario')) return 'diagnostico_secundario';
  if (text.includes('fatal') || text.includes('no puedo perder') || text.includes('no se puede perder')) return 'diagnostico_no_perder';
  if (text.includes('antecedente') || text.includes('historial')) return 'antecedentes';
  if (text.includes('examen físico') || text.includes('examen fisico')) return 'examen_fisico';
  if (text.includes('paraclínico') || text.includes('paraclinico') || text.includes('estudios disponibles')) return 'paraclinicos';
  return '';
}

function hcrFieldHelpKey(key, title) {
  if (/^ill_m[1-4]$/.test(key)) return 'enfermedad_actual';
  return hcrModuleHelpKeyForTitle(title);
}

function hcrModuleTitle(title, helpKey) {
  if (typeof renderHcrHelpTitle === 'function') {
    return renderHcrHelpTitle(title, helpKey || hcrModuleHelpKeyForTitle(title));
  }
  return esc(title);
}

function hcrTermButtons(termIds, findingText, showEye) {
  if (!showEye) return '';
  if (typeof renderHcrFindingEyeButton === 'function') {
    return renderHcrFindingEyeButton(termIds || [], findingText || '');
  }
  if (typeof renderHcrClinicalTermButtonForIds !== 'function') return '';
  return renderHcrClinicalTermButtonForIds(termIds || []);
}

function hcrFindingText(text) {
  return esc(text);
}

function choice(id, source, text, termIds, showEye) {
  const sel = isSelected(id);
  const termButton = hcrTermButtons(termIds, text, showEye);
  return `<label class="selectable${sel ? ' selected' : ''}">
    <input class="finding-check" type="checkbox"
      data-id="${esc(id)}" data-source="${esc(source)}" data-text="${esc(text)}"
      ${sel ? 'checked' : ''}>
    <span class="fact-label">${hcrFindingText(text)}</span>
    ${termButton}
  </label>`;
}

function conversationBlock(item) {
  const sel = isSelected(item.id);
  const dlgId = 'dlg_' + item.id;
  const termButton = hcrTermButtons(item.termIds, item.text, false);
  return `<div class="dialogue">
    <p class="doctor">${esc(item.question)}</p>
    <details class="patient-details" id="${dlgId}"
      ${state.expanded[dlgId] ? 'open' : ''}
      ontoggle="markExpanded('${dlgId}',this.open)">
      <summary>
        <span class="patient-text">${hcrFindingText(item.text)}</span>
        ${termButton}
        <input class="patient-check finding-check" type="checkbox"
          data-id="${esc(item.id)}" data-source="${esc(item.source)}" data-text="${esc(item.text)}"
          ${sel ? 'checked' : ''}
          onclick="event.stopPropagation()">
      </summary>
      ${item.depth
        ? `<div class="deeper"><p>${esc(item.depth)}</p></div>`
        : ''}
    </details>
  </div>`;
}

function accordion(title, items, id, defaultOpen, extraContent = '') {
  const expandedKey = id || 'accordion_' + title;
  const hasStoredState = Object.prototype.hasOwnProperty.call(state.expanded, expandedKey);
  const isOpen = hasStoredState ? state.expanded[expandedKey] : !!defaultOpen;
  const defaultHelpKey = id && id.startsWith('m3_physical') ? 'examen_fisico'
    : id && id.startsWith('m4_paraclinicos') ? 'paraclinicos'
    : id && id.startsWith('m2_') ? 'antecedentes'
    : '';
  return `<details class="accordion" ${isOpen ? 'open' : ''}
    ontoggle="markExpanded('${esc(expandedKey)}',this.open)">
    <summary>${hcrModuleTitle(title, defaultHelpKey || undefined)}</summary>
    <div class="accordion-body">
      ${extraContent}
      ${renderFindingList(items)}
    </div>
  </details>`;
}

function expandablePatientItem(item) {
  const sel = isSelected(item.id);
  const detail = item.expandable;
  const detailId = 'exp_' + item.id;
  const detailSel = detail ? isSelected(detail.id) : false;
  const termButton = hcrTermButtons(item.termIds, item.text, true);
  const detailTermButton = detail ? hcrTermButtons(detail.termIds, detail.patient, true) : '';
  return `<details class="expandable-finding" ${state.expanded[detailId] ? 'open' : ''}
    ontoggle="markExpanded('${detailId}',this.open)">
    <summary>
      <span class="patient-text">${hcrFindingText(item.text)}</span>
      ${termButton}
      <input class="patient-check finding-check" type="checkbox"
        data-id="${esc(item.id)}" data-source="${esc(item.source)}" data-text="${esc(item.text)}"
        ${sel ? 'checked' : ''}
        onclick="event.stopPropagation()">
    </summary>
    <div class="deeper">
      <p class="doctor">Médico: ${esc(detail.doctor)}</p>
      <label class="selectable nested-selectable${detailSel ? ' selected' : ''}">
        <input class="finding-check" type="checkbox"
          data-id="${esc(detail.id)}" data-source="${esc(item.source)}" data-text="${esc(detail.patient)}"
          ${detailSel ? 'checked' : ''}>
        <span class="fact-label">Paciente: ${hcrFindingText(detail.patient)}</span>
        ${detailTermButton}
      </label>
    </div>
  </details>`;
}

function findingItem(item, showEye = true) {
  return item.expandable ? expandablePatientItem(item) : choice(item.id, item.source, item.text, item.termIds, showEye);
}

function renderFindingList(items) {
  return items.map(item => findingItem(item, true)).join('');
}

function renderAccordionGroup(sections, keyPrefix) {
  return (sections || []).map((section, idx) =>
    accordion(section.title || section.name, section.items || section.findings || [], `${keyPrefix}_${idx}`, false)
  ).join('');
}

function physicalExamImageItem(item, idx, sectionTitle) {
  const id = item.id || `physical_exam_image_${idx}`;
  const title = item.title || item.label || 'Imagen de examen físico';
  const image = item.image || item.src || '';
  const description = item.description || item.caption || '';
  const selectable = item.selectable === true;
  const selected = selectable && isSelected(id);
  const findingText = item.findingText || title;
  return `<article class="physical-exam-image-card diagnostic-image-card${selected ? ' selected' : ''}">
    <div class="diagnostic-image-head">
      ${selectable
        ? `<label class="diagnostic-image-select selectable${selected ? ' selected' : ''}">
            <input class="finding-check" type="checkbox"
              data-id="${esc(id)}" data-source="${esc(item.source || 'Examen físico')}" data-text="${esc(findingText)}"
              ${selected ? 'checked' : ''}>
            <span>${esc(title)}</span>
          </label>`
        : `<h3>${esc(title)}</h3>`}
    </div>
    <div class="diagnostic-image-media">
      ${image
        ? `<img class="diagnostic-image-img" src="${esc(image)}" alt="${esc(title)}" onerror="this.hidden=true;this.nextElementSibling.hidden=false">`
        : ''}
      <div class="diagnostic-image-empty" ${image ? 'hidden' : ''}>Sin imagen disponible para ${esc(sectionTitle || 'este sistema')}.</div>
    </div>
    ${description
      ? `<details class="diagnostic-image-description">
          <summary>Ver descripción</summary>
          <p>${esc(description)}</p>
        </details>`
      : ''}
  </article>`;
}

function renderPhysicalExamImages(section, idx) {
  const images = section.images || section.media || section.physicalImages || [];
  if (!Array.isArray(images) || !images.length) return '';
  const title = section.title || section.name || '';
  return `<div class="physical-exam-images">
    ${images.map((item, imageIdx) => physicalExamImageItem(item, `${idx}_${imageIdx}`, title)).join('')}
  </div>`;
}

function renderPhysicalExamSections(sections) {
  return (sections || []).map((section, idx) =>
    accordion(
      section.title || section.name,
      section.items || section.findings || [],
      `m3_physical_${idx}`,
      false,
      renderPhysicalExamImages(section, idx)
    )
  ).join('');
}

function labRow(item) {
  const txt = item.label + ': ' + item.value
    + (item.unit ? ' ' + item.unit : '')
    + (item.ref  ? ' (VR: ' + item.ref + ')' : '');
  const sel = isSelected(item.id);
  return `<tr class="${sel ? 'selected' : ''}">
    <td><input class="lab-check finding-check" type="checkbox"
      data-id="${esc(item.id)}" data-source="${esc(item.source)}" data-text="${esc(txt)}"
      ${sel ? 'checked' : ''}></td>
    <td>${esc(item.label)}</td>
    <td class="lab-eye-cell">${hcrTermButtons(item.termIds, txt, true)}</td>
    <td>${esc(item.value)}</td>
    <td>${esc(item.unit)}</td>
    <td><span class="lab-ref-text">${esc(item.ref)}</span></td>
  </tr>`;
}

function activeCaseModuleBundle() {
  const bundles = window.HCR_CASE_MODULES || {};
  return Object.values(bundles).find(bundle => bundle?.module4 === CASE_DATA.m4) || {};
}

function diagnosticImagesForModule(d) {
  const bundle = activeCaseModuleBundle();
  const items = d.diagnosticImages
    || d.imaging
    || bundle.diagnosticImages
    || bundle.module4DiagnosticImages
    || bundle.module4Media
    || [];
  return Array.isArray(items) ? items : [];
}

function diagnosticImageCategory(item) {
  const map = {
    ecg: 'Electrocardiograma',
    xray: 'Rayos X',
    ultrasound: 'Ecogramas',
    ct: 'TC',
    other: 'Otros'
  };
  return item.category || map[item.type] || 'Otros';
}

function diagnosticImageDescriptionAllowed() {
  const metadata = window.HCR_CASE_ACTIVE_METADATA || {};
  const level = metadata.level || metadata.difficultyLabel || '';
  const difficulty = Number(metadata.difficulty);
  if (Number.isFinite(difficulty) && difficulty > 0) return difficulty <= 3;
  return !/(nivel\s*)?(iv|v|4|5)\b/i.test(String(level));
}

function shouldShowDiagnosticTable(title, hasDiagnosticImages) {
  if (!hasDiagnosticImages) return true;
  const normalized = String(title || '').toLowerCase();
  return !(
    normalized.includes('electrocardiograma')
    || normalized.includes('electrocardiografía')
    || normalized.includes('electrocardiografia')
    || normalized.includes('informes seriados')
    || normalized.includes('imágenes')
    || normalized.includes('imagenes')
    || normalized.includes('evaluación cardiaca')
    || normalized.includes('evaluacion cardiaca')
  );
}

function diagnosticImageItem(item, idx) {
  const id = item.id || `diagnostic_image_${idx}`;
  const title = item.title || item.label || 'Estudio diagnóstico';
  const image = item.image || item.src || '';
  const description = item.description || item.report || item.caption || '';
  const selectable = item.selectable !== false;
  const selected = selectable && isSelected(id);
  const findingText = item.findingText || title;
  return `<article class="diagnostic-image-card${selected ? ' selected' : ''}">
    <div class="diagnostic-image-head">
      ${selectable
        ? `<label class="diagnostic-image-select selectable${selected ? ' selected' : ''}">
            <input class="finding-check" type="checkbox"
              data-id="${esc(id)}" data-source="${esc(item.source || 'Paraclínicos')}" data-text="${esc(findingText)}"
              ${selected ? 'checked' : ''}>
            <span>${esc(title)}</span>
          </label>`
        : `<h3>${esc(title)}</h3>`}
    </div>
    <div class="diagnostic-image-media">
      ${image
        ? `<img class="diagnostic-image-img" src="${esc(image)}" alt="${esc(title)}" onerror="this.hidden=true;this.nextElementSibling.hidden=false">`
        : ''}
      <div class="diagnostic-image-empty" ${image ? 'hidden' : ''}>Sin imagen disponible para este caso.</div>
    </div>
    ${description && diagnosticImageDescriptionAllowed()
      ? `<details class="diagnostic-image-description">
          <summary>Ver descripción</summary>
          <p>${esc(description)}</p>
        </details>`
      : ''}
  </article>`;
}

function renderDiagnosticImages(d) {
  const items = diagnosticImagesForModule(d);
  if (!items.length) return '';
  const order = ['Electrocardiograma', 'Rayos X', 'Ecogramas', 'TC', 'Otros'];
  const groups = {};
  items.forEach(item => {
    const category = diagnosticImageCategory(item);
    (groups[category] = groups[category] || []).push(item);
  });
  return `<div class="card diagnostic-images-section help-on-open">
    <h2>Imágenes diagnósticas</h2>
    <div class="diagnostic-images-grid">
      ${order.filter(category => (groups[category] || []).length).map(category => {
        return `<details class="diagnostic-image-category">
          <summary>${hcrModuleTitle(category, 'paraclinicos')}</summary>
          <div class="diagnostic-image-category-body">
            ${groups[category].map((item, idx) => diagnosticImageItem(item, idx)).join('')}
          </div>
        </details>`;
      }).join('')}
    </div>
  </div>`;
}

function field(key, title, placeholder, hint, short) {
  hint  = hint  ?? '';
  short = short ?? false;
  const val     = esc(state.fields[key] || '');
  const handler = `oninput="setField('${esc(key)}',this.value)"`;
  const input   = short
    ? `<input type="text" placeholder="${esc(placeholder)}" value="${val}" ${handler}>`
    : `<textarea placeholder="${esc(placeholder)}" ${handler}>${val}</textarea>`;
  return `<div class="field">
    <div class="field-title">${hcrModuleTitle(title, hcrFieldHelpKey(key, title))}</div>
    ${hint ? `<div class="field-instruction">${esc(hint)}</div>` : ''}
    ${input}
  </div>`;
}

function diagnosisPicker(key, label) {
  const selected = state.diagnoses[key];
  const query = state.diagnosisSearch[key] || '';
  const manual = selected?.manual;
  const display = diagnosisDisplay(key);
  return `<div class="diagnosis-picker">
    ${display
      ? `<div class="diagnosis-selected">
          <span>
            <b data-diagnosis-name="${esc(key)}">${esc(display)}</b>
            <small>${esc(selected?.category || (manual ? 'Manual' : 'Texto libre'))}</small>
          </span>
          <button type="button" class="diagnosis-x" onclick="clearDiagnosis('${key}')" aria-label="Quitar diagnóstico">×</button>
        </div>`
      : ''}
    ${manual
      ? `<input type="text" placeholder="${esc(label)}"
          value="${esc(display)}"
          oninput="setManualDiagnosis('${key}',this.value)">`
      : display
        ? ''
      : `<input type="text" placeholder="Buscar diagnóstico..."
          value="${esc(query)}"
          oninput="setDiagnosisSearch('${key}',this.value);refreshDiagnosisSuggestions('${key}')"
          onfocus="refreshDiagnosisSuggestions('${key}')">
        <div class="diagnosis-suggestions" id="suggestions_${key}">
          ${diagnosisSuggestionsHTML(key)}
        </div>`}
  </div>`;
}

function tier(phase) {
  inheritPreviousTier(phase);
  const labels = {
    1: 'Diagnóstico principal',
    2: 'Diagnóstico secundario',
    3: 'Diagnóstico fatal que no puedo perder'
  };
  return `<div class="tier-grid">
    ${[1,2,3].map(i => {
      const k = `tier_${phase}_${i}`;
      return `<div class="tier-card">
        <h4>${hcrModuleTitle(labels[i], hcrModuleHelpKeyForTitle(labels[i]))}</h4>
        ${diagnosisPicker(k, labels[i])}
      </div>`;
    }).join('')}
  </div>`;
}

function phaseClose(phase) {
  const canLoadPrevious = ['m2', 'm3', 'm4'].includes(phase);
  return `<div class="card">
    <h2>Síntesis de fase</h2>
    ${canLoadPrevious
      ? `<div class="footer-actions" style="justify-content:flex-start;border:0;margin:0 0 8px">
          <button class="action light" onclick="copyPreviousIllness('${phase}')">Cargar enfermedad actual</button>
        </div>`
      : ''}
    ${field('ill_' + phase, 'ENFERMEDAD ACTUAL', 'Sintetiza la enfermedad actual en una frase…')}
    <h3>Hipótesis diagnósticas (Tier 3)</h3>
    ${tier(phase)}
  </div>`;
}

function goModule(m) {
  if (['m6','m7','m8'].includes(m) && !state.diagnosticPauseCompleted) {
    state.current = 'm5';
    save();
    renderModules();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  if (['m6','m7','m8'].includes(m) && !state.managementMode) {
    state.current = 'managementSelect';
    save();
    renderModules();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  state.current = m;
  save();
  renderModules();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderTabs() {
  const labels = {
    m1:'1 Triage', m2:'2 Historial', m3:'3 Examen físico',
    m4:'4 Paraclínicos', m5:'5 Pausa diagnóstica',
    m6:'6 Manejo', m7:'7 Evaluación', m8:'8 Exportar'
  };
  document.getElementById('tabs').innerHTML = Object.entries(labels).map(([k, v]) =>
    `<button class="tab${state.current === k ? ' active' : ''}" onclick="goModule('${k}')">${v}</button>`
  ).join('');
}

function renderModules() {
  document.getElementById('modules').innerHTML = renderers[state.current]();
  const app = document.getElementById('app');
  app.classList.remove('pad-collapsed', 'pad-hidden', 'm5-pad-collapsed');
  if (state.current === 'm5') {
    app.classList.add('pad-collapsed', 'm5-pad-collapsed');
    renderVenn();
  } else if (state.current === 'managementSelect' || state.current === 'm6' || state.current === 'm7') {
    app.classList.add('pad-hidden');
  } else {
    app.classList.remove('pad-collapsed', 'pad-hidden', 'm5-pad-collapsed');
  }
  renderTabs();
  renderPad();
  const padToggle = document.getElementById('togglePad');
  if (padToggle) {
    padToggle.textContent = app.classList.contains('pad-collapsed')
      ? 'Mostrar Pad diagnóstico'
      : 'Minimizar Pad diagnóstico';
  }
  if (typeof verifyHcrIcons === 'function') verifyHcrIcons(document.getElementById('modules'));
}

function loadTierToVenn() {
  ['1','2','3'].forEach(i => {
    state.fields['venn_dx' + i] =
      diagnosisDisplay('tier_m4_' + i) ||
      diagnosisDisplay('tier_m3_' + i) ||
      diagnosisDisplay('tier_m2_' + i) ||
      diagnosisDisplay('tier_m1_' + i) || '';
  });
  save();
  renderModules();
}

function syncTierToVenn() {
  let changed = false;
  ['1','2','3'].forEach(i => {
    const next =
      diagnosisDisplay('tier_m4_' + i) ||
      diagnosisDisplay('tier_m3_' + i) ||
      diagnosisDisplay('tier_m2_' + i) ||
      diagnosisDisplay('tier_m1_' + i) || '';
    const key = 'venn_dx' + i;
    if (next && state.fields[key] !== next) {
      state.fields[key] = next;
      changed = true;
    }
  });
  if (changed) save();
}

let dragId = null;

function clearVennVisuals() {
  document.querySelectorAll('.zone').forEach(z => {
    z.classList.remove('drop-over');
    z.querySelectorAll('.placed').forEach(el => el.remove());
  });
  document.querySelectorAll('[data-return-source]').forEach(g => {
    g.classList.remove('drop-over');
  });
}

function renderVennLogGroups(places) {
  const zoneOrder = [
    'Solo Dx1',
    'Solo Dx2',
    'Solo Dx3',
    'Dx1 + Dx2',
    'Dx1 + Dx3',
    'Dx2 + Dx3',
    'Los tres',
    'Fuera / distractor'
  ];
  const zoneLabels = { 'Los tres': 'Dx1 + Dx2 + Dx3' };
  return zoneOrder.map(zone => {
    const rows = Object.entries(places)
      .filter(([id, p]) => p.zone === zone && state.selected[id])
      .map(([id, p]) => `<tr class="venn-log-finding"><td colspan="3">${esc(state.selected[id].text)} <small>[${esc(p.direction)}]</small></td></tr>`)
      .join('');
    return rows
      ? `<tr class="venn-log-heading"><td colspan="3">${esc(zoneLabels[zone] || zone)}</td></tr>${rows}`
      : '';
  }).join('') || '<tr><td colspan="3" class="subtle">Aún no has colocado hallazgos.</td></tr>';
}

function renderVenn() {
  const source = document.getElementById('findingSource');
  if (!source) return;
  clearVennVisuals();

  state.venn = state.venn || { placed: {} };
  state.venn.placed = state.venn.placed || {};
  Object.keys(state.venn.placed).forEach(id => {
    if (!state.selected[id]) delete state.venn.placed[id];
  });

  const by = {};
  Object.values(state.selected).forEach(f => {
    if (!state.venn.placed[f.id]) (by[f.source] = by[f.source] || []).push(f);
  });

  source.innerHTML = '<h3 style="margin:0 0 6px">Findings</h3>'
    + '<p class="subtle">Agrupa por módulo. Al colocar en el Venn desaparecen de aquí.</p>'
    + sourceOrder.map(s =>
        `<div class="finding-group" data-return-source="${esc(s)}">
          <div class="finding-group-title">${esc(s)}</div>
          ${(by[s] || []).map(f =>
            `<span class="finding-chip" draggable="true" data-id="${f.id}"
              title="Arrastrar">${esc(f.text)}</span>`
          ).join('') || '<span class="subtle">Sin hallazgos disponibles.</span>'}
        </div>`
      ).join('');

  document.querySelectorAll('.finding-chip').forEach(el =>
    el.addEventListener('dragstart', e => {
      dragId = el.dataset.id;
      e.dataTransfer.setData('text/plain', dragId);
    })
  );

  document.querySelectorAll('.zone').forEach(z => {
    z.addEventListener('dragover',  e => { e.preventDefault(); z.classList.add('drop-over'); });
    z.addEventListener('dragleave', ()  => z.classList.remove('drop-over'));
    z.addEventListener('drop', e => {
      e.preventDefault();
      z.classList.remove('drop-over');
      if (!dragId) return;
      const dir = document.getElementById('direction')?.value || '0';
      state.venn.placed[dragId] = { zone: z.dataset.zone, direction: dir };
      save(); dragId = null; renderVenn();
    });
  });

  document.querySelectorAll('[data-return-source]').forEach(g => {
    g.addEventListener('dragover',  e => { e.preventDefault(); g.classList.add('drop-over'); });
    g.addEventListener('dragleave', ()  => g.classList.remove('drop-over'));
    g.addEventListener('drop', e => {
      e.preventDefault();
      g.classList.remove('drop-over');
      if (dragId && state.venn.placed[dragId]) {
        delete state.venn.placed[dragId];
        save();
        clearVennVisuals();
        dragId = null;
        renderVenn();
      }
    });
  });

  const places  = state.venn.placed;
  const zoneMap = {};
  Object.entries(places).forEach(([id, p]) =>
    (zoneMap[p.zone] = zoneMap[p.zone] || []).push([id, p])
  );
  document.querySelectorAll('.zone').forEach(z => {
    (zoneMap[z.dataset.zone] || []).forEach(([id, p]) => {
      const f = state.selected[id];
      if (!f) return;
      const el = document.createElement('div');
      el.className  = 'placed';
      el.draggable  = true;
      el.dataset.id = id;
      el.innerHTML  = `${esc(f.text)} <small>[${esc(p.direction)}]</small>`;
      el.addEventListener('dragstart', e => {
        dragId = id;
        e.dataTransfer.setData('text/plain', id);
      });
      z.appendChild(el);
    });
  });

  const log = document.getElementById('vennLog');
  if (log) {
    log.innerHTML = Object.entries(places).map(([id, p]) => {
      const f = state.selected[id];
      return f
        ? `<tr><td>${esc(f.text)}</td><td>${esc(p.zone)}</td><td>${esc(p.direction)}</td></tr>`
        : '';
    }).join('') || '<tr><td colspan="3" class="subtle">Aún no has colocado hallazgos.</td></tr>';
  }
  if (log) log.innerHTML = renderVennLogGroups(places);
}

function renderEvaluationStudent() {
  const el = document.getElementById('studentEval');
  if (el) el.innerHTML = studentEvalRows();
  const fs = document.getElementById('studentFindingsEval');
  if (fs) fs.innerHTML = findingsEval();
}

function renderExpertFindings() {
  const data = state.expert?.findings || {};
  return Object.entries(data).map(([module, items]) =>
    `<div class="eval-row">
      <div class="eval-label">${esc(module)}</div>
      <div class="eval-value">
        ${(items || []).map(i =>
          `<b>${esc(i.finding || '')}</b>${i.reason ? ': ' + esc(i.reason) : ''}`
        ).join('<br>')}
      </div>
    </div>`
  ).join('') || '<div class="placeholder">Sin hallazgos expertos importados.</div>';
}

function renderM1() {
  const d = CASE_DATA.m1;
  return `<section class="module active">
    <div class="module-intro">
      <h1>Módulo 1 — Triage e interrogatorio</h1>
      <p>Selecciona los datos que cambian tu representación del problema.</p>
    </div>
    <div class="m1-grid">
      <div class="triage-panel">
        <div class="card">
          <div class="section-title">${hcrModuleTitle('Triage', 'motivo_consulta')}</div>
          <div class="patient-identity">
            <b>${esc(CASE_DATA.patient.name)}</b> · ${esc(CASE_DATA.patient.age)} · ${esc(CASE_DATA.patient.sex)}<br>
            <span class="patient-reason-line" style="color:var(--muted)">Motivo de consulta: ${esc(CASE_DATA.patient.reason)}</span>
          </div>
          ${d.triage.map(f => findingItem(f, false)).join('')}
        </div>
      </div>
      <div class="conversation-panel">
        <div class="card">
          <div class="section-title">${hcrModuleTitle('Interrogatorio')}</div>
          ${d.interrogatorio.map(item => conversationBlock(item)).join('')}
        </div>
        ${phaseClose('m1')}
      </div>
    </div>
    <div class="footer-actions">
      <button class="action" onclick="goModule('m2')">Continuar a historial →</button>
    </div>
  </section>`;
}

function renderM2() {
  const d = CASE_DATA.m2;
  return `<section class="module active">
    <div class="module-intro">
      <h1>Módulo 2 — Historial y examen funcional subjetivo</h1>
      <p>Selecciona los antecedentes y síntomas funcionales relevantes.</p>
    </div>
    <div class="card m2-help-on-open">
      <h2>Historial</h2>
      ${renderAccordionGroup(d.historial, 'm2_historial')}
    </div>
    <div class="card m2-help-on-open">
      <h2>Examen funcional subjetivo</h2>
      ${renderAccordionGroup(d.examenFuncional, 'm2_examen_funcional')}
    </div>
    ${phaseClose('m2')}
    <div class="footer-actions">
      <button class="action secondary" onclick="goModule('m1')">← Volver</button>
      <button class="action" onclick="goModule('m3')">Continuar a examen físico →</button>
    </div>
  </section>`;
}

function renderM3() {
  const d = CASE_DATA.m3;
  return `<section class="module active">
    <div class="module-intro">
      <h1>Módulo 3 — Examen físico</h1>
      <p>Selecciona los hallazgos que cambian tu diagnóstico diferencial.</p>
    </div>
    <div class="card help-on-open">
      <h2>Examen físico por sistemas</h2>
      ${renderPhysicalExamSections(d.physicalExam || d.systems || [])}
    </div>
    ${phaseClose('m3')}
    <div class="footer-actions">
      <button class="action secondary" onclick="goModule('m2')">← Volver</button>
      <button class="action" onclick="goModule('m4')">Continuar a paraclínicos →</button>
    </div>
  </section>`;
}

function renderM4() {
  const d = CASE_DATA.m4;
  const diagnosticImages = diagnosticImagesForModule(d);
  const visibleTables = (d.tables || []).filter(t => shouldShowDiagnosticTable(t.title, diagnosticImages.length > 0));
  const tableHTML = (title, rows, idx) => {
    const expandedKey = 'm4_paraclinicos_' + idx;
    const hasStoredState = Object.prototype.hasOwnProperty.call(state.expanded, expandedKey);
    const isOpen = hasStoredState ? state.expanded[expandedKey] : false;
    return `<details class="accordion" ${isOpen ? 'open' : ''}
      ontoggle="markExpanded('${expandedKey}',this.open)">
      <summary>${hcrModuleTitle(title, 'paraclinicos')}</summary>
      <div class="accordion-body">
        <table class="lab-table">
          <thead><tr><th></th><th>Prueba</th><th></th><th>Valor</th><th>Unidad</th><th>Referencia</th></tr></thead>
          <tbody>${rows.map(r => labRow(r)).join('')}</tbody>
        </table>
      </div>
    </details>`;
  };
  return `<section class="module active">
    <div class="module-intro">
      <h1>Módulo 4 — Paraclínicos</h1>
      <p>Selecciona los resultados que cambian tu representación del problema o el diagnóstico diferencial.</p>
    </div>
    <div class="card help-on-open">
      <h2>Estudios disponibles</h2>
      ${visibleTables.map((t, idx) => tableHTML(t.title, t.rows, idx)).join('')}
    </div>
    ${renderDiagnosticImages(d)}
    ${phaseClose('m4')}
    <div class="footer-actions">
      <button class="action secondary" onclick="goModule('m3')">← Volver</button>
      <button class="action" onclick="goModule('m5')">Continuar a pausa diagnóstica →</button>
    </div>
  </section>`;
}

function renderM5() {
  syncTierToVenn();
  return `<section class="module active">
    <div class="module-intro">
      <h1>Módulo 5 — Pausa diagnóstica</h1>
      <p>Arrastra cada hallazgo hacia la zona que mejor represente a qué diagnóstico favorece. El Pad se minimiza automáticamente para darte espacio.</p>
    </div>
    <div class="card m5-card">
      <div class="guidance"><b>Instrucción:</b> Arrastra hallazgos del panel izquierdo al diagrama. Para devolverlos, arrástralos de vuelta al panel izquierdo.</div>
      <div class="venn-top">
        ${field('venn_dx1','Dx1','Diagnóstico 1…','',true)}
        ${field('venn_dx2','Dx2','Diagnóstico 2…','',true)}
        ${field('venn_dx3','Dx3','Diagnóstico 3…','',true)}
      </div>
      <div class="footer-actions" style="justify-content:flex-start;border:0;margin:4px 0 10px">
        <button class="action light" onclick="loadTierToVenn()">Cargar Tier 3 final</button>
        <label class="subtle">Dirección diagnóstica
          <select id="direction">
            <option value="++">++ Apoya fuertemente</option>
            <option value="+">+ Apoya</option>
            <option value="0">0 Compartido / poco discriminador</option>
            <option value="−">− Reduce</option>
            <option value="−−">−− Reduce mucho</option>
          </select>
        </label>
      </div>
      <div class="venn-layout">
        <div class="card finding-source" id="findingSource"></div>
        <div class="card" style="overflow:auto">
          <div class="venn-board" id="vennBoard">
            <button class="action light venn-reset-button" onclick="resetVenn()">Reiniciar diagrama</button>
            <div class="circle dx1"></div>
            <div class="circle dx2"></div>
            <div class="circle dx3"></div>
            <div class="zone z1"   data-zone="Solo Dx1"><div class="zone-title">Solo Dx1</div></div>
            <div class="zone z2"   data-zone="Solo Dx2"><div class="zone-title">Solo Dx2</div></div>
            <div class="zone z3"   data-zone="Solo Dx3"><div class="zone-title">Solo Dx3</div></div>
            <div class="zone z12"  data-zone="Dx1 + Dx2"><div class="zone-title">Dx1 + Dx2</div></div>
            <div class="zone z13"  data-zone="Dx1 + Dx3"><div class="zone-title">Dx1 + Dx3</div></div>
            <div class="zone z23"  data-zone="Dx2 + Dx3"><div class="zone-title">Dx2 + Dx3</div></div>
            <div class="zone z123" data-zone="Los tres"><div class="zone-title">Los tres</div></div>
          </div>
        </div>
      </div>
      <div class="card">
        <h2>Registro de colocaciones</h2>
        <table class="lab-table venn-log-table">
          <thead><tr><th>Hallazgo</th><th>Zona</th><th>Dirección</th></tr></thead>
          <tbody id="vennLog"></tbody>
        </table>
      </div>
    </div>
    <div class="footer-actions">
      <button class="action secondary" onclick="goModule('m4')">← Volver</button>
      <button class="action" onclick="completeDiagnosticPause()">Completar pausa diagnóstica</button>
    </div>
  </section>`;
}

const manualManagementFields = [
  { key: 'initialIntervention', title: 'Intervención inicial', instruction: 'Describa las primeras acciones para estabilizar al paciente, incluyendo soporte, prioridades inmediatas y parámetros a vigilar.' },
  { key: 'stabilization', title: 'Estabilización', instruction: 'Organice las medidas para mantener perfusión, ventilación, seguridad y vigilancia durante las primeras horas.' },
  { key: 'etiologicTreatment', title: 'Tratamiento etiológico', instruction: 'Explique el tratamiento dirigido a la causa más probable, con dosis, vía, frecuencia y condiciones de ajuste si aplica.' },
  { key: 'activeProblems', title: 'Tratamiento de problemas activos adicionales', instruction: 'Incluya problemas concomitantes que cambian conducta y cómo los trataría o vigilaría.' },
  { key: 'conductChangingTests', title: 'Pruebas que aún cambian conducta', instruction: 'Indique qué pruebas faltan, qué pregunta responden y cómo cambiarían el manejo.' },
  { key: 'monitoring', title: 'Monitorización', instruction: 'Defina parámetros, frecuencia de control y criterios de alarma o respuesta.' },
  { key: 'consults', title: 'Interconsultas', instruction: 'Especifique servicio, motivo, prioridad y qué decisión espera de la interconsulta.' },
  { key: 'precautions', title: 'Precauciones y conductas a evitar', instruction: 'Registre riesgos de iatrogenia, contraindicaciones, interacciones, dosis inseguras o procedimientos a diferir.' },
  { key: 'timeDestination', title: 'Tiempo y destino', instruction: 'Defina momento de inicio de las medidas, lugar de manejo y criterios para cambiar de destino.' }
];

const guidedGeneralOptions = [
  ['oxygen', 'Oxígeno', true],
  ['nasal_cannula', 'Cánula nasal'],
  ['simple_mask', 'Mascarilla simple'],
  ['reservoir_mask', 'Mascarilla con reservorio'],
  ['noninvasive_ventilation', 'Ventilación no invasiva'],
  ['intubation', 'Intubación orotraqueal'],
  ['cardiac_monitoring', 'Monitorización cardíaca'],
  ['two_iv_lines', 'Dos accesos venosos'],
  ['strict_diuresis', 'Control estricto de diuresis'],
  ['fluid_balance', 'Balance hídrico'],
  ['head_elevated', 'Cabecera elevada'],
  ['fluid_restriction', 'Restricción hídrica'],
  ['sodium_restriction', 'Restricción de sodio'],
  ['glucose_checks', 'Control seriado de glucemia'],
  ['rest', 'Reposo'],
  ['pain_control', 'Control del dolor']
];

const guidedProcedureOptions = [
  ['urinary_catheter', 'Catéter vesical'],
  ['arterial_blood_gas', 'Gasometría arterial'],
  ['arterial_line', 'Vía arterial'],
  ['central_line', 'Vía central'],
  ['cardioversion', 'Cardioversión eléctrica'],
  ['transcutaneous_pacing', 'Marcapasos transcutáneo'],
  ['cardiac_catheterization', 'Cateterismo cardíaco'],
  ['thoracentesis', 'Toracocentesis'],
  ['paracentesis', 'Paracentesis'],
  ['blood_cultures', 'Hemocultivos'],
  ['isolation', 'Aislamiento']
];

const guidedMonitoringOptions = [
  ['serial_vitals', 'Signos vitales seriados'],
  ['telemetry', 'Telemetría'],
  ['continuous_oximetry', 'Oximetría continua'],
  ['fluid_balance', 'Balance hídrico'],
  ['hourly_diuresis', 'Diuresis horaria'],
  ['serial_ecg', 'ECG seriado'],
  ['serial_troponins', 'Troponinas seriadas'],
  ['capillary_glucose', 'Glucemia capilar'],
  ['renal_function', 'Función renal'],
  ['electrolytes', 'Electrolitos'],
  ['arterial_gases', 'Gases arteriales'],
  ['neurologic_status', 'Estado neurológico']
];

const destinationOptions = [
  'Observación',
  'Sala general',
  'Unidad de cuidados intermedios',
  'Unidad de cuidados intensivos',
  'Hemodinamia',
  'Quirófano',
  'Traslado a centro de mayor complejidad',
  'Manejo ambulatorio'
];

const guidedConsultOptions = [
  ['internal_medicine', 'Medicina interna'],
  ['cardiology', 'Cardiología'],
  ['critical_care', 'Cuidados intensivos'],
  ['infectious_diseases', 'Infectología'],
  ['nephrology', 'Nefrología'],
  ['pulmonology', 'Neumología'],
  ['general_surgery', 'Cirugía general']
];

const oxygenFlowOptions = ['1-2 L/min', '3-5 L/min', '6-10 L/min', '10-15 L/min', 'Configuración según dispositivo'];
const oxygenTargetOptions = ['SatO₂ 88-92%', 'SatO₂ 92-96%', 'SatO₂ ≥ 94%', 'Objetivo individualizado'];
const oxygenIndicationOptions = ['Hipoxemia', 'Disnea con trabajo respiratorio', 'Soporte durante estabilización', 'Previo a traslado o procedimiento'];

function renderManagementSelection() {
  if (!state.diagnosticPauseCompleted) return renderBlockedManagement();
  if (state.managementMode) return renderM6();
  return `<section class="module active management-select">
    <div class="management-instructions">
      <p>Seleccione únicamente una modalidad de manejo.</p>
      <p>La modalidad elegida quedará bloqueada para este caso.</p>
      <p>No podrá cambiar posteriormente entre manejo con asistencia y manejo sin asistencia.</p>
      <p>Esta elección no afecta la calificación por sí misma.</p>
      <p>Cada modalidad evalúa competencias diferentes.</p>
    </div>
    <div class="management-choice-grid">
      <button class="management-choice manual" onclick="selectManagementMode('manual')">
        <h2>SIN ASISTENCIA</h2>
        <p>Esta modalidad evalúa su capacidad para construir el manejo clínico completamente desde cero.</p>
        <p>Usted redactará libremente todas las órdenes, intervenciones, dosis, monitorización, interconsultas y destino.</p>
        <p>No recibirá organización previa del tratamiento.</p>
        <h3>Competencias evaluadas:</h3>
        <ul><li>Organización clínica.</li><li>Recuperación libre.</li><li>Precisión terapéutica.</li><li>Seguridad.</li></ul>
      </button>
      <button class="management-choice guided" onclick="selectManagementMode('guided')">
        <h2>CON ASISTENCIA</h2>
        <p>Esta modalidad organiza el manejo mediante categorías clínicas.</p>
        <p>No revela el tratamiento correcto.</p>
        <p>Solo facilita la construcción técnica de las órdenes.</p>
        <h3>Competencias evaluadas:</h3>
        <ul><li>Selección adecuada.</li><li>Dosis.</li><li>Vía.</li><li>Frecuencia.</li><li>Secuencia.</li><li>Contraindicaciones.</li><li>Monitorización.</li><li>Prevención de iatrogenia.</li></ul>
      </button>
    </div>
  </section>`;
}

function renderBlockedManagement() {
  return `<section class="module active">
    <div class="card">
      <h2>Primero completa la pausa diagnóstica</h2>
      <p class="subtle">Para continuar al manejo debes completar el Módulo 5.</p>
      <button class="action" onclick="goModule('m5')">Ir a Módulo 5</button>
    </div>
  </section>`;
}

function renderM6DxCard() {
  const items = currentTierItems();
  return `<div class="m6-dx-card">
    ${items.map((item, idx) => `<div class="m6-dx-item">
      <span>Dx${idx + 1}</span>
      <strong>${esc(item.diagnosis?.name || 'Pendiente')}</strong>
    </div>`).join('')}
  </div>`;
}

function renderManualManagement() {
  return `<div class="m6-library">
    <h2>Biblioteca de manejo</h2>
    <p class="subtle">Redacta el manejo por secciones. La columna izquierda resume lo escrito.</p>
    ${manualManagementFields.map(({ key, title, instruction }) => `<div class="manual-section-card">
      <div class="field-title">${esc(title)}</div>
      <p class="subtle">${esc(instruction)}</p>
      <textarea placeholder="Escribe aquí..." oninput="setManualManagementField('${key}',this.value)">${esc(state.manualManagement[key] || '')}</textarea>
    </div>`).join('')}
  </div>`;
}

function renderGuidedOption(id, label, checked, onChange) {
  return `<label class="guided-option ${checked ? 'selected' : ''}">
    <input type="checkbox" ${checked ? 'checked' : ''} onchange="${onChange}">
    <span>${esc(label)}</span>
  </label>`;
}

function renderGuidedGeneral() {
  const gm = state.guidedManagement.general;
  return `<details class="guided-section" open>
    <summary>Manejo general</summary>
    <div class="guided-options">
      ${guidedGeneralOptions.map(([id, label]) => renderGuidedOption(id, label, !!gm[id], `setGuidedGeneral('${id}',this.checked)`)).join('')}
    </div>
  </details>`;
}

function renderDrugTree(nodes = drugBank(), level = 0, path = []) {
  return nodes.map(node => {
    const hasChildren = (node.children || []).length > 0;
    const hasDrugs = (node.drugs || []).length > 0;
    const isLeafGroup = !hasChildren && hasDrugs;
    const nextPath = path.concat(node.group);
    const expandedKey = 'drug_' + nextPath.join('_').replace(/[^A-Za-z0-9]+/g, '_');
    if (isLeafGroup && level >= 3) {
      return `<div class="drug-leaf-group drug-level-${Math.min(level, 3)}">
        <div class="drug-leaf-title">${esc(node.group)}</div>
        <div class="drug-chip-list">
          ${node.drugs.map(drug => renderDrugChip(drug, nextPath)).join('')}
        </div>
      </div>`;
    }
    return `<details class="drug-node drug-level-${Math.min(level, 3)}" ${state.expanded[expandedKey] ? 'open' : ''}
      ontoggle="markExpanded('${expandedKey}',this.open)">
      <summary>
        <span>${esc(node.group)}</span>
        <span class="drug-arrow">⌄</span>
      </summary>
      <div class="drug-node-body">
        ${hasChildren ? renderDrugTree(node.children, level + 1, nextPath) : ''}
        ${isLeafGroup ? `<div class="drug-chip-list">
          ${node.drugs.map(drug => renderDrugChip(drug, nextPath)).join('')}
        </div>` : ''}
      </div>
    </details>`;
  }).join('');
}

function renderDrugForm(drug) {
  const selected = state.guidedManagement.drugs[drug.id] || {};
  const doses = drug.doses || drug.presentations || [];
  const durations = drug.durations || (drug.duration ? ['Otra duración'] : []);
  const hasStructuredForm = doses.length || (drug.routes || []).length || (drug.frequencies || []).length || durations.length;
  if (!hasStructuredForm) {
    return `<div class="drug-form basic-drug-order">
      <div class="drug-form-header">
        <div>
          <h4>${esc(drug.name)}</h4>
          <p class="subtle">Orden seleccionada básica. El formulario estructurado aún no está definido para este fármaco.</p>
        </div>
        <button type="button" class="diagnosis-x" onclick="removeGuidedDrug('${drug.id}')" aria-label="Quitar fármaco">×</button>
      </div>
    </div>`;
  }
  return `<div class="drug-form clinical-form-card">
    <div class="drug-form-header">
      <h4>${esc(drug.name).toUpperCase()}</h4>
      <button type="button" class="diagnosis-x" onclick="removeGuidedDrug('${drug.id}')" aria-label="Quitar fármaco">×</button>
    </div>
    <label>Presentación / dosis
      <select onchange="updateGuidedDrug('${drug.id}','presentation',this.value)">
        <option value="">Seleccionar</option>
        ${doses.map(v => `<option ${selected.presentation === v ? 'selected' : ''}>${esc(v)}</option>`).join('')}
      </select>
    </label>
    <label>Vía
      <select onchange="updateGuidedDrug('${drug.id}','route',this.value)">
        <option value="">Seleccionar</option>
        ${(drug.routes || []).map(v => `<option ${selected.route === v ? 'selected' : ''}>${esc(v)}</option>`).join('')}
      </select>
    </label>
    <label>Frecuencia
      <select onchange="updateGuidedDrug('${drug.id}','frequency',this.value)">
        <option value="">Seleccionar</option>
        ${(drug.frequencies || []).map(v => `<option ${selected.frequency === v ? 'selected' : ''}>${esc(v)}</option>`).join('')}
      </select>
    </label>
    <input placeholder="Duración prevista" value="${esc(selected.duration || '')}" oninput="updateGuidedDrug('${drug.id}','duration',this.value)">
    <textarea placeholder="Indicación clínica" oninput="updateGuidedDrug('${drug.id}','indication',this.value)">${esc(selected.indication || '')}</textarea>
    <textarea placeholder="Condición para ajustar, suspender o evitar" oninput="updateGuidedDrug('${drug.id}','precautions',this.value)">${esc(selected.precautions || '')}</textarea>
  </div>`;
}

function jsArg(value) {
  return JSON.stringify(String(value || '')).replace(/</g, '\\u003C').replace(/"/g, '&quot;');
}

function allDrugOptions(nodes = drugBank(), path = [], out = []) {
  nodes.forEach(node => {
    const nextPath = node.group ? path.concat(node.group) : path;
    (node.drugs || []).forEach(drug => out.push({ ...drug, groupPath: nextPath }));
    if (node.children) allDrugOptions(node.children, nextPath, out);
  });
  return out;
}

function isCustomDrugOption(value) {
  const text = normalizeText(value);
  return text.includes('otra') || text.includes('otro') || text.includes('definir') || text.includes('personalizar');
}

function renderDrugSearch() {
  return `<div class="m6-med-search">
    <div class="m6-med-search-field">
      <label class="m6-med-search-box">
        <span aria-hidden="true">&#128269;</span>
        <input id="m6DrugSearch"
          placeholder="Buscar y añadir medicamento..."
          autocomplete="off"
          oninput="refreshGuidedDrugSuggestions(this.value)"
          onfocus="refreshGuidedDrugSuggestions(this.value)"
          onkeydown="if(event.key==='Enter')selectGuidedDrugFromSearch(this.value)">
      </label>
      <div class="diagnosis-suggestions m6-med-suggestions" id="m6DrugSuggestions"></div>
    </div>
    <button type="button" class="m6-med-add" onclick="selectGuidedDrugFromSearch(document.getElementById('m6DrugSearch')?.value)">Añadir</button>
  </div>`;
}

function drugQuickSchemas(drug) {
  const direct = drug.esquemasRapidos || drug.quickSchemes || drug.schemes || [];
  if (direct.length) {
    return direct.map(item => ({
      presentation: item.dosis || item.presentation || '',
      route: item.via || item.route || '',
      label: item.etiqueta || item.label || [item.dosis || item.presentation, item.via || item.route].filter(Boolean).join(' ')
    }));
  }
  const presentations = (drug.doses || drug.presentations || []).filter(v => !isCustomDrugOption(v));
  const routes = (drug.routes || []).filter(v => !isCustomDrugOption(v));
  if (presentations.length && routes.length) {
    return presentations.flatMap(presentation => routes.map(route => ({
      presentation,
      route,
      label: `${presentation} ${route}`
    }))).slice(0, 8);
  }
  return presentations.map(presentation => ({ presentation, route: '', label: presentation })).slice(0, 8);
}

function renderDrugInlineOptions(drug) {
  const selected = state.guidedManagement.drugs[drug.id] || {};
  const doses = (drug.doses || drug.presentations || []).filter(v => !isCustomDrugOption(v));
  const routes = (drug.routes || []).filter(v => !isCustomDrugOption(v));
  const frequencies = (drug.frequencies || []).filter(v => !isCustomDrugOption(v));
  const rawDurations = drug.durations || (drug.duration ? ['Otra duración'] : []);
  const durations = rawDurations.filter(v => !isCustomDrugOption(v));
  const hasDurationOptions = rawDurations.length > 0;
  return `<div class="m6-drug-inline">
    <div class="m6-drug-row m6-drug-dose-route-row">
      <div class="m6-drug-option-group">
        ${doses.map(value => `<button type="button" class="m6-drug-pill ${selected.presentation === value ? 'active' : ''}"
          onclick="setGuidedDrugPresentation(${jsArg(drug.id)},${jsArg(value)})">${esc(value)}</button>`).join('')}
      </div>
      <div class="m6-drug-option-group">
        ${routes.map(value => `<button type="button" class="m6-drug-pill ${selected.route === value ? 'active' : ''}"
          onclick="setGuidedDrugRoute(${jsArg(drug.id)},${jsArg(value)})">${esc(value)}</button>`).join('')}
      </div>
      <button type="button" class="m6-drug-pill" onclick="showGuidedDrugCustom(${jsArg(drug.id)},'dose')">Otra dosis</button>
    </div>
    ${selected.customDoseOpen ? `<div class="m6-drug-custom">
      <input placeholder="Dosis" value="${esc(selected.presentation || '')}" oninput="updateGuidedDrug(${jsArg(drug.id)},'presentation',this.value)">
      <input placeholder="Vía" value="${esc(selected.route || '')}" oninput="updateGuidedDrug(${jsArg(drug.id)},'route',this.value)">
    </div>` : ''}
    <div class="m6-drug-row">
      ${frequencies.map(value => `<button type="button" class="m6-drug-pill ${selected.frequency === value ? 'active' : ''}"
        onclick="setGuidedDrugFrequency(${jsArg(drug.id)},${jsArg(value)})">${esc(value)}</button>`).join('')}
      <button type="button" class="m6-drug-pill" onclick="showGuidedDrugCustom(${jsArg(drug.id)},'frequency')">Otra frecuencia</button>
    </div>
    ${selected.customFrequencyOpen ? `<div class="m6-drug-custom">
      <input placeholder="Frecuencia" value="${esc(selected.frequency || '')}" oninput="updateGuidedDrug(${jsArg(drug.id)},'frequency',this.value)">
    </div>` : ''}
    ${hasDurationOptions ? `<div class="m6-drug-row">
      ${durations.map(value => `<button type="button" class="m6-drug-pill ${selected.duration === value ? 'active' : ''}"
        onclick="setGuidedDrugDuration(${jsArg(drug.id)},${jsArg(value)})">${esc(value)}</button>`).join('')}
      <button type="button" class="m6-drug-pill" onclick="showGuidedDrugCustom(${jsArg(drug.id)},'duration')">Otra duración</button>
    </div>` : ''}
    ${selected.customDurationOpen ? `<div class="m6-drug-custom compact">
      <input placeholder="Duración" value="${esc(selected.duration || '')}" oninput="updateGuidedDrug(${jsArg(drug.id)},'duration',this.value)">
    </div>` : ''}
    <button type="button" class="m6-drug-remove" onclick="removeGuidedDrug(${jsArg(drug.id)})">Quitar</button>
  </div>`;
}

function renderDrugChip(drug, groupPath = []) {
  const selected = !!state.guidedManagement.drugs[drug.id];
  const fullDrug = { ...drug, groupPath };
  return `<div class="m6-drug-choice">
    <button type="button" class="drug-chip ${selected ? 'selected' : ''}" onclick="selectGuidedDrug(${jsArg(drug.id)})">${esc(drug.name)}</button>
    ${selected ? renderDrugInlineOptions(fullDrug) : ''}
  </div>`;
}

function guidedDrugOrderLabel(drug) {
  const selected = state.guidedManagement.drugs[drug.id] || {};
  const doseRoute = [selected.presentation, selected.route].filter(Boolean).join(' ');
  const details = [doseRoute, selected.frequency, selected.duration].filter(Boolean);
  return details.length ? `${drug.name} · ${details.join(' · ')}` : drug.name;
}

function renderRemovableOrderItem(label, onRemove, removeLabel) {
  return `<div class="order-item order-item-removable">
    <div class="order-item-copy">
      <strong>${esc(label)}</strong>
    </div>
    <button type="button" class="order-remove" onclick="${onRemove}" aria-label="${esc(removeLabel)}">×</button>
  </div>`;
}

function renderOrderCategory(title, items, resetSection = '') {
  if (!items.length) return '';
  return `<section class="order-category">
    <div class="order-category-head">
      <h3>${esc(title)}</h3>
      ${resetSection ? `<button type="button" class="order-reset" onclick="resetGuidedSection(${jsArg(resetSection)})">Reiniciar</button>` : ''}
    </div>
    <div class="order-category-list">${items.join('')}</div>
  </section>`;
}

function guidedOrderGroups() {
  const gm = state.guidedManagement;
  const consults = gm.consults || [];
  const consultAndDestination = consults
    .map(c => renderRemovableOrderItem(c.service || 'Pendiente', `removeGuidedConsult(${jsArg(c.id)})`, `Quitar ${c.service || 'interconsulta'}`))
    .concat(gm.destination ? [renderRemovableOrderItem(gm.destination, `setGuidedDestination(${jsArg('')})`, `Quitar ${gm.destination}`)] : []);
  return {
    general: Object.entries(gm.general)
      .filter(([, value]) => !!value)
      .map(([id]) => renderRemovableOrderItem(optionLabel(guidedGeneralOptions, id), `setGuidedGeneral(${jsArg(id)},false)`, `Quitar ${optionLabel(guidedGeneralOptions, id)}`)),
    drugs: Object.keys(gm.drugs)
      .map(id => findDrugById(id))
      .filter(Boolean)
      .map(drug => renderRemovableOrderItem(guidedDrugOrderLabel(drug), `removeGuidedDrug(${jsArg(drug.id)})`, `Quitar ${drug.name}`)),
    procedures: Object.keys(gm.procedures)
      .map(id => ({ id, label: optionLabel(guidedProcedureOptions, id) }))
      .map(item => renderRemovableOrderItem(item.label, `setGuidedProcedure(${jsArg(item.id)},false)`, `Quitar ${item.label}`)),
    monitoring: Object.entries(gm.monitoring)
      .filter(([, value]) => !!value)
      .map(([id]) => ({ id, label: optionLabel(guidedMonitoringOptions, id) }))
      .map(item => renderRemovableOrderItem(item.label, `setGuidedMonitoring(${jsArg(item.id)},false)`, `Quitar ${item.label}`)),
    consultDestination: consultAndDestination,
    precautions: gm.precautions ? [renderRemovableOrderItem(gm.precautions, `setGuidedPrecautions(${jsArg('')});renderModules()`, 'Quitar precauciones')] : []
  };
}

function renderGuidedOrderSlot(title, items) {
  const resetMap = {
    'Manejo general': 'general',
    'Fármacos': 'drugs',
    'Procedimientos y soporte': 'procedures',
    'Monitorización': 'monitoring',
    'Interconsultas y destino': 'consultDestination',
    'Precauciones': 'precautions'
  };
  const content = renderOrderCategory(title, items, resetMap[title] || '');
  return `<aside class="orders-panel m6-order-column">
    ${content ? `<div class="orders-panel-inner m6-order-slot">${content}</div>` : ''}
  </aside>`;
}

function renderGuidedCategoryRow(title, orderItems, optionsHtml) {
  return `<div class="m6-guided-row">
    ${renderGuidedOrderSlot(title, orderItems)}
    <div class="library-panel">
      <div class="m6-library guided-management">${optionsHtml}</div>
    </div>
  </div>`;
}

function renderGuidedDrugs() {
  return `<details class="guided-section" open>
    <summary>Manejo farmacológico</summary>
    <div class="drug-panel">
      <div class="drug-panel-header">
        <h3>FÁRMACOS</h3>
        <p>Clasificación farmacológica</p>
      </div>
      ${renderDrugSearch()}
      <div class="drug-tree">${renderDrugTree()}</div>
    </div>
  </details>`;
}

function renderGuidedProcedures() {
  const selected = state.guidedManagement.procedures;
  const open = Object.prototype.hasOwnProperty.call(state.expanded, 'guided_procedures')
    ? state.expanded.guided_procedures
    : false;
  return `<details class="guided-section" ${open ? 'open' : ''} ontoggle="markExpanded('guided_procedures',this.open)">
    <summary>Procedimientos y soporte</summary>
    <div class="guided-options">
      ${guidedProcedureOptions.map(([id, label]) => renderGuidedOption(id, label, !!selected[id], `setGuidedProcedure('${id}',this.checked)`)).join('')}
    </div>
  </details>`;
}

function renderGuidedMonitoring() {
  const open = Object.prototype.hasOwnProperty.call(state.expanded, 'guided_monitoring')
    ? state.expanded.guided_monitoring
    : false;
  return `<details class="guided-section" ${open ? 'open' : ''} ontoggle="markExpanded('guided_monitoring',this.open)">
    <summary>Monitorización</summary>
    <div class="guided-options">
      ${guidedMonitoringOptions.map(([id, label]) => renderGuidedOption(id, label, !!state.guidedManagement.monitoring[id], `setGuidedMonitoring('${id}',this.checked)`)).join('')}
    </div>
  </details>`;
}

function renderGuidedConsults() {
  const selected = new Set((state.guidedManagement.consults || []).map(c => c.id));
  return `<details class="guided-section" open>
    <summary>Interconsultas y destino</summary>
    <div class="guided-options">
      ${guidedConsultOptions.map(([id, label]) => renderGuidedOption(id, label, selected.has(id), `setGuidedConsultOption('${id}','${esc(label)}',this.checked)`)).join('')}
    </div>
    <label class="field-title">Destino global</label>
    <div class="guided-options compact-options">
      ${destinationOptions.map(v => `<label class="guided-option ${state.guidedManagement.destination === v ? 'selected' : ''}">
        <input type="radio" name="guided_destination" ${state.guidedManagement.destination === v ? 'checked' : ''} onchange="setGuidedDestination('${esc(v)}')">
        <span>${esc(v)}</span>
      </label>`).join('')}
    </div>
  </details>`;
}

function renderGuidedPrecautions() {
  return `<details class="guided-section" open>
    <summary>Precauciones y conductas a evitar</summary>
    <textarea class="required-precautions" placeholder="Fármacos contraindicados, dosis peligrosas, combinaciones de riesgo, procedimientos a diferir, correcciones rápidas, líquidos excesivos, anticoagulación insegura, destino inseguro o ausencia de monitorización." oninput="setGuidedPrecautions(this.value)">${esc(state.guidedManagement.precautions || '')}</textarea>
  </details>`;
}

function renderGuidedManagement() {
  return `<div class="m6-library guided-management">
    <h2>Opciones de manejo</h2>
    ${renderGuidedGeneral()}
    ${renderGuidedDrugs()}
    ${renderGuidedProcedures()}
    ${renderGuidedMonitoring()}
    ${renderGuidedConsults()}
    ${renderGuidedPrecautions()}
  </div>`;
}

function renderGuidedWorkspace() {
  const groups = guidedOrderGroups();
  return `<div class="m6-guided-workspace">
    ${renderGuidedCategoryRow('Manejo general', groups.general, renderGuidedGeneral())}
    ${renderGuidedCategoryRow('Fármacos', groups.drugs, renderGuidedDrugs())}
    ${renderGuidedCategoryRow('Procedimientos y soporte', groups.procedures, renderGuidedProcedures())}
    ${renderGuidedCategoryRow('Monitorización', groups.monitoring, renderGuidedMonitoring())}
    ${renderGuidedCategoryRow('Interconsultas y destino', groups.consultDestination, renderGuidedConsults())}
    ${renderGuidedCategoryRow('Precauciones', groups.precautions, renderGuidedPrecautions())}
  </div>`;
}

function optionLabel(options, id) {
  return options.find(([key]) => key === id)?.[1] || id;
}

function renderOxygenOrderForm() {
  const oxygen = state.guidedManagement.general.oxygen;
  if (!oxygen) return '';
  const details = oxygen.details || {};
  return `<div class="clinical-form-card">
    <div class="drug-form-header">
      <h4>OXÍGENO</h4>
      <button type="button" class="diagnosis-x" onclick="setGuidedGeneral('oxygen',false)" aria-label="Quitar oxígeno">×</button>
    </div>
    <div class="field-title">Dispositivo</div>
    <div class="oxygen-device-list">
      ${['Cánula nasal','Mascarilla simple','Mascarilla con reservorio','Ventilación no invasiva'].map(device =>
        `<label><input type="radio" name="oxygen_device" ${details.device === device ? 'checked' : ''} onchange="setGuidedGeneralDetail('oxygen','device','${esc(device)}')"> ${esc(device)}</label>`
      ).join('')}
    </div>
    <div class="field-title">Flujo / configuración</div>
    <div class="oxygen-device-list">
      ${oxygenFlowOptions.map(value => `<label><input type="radio" name="oxygen_flow" ${details.flow === value ? 'checked' : ''} onchange="setGuidedGeneralDetail('oxygen','flow','${esc(value)}')"> ${esc(value)}</label>`).join('')}
    </div>
    <div class="field-title">Objetivo de saturación</div>
    <div class="oxygen-device-list">
      ${oxygenTargetOptions.map(value => `<label><input type="radio" name="oxygen_target" ${details.target === value ? 'checked' : ''} onchange="setGuidedGeneralDetail('oxygen','target','${esc(value)}')"> ${esc(value)}</label>`).join('')}
    </div>
    <div class="field-title">Indicación</div>
    <div class="oxygen-device-list">
      ${oxygenIndicationOptions.map(value => `<label><input type="radio" name="oxygen_indication" ${details.indication === value ? 'checked' : ''} onchange="setGuidedGeneralDetail('oxygen','indication','${esc(value)}')"> ${esc(value)}</label>`).join('')}
    </div>
  </div>`;
}

function renderGuidedOrdersSummary() {
  const groups = guidedOrderGroups();
  const hasOrders = Object.values(groups).some(items => items.length);
  return `<div class="orders-panel-inner">
    <h2>Órdenes seleccionadas</h2>
    ${hasOrders ? `<div class="order-summary-list">
      ${renderOrderCategory('Manejo general', groups.general, 'general')}
      ${renderOrderCategory('Fármacos', groups.drugs, 'drugs')}
      ${renderOrderCategory('Procedimientos y soporte', groups.procedures, 'procedures')}
      ${renderOrderCategory('Monitorización', groups.monitoring, 'monitoring')}
      ${renderOrderCategory('Interconsultas y destino', groups.consultDestination, 'consultDestination')}
      ${renderOrderCategory('Precauciones', groups.precautions, 'precautions')}
    </div>` : '<div class="order-empty">Aún no hay órdenes seleccionadas.</div>'}
  </div>`;
}

function renderManualOrdersSummary() {
  const written = manualManagementFields.filter(({ key }) => (state.manualManagement[key] || '').trim());
  return `<div class="orders-panel-inner">
    <h2>Órdenes seleccionadas</h2>
    ${written.length ? `<div class="order-summary-list">
      ${written.map(({ key, title }) => `<div class="order-item">
        <span>${esc(title)}</span>
        <strong>${esc(state.manualManagement[key])}</strong>
      </div>`).join('')}
    </div>` : '<div class="order-empty">Aún no hay manejo escrito.</div>'}
  </div>`;
}

function renderM6() {
  if (!state.diagnosticPauseCompleted) return renderBlockedManagement();
  if (!state.managementMode) return renderManagementSelection();
  return `<section class="module active m6-module">
    <div class="module-intro">
      <h1>Módulo 6 — Manejo clínico ${state.managementMode === 'guided' ? 'con asistencia' : 'sin asistencia'}</h1>
      <p>Modo elegido: ${esc(managementModeLabel())}</p>
    </div>
    ${renderM6DxCard()}
    ${state.managementMode === 'manual' ? `<div class="m6-workspace">
      <aside class="orders-panel">${renderManualOrdersSummary()}</aside>
      <div class="library-panel">${renderManualManagement()}</div>
    </div>` : renderGuidedWorkspace()}
    <div class="footer-actions">
      <button class="action secondary" onclick="goModule('m5')">← Volver</button>
      <button class="action" onclick="goModule('m7')">Continuar a evaluación →</button>
    </div>
  </section>`;
}

function expertData() {
  return CASE_DATA.expertEvaluation || { findings: {}, management: {} };
}

function allCaseFindings() {
  const out = [];
  (CASE_DATA.m1?.triage || []).forEach(item => out.push(item));
  (CASE_DATA.m1?.dialogue || []).forEach(item => {
    out.push(item);
    if (item.expandable) out.push({ ...item.expandable, source: item.source, text: item.expandable.patient });
  });
  (CASE_DATA.m2?.history || []).forEach(section => (section.items || []).forEach(item => {
    out.push(item);
    if (item.expandable) out.push({ ...item.expandable, source: item.source, text: item.expandable.patient });
  }));
  (CASE_DATA.m2?.functional || []).forEach(section => (section.items || []).forEach(item => {
    out.push(item);
    if (item.expandable) out.push({ ...item.expandable, source: item.source, text: item.expandable.patient });
  }));
  (CASE_DATA.m3?.physicalExam || []).forEach(section => (section.items || []).forEach(item => out.push(item)));
  (CASE_DATA.m4?.tables || []).forEach(table => (table.rows || []).forEach(row => out.push({
    id: row.id,
    source: row.source,
    text: `${row.label}: ${row.value}${row.unit ? ' ' + row.unit : ''}${row.ref ? ' (VR: ' + row.ref + ')' : ''}`
  })));
  return out;
}

function findingTextById(id) {
  return allCaseFindings().find(item => item.id === id)?.text || id;
}

function sourceForFinding(id) {
  return allCaseFindings().find(item => item.id === id)?.source || 'Otros';
}

function renderExpertFindingComparison() {
  const expert = expertData().findings || {};
  const expected = new Set([...(expert.selectedExpected || []), ...(expert.missedImportant || [])]);
  const lowValue = new Set(expert.lowValueSelected || []);
  const selectedIds = new Set(Object.keys(state.selected));
  const rows = [];
  sourceOrder.forEach(source => {
    const sourceRows = [];
    Object.values(state.selected)
      .filter(f => f.source === source)
      .forEach(f => {
        if (expected.has(f.id)) {
          sourceRows.push(`<div class="finding-score good">✅ ${esc(f.text)}</div>`);
        } else if (lowValue.has(f.id)) {
          sourceRows.push(`<div class="finding-score low">⚠️ ${esc(f.text)} — bajo valor / distractor</div>`);
        }
      });
    Array.from(expected)
      .filter(id => sourceForFinding(id) === source && !selectedIds.has(id))
      .forEach(id => sourceRows.push(`<div class="finding-score missed">❌ ${esc(findingTextById(id))} — MISSED</div>`));
    if (sourceRows.length) {
      rows.push(`<div class="eval-row">
        <div class="eval-label">${esc(source)}</div>
        <div class="eval-value">${sourceRows.join('')}</div>
      </div>`);
    }
  });
  return rows.join('') || '<div class="placeholder">Aún no hay datos expertos para comparar hallazgos.</div>';
}

function listBlock(title, items) {
  if (!items.length) return '';
  return `<div class="clinical-summary-block">
    <h3>${esc(title)}</h3>
    <ul>${items.map(item => `<li>${esc(item)}</li>`).join('')}</ul>
  </div>`;
}

function renderStudentManagementSummary() {
  if (state.managementMode === 'manual') {
    const items = manualManagementFields
      .filter(({ key }) => (state.manualManagement[key] || '').trim())
      .map(({ title, key }) => `${title}: ${state.manualManagement[key]}`);
    return items.length
      ? `<div class="clinical-summary">${listBlock('Manejo escrito', items)}</div>`
      : '<div class="placeholder">Aún no hay manejo escrito.</div>';
  }

  const gm = state.guidedManagement || defaultGuidedManagement();
  const general = Object.entries(gm.general || {}).filter(([, value]) => !!value).map(([id, value]) => {
    const label = optionLabel(guidedGeneralOptions, id);
    if (id !== 'oxygen') return label;
    const d = value.details || {};
    const details = [d.device, d.flow, d.target, d.indication].filter(Boolean).join(' · ');
    return details ? `${label}: ${details}` : label;
  });
  const drugs = Object.keys(gm.drugs || {}).map(id => {
    const drug = findDrugById(id);
    const selected = gm.drugs[id] || {};
    const details = [selected.presentation, selected.route, selected.frequency, selected.duration, selected.indication, selected.precautions].filter(Boolean).join(' · ');
    return details ? `${drug?.name || selected.name || id}: ${details}` : (drug?.name || selected.name || id);
  });
  const procedures = Object.keys(gm.procedures || {}).map(id => optionLabel(guidedProcedureOptions, id));
  const monitoring = Object.entries(gm.monitoring || {}).filter(([, value]) => !!value).map(([id]) => optionLabel(guidedMonitoringOptions, id));
  const consults = (gm.consults || []).map(c => c.service || c.id).filter(Boolean);
  const destination = gm.destination ? [gm.destination] : [];
  const precautions = gm.precautions ? [gm.precautions] : [];
  const html = [
    listBlock('Manejo general', general),
    listBlock('Fármacos', drugs),
    listBlock('Procedimientos y soporte', procedures),
    listBlock('Monitorización', monitoring),
    listBlock('Interconsultas', consults),
    listBlock('Destino', destination),
    listBlock('Precauciones y conductas a evitar', precautions)
  ].join('');
  return html ? `<div class="clinical-summary">${html}</div>` : '<div class="placeholder">Aún no hay órdenes seleccionadas.</div>';
}

function renderManagementExpertEvaluation() {
  const m = expertData().management || {};
  const expected = m.expected || [];
  const omissions = m.dangerousOmissions || [];
  const monitoring = m.monitoringOmitted || [];
  const destination = m.destination || null;
  return `<div class="management-eval">
    <div class="eval-row">
      <div class="eval-label">Modo de manejo elegido</div>
      <div class="eval-value">${esc(managementModeLabel())}</div>
    </div>
    <div class="eval-row">
      <div class="eval-label">Lo que hizo el estudiante</div>
      <div class="eval-value">${renderStudentManagementSummary()}</div>
    </div>
    <div class="eval-row">
      <div class="eval-label">Esperado por experto</div>
      <div class="eval-value">${expected.length ? expected.map(item => `<div class="finding-score good">${esc(item.label)}${item.reason ? ' — ' + esc(item.reason) : ''}</div>`).join('') : 'Sin datos demo.'}</div>
    </div>
    <div class="eval-row">
      <div class="eval-label">Omisiones o decisiones peligrosas</div>
      <div class="eval-value">${omissions.length ? omissions.map(item => `<div class="finding-score missed">${esc(item.label)}${item.reason ? ' — ' + esc(item.reason) : ''}</div>`).join('') : 'Sin datos demo.'}</div>
    </div>
    <div class="eval-row">
      <div class="eval-label">Monitorización omitida</div>
      <div class="eval-value">${monitoring.length ? monitoring.map(item => `<div class="finding-score low">${esc(item.label)}${item.reason ? ' — ' + esc(item.reason) : ''}</div>`).join('') : 'Sin datos demo.'}</div>
    </div>
    <div class="eval-row">
      <div class="eval-label">Destino</div>
      <div class="eval-value">${destination ? `${esc(destination.label)}${destination.reason ? ' — ' + esc(destination.reason) : ''}` : 'Sin datos demo.'}</div>
    </div>
  </div>`;
}

let module7ExplanationStore = {};

function module7Severity(value) {
  const normalized = String(value || '').toLowerCase().trim();
  const map = {
    rojo: 'red',
    red: 'red',
    critical: 'red',
    amarillo: 'yellow',
    yellow: 'yellow',
    important: 'yellow',
    verde: 'green',
    green: 'green',
    low: 'green',
    neutro: 'neutral',
    neutral: 'neutral'
  };
  return map[normalized] || 'neutral';
}

function module7Text(value, fallback) {
  const text = String(value || '').trim();
  return text || fallback;
}

function module7TierStudentText() {
  const items = currentTierItems()
    .map(item => `${item.label}: ${item.diagnosis?.name || ''}`.trim())
    .filter(item => !item.endsWith(':'));
  return items.join('\n');
}

function module7ExpertSource() {
  const data = expertData();
  if (data.comparisonByModule) return data.comparisonByModule;
  return window.HCR_EXPERT_COMPARISON || null;
}

function module7LatestExpertModule() {
  const comparison = module7ExpertSource();
  if (!comparison) return null;
  return comparison.m4 || comparison.m3 || comparison.m2 || comparison.m1 || null;
}

function module7TierExpertText(tier3) {
  if (!tier3) return '';
  const rows = [
    ['Diagnóstico principal', tier3.leader],
    ['Diagnóstico alternativo', tier3.alternative],
    ['Diagnóstico que no se puede perder', tier3.cannotMiss]
  ];
  return rows
    .filter(([, item]) => item?.diagnosis)
    .map(([label, item]) => `${label}: ${item.diagnosis}`)
    .join('\n');
}

function module7SourceTitle(source) {
  const titles = {
    Triage: 'Triage e interrogatorio',
    Interrogatorio: 'Triage e interrogatorio',
    Historial: 'Historia clínica',
    'Examen funcional': 'Historia clínica',
    'Examen físico': 'Examen físico',
    Paraclínicos: 'Diagnósticos complementarios',
    Manejo: 'Manejo'
  };
  return titles[source] || source || 'Otros';
}

function module7RowsFromLegacyFindings() {
  const expert = expertData().findings || {};
  const expected = new Set([...(expert.selectedExpected || []), ...(expert.missedImportant || [])]);
  const missedImportant = new Set(expert.missedImportant || []);
  const lowValue = new Set(expert.lowValueSelected || []);
  const selectedIds = new Set(Object.keys(state.selected || {}));
  const ids = [...new Set([...expected, ...lowValue])];
  const groups = {};

  ids.forEach(id => {
    const selected = state.selected?.[id];
    const source = selected?.source || sourceForFinding(id);
    const text = selected?.text || findingTextById(id);
    const severity = missedImportant.has(id)
      ? 'red'
      : lowValue.has(id)
        ? 'green'
        : 'yellow';
    const row = {
      id,
      severity,
      studentText: selectedIds.has(id) ? text : '',
      expertText: lowValue.has(id) ? `${text} (No prioritaria)` : text,
      expertNote: ''
    };
    const title = module7SourceTitle(source);
    (groups[title] = groups[title] || []).push(row);
  });

  return Object.entries(groups).map(([title, rows]) => ({
    id: title.toLowerCase().replace(/\s+/g, '-'),
    title,
    type: 'findings',
    rows
  }));
}

function module7RowsFromLegacyManagement() {
  const management = expertData().management || {};
  const rows = [];
  (management.expected || []).forEach((item, index) => rows.push({
    id: `management-expected-${index}`,
    severity: 'yellow',
    studentText: '',
    expertText: item.label || '',
    expertNote: item.reason || '',
    explanation: item.reason ? { title: item.label, body: [item.reason] } : null
  }));
  (management.dangerousOmissions || []).forEach((item, index) => rows.push({
    id: `management-omission-${index}`,
    severity: 'red',
    studentText: '',
    expertText: item.label || '',
    expertNote: item.reason || '',
    explanation: item.reason ? { title: item.label, body: [item.reason] } : null
  }));
  (management.monitoringOmitted || []).forEach((item, index) => rows.push({
    id: `management-monitoring-${index}`,
    severity: 'yellow',
    studentText: '',
    expertText: item.label || '',
    expertNote: item.reason || '',
    explanation: item.reason ? { title: item.label, body: [item.reason] } : null
  }));
  if (management.destination) {
    rows.push({
      id: 'management-destination',
      severity: 'neutral',
      studentText: '',
      expertText: management.destination.label || '',
      expertNote: management.destination.reason || '',
      explanation: management.destination.reason ? {
        title: management.destination.label,
        body: [management.destination.reason]
      } : null
    });
  }
  return rows.length ? [{
    id: 'management',
    title: 'Manejo',
    type: 'management',
    rows
  }] : [];
}

function module7LegacyData() {
  const latest = module7LatestExpertModule();
  return {
    illnessComparison: {
      student: currentIllness(),
      expert: latest?.illnessActual?.expected || ''
    },
    tier3Comparison: {
      student: module7TierStudentText(),
      expert: module7TierExpertText(latest?.tier3)
    },
    sections: [
      ...module7RowsFromLegacyFindings(),
      ...module7RowsFromLegacyManagement()
    ]
  };
}

function module7Data() {
  const direct = CASE_DATA.module7Evaluation || expertData().module7Evaluation || null;
  if (!direct) return module7LegacyData();
  return {
    illnessComparison: direct.illnessComparison || {},
    tier3Comparison: direct.tier3Comparison || {},
    sections: Array.isArray(direct.sections) ? direct.sections : []
  };
}

function module7RegisterExplanation(row) {
  const id = `m7-exp-${Object.keys(module7ExplanationStore).length + 1}`;
  module7ExplanationStore[id] = {
    title: row.explanation?.title || row.expertText || 'Explicación',
    question: row.explanation?.question || '¿Por qué era importante?',
    body: Array.isArray(row.explanation?.body) ? row.explanation.body : [],
    bullets: Array.isArray(row.explanation?.bullets) ? row.explanation.bullets : [],
    closing: row.explanation?.closing || ''
  };
  return id;
}

function module7BookIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M4 5.5c2.8-.9 5.3-.5 8 1.2 2.7-1.7 5.2-2.1 8-1.2v12.8c-2.8-.9-5.3-.5-8 1.2-2.7-1.7-5.2-2.1-8-1.2V5.5Z"></path>
    <path d="M12 6.7v12.8"></path>
  </svg>`;
}

function renderModule7PairedBlock(title, studentText, expertText) {
  return `<div class="m7-card">
    <h2>${esc(title)}</h2>
    <div class="m7-pair">
      <div class="m7-pair-col">
        <div class="m7-col-title">Estudiante</div>
        <div class="m7-free-text">${esc(module7Text(studentText, 'Sin respuesta registrada'))}</div>
      </div>
      <div class="m7-pair-col expert">
        <div class="m7-col-title">Experto</div>
        <div class="m7-free-text">${esc(module7Text(expertText, 'Pendiente de contenido experto'))}</div>
      </div>
    </div>
  </div>`;
}

function renderModule7Row(row) {
  const severity = module7Severity(row.severity);
  const explanationId = module7RegisterExplanation(row);
  const studentText = module7Text(row.studentText, '—');
  const expertText = module7Text(row.expertText, 'Pendiente experto');
  return `<div class="m7-table-row">
    <div class="m7-table-cell student">
      <span class="m7-severity ${severity}" aria-hidden="true"></span>
      <span class="m7-row-text ${studentText === '—' ? 'muted' : ''}">${esc(studentText)}</span>
    </div>
    <div class="m7-table-cell expert">
      <span class="m7-severity ${severity}" aria-hidden="true"></span>
      <span class="m7-row-main">
        <span class="m7-row-text">${esc(expertText)}</span>
        ${row.expertNote ? `<span class="m7-row-note">${esc(row.expertNote)}</span>` : ''}
      </span>
      <button class="m7-book-btn" type="button" onclick="openModule7Explanation('${explanationId}')" aria-label="Abrir explicación experta">
        ${module7BookIcon()}
      </button>
    </div>
  </div>`;
}

function renderModule7Section(section) {
  const rows = Array.isArray(section.rows) ? section.rows : [];
  return `<div class="m7-card">
    <div class="m7-section-header">
      <h2>${esc(section.title || 'Sección')}</h2>
      <span>${esc(section.type || 'findings')}</span>
    </div>
    <div class="m7-table">
      <div class="m7-table-head">
        <div>Estudiante</div>
        <div>Experto</div>
      </div>
      ${rows.length ? rows.map(renderModule7Row).join('') : '<div class="m7-empty">Sin datos comparativos para esta sección.</div>'}
    </div>
  </div>`;
}

function renderModule7ExplanationModal() {
  return `<div class="m7-modal" id="module7Modal" hidden>
    <div class="m7-modal-backdrop" onclick="closeModule7Explanation()"></div>
    <div class="m7-modal-panel" role="dialog" aria-modal="true" aria-labelledby="module7ModalTitle">
      <h2 id="module7ModalTitle"></h2>
      <hr>
      <h3 id="module7ModalQuestion"></h3>
      <div id="module7ModalBody"></div>
      <hr>
      <button class="action secondary" type="button" onclick="closeModule7Explanation()">Cerrar</button>
    </div>
  </div>`;
}

function openModule7Explanation(id) {
  const data = module7ExplanationStore[id] || {};
  const modal = document.getElementById('module7Modal');
  if (!modal) return;
  document.getElementById('module7ModalTitle').textContent = data.title || 'Explicación';
  document.getElementById('module7ModalQuestion').textContent = data.question || '¿Por qué era importante?';
  const body = document.getElementById('module7ModalBody');
  const hasBody = (data.body || []).length || (data.bullets || []).length || data.closing;
  body.innerHTML = hasBody
    ? `${(data.body || []).map(p => `<p>${esc(p)}</p>`).join('')}
       ${(data.bullets || []).length ? `<ul>${data.bullets.map(item => `<li>${esc(item)}</li>`).join('')}</ul>` : ''}
       ${data.closing ? `<p>${esc(data.closing)}</p>` : ''}`
    : '<p>Explicación contextual pendiente para este caso.</p>';
  modal.hidden = false;
}

function closeModule7Explanation() {
  const modal = document.getElementById('module7Modal');
  if (modal) modal.hidden = true;
}

function renderM7() {
  module7ExplanationStore = {};
  const data = module7Data();
  return `<section class="module active">
    <div class="m7-header">
      <div class="m7-kicker">Módulo 7 · Evaluación experta</div>
      <h1>Enfermedad actual y diagnóstico</h1>
      <p>Estudiante vs Experto</p>
    </div>
    <div class="m7-layout">
      ${renderModule7PairedBlock('Enfermedad actual', data.illnessComparison?.student, data.illnessComparison?.expert)}
      ${renderModule7PairedBlock('Tier 3 / Representación del problema', data.tier3Comparison?.student, data.tier3Comparison?.expert)}
      ${(data.sections || []).length
        ? data.sections.map(renderModule7Section).join('')
        : '<div class="m7-card"><div class="m7-empty">No hay secciones comparativas disponibles para este caso.</div></div>'}
    </div>
    ${renderModule7ExplanationModal()}
    <div class="footer-actions">
      <button class="action secondary" onclick="goModule('m6')">← Volver</button>
      <button class="action" onclick="goModule('m8')">Continuar a exportar →</button>
    </div>
  </section>`;
}

function renderM8() {
  return `<section class="module active">
    <div class="module-intro">
      <h1>Módulo 8 — Exportar desempeño</h1>
      <p>Descarga tu desempeño completo y súbelo a ChatGPT para obtener una evaluación profunda módulo por módulo.</p>
    </div>
    <div class="card">
      <h2>Archivo de desempeño</h2>
      <p>El JSON contiene: hallazgos seleccionados, profundizaciones, enfermedad actual por fase, Tier 3, Venn, modalidad de manejo y manejo registrado.</p>
      <div class="footer-actions" style="justify-content:flex-start;border:0">
        <button class="action"           onclick="exportPerformance()">Descargar mi desempeño JSON</button>
        <button class="action secondary" onclick="exportSummary()">Descargar resumen TXT</button>
        <button class="action warn"      onclick="resetCase()">Reiniciar caso</button>
      </div>
    </div>
    <div class="card">
      <h2>Cómo usar el archivo</h2>
      <ol>
        <li>Completa los módulos y descarga el JSON.</li>
        <li>Súbelo en ChatGPT para recibir la evaluación completa módulo por módulo.</li>
        <li>La evaluación experta básica del caso demo ya viene incluida en el caso.</li>
      </ol>
    </div>
    <div class="footer-actions">
      <button class="action secondary" onclick="goModule('m7')">← Volver a evaluación</button>
    </div>
  </section>`;
}

const renderers = {
  m1: renderM1, m2: renderM2, m3: renderM3, m4: renderM4,
  m5: renderM5, managementSelect: renderManagementSelection,
  m6: renderM6, m7: renderM7, m8: renderM8
};
