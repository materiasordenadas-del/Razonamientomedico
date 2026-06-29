/* Compatibility shim for older H-CR bootstrap paths. */
(function () {
  const expert = window.HCR_CASE_EXPERT && window.HCR_CASE_EXPERT.RC1;
  if (expert && expert.expertComparison) {
    window.HCR_EXPERT_COMPARISON = expert.expertComparison;
  }
})();
