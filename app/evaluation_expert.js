/* H-CR — Evaluación experta por módulo.
 * Se carga después de app/modules.js y sustituye la vista M7 sin alterar el motor.
 */

function expertTierCard(title, item) {
  if (!item) return '';
  return `<div class="eval-row">
    <div class="eval-label">${esc(title)}</div>
    <div class="eval-value"><b>${esc(item.diagnosis || 'Pendiente')}</b>${item.rationale ? ` — ${esc(item.rationale)}` : ''}</div>
  </div>`;
}

function expertPhaseCard(phaseKey, phase) {
  if (!phase) return '';
  const sources = Object.entries(phase.sourceComparison || {}).map(([key, data]) => {
    const expected = (data.expectedSelected || []).map(findingTextById).join(' · ');
    const critical = (data.criticalMisses || []).map(findingTextById).join(' · ');
    const low = (data.lowValueIfSelected || []).map(findingTextById).join(' · ');
    return `<div class="eval-row">
      <div class="eval-label">${esc(key.replace(/([A-Z])/g, ' $1'))}</div>
      <div class="eval-value">
        ${data.rationale ? `<p>${esc(data.rationale)}</p>` : ''}
        ${expected ? `<div class="finding-score good">Datos de alto valor: ${esc(expected)}</div>` : ''}
        ${critical ? `<div class="finding-score missed">No omitir: ${esc(critical)}</div>` : ''}
        ${low ? `<div class="finding-score low">Bajo valor si se prioriza: ${esc(low)}</div>` : ''}
      </div>
    </div>`;
  }).join('');

  const illness = phase.illnessActual || {};
  const tier = phase.tier3 || {};
  return `<section class="expert-phase-card">
    <h3>${esc(phase.title || phaseKey)}</h3>
    ${sources || '<div class="placeholder">Sin comparación de hallazgos definida.</div>'}
    <div class="eval-row">
      <div class="eval-label">Enfermedad actual experta</div>
      <div class="eval-value">${esc(illness.expected || 'Pendiente')}</div>
      ${(illness.essentialElements || []).length ? `<div class="finding-score good">Elementos esenciales: ${esc((illness.essentialElements || []).join(' · '))}</div>` : ''}
    </div>
    ${expertTierCard('Tier 3 — diagnóstico líder', tier.leader)}
    ${expertTierCard('Tier 3 — alternativa principal', tier.alternative)}
    ${expertTierCard('Tier 3 — no puedo perder', tier.cannotMiss)}
  </section>`;
}

function renderExpertNarrative() {
  const comparison = expertData().comparisonByModule || {};
  const ordered = ['m1', 'm2', 'm3', 'm4'];
  const cards = ordered.map(key => expertPhaseCard(key, comparison[key])).join('');
  return cards || '<div class="placeholder">Este caso aún no tiene comparación experta estructurada por módulo.</div>';
}

function renderM7() {
  return `<section class="module active">
    <div class="module-intro">
      <h1>Módulo 7 — Evaluación</h1>
      <p>Comparación estructurada de tu razonamiento con la ficha experta bloqueada del caso.</p>
    </div>
    <div class="card">
      <h2>Enfermedad actual y diagnósticos: estudiante vs experto</h2>
      <div class="eval-grid">
        <div class="eval-col">
          <h3>Estudiante</h3>
          <div id="studentEval">${studentEvalRows()}</div>
        </div>
        <div class="eval-col expert-evaluation-column">
          <h3>Experto</h3>
          <div id="expertEval">${renderExpertNarrative()}</div>
        </div>
      </div>
    </div>
    <div class="card">
      <h2>Hallazgos seleccionados: estudiante vs experto</h2>
      <div id="expertFindingsEval">${renderExpertFindingComparison()}</div>
    </div>
    <div class="card">
      <h2>Evaluación del manejo</h2>
      <div id="managementEval">${renderManagementExpertEvaluation()}</div>
    </div>
    <div class="footer-actions">
      <button class="action secondary" onclick="goModule('m6')">← Volver</button>
      <button class="action" onclick="goModule('m8')">Continuar a exportar →</button>
    </div>
  </section>`;
}

if (typeof renderers !== 'undefined') {
  renderers.m7 = renderM7;
}
