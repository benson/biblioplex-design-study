import { cards } from './cards.js';

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const palettes = {
  muted: { ochre: '#A58B55', ember: '#8A5B48', jungle: '#4D6861', cobalt: '#526B8D', plum: '#6B5B70', sage: '#949B8B' },
  saturated: { ochre: '#B78B2E', ember: '#914027', jungle: '#145348', cobalt: '#1647A5', plum: '#4B2857', sage: '#849379' },
};
const defaults = { palette: 'muted', headings: 'ornate', frame: 'tactile', lighting: 'top-right', compact: false };
const settings = { ...defaults };
const params = new URLSearchParams(location.search);
for (const key of ['palette', 'headings', 'frame', 'lighting']) {
  const allowed = { palette: ['muted', 'saturated'], headings: ['ornate', 'plain'], frame: ['tactile', 'quiet'], lighting: ['ambient', 'top-right'] }[key];
  if (allowed.includes(params.get(key))) settings[key] = params.get(key);
}
settings.compact = params.get('compact') === '1';
const fixtures = {
  'Breya, Etherium Shaper': ['Breya', 1, 5.25], 'Sol Ring': ['Breya', 1, 1.5],
  'Swords to Plowshares': ['Trade binder', 2, 1.8], 'Rhystic Study': ['Breya', 1, 35],
  'Lightning Bolt': ['Red box', 4, 1], 'Counterspell': ['Blue box', 3, 1.25],
  'Skullclamp': ['Breya', 1, 4.5], 'Path to Exile': ['Trade binder', 2, 1.75],
  'Arcane Signet': ['Breya', 1, .6], 'Emry, Lurker of the Loch': ['Breya', 1, 2.5],
  'Etherium Sculptor': ['Breya', 1, .75], 'Goblin Engineer': ['Breya', 1, 3.8],
  'Master Transmuter': ['Trade binder', 1, 2.1], 'Thopter Foundry': ['Breya', 1, 1.3],
  'Trading Post': ['Breya', 1, .8], 'Command Tower': ['Breya', 1, .5],
};
const collection = cards.map((card) => {
  const [location, qty, price] = fixtures[card.name] || ['Trade binder', 1, 1];
  return { ...card, location, qty, price, shortType: card.type.replace('Legendary ', '').split(' — ')[0] };
});
const selected = new Set();
const state = { view: params.get('view') === 'deck' ? 'deck' : 'collection', display: params.get('display') === 'gallery' ? 'gallery' : 'table', search: '', location: '', sort: null, ascending: true };
const deck = { name: 'Breya', description: 'Artifact Commander deck.', format: 'Commander' };
const table = $('#collection-table');
const columns = [
  { key: 'name', title: 'Name', label: 'Card name', initial: 'N', width: 238, min: 150 },
  { key: 'set', title: 'Set', label: 'Set', initial: 'S', width: 70, min: 64 },
  { key: 'shortType', title: 'Type', label: 'Type', initial: 'T', width: 122, min: 76 },
  { key: 'location', title: 'Location', label: 'Location', initial: 'L', width: 124, min: 90 },
  { key: 'qty', title: 'Qty.', label: 'Qty.', initial: 'Q', width: 66, min: 60 },
  { key: 'price', title: 'Price', label: 'Price', initial: 'P', width: 84, min: 70 },
];

function node(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}
function toast(message) {
  const element = $('#study-toast');
  element.textContent = message;
  element.hidden = false;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => { element.hidden = true; }, 3500);
}
function updateUrl() {
  const next = new URL(location.href);
  const revision = next.searchParams.get('v');
  next.search = '';
  if (revision) next.searchParams.set('v', revision);
  for (const key of ['palette', 'headings', 'frame', 'lighting']) next.searchParams.set(key, settings[key]);
  if (settings.compact) next.searchParams.set('compact', '1');
  if (state.view !== 'collection') next.searchParams.set('view', state.view);
  if (state.display !== 'table') next.searchParams.set('display', state.display);
  history.replaceState(null, '', next);
}
function applySettings() {
  const colors = palettes[settings.palette];
  Object.entries(colors).forEach(([key, hex]) => document.documentElement.style.setProperty(`--${key}`, hex));
  document.documentElement.style.setProperty('--row-pad', settings.compact ? '4px' : '9px');
  for (const element of [document.body, $('#specimen')]) {
    element.dataset.headings = settings.headings;
    element.dataset.frame = settings.frame;
    element.dataset.lighting = settings.lighting;
  }
  const controls = $('#design-controls');
  for (const key of ['palette', 'headings', 'frame', 'lighting']) controls.elements[key].value = settings[key];
  controls.elements.compact.checked = settings.compact;
  const swatches = $('#palette-swatches');
  swatches.replaceChildren();
  Object.entries(colors).forEach(([name, hex]) => {
    const swatch = node('button', 'swatch');
    swatch.type = 'button';
    swatch.style.background = hex;
    swatch.setAttribute('aria-label', `${name} ${hex}`);
    swatch.append(node('span', '', `${name} · ${hex}`));
    swatch.addEventListener('click', () => toast(`${name[0].toUpperCase() + name.slice(1)} · ${hex}`));
    swatches.append(swatch);
  });
  updateUrl();
}
$('#design-controls').addEventListener('change', (event) => {
  const input = event.target;
  if (!Object.hasOwn(settings, input.name)) return;
  settings[input.name] = input.type === 'checkbox' ? input.checked : input.value;
  applySettings();
});
$('#reset-study').addEventListener('click', () => { Object.assign(settings, defaults); applySettings(); toast('Design settings reset.'); });
$('#copy-link').addEventListener('click', async () => {
  updateUrl();
  try {
    await navigator.clipboard.writeText(location.href);
    toast('Link copied with this look’s settings.');
  } catch {
    toast('Copy the address from your browser—it contains this look’s settings.');
  }
});

