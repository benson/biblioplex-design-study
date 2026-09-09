import '@vellum-css';
import '@vellum-story-css';
import '@app/styles.css';
import '@app/cleaner.css';
import '@preview-css';
import './theme.css';
import shellMeta, { buildApplicationShellStory } from '@stories/AppShell.stories.js';
import deckMeta from '@stories/DeckWorkspace.stories.js';
import { productionElement } from '@stories/productionMarkup.js';
import { initCardPreview, destroyCardPreview } from '@app/ui/cardPreview.js';
import { preloadHoverPreviewUi } from '@app/ui/hoverPreviewUi.js';
import { preloadImageLightboxUi } from '@app/ui/imageLightboxUi.js';
import { listOrderedCollectionTableColumns } from '@app/views/listRowView.js';
import { filterAndSortCollection, initSearch, moreFiltersSnapshot, applyUrlStateOnLoad } from '@app/search.js';
import { getMultiselectValue, populateMultiselect } from '@app/multiselect.js';
import { connectCollectionSettings } from './collection-settings.js';
import { connectSimpleSidebar } from './simple-sidebar.js';

const form = document.querySelector('#component-controls');
const stage = document.querySelector('#component-stage');
const status = document.querySelector('#component-status');
new ResizeObserver(([entry]) => {
  document.documentElement.style.setProperty('--study-controls-height', `${entry.target.getBoundingClientRect().height}px`);
}).observe(document.querySelector('.component-study-controls'));
const params = new URLSearchParams(location.search);
for (const input of form.elements) {
  if (!input.name) continue;
  const value = params.get(input.name);
  if (input.type === 'checkbox') input.checked = value === '1';
  else if ([...input.options].some((option) => option.value === value)) input.value = value;
}
const palettes = {
  muted: { ochre: '#A58B55', ember: '#8A5B48', jungle: '#4D6861', cobalt: '#526B8D', plum: '#6B5B70', sage: '#949B8B' },
  saturated: { ochre: '#B78B2E', ember: '#914027', jungle: '#145348', cobalt: '#1647A5', plum: '#4B2857', sage: '#849379' },
};

// This entry point never boots auth or sync. Reject backend traffic as a final
// guard if a production surface later gains an implicit API dependency.
const fetchResource = window.fetch.bind(window);
window.fetch = (input, init) => {
  const url = new URL(typeof input === 'string' || input instanceof URL ? input : input.url, location.href);
  if (/^biblioplex-api(?:[.-]|$)/.test(url.hostname)) {
    return Promise.reject(new Error('The component study uses local fixtures, not the collection API.'));
  }
  return fetchResource(input, init);
};

function applyAppearance() {
  const root = document.documentElement;
  root.dataset.componentTheme = form.elements.theme.value;
  root.dataset.sidebarVariant = form.elements.sidebar.value;
  for (const key of ['headings', 'frame', 'lighting']) root.dataset[key] = form.elements[key].value;
  root.dataset.compact = String(form.elements.compact.checked);
  for (const [key, value] of Object.entries(palettes[form.elements.palette.value])) root.style.setProperty(`--study-${key}`, value);
  document.body.classList.toggle('proper-case', form.elements.theme.value === 'study');
  const url = new URL(location.href);
  for (const input of form.elements) {
    if (input.name) url.searchParams.set(input.name, input.type === 'checkbox' ? (input.checked ? '1' : '0') : input.value);
  }
  history.replaceState(null, '', url);
}

// The real React header owns its nodes and handlers. These attributes supply
// theme-only lettering; we never replace its DOM, sort state, or resize logic.
const observedHeaders = new WeakSet();
const columnLabels = Object.fromEntries(listOrderedCollectionTableColumns().map((column) => [column.id, column.label]));
const headerObserver = new ResizeObserver((entries) => {
  for (const { target } of entries) {
    const label = columnLabels[target.dataset.columnId] || target.getAttribute('title') || target.dataset.columnId;
    const word = label.charAt(0).toUpperCase() + label.slice(1);
    target.dataset.studyLabel = target.getBoundingClientRect().width < 115 ? word.charAt(0) : word;
  }
});
function observeHeaders() {
  for (const th of stage.querySelectorAll('th[data-column-id]:not([data-column-id="check"]):not([data-column-id="__filler"])')) {
    if (observedHeaders.has(th)) continue;
    observedHeaders.add(th);
    headerObserver.observe(th);
  }
}
new MutationObserver(observeHeaders).observe(stage, { childList: true, subtree: true });

let rendering = 0;
async function renderScene() {
  const version = ++rendering;
  status.textContent = 'Loading components…';
  destroyCardPreview();
  document.getElementById('cardPreview')?.remove();
  document.getElementById('imageLightbox')?.remove();
  stage.replaceChildren();
  // Allow retiring production workbenches to release their React roots and
  // document listeners before mounting the next scene.
  await new Promise((resolve) => requestAnimationFrame(resolve));
  const scene = form.elements.scene.value;
  const meta = scene === 'deck' ? deckMeta : shellMeta;
  await Promise.all([...(meta.loaders || []).map((load) => load()), preloadHoverPreviewUi(), preloadImageLightboxUi()]);
  if (version !== rendering) return;
  const view = scene === 'deck'
    ? deckMeta.render({ ...deckMeta.args, mode: 'decklist' })
    : buildApplicationShellStory({
      ...shellMeta.args, sidebarWidth: form.elements.sidebar.value !== 'original' ? 240 : 205, properCase: form.elements.theme.value === 'study',
      filterFixtureCards: (cards) => filterAndSortCollection(cards, {
        ...moreFiltersSnapshot(),
        query: document.getElementById('searchInput')?.value || '',
        colors: getMultiselectValue(document.getElementById('filterColor')),
        colorIdentities: getMultiselectValue(document.getElementById('filterColorIdentity')),
      }).list,
      onFixtureReady: ({ render, cards, root }) => {
        if (form.elements.sidebar.value !== 'original') connectSimpleSidebar(root, { appHeader: form.elements.sidebar.value === 'header' });
        initSearch({ renderImpl: render });
        for (const [id, values] of [
          ['filterSet', cards.map((card) => card.setCode)],
          ['filterTag', cards.flatMap((card) => card.tags || [])],
        ]) {
          populateMultiselect(document.getElementById(id), [...new Set(values)].filter(Boolean).map((value) => ({ value, label: value })));
        }
        applyUrlStateOnLoad();
        void connectCollectionSettings({ render, root }, form, applyAppearance).catch(reportError);
      },
    });
  stage.append(view);
  document.body.append(productionElement('#cardPreview'), productionElement('#imageLightbox'));
  initCardPreview(document);
  applyAppearance();
  observeHeaders();
  status.textContent = '';
}
form.addEventListener('change', (event) => {
  applyAppearance();
  if (['scene', 'sidebar'].includes(event.target.name)) location.reload();
});
document.querySelector('#copy-study').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(location.href); status.textContent = 'Link copied.'; }
  catch { status.textContent = 'The browser address includes these settings.'; }
});
function reportError(error) {
  status.textContent = 'The component preview could not load. Reload to try again.';
  console.error(error);
}
applyAppearance();
void renderScene().catch(reportError);
