(function () {
  const caseKey = "RC2";
  const metadata = (window.HCR_CASE_METADATA && window.HCR_CASE_METADATA[caseKey]) || {};
  const modules = (window.HCR_CASE_MODULES && window.HCR_CASE_MODULES[caseKey]) || {};
  const expert = (window.HCR_CASE_EXPERT && window.HCR_CASE_EXPERT[caseKey]) || {};

  const module1 = Object.assign({}, modules.module1 || {});
  const patient = module1.patient;
  delete module1.patient;

  if (!patient || !modules.module2 || !modules.module3 || !modules.module4 || !modules.module6) {
    throw new Error(`HCR case ${caseKey} did not load all required modules.`);
  }

  window.HCR_CASE_ACTIVE_METADATA = metadata;
  window.CASE_DATA = {
    storage: 'hcr_rc2_nsteacs_001_v1',
    caseId: 'rc2_nsteacs_001',
    title: 'Caso clínico — dolor torácico agudo',
    patient,
    m1: module1,
    m2: modules.module2,
    m3: modules.module3,
    m4: modules.module4,
    m6: modules.module6,
    expertEvaluation: expert.expertEvaluation || {}
  };
})();

var CASE_DATA = window.CASE_DATA;
var STORAGE = CASE_DATA.storage;