function filteredCards() {
  const query = state.search.trim().toLowerCase();
  const result = collection.filter((card) => (!state.location || card.location === state.location) && (!query || `${card.name} ${card.type} ${card.set}`.toLowerCase().includes(query)));
  if (state.sort) result.sort((a, b) => {
    const left = a[state.sort], right = b[state.sort];
    const comparison = typeof left === 'number' ? left - right : left.localeCompare(right);
    return comparison * (state.ascending ? 1 : -1);
  });
  return result;
}
function updateSelection() {
  const visible = filteredCards();
  const visibleSelected = visible.filter((card) => selected.has(card.id));
  $('#selection-bar').hidden = selected.size === 0;
  $('#selection-count').textContent = `${selected.size} ${selected.size === 1 ? 'entry' : 'entries'} selected`;
  $('#select-all').checked = visible.length > 0 && visibleSelected.length === visible.length;
  $('#select-all').indeterminate = visibleSelected.length > 0 && visibleSelected.length < visible.length;
  $('#select-all').disabled = visible.length === 0;
  $$('tbody tr', table).forEach((row) => {
    row.classList.toggle('selected', selected.has(row.dataset.id));
    row.querySelector('input').checked = selected.has(row.dataset.id);
  });
}
function renderCollection() {
  const visible = filteredCards();
  const tbody = $('tbody', table), gallery = $('#gallery-view');
  tbody.replaceChildren(); gallery.replaceChildren();
  visible.forEach((card) => {
    const row = node('tr'); row.dataset.id = card.id;
    const checkCell = node('td');
    const checkbox = node('input'); checkbox.type = 'checkbox'; checkbox.setAttribute('aria-label', `Select ${card.name}`);
    checkbox.addEventListener('change', () => { if (checkbox.checked) selected.add(card.id); else selected.delete(card.id); updateSelection(); });
    checkCell.append(checkbox); row.append(checkCell);
    columns.forEach(({ key }) => {
      const cell = node('td');
      if (key === 'name') {
        const button = node('button', 'card-name-button'); button.type = 'button';
        const image = node('img', 'card-thumb'); image.src = card.art; image.alt = ''; image.loading = 'lazy';
        button.append(image, node('span', 'card-name', card.name));
        button.addEventListener('click', () => openCard(card)); cell.append(button);
      } else if (key === 'location') {
        const label = node('span', 'location-label', card.location); label.dataset.location = card.location; cell.append(label);
      } else {
        cell.textContent = key === 'price' ? `$${card.price.toFixed(2)}` : card[key];
        if (key === 'qty' || key === 'price') cell.className = 'numeric';
        if (key === 'set') cell.className = 'set-cell';
        if (key === 'shortType') cell.className = 'type-cell';
      }
      row.append(cell);
    });
    tbody.append(row);
    const tile = node('button', 'gallery-card'); tile.type = 'button';
    const image = node('img'); image.src = card.image; image.alt = card.name; image.loading = 'lazy';
    tile.append(image, node('span', '', card.name), node('small', '', `${card.qty} ${card.qty === 1 ? 'copy' : 'copies'} · ${card.location}`));
    tile.addEventListener('click', () => openCard(card)); gallery.append(tile);
  });
  $('#table-view').hidden = state.display !== 'table' || visible.length === 0;
  gallery.hidden = state.display !== 'gallery' || visible.length === 0;
  $('#no-results').hidden = visible.length > 0;
  $('#result-count').textContent = `${visible.length} of ${collection.length} sample entries${state.sort ? ` · ${columns.find((column) => column.key === state.sort).label.toLowerCase()} ${state.ascending ? '↑' : '↓'}` : ''}`;
  updateSelection();
}
function initializeTable() {
  const group = $('colgroup', table), headRow = $('thead tr', table);
  const checkCol = node('col'); checkCol.style.width = '32px'; group.append(checkCol);
  const selectHead = node('th', 'check-head'); selectHead.scope = 'col';
  const selectAll = node('input'); selectAll.type = 'checkbox'; selectAll.id = 'select-all'; selectAll.setAttribute('aria-label', 'Select all visible cards');
  selectAll.addEventListener('change', () => { filteredCards().forEach((card) => { if (selectAll.checked) selected.add(card.id); else selected.delete(card.id); }); updateSelection(); });
  selectHead.append(selectAll); headRow.append(selectHead);
  columns.forEach((column, index) => {
    const col = node('col'); col.style.width = `${column.width}px`; group.append(col);
    const th = node('th'); th.scope = 'col'; th.dataset.key = column.key; th.setAttribute('aria-sort', 'none');
    const wrapper = node('div', 'column-head');
    const sort = node('button', 'sort-button'); sort.type = 'button'; sort.setAttribute('aria-label', `Sort by ${column.label.toLowerCase()}`);
    const arch = node('span', 'header-arch'); arch.setAttribute('aria-hidden', 'true');
    const letter = node('span', 'header-letter'); letter.setAttribute('aria-hidden', 'true');
    letter.append(node('span', 'header-word', column.title), node('span', 'header-initial', column.initial), node('span', 'header-arrow'));
    sort.title = column.label;
    sort.append(arch, letter);
    sort.addEventListener('click', () => {
      state.ascending = state.sort === column.key ? !state.ascending : true; state.sort = column.key;
      $$('th[data-key]', table).forEach((header) => {
        const active = header.dataset.key === state.sort;
        header.setAttribute('aria-sort', active ? (state.ascending ? 'ascending' : 'descending') : 'none');
      });
      renderCollection();
    });
    const handle = node('button', 'resize-handle'); handle.type = 'button';
    handle.setAttribute('role', 'separator'); handle.setAttribute('aria-orientation', 'vertical'); handle.setAttribute('aria-label', `Resize ${column.label.toLowerCase()} column`);
    handle.setAttribute('aria-valuemin', column.min); handle.setAttribute('aria-valuemax', '440'); handle.setAttribute('aria-valuenow', column.width);
    const allColumns = () => $$('col', table);
    function freezeWidths() {
      const widths = $$('th', table).map((header) => header.getBoundingClientRect().width);
      allColumns().forEach((element, i) => { element.style.width = `${widths[i]}px`; });
      return widths[index + 1];
    }
    function setWidth(width) {
      const next = Math.max(column.min, Math.min(440, Math.round(width)));
      col.style.width = `${next}px`; handle.setAttribute('aria-valuenow', next);
      table.style.width = `${allColumns().reduce((total, element) => total + parseFloat(element.style.width), 0)}px`;
    }
    handle.addEventListener('pointerdown', (event) => {
      if (!event.isPrimary || event.button !== 0) return;
      event.preventDefault();
      const initial = freezeWidths(), startX = event.clientX;
      handle.setPointerCapture(event.pointerId);
      const move = (next) => setWidth(initial + next.clientX - startX);
      const end = () => { handle.removeEventListener('pointermove', move); handle.removeEventListener('pointerup', end); handle.removeEventListener('pointercancel', end); };
      handle.addEventListener('pointermove', move); handle.addEventListener('pointerup', end); handle.addEventListener('pointercancel', end);
    });
    handle.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault(); const initial = freezeWidths(); setWidth(initial + (event.key === 'ArrowRight' ? 10 : -10));
    });
    wrapper.append(sort, handle); th.append(wrapper); headRow.append(th);
  });
}
function setView(view) {
  state.view = view;
  $('#collection-view').hidden = view !== 'collection'; $('#deck-view').hidden = view !== 'deck';
  $$('.app-sidebar [data-view]').forEach((button) => { if (button.dataset.view === view && !state.location) button.setAttribute('aria-current', 'page'); else button.removeAttribute('aria-current'); });
  $$('.container-nav').forEach((button) => { if (view === 'collection' && button.dataset.location === state.location) button.setAttribute('aria-current', 'page'); else button.removeAttribute('aria-current'); });
  updateUrl();
}
$$('[data-view]').forEach((button) => button.addEventListener('click', () => {
  state.location = ''; $('#location-filter').value = ''; renderCollection(); setView(button.dataset.view);
}));
$$('.container-nav').forEach((button) => button.addEventListener('click', () => {
  state.location = button.dataset.location; $('#location-filter').value = state.location; renderCollection(); setView('collection');
}));
$('#search').addEventListener('input', (event) => { state.search = event.target.value; renderCollection(); });
$('#location-filter').addEventListener('change', (event) => { state.location = event.target.value; renderCollection(); setView('collection'); });
$('#clear-filters').addEventListener('click', () => { state.search = ''; state.location = ''; $('#search').value = ''; $('#location-filter').value = ''; renderCollection(); setView('collection'); });
$('#clear-selection').addEventListener('click', () => { selected.clear(); updateSelection(); });
$$('[data-display]').forEach((button) => button.addEventListener('click', () => { state.display = button.dataset.display; updateDisplay(); }));
function updateDisplay() {
  $$('[data-display]').forEach((button) => button.setAttribute('aria-pressed', button.dataset.display === state.display));
  renderCollection(); updateUrl();
}

