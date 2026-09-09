import { applySidebarCollapsed, applySidebarPeek } from '@app/sidebarPreferences.js';

// An opt-in playground interaction variant. Keep the real navigation and app
// state controller, replacing only its hover/pin policy and shell placement.
export function connectSimpleSidebar(root, { appHeader = false } = {}) {
  root.classList.add('simple-sidebar-workbench');
  root.classList.toggle('app-header-workbench', appHeader);
  const sidebar = root.querySelector('#appLeft');
  const shell = root.querySelector('.app-shell');
  const mobile = matchMedia('(max-width: 900px)');
  let open = true;
  try { open = localStorage.getItem('study-simple-sidebar-open') !== 'false'; } catch {}
  const header = document.createElement('header');
  header.className = 'simple-app-header';
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'simple-sidebar-toggle';
  toggle.setAttribute('aria-controls', 'appLeft');
  toggle.setAttribute('aria-keyshortcuts', '[');
  const glyph = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  glyph.setAttribute('viewBox', '0 0 24 24');
  glyph.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS(glyph.namespaceURI, 'path');
  path.setAttribute('d', 'M4 4.5h16v15H4zM10 4.5v15');
  glyph.append(path);
  toggle.append(glyph);
  const brand = document.createElement('span');
  brand.textContent = 'Biblioplex';
  header.append(toggle, brand);
  root.prepend(header);
  const backdrop = document.createElement('button');
  backdrop.className = 'simple-sidebar-backdrop';
  backdrop.type = 'button';
  backdrop.setAttribute('aria-label', 'Close navigation');
  backdrop.tabIndex = -1;
  root.append(backdrop);
  let mobileOpen = false;
  function sync() {
    applySidebarPeek(false);
    applySidebarCollapsed(mobile.matches ? false : !open);
    root.classList.toggle('simple-sidebar-mobile-open', mobile.matches && mobileOpen);
    if (mobile.matches) {
      sidebar.inert = !mobileOpen;
      sidebar.setAttribute('aria-hidden', String(!mobileOpen));
    }
    const expanded = mobile.matches ? mobileOpen : open;
    root.querySelector('.app-center').inert = mobile.matches && mobileOpen;
    toggle.setAttribute('aria-expanded', String(expanded));
    toggle.setAttribute('aria-label', expanded ? 'Hide sidebar' : 'Show sidebar');
    toggle.title = `${expanded ? 'Hide sidebar' : 'Show sidebar'} ([)`;
  }
  function change() {
    if (mobile.matches) {
      document.body.classList.remove('left-drawer-open');
      mobileOpen = !mobileOpen;
    }
    else {
      open = !open;
      try { localStorage.setItem('study-simple-sidebar-open', String(open)); } catch {}
    }
    sync();
  }
  toggle.addEventListener('click', change);
  backdrop.addEventListener('click', () => { mobileOpen = false; sync(); toggle.focus(); });
  // Production pointer/focus handlers belong to the pin/peek pattern. Stop only
  // events targeted at the aside itself; child navigation events stay intact.
  for (const type of ['pointerenter', 'pointerleave', 'focusin', 'focusout']) {
    sidebar.addEventListener(type, (event) => event.stopImmediatePropagation(), true);
  }
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab' && mobileOpen) {
      const stops = [toggle, ...sidebar.querySelectorAll('button, a[href], input, select, [tabindex="0"]')].filter(el => !el.disabled && el.getClientRects().length);
      const at = stops.indexOf(document.activeElement);
      if (event.shiftKey && at <= 0) { event.preventDefault(); stops.at(-1)?.focus(); }
      else if (!event.shiftKey && (at < 0 || at === stops.length - 1)) { event.preventDefault(); toggle.focus(); }
    }
    if (event.key === 'Escape' && mobileOpen) {
      event.preventDefault(); event.stopImmediatePropagation();
      mobileOpen = false; sync(); toggle.focus(); return;
    }
    if (event.key !== '[' || event.altKey || event.ctrlKey || event.metaKey || event.defaultPrevented) return;
    if (event.target.closest('input, textarea, select, [contenteditable="true"]')) return;
    if (document.querySelector('.detail-drawer.visible, .modal-open, .confirm-modal-open')) return;
    event.preventDefault(); event.stopImmediatePropagation(); change();
  }, true);
  sidebar.addEventListener('click', (event) => {
    if (mobile.matches && event.target.closest('.scope-option, .scope-option-group-destination')) {
      mobileOpen = false; sync(); toggle.focus();
    }
  });
  // Preserve the chosen desktop state when production crosses its compact
  // breakpoint. The fixture registered its media listener before this one.
  matchMedia('(min-width: 901px) and (max-width: 1180px)').addEventListener('change', sync);
  mobile.addEventListener('change', () => { mobileOpen = false; sync(); });
  // Move the existing account control without replacing its event handlers.
  const account = sidebar.querySelector('#sidebarBrandSlot');
  if (account) sidebar.append(account);
  if (appHeader) {
    const tools = document.createElement('div');
    tools.className = 'simple-header-tools';
    const utility = root.querySelector('.mobile-utility-menu');
    if (utility) {
      utility.removeAttribute('open');
      tools.append(utility);
      utility.addEventListener('click', (event) => {
        if (event.target.closest('.mobile-utility-menu-panel a, .mobile-utility-menu-panel button')) utility.open = false;
      });
    }
    const accountControl = account?.querySelector('#syncAccountSlot');
    if (accountControl) tools.append(accountControl);
    header.append(tools);
  }
  const handle = document.createElement('div');
  handle.className = 'simple-sidebar-resize';
  handle.tabIndex = 0;
  handle.setAttribute('role', 'separator');
  handle.setAttribute('aria-label', 'Sidebar width');
  handle.setAttribute('aria-orientation', 'vertical');
  handle.setAttribute('aria-valuemin', '220');
  handle.setAttribute('aria-valuemax', '360');
  handle.setAttribute('aria-valuenow', '240');
  sidebar.append(handle);
  const resize = (width) => {
    const value = Math.max(220, Math.min(360, width));
    root.style.setProperty('--sidebar-width', `${value}px`);
    handle.setAttribute('aria-valuenow', String(Math.round(value)));
  };
  handle.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    resize(event.key === 'Home' ? 220 : event.key === 'End' ? 360 : Number(handle.getAttribute('aria-valuenow')) + (event.key === 'ArrowRight' ? 10 : -10));
  });
  if (handle) {
    handle.addEventListener('pointerdown', (event) => {
      if (event.button !== 0 || mobile.matches) return;
      event.preventDefault(); handle.setPointerCapture(event.pointerId);
      const move = (next) => resize(next.clientX - shell.getBoundingClientRect().left);
      const finish = () => { handle.removeEventListener('pointermove', move); handle.removeEventListener('pointerup', finish); handle.removeEventListener('pointercancel', finish); };
      handle.addEventListener('pointermove', move);
      handle.addEventListener('pointerup', finish);
      handle.addEventListener('pointercancel', finish);
    });
  }
  sync();
}
