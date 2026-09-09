# Biblioplex visual study — handoff and continuation plan

## Current direction: actual components — September 9, 2026

Benson asked to continue refinement using the real app components, so he can
interact with them before committing to a theme. The next preview is at
`https://bensonperry.com/biblioplex-design-study/components/`. Its source is
`component-preview/`; rebuilding instructions and boundaries are in that
directory's README. The original study remains available as reference and links
to the component preview.

The preview imports Biblioplex's real production-backed Storybook workbenches,
including React table/rows, resize/sort/selection, hover, card drawer, gallery,
view settings, search/filter code, deck workspace, and deck form. It uses sample
fixtures; it does not boot auth/sync or change production. The top controls
compare Study / Current app, collection / deck, both palettes, headings,
framing, lighting, and density. Use the top View selector to change scenes.
Backend workflows are outside this workbench. Appearance controls apply without
remounting the active components; scene navigation resets the fixture.

Biblioplex source is pinned to `3dc13919ab7cf6aa73aa4eb073abae0d78f8c511` on the
isolated `design-study-components` branch. Only Storybook fixture wiring changed
there: filtering/ready callbacks and forwarding binder settings. No production
React component or theme was changed. Full CI run `34393175118` passed, including
check, Storybook, interactions, visual tests, and browser smoke.

Local checks passed: production bundle renders 9 sample rows in actual React
roots; search narrows Sol Ring to one row; sorting, resize, selection, gallery,
column visibility/density, binder layout, hover, card drawer, and deck form
cancel/save work. Desktop, 390px mobile collection, browse drawer, and deck dialog
screenshots were reviewed. Copy-link clipboard equality passed. Compiled assets
are fingerprinted and verified against source/build hashes in Pages CI.

Continue visual refinement in `component-preview/theme.css`. Do not return to
polishing the original replica as the primary deliverable.

## Card hover previews

List card names/thumbnails now show a framed image and edition popover after
a short mouse-hover delay, or immediately on keyboard focus. Matches palette,
framing, and directional lighting; clamps to viewport. Pointer can enter the
preview; Escape, blur, scroll, view changes, and opening a dialog dismiss it.
Click still opens the full card dialog. Hover, keyboard, dismissal, dialog,
and bottom-edge positioning checked in browser.

## Asset caching fix

Publishing now builds `dist/` with content-hashed CSS, JS, and imported cards
filenames using `scripts/build.mjs`. Local preview still serves `public/`.
A supplied `v` entry-page revision is preserved in settings/share URLs.

## Latest header refinement — September 9, 2026

Benson now wants no subtitles beneath column headings, including condensed
initials. This supersedes the earlier initial-plus-label decision. Removed
caption nodes; full accessible sort labels and hover titles remain. Sort markers
use geometric CSS shapes with Benson’s requested 6px top padding beside ornamental lettering (replacing the earlier upward offset),
so diamond and both arrow states share a consistent visual center.

## Latest visual feedback — September 9, 2026

Benson wants material character without extra flavor text or quips. Removed
visible slogans, decorative numbering, and redundant collection labeling. Added
a visible Ambient / Top right lighting control, defaulting to top-right light,
with URL persistence. CSS lights the rim and paper, shades the recess, and casts
shadows down-left; artwork and text have no lighting overlay. Desktop and mobile
screenshots reviewed; lighting restoration and 390px overflow check passed.

## Completed continuation — September 9, 2026

Published at https://bensonperry.com/biblioplex-design-study/ from
https://github.com/benson/biblioplex-design-study . Deployment run
34387928554 passed; published source commit: `2338e97`.

Remaining checks passed: 390px mobile layout without page overflow, card and
deck dialog screenshots, gallery with 16 entries, both enlarged references,
working brief, and actual clipboard URL equality. Fixed stale custom name
validity when reopening a cancelled deck draft; invalid submission, reopening,
and saving were verified. Live HTTPS browser check rendered 16 rows, decoded
card artwork, and returned HTTP 200 for the page and all five local assets.
Existing card printings were retained. Biblioplex production was not changed.

Next: collect Benson's visual feedback on this stable study. The remainder of
this document is the historical pre-publication handoff, retained for context;
its pending-publication and pending-check statements are superseded above.

Updated September 9, 2026. Benson explicitly requested this handoff to continue in a fresh session. The current work is paused for that transition.

## The task

Create one stable, navigable design-study page for translating Benson’s moodboard into Biblioplex’s visual language. It should put references, their interpretation, visible comparison controls, and a complete working sample screen together. Publish it at a stable URL, then iterate with Benson’s visual feedback.

This is **visual exploration**, not authorization to replace Biblioplex’s production appearance. The intended later step is to bring the chosen direction into production Storybook components, verify their real behavior, and then roll out an approved theme.

## Important context and decisions

