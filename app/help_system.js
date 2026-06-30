function hcrEscape(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function hcrAttribute(value) {
  return hcrEscape(value).replace(/`/g, '&#096;');
}

function hcrJsArg(value) {
  return hcrEscape(String(value ?? '').replace(/\\/g, '\\\\').replace(/'/g, "\\'"));
}

function hcrNormalize(value) {
  return String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[₂]/g, '2')
    .replace(/\s+/g, ' ')
    .trim();
}

function hcrIconName(iconRole) {
  const fallbacks = {
    ayudaModulo: 'brain',
    terminoClinico: 'eye',
    explicacionExperta: 'book',
    moduleHelp: 'brain',
    clinicalTerm: 'eye',
    expertExplanation: 'book'
  };
  const aliases = {
    moduleHelp: 'ayudaModulo',
    clinicalTerm: 'terminoClinico',
    expertExplanation: 'explicacionExperta'
  };
  return window.HCR_UI_ICONS?.[iconRole]
    || window.HCR_UI_ICONS?.[aliases[iconRole]]
    || fallbacks[iconRole]
    || 'book';
}

function hcrShowIconFallback(iconEl) {
  if (!iconEl) return;
  iconEl.hidden = true;
  const fallback = iconEl.nextElementSibling;
  if (fallback) fallback.hidden = false;
}

function verifyHcrIcons(root) {
  const container = root || document;
  container.querySelectorAll('.hcr-icon-img').forEach(iconEl => {
    if (iconEl.complete && iconEl.naturalWidth === 0) hcrShowIconFallback(iconEl);
  });
}

function hcrIconPath(iconName) {
  const pngIcons = new Set(['brain', 'eye']);
  const extension = pngIcons.has(iconName) ? 'png' : 'svg';
  return `ui/icons/${encodeURIComponent(iconName)}.${extension}`;
}

function renderHcrIcon(iconRole, ariaLabel) {
  const iconName = hcrIconName(iconRole);
  const safeLabel = hcrAttribute(ariaLabel || 'Ayuda');
  const src = hcrIconPath(iconName);
  return `<span class="hcr-icon-wrap" aria-hidden="true">
    <img class="hcr-icon-img" src="${hcrAttribute(src)}" alt="" loading="lazy"
      onerror="this.hidden=true;this.nextElementSibling.hidden=false">
    <span class="hcr-icon-fallback" hidden>?</span>
  </span><span class="sr-only">${safeLabel}</span>`;
}

function renderHcrModuleHelpButton(key) {
  if (!window.HCR_MODULE_HELP?.[key]) return '';
  return `<button type="button" class="hcr-icon-btn hcr-help-btn" aria-label="Abrir ayuda"
    onclick="event.preventDefault();event.stopPropagation();openHcrModuleHelp('${hcrJsArg(key)}')">
    ${renderHcrIcon('ayudaModulo', 'Abrir ayuda')}
  </button>`;
}

function hcrClinicalTermData(key) {
  return window.HCR_CLINICAL_TERMS?.[key] || null;
}

function hcrClinicalTermTitle(data) {
  return data?.titulo || data?.title || 'Termino clinico';
}

function hcrClinicalTermDefinition(data) {
  return data?.definicion || data?.definition || '';
}

function hcrClinicalTermRelevance(data) {
  return data?.relevancia || data?.relevance || '';
}

function hcrClinicalTermKeyPoints(data) {
  return data?.puntosClave || data?.keyPoints || [];
}

function hcrValidTermIds(termIds) {
  return (Array.isArray(termIds) ? termIds : [termIds])
    .map(id => String(id || '').trim())
    .filter((id, idx, list) => id && list.indexOf(id) === idx && hcrClinicalTermData(id));
}

function renderHcrClinicalTermButtonForIds(termIds) {
  const ids = hcrValidTermIds(termIds);
  if (!ids.length) return '';
  return `<button type="button" class="hcr-icon-btn hcr-term-btn" aria-label="Abrir conceptos clinicos"
    onclick="event.preventDefault();event.stopPropagation();openHcrClinicalTerms('${hcrJsArg(ids.join(','))}')">
    ${renderHcrIcon('terminoClinico', 'Abrir conceptos clinicos')}
  </button>`;
}

function renderHcrFindingEyeButton(termIds, findingText) {
  const ids = hcrValidTermIds(termIds);
  if (!ids.length) return '';
  return renderHcrClinicalTermButtonForIds(ids);
}

function findHcrClinicalTerm(text) {
  const normalized = hcrNormalize(text);
  const terms = window.HCR_CLINICAL_TERMS || {};
  return Object.entries(terms).find(([key, data]) => {
    const aliases = [key, data.title, data.titulo, ...(data.aliases || [])]
      .map(hcrNormalize)
      .filter(Boolean);
    return aliases.some(alias => {
      if (alias.length <= 2) {
        return new RegExp(`(^|[^a-z0-9])${alias}([^a-z0-9]|$)`).test(normalized);
      }
      return normalized.includes(alias);
    });
  })?.[0] || '';
}

function renderHcrClinicalTermButtonForText(text) {
  const key = findHcrClinicalTerm(text);
  return key ? renderHcrClinicalTermButtonForIds([key]) : '';
}

function renderHcrHelpTitle(title, helpKey) {
  const button = helpKey ? renderHcrModuleHelpButton(helpKey) : '';
  return `<span class="hcr-title-help-wrap"><span class="hcr-title-text">${hcrEscape(title)}</span>${button}</span>`;
}

function hcrModalRoot() {
  let root = document.getElementById('hcrHelpModalRoot');
  if (root) return root;
  root = document.createElement('div');
  root.id = 'hcrHelpModalRoot';
  root.className = 'hcr-help-modal';
  root.hidden = true;
  document.body.appendChild(root);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeHcrHelpModal();
  });
  return root;
}

function hcrRenderSection(section) {
  const bullets = Array.isArray(section.bullets) && section.bullets.length
    ? `<ul>${section.bullets.map(item => `<li>${hcrEscape(item)}</li>`).join('')}</ul>`
    : '';
  return `<section class="hcr-help-section">
    <h3>${hcrEscape(section.heading || '')}</h3>
    ${section.body ? `<p>${hcrEscape(section.body)}</p>` : ''}
    ${bullets}
  </section>`;
}

function openHcrModuleHelp(key) {
  const data = window.HCR_MODULE_HELP?.[key];
  if (!data) return;
  const root = hcrModalRoot();
  root.className = 'hcr-help-modal hcr-help-modal-large';
  root.innerHTML = `<div class="hcr-help-backdrop" onclick="closeHcrHelpModal()"></div>
    <div class="hcr-help-panel" role="dialog" aria-modal="true" aria-labelledby="hcrHelpTitle">
      <div class="hcr-help-header">
        <h2 id="hcrHelpTitle">${hcrEscape(data.title || 'Ayuda')}</h2>
        <button type="button" class="hcr-help-close" onclick="closeHcrHelpModal()" aria-label="Cerrar">Cerrar</button>
      </div>
      <div class="hcr-help-content">
        ${(data.sections || []).map(hcrRenderSection).join('')}
      </div>
    </div>`;
  root.hidden = false;
}

function openHcrClinicalTerm(key) {
  openHcrClinicalTerms(key);
}

function openHcrFindingDetail(findingText) {
  const root = hcrModalRoot();
  root.className = 'hcr-help-modal hcr-term-modal';
  root.innerHTML = `<div class="hcr-help-backdrop" onclick="closeHcrHelpModal()"></div>
    <div class="hcr-help-panel hcr-term-panel" role="dialog" aria-modal="true" aria-labelledby="hcrFindingTitle">
      <div class="hcr-help-header">
        <h2 id="hcrFindingTitle">Hallazgo</h2>
        <button type="button" class="hcr-help-close" onclick="closeHcrHelpModal()" aria-label="Cerrar">Cerrar</button>
      </div>
      <div class="hcr-term-content">
        <section class="hcr-term-section">
          <h4>Dato seleccionado</h4>
          <p>${hcrEscape(findingText || '')}</p>
        </section>
      </div>
    </div>`;
  root.hidden = false;
}

function openHcrClinicalTerms(keys) {
  const ids = hcrValidTermIds(String(keys || '').split(','));
  if (!ids.length) return;
  const terms = ids.map(id => hcrClinicalTermData(id)).filter(Boolean);
  const root = hcrModalRoot();
  root.className = 'hcr-help-modal hcr-term-modal';
  const title = terms.length === 1 ? hcrClinicalTermTitle(terms[0]) : 'Conceptos clinicos relacionados';
  root.innerHTML = `<div class="hcr-help-backdrop" onclick="closeHcrHelpModal()"></div>
    <div class="hcr-help-panel hcr-term-panel" role="dialog" aria-modal="true" aria-labelledby="hcrTermTitle">
      <div class="hcr-help-header">
        <h2 id="hcrTermTitle">${hcrEscape(title)}</h2>
        <button type="button" class="hcr-help-close" onclick="closeHcrHelpModal()" aria-label="Cerrar">Cerrar</button>
      </div>
      <div class="hcr-term-content">
        ${terms.map(data => {
          const points = hcrClinicalTermKeyPoints(data);
          return `<section class="hcr-term-section">
            ${terms.length > 1 ? `<h3>${hcrEscape(hcrClinicalTermTitle(data))}</h3>` : ''}
            <h4>Definicion</h4>
            <p>${hcrEscape(hcrClinicalTermDefinition(data))}</p>
            <h4>Relevancia clinica general</h4>
            <p>${hcrEscape(hcrClinicalTermRelevance(data))}</p>
            ${points.length ? `<h4>Puntos clave</h4><ul>${points.map(item => `<li>${hcrEscape(item)}</li>`).join('')}</ul>` : ''}
          </section>`;
        }).join('')}
      </div>
    </div>`;
  root.hidden = false;
}

function closeHcrHelpModal() {
  const root = document.getElementById('hcrHelpModalRoot');
  if (root) root.hidden = true;
}
