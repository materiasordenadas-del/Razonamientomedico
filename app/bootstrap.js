document.addEventListener('change', e => {
  const cb = e.target.closest('input.finding-check');
  if (!cb) return;
  selectFinding(cb.dataset.id, cb.dataset.source, cb.dataset.text, cb.checked);
  const label = cb.closest('label.selectable');
  if (label) label.classList.toggle('selected', cb.checked);
  const row = cb.closest('tr');
  if (row) row.classList.toggle('selected', cb.checked);
});

document.getElementById('beginCase').addEventListener('click', () => {
  state.started = true;
  save();
  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('app').style.display        = 'block';
  renderModules();
});

document.getElementById('togglePad').addEventListener('click', togglePad);
document.getElementById('padSideBtn').addEventListener('click', togglePad);

if (state.started || new URLSearchParams(location.search).get('test') === '1') {
  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('app').style.display        = 'block';
}
renderModules();