- Biblioplex’s UI modernization is already complete and deployed. Do not restart the React migration, legacy cleanup, or workflow-test project. That release finished at `bd33804d2edf8e5468a8b40c790123f454de2283` with successful CI and deployment on September 8.
- Benson’s Canva moodboard is **page 2** of “Biblioplex Moodboard.” The Canva connector was installed and successfully accessed design `DAHJkcaDRKA`; page 2 has page ID `PBSwpnsl2Mgkrnx4`. Use available Canva tools if more reference inspection is needed. Do not publish a collaboration-token URL.
- The broad interpretation is a collector’s working archive: old fantasy publishing, physical collections/cabinets, and early personal software. Reference categories include colors/details, dense information layouts, typography, product views, and feeling.
- Three initial directions were shown: A, illustrated folio; B, collector’s cabinet; C, desktop archive. Benson liked **B’s colors** and then specifically asked for detailed medieval-ish column headings inspired by a tarot information grid.
- Benson liked the ornamental-header experiment. He noticed that “Location” appeared twice. We agreed: **full decorative words have no repeated subtitle; narrow columns may show an ornamental initial with a readable plain label underneath.** Keep a separate sort indicator.
- Benson supplied a specific palette image and explicitly asked to use its exact hex values. Both palettes are included below.
- Earlier inline mockups hid palette controls in the host’s customization panel. Benson could not find them. Do not repeat that approach. All important comparison controls must be plainly visible on the page.
- We discussed Storybook versus exploration. Benson is happy to explore elsewhere first. We agreed on a dedicated design-study page rather than disconnected chat mockups. He approved: “cool okay let’s do that then!”
- The working principle is **rich at the edges, clear at the center**. Keep real artwork and usable data central. Determine framing, body typography, ornament density, and dialog material through examples, rather than treating all choices as approved.

## Exact palettes

| Color | Saturated (left reference) | Muted (right reference) |
| --- | --- | --- |
| Ochre | `#B78B2E` | `#A58B55` |
| Ember | `#914027` | `#8A5B48` |
| Jungle | `#145348` | `#4D6861` |
| Cobalt | `#1647A5` | `#526B8D` |
| Plum | `#4B2857` | `#6B5B70` |
| Sage | `#849379` | `#949B8B` |

The study starts with muted colors. Jungle frames the app, ochre supplies ornament, other inks distinguish locations, and sage supports subtle states. Paper and dark text neutrals supplement the supplied palette.

## Workspace and files

Project: `C:\Users\benso\Projects\biblioplex-design-study`

This directory is a newly created standalone project. **Git has not been initialized, a GitHub repository has not been created, and the page has not been published.** Do not describe it as deployed.

- `public/index.html`: full study page, visible controls/reference rail, collection specimen, gallery, deck view, card dialog, edit dialog, reference enlargement, working brief dialog.
- `public/study.css`: neutral study chrome around B-inspired jungle/paper specimen; ornamental responsive headings; quiet/tactile framing; desktop/mobile styles.
- `public/study.js`: settings and URL serialization, sample collection, search/filter, sorting, pointer/keyboard resize, selection, gallery/card detail, deck navigation, draft cancellation/save, reference and brief dialogs.
- `public/cards.js`: 16 public Scryfall card records with image URLs. Quantities and prices in `study.js` are deliberately illustrative, not Benson’s collection or market claims.
- `public/assets/medieval-grid-reference.png`: copied from Benson’s uploaded tarot-grid reference.
- `public/assets/palette-reference.png`: copied from Benson’s uploaded exact-palette reference.
- `scripts/serve.mjs`: small dependency-free local static server, port 4198.
- `.github/workflows/deploy-pages.yml`: drafted GitHub Pages workflow; syntax checks JS, then publishes `public/`.
- `README.md`: scope, operation, references, planned deployment path, acceptance notes.
- `.gitignore`: narrowly ignores `.qa/`, `.playwright-cli/`, and `node_modules/`.

No build/install is needed. Run `node scripts/serve.mjs` from the project directory. The preview at `http://127.0.0.1:4198/` was responding with HTTP 200 at handoff. A Node process from the prior session may still own the port; reuse it if healthy rather than start a duplicate.

Earlier inline studies and the first brief remain in:
`C:\Users\benso\.codex\visualizations\2026\09\05\01a071ef-0db4-78b2-91b2-cd7258b24ef2`
Files include `biblioplex-directions.html`, `biblioplex-illuminated-grid.html`, and `biblioplex-visual-brief.md`. These are background, not the deliverable to resume. The new standalone page is already substantially built; do not restart it.

## Current behavior

- Visible settings: muted/saturated, ornamental/plain, tactile/quiet, compact rows. Swatches disclose exact hex values.
- Settings are encoded into the URL; “Copy this look’s link” copies the URL. Defaults are muted, ornamental, tactile, normal rows. Specimen view and table/gallery choice are also encoded.
- Search, location filtering, empty state, selection, sorting, and resizing work with the sample collection.
- Columns use full ornamental words where there is room, otherwise an initial and a plain label. Plain mode removes ornament and reduces heading height.
- Card thumbnails and gallery cards open a native dialog containing the actual card image and metadata.
- Breya opens a deck excerpt; “Edit details” opens a form with visit-local drafts, cancel, and save.
- References enlarge in native dialogs. “Read the working brief” opens the interpretation and principles.
- Sample edits, filters, selections, and resized widths are not part of the copied URL; appearance and view are. The README states this.

