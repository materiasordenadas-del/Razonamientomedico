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
    moduleHelp: 'brain',
    clinicalTerm: 'eye',
    expertExplanation: 'book'
  };
  return window.HCR_UI_ICONS?.[iconRole] || fallbacks[iconRole] || 'book';
}

const hcrIconLoadCache = {};

function hcrShowIconFallback(iconEl) {
  if (!iconEl) return;
  iconEl.hidden = true;
  const fallback = iconEl.nextElementSibling;
  if (fallback) fallback.hidden = false;
}

function verifyHcrIcons(root) {
  if (window.location?.protocol === 'file:') return;
  const container = root || document;
  container.querySelectorAll('.hcr-icon-img[data-hcr-icon-url]').forEach(iconEl => {
    const src = iconEl.getAttribute('data-hcr-icon-url');
    if (!src) return;
    if (hcrIconLoadCache[src] === false) {
      hcrShowIconFallback(iconEl);
      return;
    }
    if (hcrIconLoadCache[src] === true) return;
    hcrIconLoadCache[src] = 'pending';
    fetch(src, { cache: 'force-cache' })
      .then(response => {
        hcrIconLoadCache[src] = response.ok;
        if (!response.ok) hcrShowIconFallback(iconEl);
      })
      .catch(() => {
        hcrIconLoadCache[src] = false;
        hcrShowIconFallback(iconEl);
      });
  });
}

function renderHcrIcon(iconRole, ariaLabel) {
  const iconName = hcrIconName(iconRole);
  const safeLabel = hcrAttribute(ariaLabel || 'Ayuda');
  const src = `ui/icons/${encodeURIComponent(iconName)}.svg`;
  if (window.location?.protocol === 'file:') {
    return `<span class="hcr-icon-wrap" aria-hidden="true">
      <img class="hcr-icon-img hcr-icon-img-file" src="${hcrAttribute(src)}" alt="" onerror="this.hidden=true;this.nextElementSibling.hidden=false">
      <span class="hcr-icon-fallback" hidden>?</span>
    </span><span class="sr-only">${safeLabel}</span>`;
  }
  return `<span class="hcr-icon-wrap" aria-hidden="true">
    <span class="hcr-icon-img" data-hcr-icon-url="${hcrAttribute(src)}" style="--hcr-icon-url:url('${hcrAttribute(src)}')"></span>
    <span class="hcr-icon-fallback" hidden>?</span>
  </span><span class="sr-only">${safeLabel}</span>`;
}

function renderHcrModuleHelpButton(key) {
  if (!window.HCR_MODULE_HELP?.[key]) return '';
  return `<button type="button" class="hcr-icon-btn hcr-help-btn" aria-label="Abrir ayuda"
    onclick="event.preventDefault();event.stopPropagation();openHcrModuleHelp('${hcrJsArg(key)}')">
    ${renderHcrIcon('moduleHelp', 'Abrir ayuda')}
  </button>`;
}

function renderHcrClinicalTermButton(key) {
  if (!window.HCR_CLINICAL_TERMS?.[key]) return '';
  return `<button type="button" class="hcr-icon-btn hcr-term-btn" aria-label="Abrir explicacion semiologica"
    onclick="event.preventDefault();event.stopPropagation();openHcrClinicalTerm('${hcrJsArg(key)}')">
    ${renderHcrIcon('clinicalTerm', 'Abrir explicacion semiologica')}
  </button>`;
}

function findHcrClinicalTerm(text) {
  const normalized = hcrNormalize(text);
  const terms = window.HCR_CLINICAL_TERMS || {};
  return Object.entries(terms).find(([key, data]) => {
    const aliases = [key, data.title, ...(data.aliases || [])]
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
  return key ? renderHcrClinicalTermButton(key) : '';
}

function renderHcrHelpTitle(title, helpKey) {
  const button = helpKey ? renderHcrModuleHelpButton(helpKey) : '';
  return `<span class="hcr-title-help-wrap"><span>${hcrEscape(title)}</span>${button}</span>`;
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
  const data = window.HCR_CLINICAL_TERMS?.[key];
  if (!data) return;
  const root = hcrModalRoot();
  root.className = 'hcr-help-modal hcr-term-modal';
  root.innerHTML = `<div class="hcr-help-backdrop" onclick="closeHcrHelpModal()"></div>
    <div class="hcr-help-panel hcr-term-panel" role="dialog" aria-modal="true" aria-labelledby="hcrTermTitle">
      <div class="hcr-help-header">
        <h2 id="hcrTermTitle">${hcrEscape(data.title || 'Termino clinico')}</h2>
        <button type="button" class="hcr-help-close" onclick="closeHcrHelpModal()" aria-label="Cerrar">Cerrar</button>
      </div>
      <div class="hcr-term-content">
        <h3>Definicion</h3>
        <p>${hcrEscape(data.definition || '')}</p>
        <h3>Relevancia semiologica</h3>
        <p>${hcrEscape(data.relevance || '')}</p>
        ${(data.keyPoints || []).length
          ? `<h3>Puntos clave</h3><ul>${data.keyPoints.map(item => `<li>${hcrEscape(item)}</li>`).join('')}</ul>`
          : ''}
      </div>
    </div>`;
  root.hidden = false;
}

function closeHcrHelpModal() {
  const root = document.getElementById('hcrHelpModalRoot');
  if (root) root.hidden = true;
}
