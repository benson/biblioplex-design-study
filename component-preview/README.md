# Real component preview

The page at `/biblioplex-design-study/components/` imports Biblioplex's actual
React components and production styles through its existing Storybook fixture
workbenches. It does not boot the authenticated application. Theme overrides
live only in `theme.css`, and controls use sample state and local fixture callbacks.

The source revision is pinned in `source.json`. The isolated Biblioplex branch
adds filtering/ready callbacks to the app-shell fixture and forwards its binder
settings. It does not change any production React component or production theme.

The collection table, row interactions, column resize/sort handlers, search
parser, filter controls, display settings, gallery, hover preview, card drawer,
deck workspace, and deck-details form come from Biblioplex. The preview provides
fixture callbacks for settings and edits. Account, sync, import, and backend
sharing are outside this component workbench; collection API requests are blocked.

In the Collection scene, compare navigation with `?sidebar=original` and
`?sidebar=simple`, or the Navigation selector. The simple variant adds a stable
header toggle, click-only open/close, 240px default width with mouse/keyboard
resizing, bottom account placement, and a mobile navigation drawer. Its policy
lives in `simple-sidebar.js`; underlying navigation remains the real components.
The original pattern remains the default. Only the simple variant saves its
open/closed preference, using a study-specific local-storage key.

## Rebuild

1. Create an isolated Biblioplex worktree at the commit in `source.json`.
2. Run `npm ci` in that worktree. Never link another checkout's node_modules.
3. Set `BIBLIOPLEX_SOURCE` to that worktree's absolute path.
4. From this study repository, run `node scripts/build-components.mjs`.
5. Run `node scripts/check-components.mjs` and verify the built page in a browser.
6. Commit `component-preview/`, intentional script changes, and the generated
   `public/components/` artifact together.

For live CSS iteration, run that worktree's `node_modules/vite/bin/vite.js` with
`--config component-preview/vite.config.mjs` from this repository. It serves
port 4199. Use the same `BIBLIOPLEX_SOURCE` environment variable.

The checked-in browser artifact allows the public study's GitHub Pages workflow
to deploy without credentials for the private Biblioplex source repository.
It contains no source maps. Vite fingerprints all bundled assets, and CI checks
the source-input and artifact hashes to reject forgotten or incomplete rebuilds.
After changing the pinned Biblioplex source, its exact revision must also pass
the Biblioplex `Check` workflow before publishing the updated artifact.

## Editing boundaries

Use `theme.css` for presentation. Do not replace or reimplement the React
components in the preview. Their header nodes and interaction handlers stay
owned by React; a ResizeObserver supplies only theme label attributes for
ornamental full words/initials. The baseline toggle removes the study CSS via
its root selector without remounting the components.

Use the top View control to move between collection and deck fixtures. Switching
scenes reloads the fixture so document-level app controllers start cleanly.
Appearance, search, and explicit copied-view layouts can be shared through the
URL. Sample card/deck edits and saved-view drafts remain local to that page visit.