## Verification already completed

- `node --check` passed for `public/study.js`, `public/cards.js`, and `scripts/serve.mjs`.
- Browser loaded the page successfully; all 16 records rendered and reference/card images loaded.
- Desktop screenshot at 1440 × 1000 was visually reviewed: controls and references on the left, complete app framing and collection grid on the right. No observed desktop layout issue.
- Switched all visible controls to saturated/plain/quiet/compact. Confirmed exact jungle value `#145348`, matching state and URL.
- Reloaded and confirmed those four settings were restored.
- Sorted by card name and confirmed Arcane Signet became first with ascending semantics.
- Keyboard-resized the name column, then pointer-dragged its handle from about 298 px to 337 px; sorting stayed ascending (resize did not accidentally sort).
- Searched Sol Ring: one result. Selected it: one selected. Opened card detail and visually reviewed its dialog.
- Searched nonsense and confirmed the empty state, then cleared filters.
- Opened Breya details, changed its name, cancelled: title stayed Breya. Reopened, changed and saved: title became “The brass library.” This was browser-only sample data, not a source or production edit.

Pending verification: mobile screenshot/layout, mobile dialog/default state, gallery, reference enlargement, brief, clipboard/share-link action, and a final live check after publishing. Keep verification focused; do not recreate Biblioplex’s full suite in this standalone project.

## Immediate interrupted operation: card printing choices

The initial Scryfall query selected default printings. Several turned out to be Marvel Super Heroes Commander printings (set `MSC`). This is valid card data, but less helpful for judging the fantasy direction.

A follow-up request attempted to pin traditional printings. It failed the intentional all-or-nothing check because two requested printings were missing. **`public/cards.js` was NOT overwritten by this second attempt.** It still contains the working initial dataset.

Request endpoint: `POST https://api.scryfall.com/cards/collection`, JSON `{ "identifiers": [{ "name": "...", "set": "..." }] }`. Both headers are required: `User-Agent: BiblioplexDesignStudy/1.0` and `Accept: application/json`.

The attempted set choices were:
- Breya `c16`; Sol Ring `cmm`; Swords to Plowshares `cmm`; Rhystic Study `wot`; Lightning Bolt `m11`; Counterspell `mh2`.
- **Missing:** Skullclamp `cmm`; Etherium Sculptor `2xm`. Find valid printings or keep those two existing records instead of blocking on this incidental refinement.
- Path to Exile `2xm`; Arcane Signet `eld`; Emry `eld`; Goblin Engineer `mh1`; Master Transmuter `2xm`; Thopter Foundry `2xm`; Trading Post `m14`; Command Tower `cmm`.

This is a bounded visual refinement, not a required data project. Update the static dataset once and verify images if practical; otherwise retain the working images and continue publishing.

## Next steps, in order

1. Read this file and inspect the existing page. Preserve the current implementation and accepted design choices.
2. Optionally complete the bounded card-printing refinement described above.
3. Finish the focused browser review, especially narrow/mobile controls and dialogs. Fix concrete issues found. A minor possible cleanup: clear custom name validity when opening the deck form after a cancelled invalid draft.
4. Prepare and publish the standalone study using Benson’s existing GitHub + GitHub Pages architecture. Intended repository: `benson/biblioplex-design-study`; intended URL: `https://bensonperry.com/biblioplex-design-study/`. Confirm the repository does not already exist before creation. GitHub CLI is authenticated as `benson`.
5. Wait for the Pages workflow and verify the live page plus its assets. Open the stable URL for Benson and report it plainly with the visible controls and copy-link behavior.
6. Invite feedback on the whole screen and particular treatments. Keep this as the shared iterative study. Do not proceed to production theme rollout without a chosen direction.

## Hosting and workflow constraints

- Respect `C:\Users\benso\Projects\AGENTS.md`: no OpenAI/ChatGPT Sites, no `.openai/hosting.json`, no `git.chatgpt-team.site` unless Benson explicitly requests it.
- Inspected sibling architecture: `homepage` remote is `https://github.com/benson/benson.github.io.git`; Glimmer uses GitHub Actions Pages publishing. The drafted workflow follows that pattern.
- This standalone study avoids changes to the production Biblioplex or homepage repositories. Creating/publishing this study is within the approved task.
- Use installed tools and real browser inspection. The in-app browser worked for desktop QA. Its session bindings may not survive the transition; obtain a fresh handle normally. Probe localhost before opening it.
- Do not use subagents unless Benson or applicable instructions explicitly request delegation.
- Own and clean disposable outputs. Keep reusable source and this explicit handoff. Do not delete unknown files or the user’s original clipboard images.

## What to tell Benson at completion

Lead with the actual live link. Explain that comparison controls are visibly on the page and “Copy this look’s link” preserves appearance settings. Briefly name what can be tried (sorting/resizing, gallery/card detail, deck dialog), and make clear it is the iterative design study. No claims that these sample components are already the production React components.
