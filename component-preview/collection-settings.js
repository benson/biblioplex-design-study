import { state } from '@app/state.js';
import { renderCollectionSettingsInto, preloadCollectionSettingsUi } from '@app/ui/collectionSettingsController.js';
import { DEFAULT_COLLECTION_TABLE_COLUMN_CONFIG, listOrderedCollectionTableColumns } from '@app/views/listRowView.js';
import { collectionCardSizeWidthFromStop } from '@app/ui/collectionCardSize.js';

// Fixture callbacks around the actual React settings component. These mutate
// only the workbench state and never call the production persistence layer.
export async function connectCollectionSettings({ render, root }, form, applyAppearance) {
  await preloadCollectionSettingsUi();
  const panel = document.getElementById('collectionColumnSettingsPanel');
  const views = [];
  let activeViewId = null, defaultViewId = '', editingNamedViewId = '';
  const snapshot = () => ({
    mode: state.collectionDisplayMode,
    hiddenTableColumnIds: [...state.collectionTableHiddenColumnIds],
    hiddenVisualFieldIds: [...state.collectionVisualHiddenFields],
    visualPriceStyle: state.visualPriceStyle,
    visualCardWidth: state.collectionVisualCardWidth,
    binderMode: state.collectionBinderMode,
    binderLayout: state.collectionBinderLayout,
    tableDensity: form.elements.compact.checked ? 'compact' : 'comfortable',
  });
  const restore = (saved) => {
    state.collectionDisplayMode = saved.mode;
    state.collectionTableHiddenColumnIds = [...saved.hiddenTableColumnIds];
    state.collectionVisualHiddenFields = [...saved.hiddenVisualFieldIds];
    state.visualPriceStyle = saved.visualPriceStyle;
    state.collectionVisualCardWidth = saved.visualCardWidth;
    state.collectionBinderMode = saved.binderMode;
    state.collectionBinderLayout = saved.binderLayout;
    form.elements.compact.checked = saved.tableDensity === 'compact';
    applyAppearance();
  };
  const refresh = () => renderCollectionSettingsInto(panel, {
    ...snapshot(), tableColumns: listOrderedCollectionTableColumns(state.collectionTableColumnOrder),
    namedViews: views, activeViewId, defaultViewId, editingNamedViewId,
    activeViewDirty: !!activeViewId && JSON.stringify(snapshot()) !== JSON.stringify(views.find((view) => view.id === activeViewId)?.snapshot),
  }, actions);
  const update = (fn) => { fn(); render(); refresh(); };
  const actions = {
    onColumn: (id, visible) => update(() => {
      const key = state.collectionDisplayMode === 'visual' ? 'collectionVisualHiddenFields' : 'collectionTableHiddenColumnIds';
      const hidden = new Set(state[key]);
      if (visible) hidden.delete(id); else hidden.add(id);
      state[key] = [...hidden];
    }),
    onDensity: (density) => update(() => { form.elements.compact.checked = density === 'compact'; applyAppearance(); }),
    onReset: () => update(() => {
      state.collectionTableHiddenColumnIds = [...DEFAULT_COLLECTION_TABLE_COLUMN_CONFIG.hiddenColumnIds];
      state.collectionTableColumnOrder = [...DEFAULT_COLLECTION_TABLE_COLUMN_CONFIG.columnOrder];
      state.collectionTableColumnWidths = { ...DEFAULT_COLLECTION_TABLE_COLUMN_CONFIG.columnWidths };
      form.elements.compact.checked = false; applyAppearance();
    }),
    onPriceStyle: (value) => update(() => { state.visualPriceStyle = value; }),
    onBinderMode: (value) => update(() => { state.collectionBinderMode = value; }),
    onBinderLayout: (value) => update(() => { state.collectionBinderLayout = value; }),
    onCardSize: (stop) => update(() => { state.collectionVisualCardWidth = collectionCardSizeWidthFromStop(stop); }),
    onViewAction(action, id, name) {
      const view = views.find((entry) => entry.id === id);
      update(() => {
        if (action === 'create') {
          const entry = { id: crypto.randomUUID(), name: `View ${views.length + 1}`, snapshot: snapshot() };
          views.push(entry); activeViewId = entry.id;
        } else if (action === 'apply' && view) { restore(view.snapshot); activeViewId = view.id; }
        else if (action === 'save-changes') { const active = views.find((entry) => entry.id === activeViewId); if (active) active.snapshot = snapshot(); }
        else if (action === 'rename' && view) editingNamedViewId = id;
        else if (action === 'rename-save' && view) { view.name = name.trim() || view.name; editingNamedViewId = ''; }
        else if (action === 'rename-cancel') editingNamedViewId = '';
        else if (action === 'duplicate' && view) { const copy = { ...structuredClone(view), id: crypto.randomUUID(), name: `${view.name} copy` }; views.push(copy); activeViewId = copy.id; }
        else if (action === 'set-default' && view) defaultViewId = id;
        else if (action === 'delete' && view) { views.splice(views.indexOf(view), 1); if (activeViewId === id) activeViewId = null; }
      });
    },
    async onCopyLink() {
      const url = new URL(location.href);
      url.searchParams.set('layout', JSON.stringify(snapshot()));
      await navigator.clipboard.writeText(url.href);
      document.querySelector('#component-status').textContent = 'View link copied.';
    },
  };
  const saved = new URLSearchParams(location.search).get('layout');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      const defaults = snapshot();
      if (['table', 'visual'].includes(parsed.mode) && Array.isArray(parsed.hiddenTableColumnIds) && Array.isArray(parsed.hiddenVisualFieldIds)) {
        restore({ ...defaults, ...parsed });
        render();
      }
    } catch { /* Invalid shared layouts use the fixture defaults. */ }
  }
  root.addEventListener('click', (event) => {
    if (event.target.closest('#collectionDisplayControls')) queueMicrotask(refresh);
  });
  form.addEventListener('change', refresh);
  refresh();
}
