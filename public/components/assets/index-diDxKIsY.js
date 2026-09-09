const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CollectionToolbarPopover-TsvikCVD.js","./jsx-runtime-Bn9FJzYa.js","./AccountStatus-QKuPTJJB.js"])))=>i.map(i=>d[i]);
import{Bt as e,D as t,F as n,Fn as r,Ft as i,Hi as a,In as o,Ln as s,Mr as c,N as l,O as u,Rn as d,Rr as f,S as p,T as m,Ui as h,Yi as g,Zr as _,_ as v,_r as y,ar as ee,bi as te,cr as b,dr as x,fr as S,g as C,h as w,hr as T,lr as E,m as ne,mn as D,nr as O,or as re,pr as k,qi as A,sr as j,ur as M,v as ie,vn as N,x as ae,y as oe,zn as se,zt as ce}from"./persistence-10b6LTYv.js";import{$ as P,A as le,B as F,C as I,D as L,E as R,F as ue,G as de,H as fe,I as z,J as pe,K as me,L as B,M as V,N as he,O as H,P as ge,Q as U,R as W,S as _e,T as ve,U as ye,V as be,W as xe,X as Se,Y as Ce,Z as we,_ as Te,a as Ee,at as De,b as Oe,c as ke,ct as Ae,d as je,et as Me,f as Ne,g as Pe,h as Fe,i as Ie,it as Le,j as Re,k as ze,l as Be,m as Ve,nt as He,o as Ue,ot as We,p as Ge,q as Ke,r as qe,rt as Je,s as Ye,st as Xe,tt as Ze,u as Qe,v as $e,w as et,x as tt,y as nt,z as rt}from"./view-8cZ67cmo.js";import{t as it}from"./preload-helper-HclGiUj8.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),await Promise.all([Xe(),Le(),Ze()]);function at(e,t={}){let n=e.querySelector(`colgroup`);n||(n=e.ownerDocument.createElement(`colgroup`),e.prepend(n)),n.dataset.collectionTableColumns=``,De(n,{columns:S(t)}),Ae(e.tHead||e.createTHead(),{columns:S(t)}),e.style.setProperty(`--collection-table-real-width`,k(t)+`px`)}function ot(e){e&&(We(e.tHead),Je(e.querySelector(`colgroup`)),Me(e.tBodies[0]))}var st=`(min-width: 901px)`;function ct(e){let t=Math.max(0,Number(e)||0);return`apply · ${t.toLocaleString()} ${t===1?`card`:`cards`}`}function lt({triggerRect:e,panelRect:t,viewportWidth:n,viewportHeight:r,align:i=`end`,gutter:a=12,gap:o=8}={}){let s=i===`start`?e.left:e.right-t.width,c=Math.max(a,Math.min(s,n-t.width-a)),l=r-e.bottom-o-a,u=e.top-o-a,d=l<Math.min(t.height,320)&&u>l,f=Math.max(160,Math.floor(d?u:l)),p=d?Math.max(a,e.top-o-Math.min(t.height,f)):e.bottom+o;return{left:Math.round(c),top:Math.round(p),maxHeight:f,placeAbove:d}}function G(e,t){let n=t?.parentNode;!n||!e||n.insertBefore(e,t.nextSibling)}function ut(e,t,n){let r=e.createComment(t);return n.before(r),r}var dt,ft,pt=new Map;function mt(e=()=>it(()=>import(`./CollectionToolbarPopover-TsvikCVD.js`),__vite__mapDeps([0,1]),import.meta.url)){return ft||=e().then(e=>dt=e)}function ht(e,{className:t,label:n,kind:r,controls:i}){let a=e.createElement(`button`);a.type=`button`,a.className=`btn btn-secondary collection-toolbar-popover-trigger ${t}`,a.setAttribute(`aria-expanded`,`false`),a.setAttribute(`aria-controls`,i);let o=dt.mountCollectionToolbarTrigger(a);return o.update({kind:r,label:n}),{button:a,root:o}}function gt({documentObj:e=globalThis.document,windowObj:t=e?.defaultView||globalThis.window}={}){let n=e?.getElementById(`collectionControlsToolbar`);pt.get(n)?.();let r=e?.getElementById(`searchInput`)?.closest(`.sidebar-section`),i=e?.getElementById(`filterSet`)?.closest(`.sidebar-section`),a=e?.querySelector(`.sidebar-view-settings`),o=e?.getElementById(`appLeft`),s=e?.getElementById(`collectionColumnSettingsPanel`),c=e?.getElementById(`collectionDisplayControls`),l=e?.getElementById(`filterSet`),d=e?.getElementById(`filterTag`),f=e?.getElementById(`filterFormat`);if(!n||!r||!i||!a||!o||!s||!c||!l||!d||!f)return()=>{};if(!dt)throw Error(`Call preloadCollectionToolbarUi before initializing the toolbar`);let p=ut(e,`collection search lives here on mobile`,r),m=ut(e,`collection filters live here on mobile`,i),h=ut(e,`collection view settings live here on mobile`,a),g=ut(e,`collection settings panel lives here on mobile`,s),_=[l,d,f],y=i.querySelector(`.sidebar-filters`),ee=[...y?.childNodes||[]],te=new Map([...y?.querySelectorAll(`[id]`)||[]].map(e=>[e.id,e]));e.getElementById(`filterTreatment`)?.setAttribute(`hidden`,``);let b=[`filterTreatment`,`filterDeckFormat`,`clearFiltersBtn`,`locationOptions`].map(t=>e.getElementById(t)).filter(Boolean),x=_.map(t=>ut(e,`${t.id} lives here on mobile`,t)),{button:S,root:w}=ht(e,{className:`collection-toolbar-more-trigger`,label:`filters`,kind:`filters`,controls:`collectionToolbarMoreFilters`}),T=e.createElement(`div`);T.className=`collection-toolbar-more-control`;let E=e.createElement(`button`);E.type=`button`,E.className=`collection-toolbar-more-clear`,E.textContent=`×`,E.hidden=!0;let D=e.createElement(`div`);D.id=`collectionToolbarMoreFilters`,D.className=`collection-toolbar-popover collection-toolbar-more-popover`,D.hidden=!0;let O=dt.mountCollectionToolbarPopover(D),re={kind:`filters`,content:i,onAction:e=>be(e)};O.update(re),T.append(S,E);let k=e.createElement(`div`);k.id=de,k.className=`collection-toolbar-filter-chips hidden`;let A=t=>{let n=te.get(t)||e.getElementById(t);return n?n.matches?.(`.multiselect, [data-default-label]`)?n:n.closest?.(`.advanced-filter-field, label`)||n:null},j=(t,n,r=[])=>{let i=A(t);if(!i)return null;let a=e.createElement(`div`);if(a.className=`collection-filter-field`,!i.matches?.(`.multiselect, [data-default-label]`)){let t=e.createElement(`span`);t.className=`collection-filter-label`,t.textContent=n,a.append(t)}a.append(i);for(let e of r){let t=A(e);t&&t!==i&&a.append(t)}return a},M=e=>A(e),N=(t,n)=>{let r=e.createElement(`section`);r.className=`collection-filter-group`;let i=e.createElement(`h4`);return i.textContent=t,r.append(i,...n.filter(Boolean)),r},se=()=>{if(!y)return;y.replaceChildren();let t=e.createElement(`div`);t.className=`collection-filter-range`;let n=M(`filterMinPrice`),r=M(`filterMaxPrice`);n&&t.append(n),r&&t.append(r);let i=e.createElement(`div`);i.className=`collection-filter-hierarchy`,i.append(N(`printing and organization`,[j(`filterSet`,`set`),j(`filterTag`,`tag`),j(`filterFormat`,`format legality`)]),N(`collection details`,[j(`filterRarity`,`rarity`),j(`filterFoil`,`finish`),t.childNodes.length?t:null]),N(`card characteristics`,[j(`filterColor`,`color`,[`filterColorMode`]),j(`filterColorIdentity`,`color identity`,[`filterColorIdentityMode`]),M(`filterTypeLine`),M(`filterOracleText`),M(`filterManaCost`),M(`filterManaValue`),M(`filterPower`),M(`filterToughness`),M(`filterLoyalty`)]),N(`tracked-copy details`,[j(`filterCondition`,`condition`),j(`filterLanguage`,`language`),j(`filterContainer`,`container`)]));let a=ee.filter(e=>e.nodeType===1&&!i.contains(e)&&!_.includes(e)&&!b.includes(e));y.append(i,...b,...a)},ce=()=>{y&&y.replaceChildren(...ee)};[[`filterRarity`,`rarity`],[`filterFoil`,`finish`],[`filterTreatment`,`treatment`],[`filterColor`,`color`],[`filterColorIdentity`,`color identity`],[`filterCondition`,`condition`],[`filterLanguage`,`language`],[`filterContainer`,`container`],[`filterDeckFormat`,`deck format`]].forEach(([t,n])=>{e.getElementById(t)?.setAttribute(`data-toolbar-filter-label`,n)});let{button:P,root:le}=ht(e,{className:`collection-toolbar-settings-trigger`,label:`view settings`,kind:`settings`,controls:`collectionToolbarSettings`});P.setAttribute(`aria-label`,`view settings`),P.title=`view settings`;let F=e.createElement(`div`);F.id=`collectionToolbarSettings`,F.className=`collection-toolbar-popover collection-toolbar-settings-popover`,F.hidden=!0;let I=dt.mountCollectionToolbarPopover(F);I.update({kind:`settings`,content:s}),a.append(P,F);let L=[...c.querySelectorAll(`[data-collection-display-mode]`)],R=new Map(L.map(e=>[e,[...e.childNodes]])),ue=()=>{L.forEach(e=>{let t=e.getAttribute(`data-collection-display-mode`)===`visual`?`visual view`:`table view`,n=e.querySelector(`svg`);e.replaceChildren(...n?[n]:[]),e.setAttribute(`aria-label`,t),e.title=t})},fe=()=>{L.forEach(e=>{e.replaceChildren(...R.get(e)||[]),e.removeAttribute(`aria-label`),e.removeAttribute(`title`)})},z=null,pe=!1,B=(n,r,i=`end`)=>{if(!pe||r.hidden)return;let a=lt({triggerRect:n.getBoundingClientRect(),panelRect:r.getBoundingClientRect(),viewportWidth:t?.innerWidth||e.documentElement.clientWidth,viewportHeight:t?.innerHeight||e.documentElement.clientHeight,align:i});r.style.left=`${a.left}px`,r.style.right=`auto`,r.style.top=`${a.top}px`,r.style.maxHeight=`${a.maxHeight}px`},V=()=>{z&&B(z.button,z.popover,z.popover===D?`start`:`end`)},he=()=>{let t=ae(e);w.update({kind:`filters`,label:t?`filters · ${t}`:`filters`}),S.classList.toggle(`is-active`,t>0),S.setAttribute(`aria-label`,t?`${t} filter ${t===1?`group`:`groups`} active`:`filters`),E.hidden=t===0,E.setAttribute(`aria-label`,t?`clear ${t} hidden filter ${t===1?`group`:`groups`}`:`clear hidden filters`),xe(k,e)},H=0,ge=()=>{let t=ct(u(e));O.update({...re,applyLabel:t})},U=()=>{t?.clearTimeout?.(H),H=t?.setTimeout?.(ge,80)||0},W=({returnFocus:t=!1}={})=>{if(!z)return;let{button:n,popover:r}=z;r===D&&v(e),r.hidden=!0,n.setAttribute(`aria-expanded`,`false`),z=null,t&&n.focus()},_e=(t,n)=>{let r=z?.popover===n;W({returnFocus:!0}),!r&&(n===D&&(C(e),ge()),n.hidden=!1,t.setAttribute(`aria-expanded`,`true`),z={button:t,popover:n},V(),n===D&&n.querySelector(`[data-more-filters-body] input:not([disabled]), [data-more-filters-body] select:not([disabled]), [data-more-filters-body] button:not([disabled]), input:not([disabled]), select:not([disabled]), button:not([disabled]), [tabindex="0"]`)?.focus({preventScroll:!0}))},ve=()=>_e(S,D),ye=()=>_e(P,F),be=t=>{if(t===`clear`){oe(e),ge();return}if(t===`apply`){ne(e),he(),W({returnFocus:!0});return}t===`close`&&W({returnFocus:!0})},Se=e=>{z&&(z.popover.contains(e.target)||z.button.contains(e.target)||W({returnFocus:!0}))},Ce=e=>{e.key!==`Escape`||!z||e.target.closest?.(`[data-saved-view-menu], [data-named-view-rename-input]`)||(e.preventDefault(),e.stopPropagation(),W({returnFocus:!0}))};S.addEventListener(`click`,ve);let we=t=>{t.stopPropagation(),ie(e),he()};E.addEventListener(`click`,we),P.addEventListener(`click`,ye),D.addEventListener(`input`,U),D.addEventListener(`change`,U),e.addEventListener(`pointerdown`,Se),e.addEventListener(`keydown`,Ce,!0),t?.addEventListener?.(`resize`,V),t?.addEventListener?.(`scroll`,V,!0);let Te=t?.matchMedia?.(st),Ee=()=>{let o=Te?Te.matches:t?.innerWidth>900;if(n.hidden=!o,n.classList.toggle(`is-active`,!!o),o){se(),D.querySelector(`[data-more-filters-body]`)?.append(i),F.append(s),pe=!0,D.classList.add(`is-top-layer`),F.classList.add(`is-top-layer`),e.body.append(D,F),ue(),r.classList.add(`collection-toolbar-search`),a.classList.add(`collection-toolbar-view`),a.prepend(T),n.append(r,k,a);return}W(),pe=!1,D.classList.remove(`is-top-layer`),D.removeAttribute(`style`),F.classList.remove(`is-top-layer`),F.removeAttribute(`style`),T.remove(),a.append(F),ce(),G(r,p),G(i,m),D.remove(),_.forEach((e,t)=>G(e,x[t])),G(s,g),G(a,h),r.classList.remove(`collection-toolbar-search`),a.classList.remove(`collection-toolbar-view`),fe()};try{let e=new URL(t.location.href);e.searchParams.has(`toolbarVariant`)&&(e.searchParams.delete(`toolbarVariant`),t.history.replaceState(null,``,e))}catch{}Ee(),he(),Te?.addEventListener?.(`change`,Ee);let De=!0,Oe=()=>{De&&(De=!1,pt.delete(n),Te?.removeEventListener?.(`change`,Ee),S.removeEventListener(`click`,ve),E.removeEventListener(`click`,we),P.removeEventListener(`click`,ye),D.removeEventListener(`input`,U),D.removeEventListener(`change`,U),t?.clearTimeout?.(H),e.removeEventListener(`pointerdown`,Se),e.removeEventListener(`keydown`,Ce,!0),t?.removeEventListener?.(`resize`,V),t?.removeEventListener?.(`scroll`,V,!0),W(),ce(),G(r,p),G(i,m),_.forEach((e,t)=>G(e,x[t])),G(s,g),G(a,h),r.classList.remove(`collection-toolbar-search`),a.classList.remove(`collection-toolbar-view`),fe(),p.remove(),m.remove(),h.remove(),g.remove(),x.forEach(e=>e.remove()),n.hidden=!0,n.classList.remove(`is-active`),w.destroy(),le.destroy(),O.destroy(),I.destroy(),P.remove(),T.remove(),D.remove(),F.remove(),me(k),k.remove())};return pt.set(n,Oe),Oe}function _t({documentObj:e=globalThis.document,windowObj:t=e?.defaultView||globalThis.window}={}){let n=t?.matchMedia?.(`(min-width: 901px)`),r=()=>{let t=!!n?.matches,r=e?.querySelector?.(`.app-header`),i=e?.querySelector?.(`.app-primary-nav`),a=e?.querySelector?.(`.app-title-row`),o=e?.getElementById?.(`syncAccountSlot`),s=e?.getElementById?.(`sidebarBrandSlot`);t?o&&s&&s.prepend(o):(a&&r&&r.prepend(a),o&&i&&i.append(o)),e?.body?.classList.toggle(`desktop-sidebar-shell`,t)};return r(),n?.addEventListener?.(`change`,r),()=>n?.removeEventListener?.(`change`,r)}var vt,yt,bt=new WeakMap,xt=new WeakMap;function St(e=()=>it(()=>import(`./AccountStatus-QKuPTJJB.js`),__vite__mapDeps([2,1]),import.meta.url)){return yt||=e().then(e=>vt=e).catch(e=>{throw yt=null,e})}function Ct(e,t){if(!e)return null;if(!vt)return xt.set(e,t),St().then(()=>{let t=xt.get(e);t&&(xt.delete(e),bt.set(e,vt.mountAccountStatus(e,t)))}),null;let n=bt.get(e);return n?n.update(t):(n=vt.mountAccountStatus(e,t),bt.set(e,n)),n}var K=null;function wt(e){let t=e?.getElementById?.(`settingsPopover`);!t||!e.body||t.parentElement===e.body||e.body.append(t)}var Tt=null,Et={key:null,since:0},Dt=!1,q=null;function Ot(){return Date.now()}function kt(){q!=null&&(clearTimeout(q),q=null)}function At(e){kt(),q=setTimeout(()=>{q=null,It()},Math.max(0,e)),q?.unref?.()}function jt(e){return{signedIn:!!e.user,mode:e.mode||`local`,cause:e.cause||`unknown`,gateReason:se().reason,detail:e.detail||``,writeFailureAt:e.writeFailureAt||0}}function Mt(t,n){let a=t?.getElementById?.(`syncAlertBanner`),c=jt(n),l=s(c);l!==Et.key&&(Et={key:l,since:l?Ot():0},Dt=!1,l||o());let u=d({...c,since:Et.since,now:Ot(),escalated:r(),dismissed:Dt});return u.pending?At(u.pendingInMs):kt(),a&&B(a,{kind:`sync`,visible:u.visible,message:u.message||``,tone:u.tone,showRetry:u.showRetry,onRetry:()=>{e().catch(e=>_(e.message,`error`))},onDismiss:()=>{Dt=!0,i(),Mt(t,Tt||n)}}),u}var Nt=!1;function Pt(e,{active:t}){let n=e?.getElementById?.(`authLossBanner`);n&&(t||(Nt=!1),B(n,{kind:`auth`,visible:t&&!Nt,message:`you've been signed out — new changes aren't syncing. sign in to resync.`,onRetry:()=>{ce().catch(e=>_(e.message,`error`))},onDismiss:()=>{Nt=!0,Pt(e,{active:t})}}))}function Ft(e){if(Tt=e||null,!K)return;wt(K.ownerDocument||document);let t=!!e.user,n=K.ownerDocument?.getElementById?.(`settingsAccountGroup`);n&&(n.hidden=!t);let r=!t&&!!h.ephemeralSeed,i=t&&se().reason===`offline`,a=r?`demo — not saved`:`not signed in`,o=r?`you're exploring a demo collection — nothing here is saved. sign in to keep it or start your own.`:`read-only — sign in to edit and sync this collection`,s=e.user?.label||`my account`,c=e.mode||`local`,l=K.ownerDocument||document,u=Mt(l,e),d=!!u.condition&&!u.pending,f=t&&d&&u.condition!==`offline`,p=f?e.kind===`offline`?`offline`:`rejected`:``;Pt(l,{active:!!e.unexpectedSignOut}),Ct(K,{className:`sync-chip mobile-bottom-nav-item sync-chip-${c}${t?` sync-chip-account`:``}${f?` sync-chip-needs-attention`:``}${p?` sync-chip-kind-`+p:``}${i?` sync-chip-offline`:``}${r?` sync-chip-demo`:``}`,label:t?s:a,ariaLabel:t?s:`${a} - ${o}`,signedIn:t,settings:K.ownerDocument.getElementById(`headerSettings`)})}function It(){Tt&&Ft(Tt)}function Lt(e,t,n=null){let r=K;K=t;try{Ft(e)}finally{K=r}}function Rt({rootEl:e=globalThis.document,documentObj:t=e?.ownerDocument||globalThis.document,windowObj:n=t?.defaultView||globalThis.window,resolveTables:r=()=>[],normalizeWidth:i,tableOptionsFor:a=()=>({}),tableRealWidth:o,readColumnWidths:s=()=>({}),writeColumnWidths:c=()=>{},onPreview:l=()=>{},onCommit:u=()=>{},onStatus:d=()=>{}}={}){if(!e||!t||!i||!o)return()=>{};let f=null,p=!1,m=null,h=(e,t)=>i(e,t)||null,g=e=>r().map(t=>{let r=n?.CSS?.escape?n.CSS.escape(e):e,i=t.querySelector(`colgroup[data-collection-table-columns] col[data-column-id="${r}"]`);return i?{column:i,table:t,realWidth:o(a(t))}:null}).filter(Boolean),_=(e,t,n=null)=>{let r=h(e,t);if(!r)return null;let i=n?.targets||g(e),a=n?.startWidth||r;for(let e of i)e.column.style.width=`${r}px`,e.table.style.setProperty(`--collection-table-real-width`,`${Math.max(0,e.realWidth+r-a)}px`);return l({columnId:e,width:r,targets:i}),r},v=(e,t,n=null)=>{let r=h(e,t);return r?(c({...s(),[e]:r}),_(e,r,n),d({columnId:e,width:r}),r):null},y=e=>{if(f)return;let n=e.target?.closest?.(`[data-collection-column-resize]`);if(!n||typeof e.button==`number`&&e.button!==0)return;let r=String(n.dataset.collectionColumnResize||``),i=n.closest(`th[data-column-id]`)?.getBoundingClientRect?.().width||0;!r||i<=0||(e.preventDefault(),e.stopPropagation(),f={columnId:r,latestWidth:i,moved:!1,pointerId:e.pointerId,rafId:0,startX:e.clientX,startWidth:h(r,i)||i,targets:g(r)},t.body?.classList.add(`collection-column-resizing`),n.setPointerCapture?.(e.pointerId))},ee=e=>{let t=f;if(!t||t.pointerId!=null&&e.pointerId!=null&&t.pointerId!==e.pointerId)return;let r=e.clientX-t.startX;t.moved||=Math.abs(r)>=2,t.latestWidth=t.startWidth+r,!t.rafId&&(t.rafId=n.requestAnimationFrame(()=>{f===t&&(t.rafId=0,_(t.columnId,t.latestWidth,t))}))},te=()=>{p=!0,m!=null&&n.clearTimeout(m),m=n.setTimeout(()=>{m=null,p=!1},120)},b=e=>{let r=f;r&&(e?.pointerId==null||r.pointerId==null||e.pointerId===r.pointerId)&&(r.rafId&&=(n.cancelAnimationFrame(r.rafId),0),v(r.columnId,r.latestWidth,r),f=null,t.body?.classList.remove(`collection-column-resizing`),r.moved&&te(),u({columnId:r.columnId,width:h(r.columnId,r.latestWidth)}))},x=e=>{if(e.key!==`ArrowLeft`&&e.key!==`ArrowRight`)return;let t=e.target?.closest?.(`[data-collection-column-resize]`);if(!t)return;let n=String(t.dataset.collectionColumnResize||``),r=t.closest(`th[data-column-id]`)?.getBoundingClientRect?.().width||0;if(!n||r<=0)return;e.preventDefault(),e.stopPropagation();let i=e.key===`ArrowRight`?1:-1,a=e.shiftKey?16:4;u({columnId:n,width:v(n,r+i*a)})},S=e=>{!p||!e.target?.closest?.(`th[data-column-id]`)||(p=!1,m!=null&&n.clearTimeout(m),m=null,e.preventDefault(),e.stopImmediatePropagation())};return e.addEventListener(`pointerdown`,y),e.addEventListener(`keydown`,x),t.addEventListener(`pointermove`,ee),t.addEventListener(`pointerup`,b),t.addEventListener(`pointercancel`,b),t.addEventListener(`click`,S,!0),()=>{f?.rafId&&n.cancelAnimationFrame(f.rafId),m!=null&&n.clearTimeout(m),f=null,p=!1,t.body?.classList.remove(`collection-column-resizing`),e.removeEventListener(`pointerdown`,y),e.removeEventListener(`keydown`,x),t.removeEventListener(`pointermove`,ee),t.removeEventListener(`pointerup`,b),t.removeEventListener(`pointercancel`,b),t.removeEventListener(`click`,S,!0)}}var zt=`biblioplex_sidebar_collapsed_v1`;function Bt(e,t){try{return e?.getItem(t)||``}catch{return``}}function Vt(e,t,n){try{e?.setItem(t,n)}catch{}}function Ht(e,t){e?.body?.classList.toggle(`left-sidebar-collapsed`,t),t||e?.body?.classList.remove(`left-sidebar-peeking`),Ut(e)}function Ut(e){let t=e?.getElementById?.(`appLeft`);if(!t)return;let n=e?.body?.classList.contains(`left-sidebar-collapsed`)&&!e?.body?.classList.contains(`left-sidebar-peeking`);t.inert=n,n?t.setAttribute(`aria-hidden`,`true`):t.removeAttribute(`aria-hidden`)}function Wt(e,t){for(let n of e?.querySelectorAll?.(`[data-sidebar-toggle]`)||[])n.setAttribute(`aria-expanded`,String(!t)),n.setAttribute(`aria-label`,t?`lock sidebar open`:`collapse sidebar`),n.setAttribute(`title`,t?`lock sidebar open ([)`:`collapse sidebar ([)`);for(let n of e?.querySelectorAll?.(`[data-sidebar-pin-open]`)||[])n.setAttribute(`aria-expanded`,String(!t)),n.setAttribute(`aria-label`,`lock sidebar open`),n.setAttribute(`title`,`lock sidebar open ([)`)}function J(e,{documentObj:t=globalThis.document,animate:n=!1}={}){let r=!!e,i=(t?.defaultView)?.matchMedia?.(`(prefers-reduced-motion: reduce)`)?.matches;if(n&&!i&&typeof t?.startViewTransition==`function`){t.body?.classList.add(`sidebar-view-transitioning`);let e=t.startViewTransition(()=>Ht(t,r));Promise.resolve(e?.finished).finally(()=>{t.body?.classList.remove(`sidebar-view-transitioning`)})}else Ht(t,r);Wt(t,r)}function Gt(e,{documentObj:t=globalThis.document}={}){let n=t?.body?.classList.contains(`left-sidebar-collapsed`);t?.body?.classList.toggle(`left-sidebar-peeking`,!!e&&!!n),Ut(t)}function Kt(e){let t=e?.tagName?.toLowerCase?.();return t===`input`||t===`textarea`||t===`select`||!!e?.isContentEditable}function qt(e){let t=e?.body;if(t?.classList.contains(`modal-open`)||t?.classList.contains(`confirm-modal-open`)||t?.classList.contains(`mcp-chat-open`)||t?.classList.contains(`left-drawer-open`))return!0;let n=t=>e?.getElementById(t)?.classList.contains(`visible`);return!!(n(`detailDrawer`)||n(`historyPanel`)||n(`imageLightbox`))}function Jt({documentObj:e=globalThis.document,storage:t=globalThis.localStorage}={}){let n=[];f(e);let r=e?.getElementById?.(`appLeft`),i=Array.from(e?.querySelectorAll?.(`[data-sidebar-pin-open]`)||[]),a=e?.defaultView?.matchMedia?.(`(min-width: 901px) and (max-width: 1180px)`),o=!!a?.matches&&Bt(t,`biblioplex_sidebar_collapsed_v1`)!==`1`,s=null,c=()=>{s!==null&&(globalThis.clearTimeout?.(s),s=null)},l=()=>{c(),Gt(!0,{documentObj:e})},u=()=>{c(),Gt(!1,{documentObj:e})},d=()=>{c(),s=globalThis.setTimeout?.(()=>{s=null;let t=e?.activeElement;r?.contains?.(t)||u()},90)},p=()=>{o=!1,Vt(t,zt,`0`),J(!1,{documentObj:e})},m=({keepPeek:n=!1}={})=>{o=!1,Vt(t,zt,`1`),J(!0,{documentObj:e}),n&&Gt(!0,{documentObj:e})},h=({keepPeek:t=!1}={})=>{e?.body?.classList.contains(`left-sidebar-collapsed`)?p():m({keepPeek:t})};for(let t of e?.querySelectorAll?.(`[data-sidebar-toggle]`)||[]){let r=n=>{let r=!e?.body?.classList.contains(`left-sidebar-collapsed`),i=Number(n?.detail||0)===0;h({keepPeek:r&&i}),r&&!i&&t.blur?.()};t.addEventListener(`click`,r),n.push(()=>t.removeEventListener(`click`,r))}for(let e of i)e.addEventListener(`click`,p),e.addEventListener(`pointerenter`,l),e.addEventListener(`pointerleave`,d),e.addEventListener(`focus`,l),e.addEventListener(`blur`,d),n.push(()=>{e.removeEventListener(`click`,p),e.removeEventListener(`pointerenter`,l),e.removeEventListener(`pointerleave`,d),e.removeEventListener(`focus`,l),e.removeEventListener(`blur`,d)});r&&(r.addEventListener(`pointerenter`,l),r.addEventListener(`pointerleave`,d),r.addEventListener(`focusin`,l),r.addEventListener(`focusout`,d),n.push(()=>{r.removeEventListener(`pointerenter`,l),r.removeEventListener(`pointerleave`,d),r.removeEventListener(`focusin`,l),r.removeEventListener(`focusout`,d)}));let g=t=>{if(t.key===`Escape`&&e?.body?.classList.contains(`left-sidebar-peeking`)){u();return}t.key!==`[`||t.altKey||t.ctrlKey||t.metaKey||t.defaultPrevented||Kt(t.target)||qt(e)||(t.preventDefault(),h())};e?.addEventListener?.(`keydown`,g),n.push(()=>e?.removeEventListener?.(`keydown`,g));let _=t=>{if(t.matches){e?.body?.classList.contains(`left-sidebar-collapsed`)||(o=!0,J(!0,{documentObj:e}));return}o&&(o=!1,J(!1,{documentObj:e}))};return a?.addEventListener?.(`change`,_),n.push(()=>a?.removeEventListener?.(`change`,_)),()=>{c(),n.forEach(e=>e())}}var Y=Object.freeze({brainstorm:`https://cards.scryfall.io/normal/front/1/1/11d27509-07c2-4445-a1d5-e56523fb8566.jpg`,counterspell:`https://cards.scryfall.io/normal/front/8/4/8493131c-0a7b-4be6-a8a2-0b425f4f67fb.jpg`,commodore:`https://cards.scryfall.io/normal/front/c/9/c90fdccf-30a6-40ee-9b35-83a6ee5c0681.jpg`,gooseMother:`https://cards.scryfall.io/normal/front/a/0/a094fa16-256f-4fb1-9738-3025085d1941.jpg`,solRing:`https://cards.scryfall.io/normal/front/9/1/91fdb56b-54d5-4272-8319-505ff987fe9b.jpg`,rhysticStudy:`https://cards.scryfall.io/normal/front/9/f/9f37c5b6-a59c-45cd-9a99-e9357fe9ea1b.jpg`,commandTower:`https://cards.scryfall.io/normal/front/0/5/0548fb60-c843-4f8f-a029-6f10efc63a41.jpg`,heroicIntervention:`https://cards.scryfall.io/normal/front/e/3/e32c67d1-187f-40df-b3b3-6036f5c92834.jpg`,mysticRemora:`https://cards.scryfall.io/normal/front/4/0/40140991-cffa-4b52-9a25-37e9a8aa9ddd.jpg`,asmoranomardicadaistinaculdacar:`https://cards.scryfall.io/normal/front/d/9/d99a9a7d-d9ca-4c11-80ab-e39d5943a315.jpg`});function Yt(e={}){return{name:`Brainstorm`,resolvedName:`Brainstorm`,setCode:`CMM`,cn:`81`,finish:`normal`,condition:`near_mint`,language:`en`,qty:4,price:1.29,imageUrl:Y.brainstorm,location:{type:`container`,name:`trade binder`,emoji:`📚`,color:`#4d7b67`},...e}}var Xt=Object.freeze({commander:`legal`,modern:`legal`,legacy:`legal`});function X(e,t={}){return Yt({name:e,resolvedName:e,scryfallId:String(t.scryfallId||e).toLowerCase().replace(/[^a-z0-9]+/g,`-`),setCode:`CMM`,cn:String(t.cn||`1`),qty:1,price:1.25,rarity:`uncommon`,typeLine:`Instant`,cmc:2,manaCost:`{1}{U}`,colors:[`U`],colorIdentity:[`U`],legalities:Xt,deckBoard:`main`,inventoryIndex:0,location:{type:`deck`,name:`the goose is loose`,emoji:`🪿`},...t})}function Zt(){return[X(`The Goose Mother`,{scryfallId:`goose-mother`,setCode:`SOC`,cn:`312`,imageUrl:Y.gooseMother,typeLine:`Legendary Creature — Bird Hydra`,manaCost:`{X}{G}{U}`,cmc:2,colors:[`G`,`U`],colorIdentity:[`G`,`U`],rarity:`mythic`,deckBoard:`command`,price:4.75}),X(`Brainstorm`,{imageUrl:Y.brainstorm,manaCost:`{U}`,cmc:1,price:1.29,finish:`foil`}),X(`Counterspell`,{imageUrl:Y.counterspell,manaCost:`{U}{U}`,cmc:2,price:2.48}),X(`Crimson Fleet Commodore`,{imageUrl:Y.commodore,typeLine:`Creature — Ogre Pirate`,manaCost:`{3}{R}`,cmc:4,colors:[`R`],colorIdentity:[`R`],rarity:`common`,price:.18}),X(`Sol Ring`,{setCode:`MSC`,cn:`211`,imageUrl:Y.solRing,typeLine:`Artifact`,manaCost:`{1}`,cmc:1,colors:[],colorIdentity:[],rarity:`uncommon`,price:1.5}),X(`Rhystic Study`,{setCode:`J22`,cn:`114`,imageUrl:Y.rhysticStudy,typeLine:`Enchantment`,manaCost:`{2}{U}`,cmc:3,rarity:`rare`,price:31,inventoryIndex:-1,placeholder:!0,needed:1}),X(`Command Tower`,{setCode:`MSC`,cn:`233`,imageUrl:Y.commandTower,typeLine:`Land`,manaCost:``,cmc:0,colors:[],colorIdentity:[`G`,`U`],rarity:`common`,qty:8,price:.35}),X(`Heroic Intervention`,{setCode:`CMM`,cn:`295`,imageUrl:Y.heroicIntervention,typeLine:`Instant`,manaCost:`{1}{G}`,cmc:2,colors:[`G`],colorIdentity:[`G`],rarity:`rare`,price:9.4,deckBoard:`sideboard`}),X(`Mystic Remora`,{setCode:`DMR`,cn:`59`,imageUrl:Y.mysticRemora,typeLine:`Enchantment`,manaCost:`{U}`,cmc:1,rarity:`uncommon`,price:7.15,deckBoard:`maybe`})]}function Qt(e){return{scryfallId:e.scryfallId,name:e.name,setCode:e.setCode,cn:e.cn,imageUrl:e.imageUrl,backImageUrl:e.backImageUrl||``,rarity:e.rarity,cmc:e.cmc,manaCost:e.manaCost,typeLine:e.typeLine,colors:e.colors,colorIdentity:e.colorIdentity,legalities:e.legalities,qty:e.qty,board:e.deckBoard}}function $t({condition:e=`building`}={}){let t=Zt(),n=t.find(e=>e.deckBoard===`command`),r={type:`deck`,name:`the goose is loose`,emoji:`🪿`,color:`#4d7b67`,deckList:t.map(Qt),deck:{title:`The Goose Is Loose`,description:`Ramp into an enormous Goose Mother, then turn Food and card draw into a very silly value engine.`,format:`commander`,commander:n.name,commanderScryfallId:n.scryfallId,commanderImageUrl:n.imageUrl,commanderColorIdentity:n.colorIdentity,coverName:n.name,coverScryfallId:n.scryfallId,coverImageUrl:n.imageUrl,coverChoices:t.map(e=>({scryfallId:e.scryfallId,name:e.name,imageUrl:e.imageUrl,finish:e.finish}))}},i={..._e(t),main:e===`empty`?0:e===`building`?83:99,command:e===`empty`?0:1,total:e===`empty`?0:e===`building`?84:100,lands:e===`empty`?0:e===`building`?29:37,nonlands:e===`empty`?0:e===`building`?54:62},a={total:i.total,owned:e===`complete`?i.total:Math.max(0,i.total-9),boards:{main:{total:i.main,owned:Math.max(0,i.main-9)},command:{total:i.command,owned:i.command}}};a.fullyOwned=a.total>0&&a.owned===a.total;let o=e===`illegal`?{violations:[{kind:`banned`,card:`Rhystic Study`,format:`commander`},{kind:`count`,message:`maindeck is below the commander target`}],warnings:[]}:{violations:[],warnings:[]},s=fe(r,r.deck,i,``,t,o,a);return{boards:ve(e===`empty`?[]:t),cards:e===`empty`?[]:t,deck:r,model:s,ownership:a,stats:i}}function en(){return Zt().map((e,t)=>({...e,inventoryIndex:t,condition:[`near_mint`,`lightly_played`,`near_mint`,`moderately_played`][t%4],language:[`en`,`en`,`ja`,`de`][t%4],tags:[[`commander`,`favorite`],[`trade`,`blue`],[`commander staple`],[`bulk review`]][t%4],createdAt:Date.UTC(2026,1+t%6,3+t,12),updatedAt:Date.UTC(2026,7,10+t,12),location:t%3==0?{type:`deck`,name:`the goose is loose`,emoji:`🪿`}:t%2?{type:`container`,name:`trade binder`,emoji:`📚`}:{type:`container`,name:`bulk rares`,emoji:`g:box`}}))}function tn(){let e=$t();return[e.deck,{type:`deck`,name:`tiny leaders night`,emoji:`g:cards`,deck:{title:`Tiny Leaders Night`,format:`commander`,coverImageUrl:Y.counterspell},deckList:e.deck.deckList.slice(0,5)},{type:`container`,name:`trade binder`,emoji:`g:book`,color:`#4d7b67`},{type:`container`,name:`bulk rares`,emoji:`g:box`,color:`#a96132`},{type:`container`,name:`commander staples`,emoji:`⭐`,color:`#6c3aa4`}]}function nn(e=$t()){let t=e.boards.main;return{deckKey:`${e.deck.type}:${e.deck.name}`,hand:t.slice(0,5),library:t.slice(5)}}var rn=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Biblioplex</title>
    <meta name="description" content="browse and manage a Magic collection" />
    <meta
      name="biblioplex-clerk-publishable-key"
      content="pk_live_Y2xlcmsuYmVuc29ucGVycnkuY29tJA"
    />
    <meta name="biblioplex-posthog-project-token" content="" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="theme-color" content="#faf8fd" />
    <meta property="og:site_name" content="biblioplex" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="biblioplex — mtg collection manager" />
    <meta
      property="og:description"
      content="track it. find it. play it. a local-first magic: the gathering collection manager."
    />
    <meta property="og:url" content="https://biblioplex.bensonperry.com/" />
    <meta property="og:image" content="https://biblioplex.bensonperry.com/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="biblioplex — mtg collection manager" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="biblioplex — mtg collection manager" />
    <meta
      name="twitter:description"
      content="track it. find it. play it. a local-first magic: the gathering collection manager."
    />
    <meta name="twitter:image" content="https://biblioplex.bensonperry.com/og-image.png" />
    <script>
      // Pre-paint theme: set data-theme before stylesheets apply so a dark
      // reload doesn't flash the light palette. Mirrors applyTheme().
      try {
        if (localStorage.getItem('biblioplex_theme_v1') === 'dark') {
          document.documentElement.setAttribute('data-theme', 'dark');
        }
      } catch (_e) {
        /* storage unavailable: boot light */
      }
      try {
        performance.mark('biblioplex:boot:start');
      } catch (_e) {
        /* performance marks are optional */
      }
      window.__biblioplexBootCurtainTimer = window.setTimeout(() => {
        document.body?.classList.add('app-boot-loader-visible');
        try {
          performance.mark('biblioplex:boot:loader-visible');
        } catch (_e) {
          /* performance marks are optional */
        }
      }, 250);
    <\/script>
    <style id="appBootCurtainStyle">
      body.app-booting {
        background: #fff;
        color: #000;
        font-family: 'Times New Roman', Times, Georgia, serif;
        font-size: 14px;
        line-height: 1.2;
        overflow: hidden;
        text-transform: lowercase;
      }
      body.app-booting > :not(.app-boot-curtain) {
        visibility: hidden !important;
      }
      .app-boot-curtain {
        display: none;
      }
      /* Dark boot: hardcoded to match the vellum dark tokens, which haven't
         loaded yet while the curtain is up. */
      html[data-theme='dark'] body.app-booting {
        background: #1c1722;
        color: #e9e2f2;
      }
      html[data-theme='dark'] body.app-booting .app-boot-curtain {
        background: #1c1722;
        color: #b8a18d;
      }
      body.app-booting.app-boot-loader-visible .app-boot-curtain {
        align-items: center;
        background: #fff;
        color: #777;
        display: flex;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        inset: 0;
        justify-content: center;
        position: fixed;
        text-transform: inherit;
        z-index: 2147483647;
      }
    </style>
    <link rel="stylesheet" href="../shared/common.css" />
    <!-- BEN-689: source points straight at the installed vellum-ui package so
         opening this file directly (or the app-smoke test's raw read of it)
         gets vellum's rules too, not just styles.css. scripts/build-web.mjs
         rewrites this href to the vendored ./vendor/vellum-ui/vellum-ui.css
         copy (with cache-busting) for the built/served app. -->
    <link rel="stylesheet" href="../../../node_modules/@benson/vellum-ui/dist/vellum-ui.css" />
    <link rel="stylesheet" href="./styles.css" />
    <link rel="stylesheet" href="./cleaner.css" />
  </head>
  <body class="vui-app no-shared-footer app-booting">
    <div class="app-boot-curtain" id="appBootCurtain" role="status" aria-live="polite">
      loading collection
    </div>

    <div class="banner share-banner hidden" id="shareBanner" role="status"></div>

    <div
      class="banner site-stale-banner hidden"
      id="siteStaleBanner"
      role="status"
      aria-live="polite"
    >
      <span class="banner-message">site updated · reload to see the latest</span>
      <div class="banner-actions">
        <button type="button" class="btn" data-site-stale-reload>reload</button>
      </div>
      <button
        type="button"
        class="icon-btn banner-dismiss"
        data-site-stale-dismiss
        aria-label="dismiss"
      >
        ×
      </button>
    </div>

    <!--
      ADR 0013: the single sync alert surface. Message, tone, and whether it shows
      at all are decided by syncAlert.js and rendered by syncUi.js — the text below
      is only the pre-script default. role/aria-live are set per tone at render
      time (assertive for a lost change, polite for a connection warning).
    -->
    <div
      class="banner sync-alert-banner hidden"
      id="syncAlertBanner"
      role="status"
      aria-live="polite"
    >
      <span class="banner-message">cloud sync isn't connected — your collection is read-only</span>
      <div class="banner-actions">
        <button type="button" class="btn" data-sync-alert-retry>retry sync</button>
      </div>
      <button
        type="button"
        class="icon-btn banner-dismiss"
        data-sync-alert-dismiss
        aria-label="dismiss"
      >
        ×
      </button>
    </div>

    <div
      class="banner auth-loss-banner hidden"
      id="authLossBanner"
      role="alert"
      aria-live="assertive"
    >
      <span class="banner-message"
        >you've been signed out — new changes aren't syncing. sign in to resync.</span
      >
      <div class="banner-actions">
        <button type="button" class="btn" data-auth-loss-signin>sign in</button>
      </div>
      <button
        type="button"
        class="icon-btn banner-dismiss"
        data-auth-loss-dismiss
        aria-label="dismiss"
      >
        ×
      </button>
    </div>

    <div class="deck-topbar-strip hidden" id="deckTopBarStrip" aria-live="polite"></div>

    <div class="app-shell">
      <header class="app-header">
        <div class="app-title-row">
          <h1>
            <button type="button" id="resetAppBtn" class="title-reset-btn">
              <span class="brand-wordmark">Biblioplex</span>
            </button>
          </h1>
        </div>
        <nav class="app-primary-nav mobile-bottom-nav" aria-label="primary">
          <div class="app-header-views write-only">
            <button
              class="toggle-view mobile-bottom-nav-item"
              id="collectionViewBtn"
              data-view="collection"
            >
              <svg
                class="view-icon view-icon-svg mobile-bottom-nav-icon"
                aria-hidden="true"
                viewBox="0 0 14 14"
              >
                <path
                  d="M3 4 H11 M3 7 H11 M3 10 H11"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="1.25"
                /></svg
              >collection
            </button>
            <button class="toggle-view mobile-bottom-nav-item" id="decksViewBtn" data-view="decks">
              <svg
                class="view-icon view-icon-svg mobile-bottom-nav-icon"
                aria-hidden="true"
                viewBox="0 0 14 14"
              >
                <rect
                  x="2.5"
                  y="3.5"
                  width="6.5"
                  height="8.5"
                  rx="0.5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                />
                <rect
                  x="5"
                  y="1.5"
                  width="6.5"
                  height="8.5"
                  rx="0.5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                /></svg
              >decks
            </button>
            <button
              class="toggle-view mobile-bottom-nav-item"
              id="storageViewBtn"
              data-view="storage"
            >
              <svg
                class="view-icon view-icon-svg mobile-bottom-nav-icon"
                aria-hidden="true"
                viewBox="0 0 14 14"
              >
                <path
                  d="M2 7 L7 2 L12 7 L12 12 L2 12 Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linejoin="round"
                /></svg
              >containers
            </button>
          </div>
          <div class="sync-account-slot" id="syncAccountSlot">
            <div class="header-settings" id="headerSettings">
              <button
                class="settings-toggle"
                type="button"
                id="settingsToggleBtn"
                title="settings"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="settingsPopover"
              >
                settings
              </button>
              <div
                class="settings-popover"
                id="settingsPopover"
                role="dialog"
                aria-label="settings"
                hidden
              >
                <header
                  class="ui-modal-head ui-modal-head-drag settings-modal-head"
                  id="settingsDragHandle"
                  data-settings-drag-handle
                  title="drag settings"
                >
                  <h2 class="ui-modal-title">Settings</h2>
                  <button
                    class="rune-close settings-modal-close"
                    type="button"
                    data-settings-close
                    aria-label="close settings"
                  >
                    <span aria-hidden="true">✕</span>
                  </button>
                </header>
                <div class="settings-group">
                  <div class="settings-label" id="settingsDesignSystemLabel">design system</div>
                  <div
                    class="settings-options-stack"
                    role="group"
                    aria-labelledby="settingsDesignSystemLabel"
                  >
                    <a
                      class="settings-reset-action"
                      href="/design-system.html"
                      target="_blank"
                      rel="noopener"
                      title="open design system reference"
                    >
                      open reference ↗
                    </a>
                  </div>
                </div>
                <div class="settings-group">
                  <div class="settings-label" id="settingsThemeLabel">theme</div>
                  <div class="settings-options" role="group" aria-labelledby="settingsThemeLabel">
                    <button
                      class="settings-option"
                      type="button"
                      data-settings-key="theme"
                      data-settings-value="light"
                      aria-pressed="false"
                    >
                      light
                    </button>
                    <button
                      class="settings-option"
                      type="button"
                      data-settings-key="theme"
                      data-settings-value="dark"
                      aria-pressed="false"
                    >
                      dark
                    </button>
                  </div>
                </div>
                <div class="settings-group">
                  <div class="settings-label" id="settingsTextCaseLabel">text case</div>
                  <div
                    class="settings-options"
                    role="group"
                    aria-labelledby="settingsTextCaseLabel"
                  >
                    <button
                      class="settings-option"
                      type="button"
                      data-settings-key="text-case"
                      data-settings-value="lower"
                      aria-pressed="false"
                    >
                      lower
                    </button>
                    <button
                      class="settings-option"
                      type="button"
                      data-settings-key="text-case"
                      data-settings-value="proper"
                      aria-pressed="false"
                    >
                      proper
                    </button>
                  </div>
                </div>
                <div class="settings-group">
                  <div class="settings-label" id="settingsTextSizeLabel">text size</div>
                  <div
                    class="settings-options"
                    role="group"
                    aria-labelledby="settingsTextSizeLabel"
                  >
                    <button
                      class="settings-option"
                      type="button"
                      data-settings-key="text-size"
                      data-settings-value="compact"
                      aria-pressed="false"
                    >
                      compact
                    </button>
                    <button
                      class="settings-option"
                      type="button"
                      data-settings-key="text-size"
                      data-settings-value="default"
                      aria-pressed="false"
                    >
                      default
                    </button>
                    <button
                      class="settings-option"
                      type="button"
                      data-settings-key="text-size"
                      data-settings-value="large"
                      aria-pressed="false"
                    >
                      large
                    </button>
                  </div>
                </div>
                <div class="settings-group">
                  <div class="settings-label" id="settingsTableCellsLabel">table cells</div>
                  <div
                    class="settings-options"
                    role="group"
                    aria-labelledby="settingsTableCellsLabel"
                  >
                    <button
                      class="settings-option"
                      type="button"
                      data-settings-key="table-cells"
                      data-settings-value="truncate"
                      aria-pressed="true"
                    >
                      truncate
                    </button>
                    <button
                      class="settings-option"
                      type="button"
                      data-settings-key="table-cells"
                      data-settings-value="wrap"
                      aria-pressed="false"
                    >
                      wrap
                    </button>
                  </div>
                </div>
                <div class="settings-group settings-account-group" id="settingsAccountGroup" hidden>
                  <div class="settings-label">account</div>
                  <button class="settings-reset-action" type="button" id="settingsAccessTokensBtn">
                    access tokens
                  </button>
                  <button class="settings-reset-action" type="button" data-onboarding-open>
                    restart setup guide
                  </button>
                </div>
                <div class="settings-group" id="settingsAnalyticsGroup" hidden>
                  <div class="settings-label">privacy</div>
                  <div class="settings-diagnostics" data-analytics-status aria-live="polite"></div>
                  <button
                    class="settings-reset-action"
                    type="button"
                    data-analytics-toggle
                    aria-pressed="true"
                  >
                    turn off analytics + replay
                  </button>
                  <a class="settings-reset-action" href="./legal.html#analytics">privacy details</a>
                </div>
                <div class="settings-group settings-diagnostics-group">
                  <div class="settings-label" id="settingsDiagnosticsLabel">diagnostics</div>
                  <div
                    class="settings-diagnostics"
                    id="settingsDiagnostics"
                    aria-live="polite"
                  ></div>
                  <button class="settings-reset-action" type="button" id="copyDiagnosticsBtn">
                    copy diagnostics
                  </button>
                  <span
                    class="settings-test-status"
                    id="settingsDiagnosticsStatus"
                    aria-live="polite"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <section
        class="quick-jump-panel"
        id="quickJumpPanel"
        role="dialog"
        aria-label="quick jump"
        hidden
      >
        <div class="quick-jump-shell">
          <input
            class="quick-jump-input"
            id="quickJumpInput"
            type="search"
            placeholder="jump to card, deck, container, or action"
            autocomplete="off"
            spellcheck="false"
            aria-controls="quickJumpResults"
          />
          <div
            class="quick-jump-results"
            id="quickJumpResults"
            role="listbox"
            aria-label="quick jump results"
          ></div>
        </div>
      </section>

      <aside class="app-left write-only" id="appLeft">
        <div class="sidebar-brand-slot" id="sidebarBrandSlot">
          <button
            class="icon-btn sidebar-toggle"
            type="button"
            data-sidebar-toggle
            aria-expanded="true"
            aria-label="collapse sidebar"
            title="collapse sidebar"
          >
            <svg viewBox="1 1 14 14" aria-hidden="true">
              <path
                class="sidebar-toggle-collapse-glyph"
                d="M10.5 4.75 7.25 8l3.25 3.25M6.75 4.75 3.5 8l3.25 3.25"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.35"
              />
              <path
                class="sidebar-toggle-expand-glyph"
                d="m3.5 4.75 3.25 3.25-3.25 3.25M7.25 4.75 10.5 8l-3.25 3.25"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.35"
              />
            </svg>
          </button>
        </div>
        <div class="mobile-filter-sheet-head mobile-toolbar">
          <span class="mobile-toolbar-title mobile-filter-sheet-title">browse &amp; filters</span>
          <button
            class="btn btn-secondary mobile-filter-sheet-close"
            type="button"
            data-mobile-filter-close
          >
            done
          </button>
        </div>
        <div class="mobile-sidebar-tabs segmented" role="tablist" aria-label="sidebar sections">
          <button
            class="segment-btn active"
            type="button"
            role="tab"
            aria-selected="true"
            data-mobile-sidebar-tab="browse"
          >
            browse
          </button>
          <button
            class="segment-btn"
            type="button"
            role="tab"
            aria-selected="false"
            data-mobile-sidebar-tab="filters"
          >
            filters
          </button>
          <button
            class="segment-btn"
            type="button"
            role="tab"
            aria-selected="false"
            data-mobile-sidebar-tab="view"
          >
            view
          </button>
        </div>
        <div class="sidebar-section" id="collectionSearchSection">
          <div class="sidebar-label">search</div>
          <div class="search-wrap">
            <input
              class="search-input"
              type="text"
              id="searchInput"
              placeholder="search"
              autocomplete="off"
              autocapitalize="off"
              autocorrect="off"
              spellcheck="false"
            />
            <button
              class="icon-btn icon-btn--inline search-clear-btn"
              type="button"
              id="searchClearBtn"
              aria-label="clear search"
            >
              ×
            </button>
            <ul class="autocomplete-list" id="searchTokenAcList" role="listbox"></ul>
          </div>
          <button
            class="search-syntax-link"
            type="button"
            id="searchHelpBtn"
            aria-label="search syntax help"
          >
            search syntax
          </button>
          <div class="search-help-popover" id="searchHelpPopover">
            <div class="syntax-title">search syntax</div>
            <div><code>lightning bolt</code> — name (multiple words = and)</div>
            <div><code>t:creature</code> — type line</div>
            <div><code>c:rg</code> — colors include r and g; <code>c:c</code> = colorless</div>
            <div><code>ci:wug</code> — color identity</div>
            <div><code>cmc&lt;=3</code> · <code>cmc=0</code> · <code>cmc&gt;5</code></div>
            <div><code>o:"flying"</code> — oracle text</div>
            <div>
              <code>r:mythic</code> · <code>r:r</code> · <code>r:u</code> · <code>r:c</code>
            </div>
            <div><code>loc:breya</code> — container contains</div>
            <div><code>tag:edh</code> — tag contains (use quotes for spaces)</div>
            <div><code>set:fin</code> · <code>finish:foil</code> · <code>cond:nm</code></div>
            <div><code>qty&gt;=2</code> · <code>lang:ja</code></div>
            <div><code>-t:land</code> — negate any clause</div>
          </div>
        </div>

        <div class="sidebar-section collection-scope-section" id="collectionScopeSection">
          <div
            class="scope-selector"
            id="scopeSelector"
            role="navigation"
            aria-label="browse cards"
          ></div>
        </div>

        <div class="sidebar-section" id="collectionFiltersSection">
          <div class="sidebar-label">filters</div>
          <div class="sidebar-filters">
            <div id="filterSet" data-default-label="sets" data-noun="sets"></div>
            <div id="filterRarity" data-default-label="rarity" data-noun="rarity"></div>
            <div id="filterFoil" data-default-label="finishes" data-noun="finishes"></div>
            <div id="filterTreatment" data-default-label="treatments" data-noun="treatments"></div>
            <div id="filterColor" data-default-label="colors" data-noun="colors"></div>
            <label class="advanced-filter-field advanced-filter-mode">
              <span>color match</span>
              <select id="filterColorMode" aria-label="color matching mode">
                <option value="any">contains any selected</option>
                <option value="all">contains all selected</option>
                <option value="exact">exact match</option>
              </select>
            </label>
            <div
              id="filterColorIdentity"
              data-default-label="color identity"
              data-noun="identities"
            ></div>
            <label class="advanced-filter-field advanced-filter-mode">
              <span>identity match</span>
              <select id="filterColorIdentityMode" aria-label="color identity matching mode">
                <option value="any">contains any selected</option>
                <option value="all">contains all selected</option>
                <option value="exact">exact match</option>
              </select>
            </label>
            <label class="advanced-filter-field advanced-filter-wide">
              <span>oracle text</span>
              <input
                id="filterOracleText"
                type="search"
                autocomplete="off"
                placeholder="contains text"
              />
            </label>
            <label class="advanced-filter-field advanced-filter-wide">
              <span>card type / type line</span>
              <input
                id="filterTypeLine"
                type="search"
                autocomplete="off"
                placeholder="creature, artifact…"
              />
            </label>
            <label class="advanced-filter-field">
              <span>mana cost</span>
              <input id="filterManaCost" type="text" autocomplete="off" placeholder="{2}{G}" />
            </label>
            <div
              class="advanced-filter-field advanced-filter-number"
              data-numeric-filter="manaValue"
            >
              <span>mana value</span>
              <div class="advanced-filter-number-controls">
                <select id="filterManaValueOperator" aria-label="mana value comparison">
                  <option value="">any</option>
                  <option value="eq">equals</option>
                  <option value="lte">at most</option>
                  <option value="gte">at least</option>
                  <option value="range">range</option>
                </select>
                <input
                  id="filterManaValue"
                  type="number"
                  step="any"
                  aria-label="mana value"
                  autocomplete="off"
                />
                <input
                  id="filterManaValueMax"
                  type="number"
                  step="any"
                  aria-label="maximum mana value"
                  autocomplete="off"
                  data-range-maximum
                />
              </div>
            </div>
            <div class="advanced-filter-field advanced-filter-number" data-numeric-filter="power">
              <span>power</span>
              <div class="advanced-filter-number-controls">
                <select id="filterPowerOperator" aria-label="power comparison">
                  <option value="">any</option>
                  <option value="eq">equals number</option>
                  <option value="lte">at most</option>
                  <option value="gte">at least</option>
                  <option value="range">range</option>
                  <option value="exact">exact text</option>
                </select>
                <input id="filterPower" type="text" aria-label="power value" autocomplete="off" />
                <input
                  id="filterPowerMax"
                  type="text"
                  aria-label="maximum power"
                  autocomplete="off"
                  data-range-maximum
                />
              </div>
            </div>
            <div
              class="advanced-filter-field advanced-filter-number"
              data-numeric-filter="toughness"
            >
              <span>toughness</span>
              <div class="advanced-filter-number-controls">
                <select id="filterToughnessOperator" aria-label="toughness comparison">
                  <option value="">any</option>
                  <option value="eq">equals number</option>
                  <option value="lte">at most</option>
                  <option value="gte">at least</option>
                  <option value="range">range</option>
                  <option value="exact">exact text</option>
                </select>
                <input
                  id="filterToughness"
                  type="text"
                  aria-label="toughness value"
                  autocomplete="off"
                />
                <input
                  id="filterToughnessMax"
                  type="text"
                  aria-label="maximum toughness"
                  autocomplete="off"
                  data-range-maximum
                />
              </div>
            </div>
            <div class="advanced-filter-field advanced-filter-number" data-numeric-filter="loyalty">
              <span>loyalty</span>
              <div class="advanced-filter-number-controls">
                <select id="filterLoyaltyOperator" aria-label="loyalty comparison">
                  <option value="">any</option>
                  <option value="eq">equals number</option>
                  <option value="lte">at most</option>
                  <option value="gte">at least</option>
                  <option value="range">range</option>
                  <option value="exact">exact text</option>
                </select>
                <input
                  id="filterLoyalty"
                  type="text"
                  aria-label="loyalty value"
                  autocomplete="off"
                />
                <input
                  id="filterLoyaltyMax"
                  type="text"
                  aria-label="maximum loyalty"
                  autocomplete="off"
                  data-range-maximum
                />
              </div>
            </div>
            <div id="filterCondition" data-default-label="conditions" data-noun="conditions"></div>
            <div id="filterLanguage" data-default-label="languages" data-noun="languages"></div>
            <div id="filterContainer" data-default-label="containers" data-noun="containers"></div>
            <label class="advanced-filter-field">
              <span>minimum price</span>
              <input
                id="filterMinPrice"
                type="number"
                min="0"
                step="0.01"
                inputmode="decimal"
                autocomplete="off"
              />
            </label>
            <label class="advanced-filter-field">
              <span>maximum price</span>
              <input
                id="filterMaxPrice"
                type="number"
                min="0"
                step="0.01"
                inputmode="decimal"
                autocomplete="off"
              />
            </label>
            <div
              id="filterDeckFormat"
              class="deck-sidebar-filter hidden"
              data-default-label="deck formats"
              data-noun="formats"
            ></div>
            <datalist id="locationOptions"></datalist>
            <datalist id="rowTagOptions"></datalist>
            <div id="filterTag" data-default-label="tags" data-noun="tags"></div>
            <div id="filterFormat" data-default-label="format legality" data-noun="formats"></div>
            <button
              class="btn btn-secondary clear-filters-btn"
              type="button"
              id="clearFiltersBtn"
              aria-label="clear filters"
              hidden
            >
              <span class="clear-filters-label-short" aria-hidden="true">clear</span>
              <span class="clear-filters-label-long" aria-hidden="true">clear filters</span>
            </button>
          </div>
        </div>

        <div class="sidebar-section sidebar-view-settings">
          <div class="sidebar-label">view settings</div>
          <div
            class="collection-display-controls"
            id="collectionDisplayControls"
            aria-label="collection display"
          >
            <div class="collection-display-controls-main">
              <div class="collection-display-mode segmented">
                <button
                  class="segment-btn"
                  type="button"
                  data-collection-display-mode="table"
                  aria-pressed="true"
                >
                  <svg class="view-icon view-icon-svg" aria-hidden="true" viewBox="0 0 14 14">
                    <path
                      d="M3 4 H11 M3 7 H11 M3 10 H11"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="1.25"
                    /></svg
                  >table
                </button>
                <button
                  class="segment-btn"
                  type="button"
                  data-collection-display-mode="visual"
                  aria-pressed="false"
                >
                  <svg class="view-icon view-icon-svg" aria-hidden="true" viewBox="0 0 14 14">
                    <rect
                      x="2.5"
                      y="2.5"
                      width="3.5"
                      height="3.5"
                      rx="0.5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.1"
                    />
                    <rect
                      x="8"
                      y="2.5"
                      width="3.5"
                      height="3.5"
                      rx="0.5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.1"
                    />
                    <rect
                      x="2.5"
                      y="8"
                      width="3.5"
                      height="3.5"
                      rx="0.5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.1"
                    />
                    <rect
                      x="8"
                      y="8"
                      width="3.5"
                      height="3.5"
                      rx="0.5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.1"
                    /></svg
                  >visual
                </button>
              </div>
            </div>
          </div>
          <section
            class="collection-column-settings-panel"
            id="collectionColumnSettingsPanel"
            aria-label="display settings"
          ></section>
        </div>

        <div class="sidebar-section sidebar-grid-view-settings">
          <div class="sidebar-label">view settings</div>
          <div
            class="collection-display-controls"
            id="gridDisplayControls"
            aria-label="grid display"
          >
            <div class="collection-display-controls-main">
              <div class="collection-display-mode segmented">
                <button
                  class="segment-btn"
                  type="button"
                  data-grid-display-mode="visual"
                  aria-pressed="true"
                >
                  <svg class="view-icon view-icon-svg" aria-hidden="true" viewBox="0 0 14 14">
                    <rect
                      x="2.5"
                      y="2.5"
                      width="3.5"
                      height="3.5"
                      rx="0.5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.1"
                    />
                    <rect
                      x="8"
                      y="2.5"
                      width="3.5"
                      height="3.5"
                      rx="0.5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.1"
                    />
                    <rect
                      x="2.5"
                      y="8"
                      width="3.5"
                      height="3.5"
                      rx="0.5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.1"
                    />
                    <rect
                      x="8"
                      y="8"
                      width="3.5"
                      height="3.5"
                      rx="0.5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.1"
                    /></svg
                  >visual
                </button>
                <button
                  class="segment-btn"
                  type="button"
                  data-grid-display-mode="table"
                  aria-pressed="false"
                >
                  <svg class="view-icon view-icon-svg" aria-hidden="true" viewBox="0 0 14 14">
                    <path
                      d="M3 4 H11 M3 7 H11 M3 10 H11"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="1.25"
                    /></svg
                  >table
                </button>
              </div>
            </div>
            <div class="grid-size-options segmented" id="gridSizeOptions" aria-label="grid size">
              <button class="segment-btn" type="button" data-grid-size="4x3" aria-pressed="true">
                4x3
              </button>
              <button class="segment-btn" type="button" data-grid-size="3x3" aria-pressed="false">
                3x3
              </button>
              <button class="segment-btn" type="button" data-grid-size="2x2" aria-pressed="false">
                2x2
              </button>
            </div>
          </div>
        </div>
      </aside>

      <main class="app-center">
        <button
          class="icon-btn sidebar-collapsed-trigger"
          type="button"
          data-sidebar-pin-open
          aria-label="lock sidebar open"
          aria-keyshortcuts="["
          title="lock sidebar open ([)"
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M3 4.5h10M3 8h10M3 11.5h10"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="1.35"
            />
          </svg>
        </button>
        <div id="globalLocationCreateHost"></div>
        <!-- feedback.js creates #feedback (a .toast-stack) lazily on first
             showFeedback() call and appends it to <body> — BEN-689. -->

        <div
          class="container-identity-strip collection-scope-header hidden"
          id="containerIdentityStrip"
        ></div>

        <div class="mobile-collection-toolbar mobile-toolbar">
          <button
            class="btn btn-secondary mobile-filter-trigger"
            type="button"
            data-mobile-filter-toggle
          >
            <svg aria-hidden="true" viewBox="0 0 16 16">
              <path
                d="M2.5 4h11M4.5 8h7M6.5 12h3"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="1.4"
              />
            </svg>
            browse &amp; filter
          </button>
        </div>

        <section
          class="collection-controls-toolbar"
          id="collectionControlsToolbar"
          aria-label="collection controls"
          hidden
        ></section>

        <div id="collectionSection" class="hidden">
          <div class="locations-view" id="locationsView"></div>
          <div class="deck-view" id="deckView">
            <div class="deck-actions">
              <span class="deck-summary" id="deckSummary"></span>
            </div>
            <div class="deck-view-wrap" id="deckViewWrap">
              <div class="deck-side-column">
                <aside
                  class="deck-preview-panel hidden"
                  id="deckPreviewPanel"
                  role="button"
                  tabindex="0"
                  aria-label="open card detail"
                >
                  <div class="deck-preview-frame">
                    <img class="deck-preview-card hidden" alt="" />
                    <div class="deck-preview-placeholder hidden"></div>
                  </div>
                  <div class="drawer-flip-row deck-preview-flip-row hidden">
                    <button
                      type="button"
                      class="btn btn-secondary flip-btn"
                      id="deckPreviewFlipBtn"
                    >
                      flip card
                    </button>
                  </div>
                  <div class="deck-preview-name"></div>
                  <div class="deck-preview-meta"></div>
                  <dl class="deck-preview-details" aria-label="card details"></dl>
                </aside>
              </div>
              <div class="deck-workspace-root" id="deckColumns"></div>
            </div>
          </div>
          <div class="grid-view" id="gridView">
            <div class="grid-actions">
              <div class="grid-actions-primary">
                <label class="grid-price-toggle"
                  ><input type="checkbox" id="gridPriceToggle" checked />
                  <svg aria-hidden="true" viewBox="0 0 16 16">
                    <path
                      d="M2.5 8h11M8 2.5c2.1 1.25 3.2 3.08 3.2 5.5S10.1 12.25 8 13.5C5.9 12.25 4.8 10.42 4.8 8S5.9 3.75 8 2.5Z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                    />
                  </svg>
                  prices</label
                >
                <label class="grid-control-field grid-sort-field"
                  ><span class="grid-control-label">sort</span>
                  <select id="gridSortSelect">
                    <option value="name">name</option>
                    <option value="price-desc">highest value</option>
                    <option value="price-asc">lowest value</option>
                    <option value="recent">recently added</option>
                  </select>
                </label>
                <input
                  class="grid-search-input"
                  id="gridSearchInput"
                  type="search"
                  placeholder="search grid"
                  autocomplete="off"
                />
                <details class="grid-filter-menu" id="gridFilterMenu">
                  <summary class="grid-filter-trigger">
                    <svg aria-hidden="true" viewBox="0 0 16 16">
                      <path
                        d="M2.5 4h11M4.5 8h7M6.5 12h3"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="1.4"
                      />
                    </svg>
                    filters
                  </summary>
                  <div
                    class="grid-explore-controls"
                    id="gridExploreControls"
                    aria-label="grid filters"
                  >
                    <label class="grid-control-field"
                      >color
                      <select id="gridColorFilter">
                        <option value="">all colors</option>
                        <option value="w">white</option>
                        <option value="u">blue</option>
                        <option value="b">black</option>
                        <option value="r">red</option>
                        <option value="g">green</option>
                        <option value="multicolor">multicolor</option>
                        <option value="colorless">colorless</option>
                      </select>
                    </label>
                    <label class="grid-control-field"
                      >type
                      <select id="gridTypeFilter">
                        <option value="">all types</option>
                        <option value="creature">creatures</option>
                        <option value="land">lands</option>
                        <option value="artifact">artifacts</option>
                        <option value="enchantment">enchantments</option>
                        <option value="planeswalker">planeswalkers</option>
                        <option value="spell">instants/sorceries</option>
                      </select>
                    </label>
                    <button
                      class="btn btn-secondary grid-lens-reset hidden"
                      type="button"
                      id="gridLensReset"
                    >
                      reset view
                    </button>
                  </div>
                </details>
              </div>
            </div>
            <div class="grid-pages" id="gridPages"></div>
            <div class="grid-nav hidden" id="gridNav">
              <button class="btn btn-secondary" type="button" id="gridPrev">← prev</button>
              <span class="grid-page-indicator" id="gridPageIndicator"></span>
              <button class="btn btn-secondary" type="button" id="gridNext">next →</button>
            </div>
          </div>
          <div class="list-view" id="listView">
            <div class="bulk-bar write-only" id="bulkBar" aria-live="polite"></div>
            <table class="vui-table">
              <thead id="collectionTableHead"></thead>
              <tbody id="listBody"></tbody>
            </table>
          </div>
        </div>
      </main>

      <aside class="app-right write-only">
        <div class="ui-drawer-head app-right-drawer-handle" data-vui-drawer-handle>
          <span class="ui-drawer-title">Add cards</span>
          <button
            class="rune-close app-right-close"
            type="button"
            data-close-right-drawer
            aria-label="close add panel"
          >
            ×
          </button>
        </div>
        <details class="add-details write-only" id="addDetails">
          <summary>add cards</summary>
          <div class="details-body">
            <div class="tab-row add-tabs" role="tablist">
              <button
                class="tab-btn add-tab"
                type="button"
                role="tab"
                aria-selected="false"
                data-add-mode="scan"
              >
                <span class="add-tab-icon" aria-hidden="true"
                  ><svg
                    class="add-tab-icon-svg"
                    viewBox="0 0 16 16"
                    width="14"
                    height="14"
                    focusable="false"
                  >
                    <path
                      d="M2.5 6 V3.5 C2.5 2.9 2.9 2.5 3.5 2.5 H6 M10 2.5 H12.5 C13.1 2.5 13.5 2.9 13.5 3.5 V6 M13.5 10 V12.5 C13.5 13.1 13.1 13.5 12.5 13.5 H10 M6 13.5 H3.5 C2.9 13.5 2.5 13.1 2.5 12.5 V10 M5 5 H11 V11 H5 Z"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.35"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                ></span>
                <span>scan</span>
              </button>
              <button
                class="tab-btn add-tab active"
                type="button"
                role="tab"
                aria-selected="true"
                data-add-mode="name"
              >
                <span class="add-tab-icon" aria-hidden="true"
                  ><svg
                    class="add-tab-icon-svg"
                    viewBox="0 0 16 16"
                    width="14"
                    height="14"
                    focusable="false"
                  >
                    <circle
                      cx="7"
                      cy="7"
                      r="4"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M10 10 L14 14"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    /></svg
                ></span>
                <span>lookup</span>
              </button>
              <button
                class="tab-btn add-tab"
                type="button"
                role="tab"
                aria-selected="false"
                data-add-mode="cn"
              >
                <span class="add-tab-icon" aria-hidden="true"
                  ><svg
                    class="add-tab-icon-svg"
                    viewBox="0 0 16 16"
                    width="14"
                    height="14"
                    focusable="false"
                  >
                    <path
                      d="M8 2.5 C6.9 2.5 6 3.4 6 4.5 L6 8 C6 9.1 6.9 10 8 10 C9.1 10 10 9.1 10 8 L10 4.5 C10 3.4 9.1 2.5 8 2.5 Z"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M4 7.5 C4 10 5.8 12 8 12 C10.2 12 12 10 12 7.5 M8 12 L8 14"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    /></svg
                ></span>
                <span>voice</span>
              </button>
              <button
                class="tab-btn add-tab"
                type="button"
                role="tab"
                aria-selected="false"
                data-add-mode="import"
              >
                <span class="add-tab-icon" aria-hidden="true"
                  ><svg
                    class="add-tab-icon-svg"
                    viewBox="0 0 16 16"
                    width="14"
                    height="14"
                    focusable="false"
                  >
                    <path
                      d="M3 3.5 L9.5 3.5 L13 7 L13 12.5 L3 12.5 Z"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.5 3.5 L9.5 7 L13 7 M5.5 9 L10.5 9 M5.5 11 L9 11"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                ></span>
                <span>import</span>
              </button>
            </div>

            <div class="add-mode active" id="addModeName">
              <div class="name-search">
                <input
                  type="text"
                  id="addNameInput"
                  placeholder="search a card name..."
                  autocomplete="off"
                  spellcheck="false"
                />
                <ul class="autocomplete-list" id="addNameSuggestions" role="listbox"></ul>
              </div>
              <div class="add-empty" id="addNameEmpty">
                <div class="add-empty-copy">search any card to pick a printing — try</div>
                <ul class="add-empty-examples">
                  <li>
                    <button class="add-empty-example" type="button" data-add-example>
                      sol ring
                    </button>
                  </li>
                  <li>
                    <button class="add-empty-example" type="button" data-add-example>
                      lightning bolt
                    </button>
                  </li>
                  <li>
                    <button class="add-empty-example" type="button" data-add-example>
                      counterspell
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div class="add-mode card-scan" id="addModeScan">
              <div class="card-scan-handoff">
                <img
                  id="cardScanQr"
                  class="card-scan-qr"
                  alt="QR code to open this scanner on your phone"
                />
                <div class="card-scan-handoff-copy">
                  <div>
                    <strong>scan cards with your phone</strong>
                    <span id="cardScanPairStatus">creating a private scanner link…</span>
                  </div>
                  <div class="card-scan-link-row">
                    <input id="cardScanLink" type="text" readonly aria-label="phone scanner link" />
                    <button class="btn btn-secondary" id="cardScanCopy" type="button">
                      copy link
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-scan-queue" id="cardScanQueue">
                <div class="card-scan-queue-head">
                  <strong>session queue</strong>
                  <span class="card-scan-queue-totals" id="cardScanQueueTotals"></span>
                </div>
                <ul class="card-scan-queue-list history-list" id="cardScanQueueList"></ul>
              </div>
              <div class="card-scan-stage" id="cardScanStage">
                <video id="cardScanVideo" playsinline muted aria-label="camera preview"></video>
                <div class="card-scan-frame" aria-hidden="true"></div>
                <div class="card-scan-idle">
                  <svg viewBox="0 0 32 32" aria-hidden="true">
                    <path
                      d="M5 12V7a2 2 0 0 1 2-2h5M20 5h5a2 2 0 0 1 2 2v5M27 20v5a2 2 0 0 1-2 2h-5M12 27H7a2 2 0 0 1-2-2v-5M10 9h12v14H10z"
                    ></path>
                  </svg>
                  <span>one card at a time works best</span>
                </div>
                <div class="card-scan-working" aria-hidden="true">
                  <span class="loading-spinner"></span>
                  reading card
                </div>
              </div>
              <canvas id="cardScanCanvas" hidden></canvas>
              <canvas id="cardScanAnalysisCanvas" hidden></canvas>
              <p class="card-scan-status" id="cardScanStatus" aria-live="polite">
                start the camera when you are ready
              </p>
              <div class="card-scan-candidates" id="cardScanCandidates" hidden></div>
              <div class="card-scan-actions">
                <button class="btn" id="cardScanStart" type="button">start camera</button>
                <button class="btn btn-secondary" id="cardScanCapture" type="button" hidden>
                  scan now
                </button>
                <button class="btn btn-secondary" id="cardScanRetry" type="button" hidden>
                  try again
                </button>
                <button class="btn btn-secondary" id="cardScanManual" type="button">
                  use card lookup
                </button>
              </div>
              <p class="card-scan-privacy">
                Biblioplex samples the camera only while this scanner is open, sends selected still
                frames for recognition, and does not store them. You always confirm before adding.
              </p>
            </div>

            <div class="add-mode" id="addModeCn">
              <div class="mic-row">
                <button class="mic-btn off" type="button" id="addMicBtn">start listening</button>
                <span class="mic-status" id="addMicStatus">mic off</span>
                <label class="autoadd-toggle">
                  <input type="checkbox" id="addAutoAdd" /> auto-add
                </label>
              </div>
              <div class="vocab-hint">
                <strong>say:</strong> qty · set · cn · finish · condition · variant · container
                &nbsp;—&nbsp; e.g. "two fin 142 foil lp in breya deck"
              </div>
              <div class="vocab-hint">
                <strong>conditions:</strong> nm · lp · mp · hp · damaged &nbsp;
                <strong>variants:</strong> promo · prerelease &nbsp; <strong>finishes:</strong> foil
                &nbsp; <strong>repeat:</strong> "again" / "again 3"
              </div>
            </div>

            <div class="add-mode" id="addModeImport">
              <div class="import-source-choices" id="importSourceChoices">
                <button class="import-source-btn" type="button" data-import-source="file">
                  <span class="import-source-btn-title">upload a file</span>
                  <span class="import-source-btn-hint">a csv export or json backup</span>
                </button>
                <button class="import-source-btn" type="button" data-import-source="paste">
                  <span class="import-source-btn-title">paste a list</span>
                  <span class="import-source-btn-hint">csv rows or a decklist</span>
                </button>
                <button class="import-source-btn" type="button" data-import-source="provider">
                  <span class="import-source-btn-title">start from a provider</span>
                  <span class="import-source-btn-hint">a list link</span>
                </button>
              </div>

              <div class="import-source-panel" id="importSourcePanelFile" hidden>
                <div
                  class="drop-zone"
                  id="dropZone"
                  role="button"
                  tabindex="0"
                  aria-label="choose a csv file or json backup"
                >
                  <p><strong>drop a csv or json backup here</strong> or click to pick a file</p>
                  <p class="small">manabox, deckbox, moxfield — any csv with name + set + cn</p>
                  <input
                    type="file"
                    id="fileInput"
                    accept=".csv,text/csv,.json,application/json"
                    style="display: none"
                  />
                </div>
              </div>

              <div class="import-source-panel" id="importSourcePanelPaste" hidden>
                <textarea
                  class="paste-area"
                  id="pasteArea"
                  aria-label="csv rows or decklist"
                  placeholder="...paste csv rows or a decklist here"
                  autocomplete="off"
                  autocapitalize="off"
                  autocorrect="off"
                  spellcheck="false"
                ></textarea>
                <div class="import-actions">
                  <button class="btn" id="importPastedBtn">import pasted</button>
                  <button class="btn btn-secondary" id="loadSampleBtn">load sample</button>
                </div>
              </div>

              <div class="import-source-panel" id="importSourcePanelProvider" hidden>
                <input
                  type="url"
                  class="import-provider-url"
                  id="importProviderUrl"
                  aria-label="list link"
                  placeholder="paste a list link (moxfield, archidekt, ...)"
                  autocomplete="off"
                  spellcheck="false"
                />
                <div class="import-actions">
                  <button class="btn" id="importProviderBtn" type="button">fetch list</button>
                </div>
              </div>

              <details class="import-disclosure" id="importDisclosure">
                <summary>what can I import?</summary>
                <div class="import-disclosure-body">
                  <p>
                    supported fields: name, set code, collector number, quantity, condition,
                    language, finish, location, tags, scryfall id, purchase price.
                  </p>
                  <p class="import-disclosure-label">two examples that work:</p>
                  <pre class="import-disclosure-example">
Name,Set code,Collector number,Quantity
Sol Ring,cmm,410,1</pre
                  >
                  <pre class="import-disclosure-example">1 Sol Ring (CMM) 410</pre>
                  <button class="btn btn-secondary" id="importTemplateBtn" type="button">
                    download template csv
                  </button>
                </div>
              </details>
            </div>

            <div class="add-preview" id="addPreview"></div>

            <div class="printing-picker" id="addPrintingPicker"></div>
            <button
              class="btn btn-secondary add-printing-toggle"
              id="addPrintingToggle"
              type="button"
              hidden
            >
              change printing
            </button>

            <div class="add-editor" id="addEditor"></div>
          </div>
        </details>
      </aside>

      <footer class="app-footer">
        <div class="app-totals-strip" id="appTotalsStrip" aria-live="polite"></div>
        <div class="app-history-ticker write-only" id="appHistoryTicker" aria-live="polite" hidden>
          <span class="ticker-label">last:</span>
          <span class="ticker-summary" id="appHistoryTickerSummary"></span>
          <button
            class="ticker-action"
            type="button"
            id="appHistoryTickerUndo"
            data-history-ticker-action="undo"
          >
            <span class="ticker-action-label">undo</span>
          </button>
          <button
            class="ticker-action"
            type="button"
            data-history-ticker-action="open"
            aria-controls="historyPanel"
          >
            <span class="ticker-action-label"
              >history <span class="ticker-action-arrow" aria-hidden="true">↗</span></span
            >
          </button>
        </div>
        <button class="app-about-link" type="button" data-about-open>about biblioplex</button>
      </footer>
      <div
        class="ui-modal about-modal"
        id="aboutModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="aboutModalTitle"
        aria-hidden="true"
        hidden
      >
        <div class="ui-modal-card about-modal-card">
          <header class="ui-modal-head">
            <h2 class="ui-modal-title" id="aboutModalTitle">About Biblioplex</h2>
          </header>
          <div class="ui-modal-body about-modal-body">
            <p class="about-modal-lede">
              Biblioplex is a focused home for your Magic collection: track what you own, understand
              its value, organize decks and storage, and make changes with help from collection
              chat.
            </p>
            <p>
              Built by Benson Perry for collectors who want powerful tools without losing the
              feeling of browsing a real collection.
            </p>
            <nav class="about-modal-links" aria-label="About Biblioplex links">
              <a href="./features.html">see what it can do</a>
              <a href="./help.html" target="_blank" rel="noopener noreferrer">help</a>
              <a href="./integrations.html">setup guides</a>
              <a href="./legal.html">privacy, terms, and legal</a>
            </nav>
          </div>
        </div>
      </div>
      <div
        class="ui-modal card-scan-gate-modal"
        id="cardScanGateModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cardScanGateTitle"
        aria-hidden="true"
        hidden
      >
        <div class="ui-modal-card card-scan-gate-card">
          <header class="ui-modal-head">
            <h2 class="ui-modal-title" id="cardScanGateTitle">Scan cards with your phone</h2>
          </header>
          <div class="ui-modal-body">
            <p>
              Sign in to open the camera scanner. Cards you confirm are added directly to your
              collection and appear on your other signed-in devices.
            </p>
          </div>
          <footer class="ui-modal-actions">
            <button class="btn" type="button" data-card-scan-signin>sign in / sign up</button>
          </footer>
        </div>
      </div>
      <div class="app-right-backdrop" id="appRightBackdrop"></div>
      <section
        class="mcp-chat-widget"
        id="mcpChatDetails"
        aria-label="collection chat"
        aria-hidden="true"
      >
        <header class="ui-modal-head mcp-chat-head">
          <h2 class="ui-modal-title">Collection chat</h2>
          <div class="mcp-chat-head-actions">
            <button
              class="rune-close mcp-chat-close"
              type="button"
              id="mcpChatClose"
              aria-label="close chat"
            >
              <span aria-hidden="true">✕</span>
            </button>
          </div>
        </header>
        <div class="mcp-chat">
          <div class="mcp-chat-log" id="mcpChatLog" aria-live="polite"></div>
          <section
            class="mcp-chat-draft-panel"
            id="mcpChatDraftPanel"
            aria-live="polite"
            hidden
          ></section>
          <section
            class="mcp-chat-preview-panel"
            id="mcpChatPreviewPanel"
            aria-live="polite"
            hidden
          ></section>
          <form class="mcp-chat-form" id="mcpChatForm">
            <textarea
              id="mcpChatInput"
              rows="3"
              placeholder="ask about your collection or preview an edit"
              autocomplete="off"
            ></textarea>
            <div class="mcp-chat-form-actions">
              <button class="btn" type="submit" id="mcpChatSend">send</button>
              <button
                class="btn btn-secondary mcp-chat-clear"
                type="button"
                id="mcpChatClear"
                aria-label="start new chat"
              >
                new chat
              </button>
            </div>
          </form>
        </div>
      </section>
      <div class="fab-cluster" id="fabCluster">
        <button
          class="fab-btn mobile-filter-fab write-only"
          type="button"
          data-mobile-filter-toggle
          aria-label="filters"
        >
          <span class="fab-glyph">≡</span><span class="fab-label">filters</span>
        </button>
        <details class="mobile-utility-menu" open>
          <summary class="fab-btn mobile-utility-trigger" aria-label="more actions">
            <span class="fab-glyph" aria-hidden="true">&#8943;</span
            ><span class="fab-label">more</span>
          </summary>
          <div class="mobile-utility-menu-panel">
            <a
              class="fab-btn help-fab mobile-utility-menu-item"
              href="./help.html"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="help"
              aria-keyshortcuts="H"
              title="help (H)"
            >
              <span class="fab-glyph" aria-hidden="true">?</span><span class="fab-label">help</span
              ><span class="fab-shortcut" aria-hidden="true">h</span>
            </a>
            <button
              class="fab-btn feedback-capture-fab mobile-utility-menu-item"
              type="button"
              data-feedback-capture-open
              aria-label="capture feedback"
              aria-keyshortcuts="F Control+Alt+F"
              title="capture feedback (F)"
            >
              <span class="fab-glyph fab-glyph-svg" aria-hidden="true"
                ><svg viewBox="0 0 20 20" focusable="false">
                  <path d="M3 8.25v3.5h3l6 3.25V5L6 8.25H3Z"></path>
                  <path d="M6 11.75 7.25 16h2L8 11.75"></path></svg></span
              ><span class="fab-label">feedback</span
              ><span class="fab-shortcut" aria-hidden="true">f</span>
            </button>
            <button
              class="fab-btn mcp-chat-fab mobile-utility-menu-item"
              type="button"
              data-mcp-chat-toggle
              aria-controls="mcpChatDetails"
              aria-expanded="false"
              aria-label="collection chat"
              aria-keyshortcuts="C"
              title="open chat (C)"
            >
              <span class="fab-glyph fab-glyph-svg" aria-hidden="true"
                ><svg viewBox="0 0 20 20" focusable="false">
                  <path d="M3 4.5h14v9H9l-4 3v-3H3v-9Z"></path></svg></span
              ><span class="fab-label">chat</span
              ><span class="fab-shortcut" aria-hidden="true">c</span>
            </button>
            <button
              class="fab-btn fab-btn-primary write-only mobile-utility-menu-item"
              type="button"
              data-fab-target="addDetails"
              aria-label="add cards"
              aria-keyshortcuts="A"
              title="add cards (A)"
            >
              <span class="fab-glyph" aria-hidden="true">+</span><span class="fab-label">add</span
              ><span class="fab-shortcut" aria-hidden="true">a</span>
            </button>
            <button
              class="mobile-history-action mobile-utility-menu-item"
              type="button"
              data-mobile-history-toggle
            >
              <span class="fab-glyph" aria-hidden="true">&#8630;</span
              ><span class="fab-label">collection history</span>
            </button>
          </div>
        </details>
      </div>
    </div>

    <!-- feedback-capture canvas + widget DOM is mounted at boot by
         mountFeedbackCaptureDom() (@benson/vellum-ui) — see app.js. -->
    <div id="cardPreview"><img src="" alt="" /></div>
    <div
      id="imageLightbox"
      class="image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="expanded card image"
      aria-hidden="true"
    >
      <button
        class="icon-btn icon-btn--inline lightbox-close"
        id="lightboxClose"
        type="button"
        aria-label="close expanded card image"
      >
        ×
      </button>
      <img id="imageLightboxImg" src="" alt="" />
      <button class="lightbox-flip hidden" id="lightboxFlip" type="button">flip card</button>
    </div>
    <div class="drawer-backdrop" id="drawerBackdrop"></div>
    <aside
      class="detail-drawer history-panel history-details write-only"
      id="historyPanel"
      aria-hidden="true"
      inert
    >
      <div class="drawer-head">
        <div>
          <h2 class="drawer-title" id="historyPanelTitle">Collection history</h2>
          <div class="history-scope-toggle segmented" role="group" aria-label="history scope">
            <button
              class="segment-btn"
              type="button"
              data-history-scope-mode="view"
              aria-pressed="true"
            >
              this view
            </button>
            <button
              class="segment-btn"
              type="button"
              data-history-scope-mode="all"
              aria-pressed="false"
            >
              all
            </button>
          </div>
        </div>
        <button class="rune-close" id="historyPanelClose" type="button" aria-label="close">
          <span aria-hidden="true">✕</span>
        </button>
      </div>
      <div class="drawer-body">
        <ol id="historyList" class="history-list"></ol>
      </div>
    </aside>
    <aside class="detail-drawer" id="detailDrawer" aria-hidden="true" inert></aside>

    <div
      class="ui-modal welcome-modal"
      id="welcomeModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcomeModalTitle"
      aria-hidden="true"
    >
      <div class="ui-modal-card welcome-modal-card">
        <header class="ui-modal-head">
          <h3 class="ui-modal-title" id="welcomeModalTitle">Welcome to Biblioplex</h3>
          <button class="rune-close" type="button" data-welcome-action="dismiss" aria-label="close">
            <span aria-hidden="true">✕</span>
          </button>
        </header>
        <div class="ui-modal-body welcome-modal-body">
          <p>
            Track, price, and organize your Magic collection in one place. Explore the demo
            instantly&mdash;no account required&mdash;or sign in to start building yours.
          </p>
        </div>
        <footer class="ui-modal-actions">
          <button class="btn btn-secondary" type="button" data-welcome-action="try">
            explore the demo
          </button>
          <button class="btn" type="button" data-welcome-action="sign-in">sign in / sign up</button>
        </footer>
      </div>
    </div>

    <div
      class="ui-modal onboarding-modal"
      id="onboardingModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboardingChoiceTitle"
      aria-hidden="true"
    >
      <div class="ui-modal-card onboarding-modal-card">
        <section data-onboarding-screen="choice">
          <header class="ui-modal-head onboarding-modal-head">
            <div>
              <span class="onboarding-step">set up your library · 1 of 2</span>
              <h3 class="ui-modal-title onboarding-title" id="onboardingChoiceTitle">
                How would you like to start?
              </h3>
            </div>
            <button
              class="rune-close"
              type="button"
              data-onboarding-action="dismiss"
              aria-label="close setup guide"
            >
              <span aria-hidden="true">✕</span>
            </button>
          </header>
          <div class="ui-modal-body onboarding-modal-body">
            <p class="onboarding-lede">Choose a starting point. You can use every method later.</p>
            <div class="onboarding-paths">
              <button class="onboarding-path" type="button" data-onboarding-path="collection">
                <span class="onboarding-path-icon" aria-hidden="true">⇩</span>
                <span>
                  <strong>Import a collection</strong>
                  <small>Upload a spreadsheet, paste a list, or use a collection export.</small>
                </span>
                <span class="onboarding-path-arrow" aria-hidden="true">→</span>
              </button>
              <button class="onboarding-path" type="button" data-onboarding-path="deck">
                <span class="onboarding-path-icon" aria-hidden="true">▧</span>
                <span>
                  <strong>Import a deck</strong>
                  <small>Paste a decklist or bring one over from Moxfield.</small>
                </span>
                <span class="onboarding-path-arrow" aria-hidden="true">→</span>
              </button>
              <button class="onboarding-path" type="button" data-onboarding-path="single">
                <span class="onboarding-path-icon" aria-hidden="true">＋</span>
                <span>
                  <strong>Add cards one by one</strong>
                  <small>Search, enter a collector number, or scan your cards.</small>
                </span>
                <span class="onboarding-path-arrow" aria-hidden="true">→</span>
              </button>
            </div>
          </div>
          <footer class="ui-modal-actions onboarding-modal-actions">
            <button class="btn btn-secondary" type="button" data-onboarding-action="dismiss">
              skip for now
            </button>
          </footer>
        </section>

        <section data-onboarding-screen="guide" hidden>
          <header class="ui-modal-head onboarding-modal-head">
            <div>
              <span class="onboarding-step">your starting path · 2 of 2</span>
              <h3
                class="ui-modal-title onboarding-title"
                id="onboardingGuideTitle"
                data-onboarding-guide-title
              ></h3>
            </div>
            <button
              class="rune-close"
              type="button"
              data-onboarding-action="dismiss"
              aria-label="close setup guide"
            >
              <span aria-hidden="true">✕</span>
            </button>
          </header>
          <div class="ui-modal-body onboarding-modal-body">
            <p class="onboarding-guide-description" data-onboarding-guide-description></p>
            <div class="onboarding-capabilities">
              <h4>What else can Biblioplex do?</h4>
              <ul>
                <li>
                  <strong>Track the real card.</strong> Printing, finish, condition, language,
                  quantity, and price stay together.
                </li>
                <li>
                  <strong>Model your shelves.</strong> Containers mirror binders, boxes, trade
                  stock, and everything between.
                </li>
                <li>
                  <strong>Build from what you own.</strong> Decks separate the list from owned
                  copies and show what is missing.
                </li>
                <li>
                  <strong>Change things safely.</strong> History, undo, export, and sharing are
                  built into the workspace.
                </li>
              </ul>
            </div>
          </div>
          <footer class="ui-modal-actions onboarding-modal-actions onboarding-guide-actions">
            <button class="btn btn-secondary" type="button" data-onboarding-action="back">
              back
            </button>
            <button class="btn" type="button" data-onboarding-action="start"></button>
          </footer>
        </section>
      </div>
    </div>

    <div
      class="ui-modal share-modal"
      id="shareModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="shareModalTitle"
      aria-hidden="true"
      hidden
    >
      <div class="ui-modal-card share-modal-card"></div>
    </div>

    <div
      class="deck-details-modal ui-modal"
      id="deckDetailsModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="deckDetailsModalTitle"
      aria-hidden="true"
    >
      <div class="deck-details-modal-card ui-modal-card">
        <header class="deck-details-modal-head ui-modal-head">
          <h3 class="deck-details-modal-title ui-modal-title" id="deckDetailsModalTitle">
            Edit deck details
          </h3>
          <button
            class="rune-close"
            type="button"
            data-deck-details-action="close"
            aria-label="close"
          >
            ✕
          </button>
        </header>
        <div class="deck-details-modal-body ui-modal-body" id="deckDetailsModalBody"></div>
        <footer class="deck-details-modal-actions ui-modal-actions">
          <button class="btn btn-secondary" type="button" data-deck-details-action="cancel">
            cancel
          </button>
          <button class="btn" type="button" data-deck-details-action="save">save</button>
        </footer>
      </div>
    </div>

    <script type="module" src="./app.js?biblioplex-feedback-annotations-2"><\/script>
  </body>
</html>
`,an=null;function on(){return an||=new DOMParser().parseFromString(rn,`text/html`),an}function sn(e){let t=on().querySelector(e);if(!t)throw Error(`Production markup not found: ${e}`);return t.cloneNode(!0)}function cn(e){let t=document.createElement(`template`);return t.innerHTML=e.trim(),t.content.firstElementChild}function Z(e,t=``,n=``){let r=document.createElement(e);return t&&(r.className=t),n&&(r.textContent=n),r}function ln(e=`Ready for interaction.`){let t=Z(`p`,`bpx-story-status`,e);return t.setAttribute(`role`,`status`),t}function un(e,t){let n=e?.ownerDocument?.defaultView?.MutationObserver,r=e?.ownerDocument?.body;if(!n||!r||typeof t!=`function`)return e;let i=!0,a=new n(()=>{!i||e.isConnected||(i=!1,a.disconnect(),t())});return a.observe(r,{childList:!0,subtree:!0}),e}var dn={desktop:{name:`Desktop`,styles:{width:`1440px`,height:`900px`}},tablet:{name:`Tablet`,styles:{width:`820px`,height:`1060px`}},mobile:{name:`Mobile`,styles:{width:`390px`,height:`844px`}}},fn=`Inherits the active Vellum theme. Choose a color to override it; clear the field to return to the theme default.`,pn={loaders:[async()=>(await Promise.all([P(),ge(),Re(),ze(),St(),O(),M(),re(),Ge(),Ze(),be(),mt(),Pe()]),{})],title:`Biblioplex/Views/Application shell`,tags:[`!autodocs`],excludeStories:[`buildApplicationShellStory`],parameters:{layout:`fullscreen`,viewport:{options:dn}},argTypes:{viewMode:{name:`Starting view`,control:`inline-radio`,options:[`collection`,`decks`,`storage`],table:{category:`Application`}},collectionDisplayMode:{name:`Collection display`,control:`inline-radio`,options:[`table`,`visual`],table:{category:`Application`}},sidebarState:{name:`Sidebar`,control:`inline-radio`,options:[`open`,`collapsed`],table:{category:`Sidebar workshop`}},sidebarWidth:{name:`Sidebar width`,control:{type:`range`,min:200,max:420,step:4},table:{category:`Sidebar workshop`}},properCase:{name:`Use sentence case labels`,control:`boolean`,table:{category:`Sidebar workshop`}},sidebarSurface:{name:`Sidebar surface`,control:`color`,description:fn,table:{category:`Sidebar workshop`}},sidebarText:{name:`Sidebar text`,control:`color`,description:fn,table:{category:`Sidebar workshop`}},sidebarMuted:{name:`Sidebar secondary text`,control:`color`,description:fn,table:{category:`Sidebar workshop`}},sidebarAccent:{name:`Sidebar accent`,control:`color`,description:fn,table:{category:`Sidebar workshop`}},sidebarLine:{name:`Sidebar dividers`,control:`color`,description:fn,table:{category:`Sidebar workshop`}},activeItemTreatment:{name:`Active item treatment`,control:`inline-radio`,options:[`production`,`pill`,`ledger`],table:{category:`Sidebar workshop`}}},args:{viewMode:`collection`,collectionDisplayMode:`table`,sidebarState:`open`,sidebarWidth:248,properCase:!1,sidebarSurface:``,sidebarText:``,sidebarMuted:``,sidebarAccent:``,sidebarLine:``,activeItemTreatment:`production`}};function mn(e,t){return t===`location`?e.location?.name||``:t===`added`?Number(e.createdAt||0):t===`modified`?Number(e.updatedAt||0):t===`price`||t===`qty`?Number(e[t]??-1):t===`set`?String(e.setCode||``):String(e[t]??e.resolvedName??e.name??``).toLocaleLowerCase()}function hn(e,t,n){let r=mn(e,n),i=mn(t,n);return typeof r==`number`&&typeof i==`number`?r-i:String(r).localeCompare(String(i))}function gn({collectionDisplayMode:e=`table`,viewMode:t=`collection`,sidebarState:r=`open`,sidebarWidth:i=248,properCase:o=!1,sidebarSurface:s=``,sidebarText:u=``,sidebarMuted:d=``,sidebarAccent:f=``,sidebarLine:p=``,activeItemTreatment:m=`production`,filterFixtureCards:g=e=>e,onFixtureReady:_=()=>{}}={}){let v=en(),b=tn();a({collection:v,containers:Object.fromEntries(b.map(e=>[`${e.type}:${e.name}`,e])),viewMode:t,collectionDisplayMode:e,tagVocabulary:[`favorite`,`trade`,`commander`,`blue`,`review`]});let S=Z(`div`,`bpx-full-app-shell-story`);S.style.setProperty(`--sidebar-width`,`${i}px`);let C=sn(`.app-shell`);S.append(C,sn(`#drawerBackdrop`),sn(`#detailDrawer`));let w=document.body,T=[`view-collection`,`view-list`,`has-collection`,`no-shared-footer`];w.classList.remove(`app-booting`,`app-boot-settling`),w.classList.add(...T);let E=C.querySelector(`#containerIdentityStrip`),ne=C.querySelector(`#collectionSection`),D=C.querySelector(`#listView`),O=document.createElement(`div`);O.className=`collection-visual-view`,O.id=`collectionVisualView`,D.append(O);let re=C.querySelector(`#gridView`),A=C.querySelector(`#locationsView`),M=D.querySelector(`table`),ie=M.querySelector(`tbody`),N=C.querySelector(`#settingsPopover`),ae=C.querySelector(`#appLeft`),oe={"--color-surface":s,"--color-text":u,"--color-text-strong":u,"--color-text-muted":d,"--color-accent":f,"--color-accent-strong":f,"--color-line":p,"--color-line-strong":p,"--color-shell-divider":p};for(let[e,t]of Object.entries(oe))t&&ae?.style.setProperty(e,t);ae?.classList.add(`bpx-sidebar-active--${m}`);let se=()=>{J(r===`collapsed`,{documentObj:document}),w.classList.toggle(`proper-case`,o)};se(),V(E,{visible:!0,scope:`all`,editable:!1,shareable:!0,identity:{label:`Collection`,icon:`collection`,iconSource:`app`,variant:`scope`,className:`container-identity container-identity--scope container-identity-name-static`},makeIdentity:(e,t)=>c(e,t)}),E.classList.remove(`hidden`),ne.classList.remove(`hidden`);let ce=()=>{},P=()=>{},I=()=>{},L=()=>{},R=()=>{let e=g(v);ue(C.querySelector(`#collectionDisplayControls`),{mode:h.collectionDisplayMode,onChange:e=>{h.collectionDisplayMode=e,R()}});let t=h.collectionDisplayMode===`visual`;if(w.classList.remove(`view-grid`,`view-locations`),w.classList.add(`view-list`),D.classList.add(`active`),D.classList.toggle(`collection-display-table`,!t),D.classList.toggle(`collection-display-visual`,t),re.classList.remove(`active`),A.classList.remove(`active`),M.hidden=t,O.hidden=!t,t)ot(M),Ve(O,e,v,{cardWidth:h.collectionVisualCardWidth,hiddenFieldIds:h.collectionVisualHiddenFields,priceStyle:h.visualPriceStyle,binderMode:h.collectionBinderMode,binderLayout:h.collectionBinderLayout});else{Ne(O);let t={hiddenColumnIds:h.collectionTableHiddenColumnIds,columnOrder:h.collectionTableColumnOrder,columnWidths:h.collectionTableColumnWidths},n=h.sortField||`name`,r=h.sortDir===`desc`?-1:1,i=[...e].sort((e,t)=>hn(e,t,n)*r);M.style.setProperty(`--collection-table-real-width`,`${k(t)}px`),at(M,t),He(ie,i.map(e=>x(e,{...t,collection:i,index:v.indexOf(e),key:te(e),selected:h.selectedKeys.has(te(e)),readOnly:!1})));for(let e of M.querySelectorAll(`th[data-sort]`)){let t=e.dataset.sort===n;e.classList.toggle(`sort-active`,t),t?(e.dataset.sortDirection=h.sortDir===`desc`?`desc`:`asc`,e.setAttribute(`aria-sort`,h.sortDir===`desc`?`descending`:`ascending`)):(delete e.dataset.sortDirection,e.removeAttribute(`aria-sort`))}let a=M.querySelector(`.header-check`);if(a){let e=i.filter(e=>h.selectedKeys.has(te(e))).length;a.checked=i.length>0&&e===i.length,a.indeterminate=e>0&&e<i.length}}},de=n({rootEl:D,stateRef:h,getVisibleCards:()=>g(v),renderImpl:R,updateSelectionUiImpl:()=>{}}),fe=pe({tableHeadEl:D,documentObj:document,stateRef:h,renderImpl:R,applyColumnVisibilityChangeImpl:(e,t)=>{let n=new Set(h.collectionTableHiddenColumnIds||[]);t?n.delete(e):n.add(e),h.collectionTableHiddenColumnIds=[...n],R()}}),z=Rt({rootEl:D,documentObj:document,resolveTables:()=>[M],normalizeWidth:(e,t)=>y({[e]:t})[e],tableOptionsFor:()=>({hiddenColumnIds:h.collectionTableHiddenColumnIds,columnOrder:h.collectionTableColumnOrder,columnWidths:h.collectionTableColumnWidths}),tableRealWidth:k,readColumnWidths:()=>h.collectionTableColumnWidths,writeColumnWidths:e=>{h.collectionTableColumnWidths=y(e)},onCommit:R}),me=!1,B=async()=>{me||(me=!0,await rt({loadPrintingsImpl:async()=>({status:`ok`,printings:[],totalCount:0}),showFeedbackImpl:()=>{},hideFeedbackImpl:()=>{}}))},H=()=>{h.collection=v,R()},ge=l({listBodyEl:D,openDetailImpl:async e=>{await B(),S.isConnected&&F(e,{updateUrl:!1})},openDetailCorrectionImpl:e=>{B(),F(e,{updateUrl:!1})},commitRowTagImpl:e=>{let t=Number.parseInt(e?.dataset?.index,10),n=String(e?.value||``).trim().toLocaleLowerCase();return!n||v[t]?.tags?.includes(n)?{ok:!1}:(v[t].tags=[...v[t].tags||[],n],H(),{ok:!0,tag:n})},removeRowTagImpl:(e,t)=>{let n=String(t||``).trim().toLocaleLowerCase();return v[e].tags=(v[e].tags||[]).filter(e=>e!==n),H(),{ok:!0,tag:n}},moveRowLocationImpl:(e,t)=>(v[e].location=t,H(),{ok:!0,location:t}),clearRowLocationImpl:e=>(v[e].location=null,H(),{ok:!0}),addRowCopyImpl:e=>(v[e].qty=Number(v[e].qty||1)+1,H(),{ok:!0,qty:v[e].qty}),deleteRowCopyImpl:async()=>({ok:!0}),allContainersImpl:()=>b,updateBulkBarImpl:()=>{}}),U=()=>{for(let e of C.querySelectorAll(`[data-view]`)){let t=e.dataset.view===h.viewMode;e.classList.toggle(`active`,t),e.setAttribute(`aria-pressed`,String(t))}if(h.viewMode===`collection`){Fe(A),E.classList.remove(`hidden`),ne.classList.remove(`hidden`),R();return}Ne(O),ot(M),E.classList.add(`hidden`),ne.classList.remove(`hidden`),D.classList.remove(`active`),re.classList.remove(`active`),A.classList.add(`active`),w.classList.remove(`view-list`,`view-grid`),w.classList.add(`view-locations`),Te(A,h.viewMode===`decks`?`deck`:`container`,b)};return U(),requestAnimationFrame(()=>{S.isConnected&&(qe(b,{activeLocation:null,activeView:`collection`}),Lt({mode:`synced`,user:{label:`design studio`}},C.querySelector(`#syncAccountSlot`)),ce=_t(),se(),I=Jt({documentObj:document,storage:{value:r===`collapsed`?`1`:`0`,getItem(){return this.value},setItem(e,t){this.value=t}}}),P=gt(),L=Ke({documentObj:document,stateRef:h,headerViewsEl:C.querySelector(`.app-header-views`),tableHeadEl:null,getActiveLocationImpl:()=>null,setTopLevelViewModeImpl:e=>{h.viewMode=e},saveImpl:()=>{},renderImpl:U}),_({render:U,cards:v,locations:b,root:S}))}),un(S,()=>{Fe(A),Ne(O),ot(M),le(E),he(C.querySelector(`#collectionDisplayControls`)),ee();for(let e of S.querySelectorAll(`[data-ms-init]`))j(e);me&&W(),L(),I(),fe(),z(),de(),ge(),P(),ce(),N?.remove(),w.querySelector(`.bpx-full-app-shell-story`)||w.classList.remove(`collection-column-resizing`,...T,`desktop-sidebar-shell`,`view-grid`,`view-locations`,`left-drawer-open`,`left-sidebar-collapsed`,`proper-case`)})}var _n=[`visual`,`gallery`,`decklist`,`text`,`stats`,`hands`,`notes`],vn={loaders:[async()=>(await Promise.all([Qe(),L()]),{})],title:`Biblioplex/Views/Deck workspace`,tags:[`!autodocs`],parameters:{layout:`fullscreen`},render:yn,argTypes:{mode:{name:`View`,control:`inline-radio`,options:_n},condition:{name:`Deck state`,control:`inline-radio`,options:[`building`,`complete`,`illegal`,`empty`]},ownership:{name:`Ownership view`,control:`inline-radio`,options:[`decklist`,`building`]},groupBy:{name:`Group cards by`,control:`inline-radio`,options:[`type`,`cmc`,`color`,`rarity`]},cardSize:{name:`Card size`,control:`inline-radio`,options:[`small`,`medium`,`large`]},showPrices:{name:`Show prices`,control:`boolean`}},args:{mode:`visual`,condition:`building`,ownership:`building`,groupBy:`type`,cardSize:`medium`,showPrices:!0}};function yn(e){let t=$t({condition:e.condition});h.deckMode=_n.includes(e.mode)?e.mode:`visual`,h.deckOwnershipView=e.ownership,h.deckGroupBy=e.groupBy,h.deckCardSize=e.cardSize,h.deckShowPrices=e.showPrices,h.deckBoardFilter=`all`,h.deckSampleHand=nn(t),h.collection=t.cards;let n=Z(`div`,`bpx-app-view-stage`),r=Z(`section`,`deck-view active bpx-deck-workspace-story`),i=Z(`div`,`deck-workspace-root`),a=ln(`Use the controls above the deck to explore each view.`);r.append(i,a);let o=cn(`<div class="deck-details-modal ui-modal" role="dialog" aria-modal="true" aria-labelledby="deckDetailsStoryTitle" aria-hidden="true">
    <div class="deck-details-modal-card ui-modal-card">
      <header class="deck-details-modal-head ui-modal-head">
        <h3 class="deck-details-modal-title ui-modal-title" id="deckDetailsStoryTitle">Edit deck details</h3>
        <button class="rune-close" type="button" data-deck-details-action="close" aria-label="close"><span aria-hidden="true">✕</span></button>
      </header>
      <div class="deck-details-modal-body ui-modal-body" data-deck-details-story-body></div>
      <footer class="deck-details-modal-actions ui-modal-actions">
        <button class="btn btn-secondary" type="button" data-deck-details-action="cancel">cancel</button>
        <button class="btn" type="button" data-deck-details-action="save">save</button>
      </footer>
    </div>
  </div>`);n.append(r,o),je({rootEl:o,fetchImpl:async()=>({ok:!0,json:async()=>({data:[{id:`story-commander`,name:`Fixture Commander`,color_identity:[`U`],type_line:`Legendary Creature`,scryfall_uri:`https://example.test/card/fixture-commander`}]})})}).bind();let s=Be({getModal:()=>o,getBody:()=>o.querySelector(`[data-deck-details-story-body]`),getDeck:()=>t.deck,getDeckMeta:()=>t.deck.deck,getDeckList:()=>t.cards,buildDeckCard:e=>({...e}),normalizeDeckBoard:e=>e||`main`,deckStats:()=>t.stats,deckDetailsViewModel:()=>t.model,applyDeckIdentityEntries:e=>e,applyDeckCoverEntry:e=>e,saveDeckMetadataFromForm:Ye,getCardById:e=>t.cards.find(t=>t.scryfallId===e)||null,defaultDeckMetadata:()=>({}),saveDeckIdentity:(e,t)=>{let n=N(t);return n?.name&&(e.name=n.name,e.emoji=n.emoji),e},save:()=>{a.textContent=`Saved deck details to the local story fixture.`},render:()=>{t.model=fe(t.deck,t.deck.deck,t.stats,``,t.cards,t.model.validation,t.ownership),_()}});s.bind();let l=()=>s.open();D(o);let u=0,d=null,f=1,p=()=>{u=0;let e=i.querySelector(`.deck-columns`);if(!e)return;let n=$e(et(t.boards.main,h.deckGroupBy),e.clientWidth,h.deckCardSize),r=nt(h.deckCardSize);if(e.style.setProperty(`--deck-column-w`,`${r}px`),n.columnCount===f){d&&window.clearTimeout(d),d=null;return}d&&window.clearTimeout(d),d=window.setTimeout(()=>{d=null;let e=i.querySelector(`.deck-columns`);if(!e)return;let n=$e(et(t.boards.main,h.deckGroupBy),e.clientWidth,h.deckCardSize);n.columnCount!==f&&(f=n.columnCount,_(),i.querySelector(`.deck-columns`)?.style.setProperty(`--deck-column-w`,`${n.columnWidth}px`))},180)},m=()=>{u||=window.requestAnimationFrame(p)},g=typeof window.ResizeObserver==`function`?new window.ResizeObserver(m):null;g?.observe(i);let _=()=>{t.model.deckMode=h.deckMode;let e=h.deckMode===`stats`?Oe(t.stats,I(t.boards.main),t.model.formatInput,{status:t.model.legalityStatus,issues:t.model.legalityIssues,cardIssues:t.model.cardLegalityIssues,pendingCount:t.model.pendingLegalityCount},{mainCards:t.boards.main,poolStats:I(t.boards.pool||[])}):null;H(i,{model:ye(t.model),body:tt(t.boards,t.model.validation,t.model.formatInput,{columnCount:f,description:t.model.description}),stats:e,sampleHand:ke({deck:t.deck,sampleHand:h.deckSampleHand}),makeIdentity:(e,t)=>c(document,{label:e,icon:t,variant:`header`,className:`deck-hero-identity`}),onPreferenceChange:(e,t)=>{z(e,t)&&_()}}),m(),s.syncBody(t.model)};_();let v=Ue({deckColumnsEl:i,documentObj:document,stateRef:h,currentDeckContainerImpl:()=>t.deck,currentDeckMetadataImpl:()=>t.deck.deck,renderImpl:()=>{_(),a.textContent=`Showing ${h.deckMode} in ${h.deckOwnershipView} mode.`},saveImpl:()=>{},saveDeckGroupImpl:()=>{},saveDeckPrefsImpl:()=>{},showFeedbackImpl:e=>{a.textContent=e},openDetailImpl:e=>{a.textContent=`Opened card ${e+1}.`},openDeckDetailsModalImpl:l,openShareModalImpl:()=>{a.textContent=`Share flow opened.`},moveDeckCardToBoardCommandImpl:()=>({ok:!0}),removeDeckCardFromDeckCommandImpl:()=>({ok:!0}),addDeckCardToCollectionCommandImpl:()=>({ok:!0}),useOwnedPrintingForDeckCardCommandImpl:()=>({ok:!0}),acknowledgeMissingDeckCardCommandImpl:()=>({ok:!0})});return un(n,()=>{v(),g?.disconnect(),u&&window.cancelAnimationFrame(u),d&&window.clearTimeout(d),s.destroy(),R(i),document.body.classList.remove(`deck-details-modal-open`)})}async function bn({render:e,root:t},n,r){await Ie();let i=document.getElementById(`collectionColumnSettingsPanel`),a=[],o=null,s=``,c=``,l=()=>({mode:h.collectionDisplayMode,hiddenTableColumnIds:[...h.collectionTableHiddenColumnIds],hiddenVisualFieldIds:[...h.collectionVisualHiddenFields],visualPriceStyle:h.visualPriceStyle,visualCardWidth:h.collectionVisualCardWidth,binderMode:h.collectionBinderMode,binderLayout:h.collectionBinderLayout,tableDensity:n.elements.compact.checked?`compact`:`comfortable`}),u=e=>{h.collectionDisplayMode=e.mode,h.collectionTableHiddenColumnIds=[...e.hiddenTableColumnIds],h.collectionVisualHiddenFields=[...e.hiddenVisualFieldIds],h.visualPriceStyle=e.visualPriceStyle,h.collectionVisualCardWidth=e.visualCardWidth,h.collectionBinderMode=e.binderMode,h.collectionBinderLayout=e.binderLayout,n.elements.compact.checked=e.tableDensity===`compact`,r()},d=()=>Ee(i,{...l(),tableColumns:T(h.collectionTableColumnOrder),namedViews:a,activeViewId:o,defaultViewId:s,editingNamedViewId:c,activeViewDirty:!!o&&JSON.stringify(l())!==JSON.stringify(a.find(e=>e.id===o)?.snapshot)},p),f=t=>{t(),e(),d()},p={onColumn:(e,t)=>f(()=>{let n=h.collectionDisplayMode===`visual`?`collectionVisualHiddenFields`:`collectionTableHiddenColumnIds`,r=new Set(h[n]);t?r.delete(e):r.add(e),h[n]=[...r]}),onDensity:e=>f(()=>{n.elements.compact.checked=e===`compact`,r()}),onReset:()=>f(()=>{h.collectionTableHiddenColumnIds=[...g.hiddenColumnIds],h.collectionTableColumnOrder=[...g.columnOrder],h.collectionTableColumnWidths={...g.columnWidths},n.elements.compact.checked=!1,r()}),onPriceStyle:e=>f(()=>{h.visualPriceStyle=e}),onBinderMode:e=>f(()=>{h.collectionBinderMode=e}),onBinderLayout:e=>f(()=>{h.collectionBinderLayout=e}),onCardSize:e=>f(()=>{h.collectionVisualCardWidth=A(e)}),onViewAction(e,t,n){let r=a.find(e=>e.id===t);f(()=>{if(e===`create`){let e={id:crypto.randomUUID(),name:`View ${a.length+1}`,snapshot:l()};a.push(e),o=e.id}else if(e===`apply`&&r)u(r.snapshot),o=r.id;else if(e===`save-changes`){let e=a.find(e=>e.id===o);e&&(e.snapshot=l())}else if(e===`rename`&&r)c=t;else if(e===`rename-save`&&r)r.name=n.trim()||r.name,c=``;else if(e===`rename-cancel`)c=``;else if(e===`duplicate`&&r){let e={...structuredClone(r),id:crypto.randomUUID(),name:`${r.name} copy`};a.push(e),o=e.id}else e===`set-default`&&r?s=t:e===`delete`&&r&&(a.splice(a.indexOf(r),1),o===t&&(o=null))})},async onCopyLink(){let e=new URL(location.href);e.searchParams.set(`layout`,JSON.stringify(l())),await navigator.clipboard.writeText(e.href),document.querySelector(`#component-status`).textContent=`View link copied.`}},m=new URLSearchParams(location.search).get(`layout`);if(m)try{let t=JSON.parse(m),n=l();[`table`,`visual`].includes(t.mode)&&Array.isArray(t.hiddenTableColumnIds)&&Array.isArray(t.hiddenVisualFieldIds)&&(u({...n,...t}),e())}catch{}t.addEventListener(`click`,e=>{e.target.closest(`#collectionDisplayControls`)&&queueMicrotask(d)}),n.addEventListener(`change`,d),d()}function xn(e,{appHeader:t=!1}={}){e.classList.add(`simple-sidebar-workbench`),e.classList.toggle(`app-header-workbench`,t);let n=e.querySelector(`#appLeft`),r=e.querySelector(`.app-shell`),i=matchMedia(`(max-width: 900px)`),a=!0;try{a=localStorage.getItem(`study-simple-sidebar-open`)!==`false`}catch{}let o=document.createElement(`header`);o.className=`simple-app-header`;let s=document.createElement(`button`);s.type=`button`,s.className=`simple-sidebar-toggle`,s.setAttribute(`aria-controls`,`appLeft`),s.setAttribute(`aria-keyshortcuts`,`[`);let c=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);c.setAttribute(`viewBox`,`0 0 24 24`),c.setAttribute(`aria-hidden`,`true`);let l=document.createElementNS(c.namespaceURI,`path`);l.setAttribute(`d`,`M4 4.5h16v15H4zM10 4.5v15`),c.append(l),s.append(c);let u=document.createElement(`span`);u.textContent=`Biblioplex`,o.append(s,u),e.prepend(o);let d=document.createElement(`button`);d.className=`simple-sidebar-backdrop`,d.type=`button`,d.setAttribute(`aria-label`,`Close navigation`),d.tabIndex=-1,e.append(d);let f=!1;function p(){Gt(!1),J(!i.matches&&!a),e.classList.toggle(`simple-sidebar-mobile-open`,i.matches&&f),i.matches&&(n.inert=!f,n.setAttribute(`aria-hidden`,String(!f)));let t=i.matches?f:a;e.querySelector(`.app-center`).inert=i.matches&&f,s.setAttribute(`aria-expanded`,String(t)),s.setAttribute(`aria-label`,t?`Hide sidebar`:`Show sidebar`),s.title=`${t?`Hide sidebar`:`Show sidebar`} ([)`}function m(){if(i.matches)document.body.classList.remove(`left-drawer-open`),f=!f;else{a=!a;try{localStorage.setItem(`study-simple-sidebar-open`,String(a))}catch{}}p()}s.addEventListener(`click`,m),d.addEventListener(`click`,()=>{f=!1,p(),s.focus()});for(let e of[`pointerenter`,`pointerleave`,`focusin`,`focusout`])n.addEventListener(e,e=>e.stopImmediatePropagation(),!0);document.addEventListener(`keydown`,e=>{if(e.key===`Tab`&&f){let t=[s,...n.querySelectorAll(`button, a[href], input, select, [tabindex="0"]`)].filter(e=>!e.disabled&&e.getClientRects().length),r=t.indexOf(document.activeElement);e.shiftKey&&r<=0?(e.preventDefault(),t.at(-1)?.focus()):!e.shiftKey&&(r<0||r===t.length-1)&&(e.preventDefault(),s.focus())}if(e.key===`Escape`&&f){e.preventDefault(),e.stopImmediatePropagation(),f=!1,p(),s.focus();return}e.key!==`[`||e.altKey||e.ctrlKey||e.metaKey||e.defaultPrevented||e.target.closest(`input, textarea, select, [contenteditable="true"]`)||document.querySelector(`.detail-drawer.visible, .modal-open, .confirm-modal-open`)||(e.preventDefault(),e.stopImmediatePropagation(),m())},!0),n.addEventListener(`click`,e=>{i.matches&&e.target.closest(`.scope-option, .scope-option-group-destination`)&&(f=!1,p(),s.focus())}),matchMedia(`(min-width: 901px) and (max-width: 1180px)`).addEventListener(`change`,p),i.addEventListener(`change`,()=>{f=!1,p()});let h=n.querySelector(`#sidebarBrandSlot`);if(h&&n.append(h),t){let t=document.createElement(`div`);t.className=`simple-header-tools`;let n=e.querySelector(`.mobile-utility-menu`);n&&(n.removeAttribute(`open`),t.append(n),n.addEventListener(`click`,e=>{e.target.closest(`.mobile-utility-menu-panel a, .mobile-utility-menu-panel button`)&&(n.open=!1)}));let r=()=>{let n=e.querySelector(`#syncAccountSlot`);n&&n.parentElement!==t&&t.append(n)};o.append(t),r(),new MutationObserver(r).observe(e,{childList:!0,subtree:!0})}let g=document.createElement(`div`);g.className=`simple-sidebar-resize`,g.tabIndex=0,g.setAttribute(`role`,`separator`),g.setAttribute(`aria-label`,`Sidebar width`),g.setAttribute(`aria-orientation`,`vertical`),g.setAttribute(`aria-valuemin`,`220`),g.setAttribute(`aria-valuemax`,`360`),g.setAttribute(`aria-valuenow`,`240`),n.append(g);let _=t=>{let n=Math.max(220,Math.min(360,t));e.style.setProperty(`--sidebar-width`,`${n}px`),g.setAttribute(`aria-valuenow`,String(Math.round(n)))};g.addEventListener(`keydown`,e=>{[`ArrowLeft`,`ArrowRight`,`Home`,`End`].includes(e.key)&&(e.preventDefault(),_(e.key===`Home`?220:e.key===`End`?360:Number(g.getAttribute(`aria-valuenow`))+(e.key===`ArrowRight`?10:-10)))}),g&&g.addEventListener(`pointerdown`,e=>{if(e.button!==0||i.matches)return;e.preventDefault(),g.setPointerCapture(e.pointerId);let t=e=>_(e.clientX-r.getBoundingClientRect().left),n=()=>{g.removeEventListener(`pointermove`,t),g.removeEventListener(`pointerup`,n),g.removeEventListener(`pointercancel`,n)};g.addEventListener(`pointermove`,t),g.addEventListener(`pointerup`,n),g.addEventListener(`pointercancel`,n)}),p()}var Q=document.querySelector(`#component-controls`),Sn=document.querySelector(`#component-stage`),$=document.querySelector(`#component-status`);new ResizeObserver(([e])=>{document.documentElement.style.setProperty(`--study-controls-height`,`${e.target.getBoundingClientRect().height}px`)}).observe(document.querySelector(`.component-study-controls`));var Cn=new URLSearchParams(location.search);for(let e of Q.elements){if(!e.name)continue;let t=Cn.get(e.name);e.type===`checkbox`?e.checked=t===`1`:[...e.options].some(e=>e.value===t)&&(e.value=t)}var wn={muted:{ochre:`#A58B55`,ember:`#8A5B48`,jungle:`#4D6861`,cobalt:`#526B8D`,plum:`#6B5B70`,sage:`#949B8B`},saturated:{ochre:`#B78B2E`,ember:`#914027`,jungle:`#145348`,cobalt:`#1647A5`,plum:`#4B2857`,sage:`#849379`}},Tn=window.fetch.bind(window);window.fetch=(e,t)=>{let n=new URL(typeof e==`string`||e instanceof URL?e:e.url,location.href);return/^biblioplex-api(?:[.-]|$)/.test(n.hostname)?Promise.reject(Error(`The component study uses local fixtures, not the collection API.`)):Tn(e,t)};function En(){let e=document.documentElement;e.dataset.componentTheme=Q.elements.theme.value,e.dataset.sidebarVariant=Q.elements.sidebar.value;for(let t of[`headings`,`frame`,`lighting`])e.dataset[t]=Q.elements[t].value;e.dataset.compact=String(Q.elements.compact.checked);for(let[t,n]of Object.entries(wn[Q.elements.palette.value]))e.style.setProperty(`--study-${t}`,n);document.body.classList.toggle(`proper-case`,Q.elements.theme.value===`study`);let t=new URL(location.href);for(let e of Q.elements)e.name&&t.searchParams.set(e.name,e.type===`checkbox`?e.checked?`1`:`0`:e.value);history.replaceState(null,``,t)}var Dn=new WeakSet,On=Object.fromEntries(T().map(e=>[e.id,e.label])),kn=new ResizeObserver(e=>{for(let{target:t}of e){let e=On[t.dataset.columnId]||t.getAttribute(`title`)||t.dataset.columnId,n=e.charAt(0).toUpperCase()+e.slice(1);t.dataset.studyLabel=t.getBoundingClientRect().width<115?n.charAt(0):n}});function An(){for(let e of Sn.querySelectorAll(`th[data-column-id]:not([data-column-id="check"]):not([data-column-id="__filler"])`))Dn.has(e)||(Dn.add(e),kn.observe(e))}new MutationObserver(An).observe(Sn,{childList:!0,subtree:!0});var jn=0;async function Mn(){let e=++jn;$.textContent=`Loading components…`,Ce(),document.getElementById(`cardPreview`)?.remove(),document.getElementById(`imageLightbox`)?.remove(),Sn.replaceChildren(),await new Promise(e=>requestAnimationFrame(e));let n=Q.elements.scene.value,r=n===`deck`?vn:pn;if(await Promise.all([...(r.loaders||[]).map(e=>e()),U(),we()]),e!==jn)return;let i=n===`deck`?vn.render({...vn.args,mode:`decklist`}):gn({...pn.args,sidebarWidth:Q.elements.sidebar.value===`original`?205:240,properCase:Q.elements.theme.value===`study`,filterFixtureCards:e=>p(e,{...t(),query:document.getElementById(`searchInput`)?.value||``,colors:b(document.getElementById(`filterColor`)),colorIdentities:b(document.getElementById(`filterColorIdentity`))}).list,onFixtureReady:({render:e,cards:t,root:n})=>{h.collectionTableColumnWidths={...h.collectionTableColumnWidths,qty:96},e(),Q.elements.sidebar.value!==`original`&&xn(n,{appHeader:Q.elements.sidebar.value===`header`}),m({renderImpl:e});for(let[e,n]of[[`filterSet`,t.map(e=>e.setCode)],[`filterTag`,t.flatMap(e=>e.tags||[])]])E(document.getElementById(e),[...new Set(n)].filter(Boolean).map(e=>({value:e,label:e})));w(),bn({render:e,root:n},Q,En).catch(Nn)}});Sn.append(i),document.body.append(sn(`#cardPreview`),sn(`#imageLightbox`)),Se(document),En(),An(),$.textContent=``}Q.addEventListener(`change`,e=>{En(),[`scene`,`sidebar`].includes(e.target.name)&&location.reload()}),document.querySelector(`#copy-study`).addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(location.href),$.textContent=`Link copied.`}catch{$.textContent=`The browser address includes these settings.`}});function Nn(e){$.textContent=`The component preview could not load. Reload to try again.`,console.error(e)}En(),Mn().catch(Nn);