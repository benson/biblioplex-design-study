# Biblioplex visual study

A standalone, revisitable design study for translating Benson’s moodboard into Biblioplex. This is a sample interface, not a production client. It does not authenticate or read/write collection data.

The public page pairs the supplied grid and palette references with a collection specimen, card gallery/detail, deck workspace, and editable sample dialog. Visible controls compare exact saturated/muted palettes, ornamental/plain headers, tactile/quiet framing, compact rows, and ambient/top-right lighting. Settings and specimen view are encoded in the URL. A copied URL recreates the appearance; sample edits and selections are intentionally visit-local.

## Run locally

`node scripts/serve.mjs` serves `public/` on `http://127.0.0.1:4198`.

No build or dependency install is required. GitHub Pages deploys `public/` through the included workflow. The site follows Benson’s GitHub Pages project architecture at `https://bensonperry.com/biblioplex-design-study/`.

## Keep the study useful

- Pair each proposed treatment with its reference and rationale.
- Keep comparison controls visible and preserve their URL representation.
- Use the same sample content across alternatives.
- Full decorative heading words have no repeated caption; narrow columns may use initials with a readable label.
- Sorting and resizing are independent; resize handles support pointer drag and arrow keys.
- Preserve keyboard focus, native dialog cancellation, responsive layout, and reduced-motion behavior.
- This study informs a later production Storybook slice; it does not substitute for checking production components.

## References and attribution

The two reference images were supplied by Benson in this design discussion. The brief reflects the conversation’s interpretation of page 2 of the Biblioplex moodboard. Palette values are transcribed exactly from the supplied image. Paper and ink neutrals supplement that palette.

Public card metadata and image URLs were retrieved from Scryfall on September 9, 2026. Magic: The Gathering artwork belongs to Wizards of the Coast and the credited artists. Sample quantities and prices are illustrative, not current market data or Benson’s actual collection.

## Deployment acceptance

Check JavaScript syntax and exercise the page in a real browser: visible controls and URL restoration, search/filter, sort/resize, selection, gallery, card details, dialog save/cancel, reference enlargement, desktop/mobile layout. Keep temporary screenshots and browser output under `.qa/`, never in `public/`.