function openCard(card) {
  $('#card-full-image').src = card.image; $('#card-full-image').alt = card.name;
  $('#card-dialog-title').textContent = card.name; $('#card-type').textContent = card.type; $('#card-oracle').textContent = card.oracle;
  const record = $('#card-record'); record.replaceChildren();
  for (const [label, value] of [['Location', card.location], ['Edition', card.setName], ['Artist', card.artist]]) record.append(node('dt', '', label), node('dd', '', value));
  $('#card-source').href = card.url; $('#card-dialog').showModal();
}
$$('[data-close]').forEach((button) => button.addEventListener('click', () => button.closest('dialog').close()));
$$('dialog').forEach((dialog) => dialog.addEventListener('click', (event) => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
}));
const commander = collection.find((card) => card.name === 'Breya, Etherium Shaper');
$('#commander-art').src = commander.art;
$('#commander-preview').addEventListener('click', () => openCard(commander));
const deckGroups = [['Creatures', collection.filter((card) => card.type.includes('Creature'))], ['Artifacts & spells', collection.filter((card) => !card.type.includes('Creature'))]];
deckGroups.forEach(([title, entries]) => {
  const group = node('section', 'deck-group'), heading = node('h3', '', title);
  heading.append(node('small', '', `${entries.length}`)); group.append(heading);
  entries.forEach((card) => { const button = node('button', 'deck-card'); button.type = 'button'; button.append(node('span', '', '1'), node('span', '', card.name)); button.addEventListener('click', () => openCard(card)); group.append(button); });
  $('#deck-columns').append(group);
});
$('#edit-deck').addEventListener('click', () => {
  const form = $('#deck-form');
  form.elements.name.setCustomValidity('');
  form.elements.name.value = deck.name; form.elements.description.value = deck.description; form.elements.format.value = deck.format;
  $('#deck-dialog').showModal();
});
$('#deck-form').addEventListener('submit', (event) => {
  event.preventDefault(); const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  if (!name) { form.elements.name.setCustomValidity('Enter a deck name.'); form.elements.name.reportValidity(); return; }
  deck.name = name; deck.description = form.elements.description.value; deck.format = form.elements.format.value;
  $$('.deck-title').forEach((element) => { element.textContent = deck.name; });
  $('#deck-description').textContent = deck.description; $('#deck-format-label').textContent = `Your decks / ${deck.format}`;
  $('#deck-dialog').close(); toast('Sample deck details updated for this visit.');
});
$('#deck-form').elements.name.addEventListener('input', (event) => event.target.setCustomValidity(''));
const references = {
  grid: ['./assets/medieval-grid-reference.png', 'Reference 01 · Ornamental headings over a dense, ordered information grid.'],
  palette: ['./assets/palette-reference.png', 'Reference 02 · Exact hex values, with saturated colors on the left and muted colors on the right.'],
};
$$('[data-reference]').forEach((button) => button.addEventListener('click', () => {
  const [src, caption] = references[button.dataset.reference]; $('#reference-full-image').src = src; $('#reference-full-image').alt = caption; $('#reference-caption').textContent = caption; $('#reference-dialog').showModal();
}));
$('#open-brief').addEventListener('click', () => $('#brief-dialog').showModal());
$('#nav-card-count').textContent = collection.reduce((total, card) => total + card.qty, 0);
$('#collection-summary').textContent = `${collection.reduce((total, card) => total + card.qty, 0)} cards · ${collection.length} entries · 4 locations`;
initializeTable();
applySettings();
updateDisplay();
setView(state.view);
