# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install
npm run dev       # Vite dev server
npm run build     # production build into dist/
npm run preview   # serve the built output on :4173
```

There is no test runner, linter, or formatter configured. `npm run build` is the only automated check — it catches import and syntax errors but nothing else, so verify visual and interactive changes by driving the built site in a browser.

## What this is

MinimalDS is a multi-brand design system: a React component library plus the documentation site that presents it. The published artifact today is the docs site — `package.json` is `private` with no library build or `exports`, so the components are not consumable via npm. A companion Figma Community file is the design source of truth.

## Architecture

### Tokens drive everything

`src/theme/tokens.css` is the heart of the system. It defines three brands (Minimal, Purpura, Azure) × two modes (light, dark) as six blocks of CSS custom properties, each keyed on `[data-brand="…"][data-mode="…"]`, with Minimal/light doubling as `:root`. Every brand block redefines the same token names, so a component written against tokens automatically works across all six combinations.

**Component CSS must reference tokens, never literal values.** A hardcoded hex or px size is a bug — it will be wrong in five of the six brand/mode combinations.

The token names mirror the Figma variable export, which is why some redundancy exists (`--color-surface-*`, `--color-text-*`, `--color-icon-*` and `--color-border-*` repeat the same palette for different semantic slots). Keep that structure when adding tokens.

At the end of the file sits a responsive type scale: `--font-size-display`/`h1`…`h4` resolve to the `--font-size-desktop-*` tokens, and to `--font-size-mobile-*` under `@media (max-width: 768px)`. **Components and pages reference the unprefixed aliases**; the `desktop-*`/`mobile-*` pairs exist to mirror Figma and to be documented on the docs pages. 768px is the breakpoint used throughout the codebase.

### Theming has two layers

`src/context/ThemeContext.jsx` holds global `mode` and `brand` and renders a `<div data-brand data-mode>` around the whole app. The NavBar toggle drives `mode`.

Global `brand`, however, is effectively fixed at `minimal` — `setBrand` is exposed but no consumer calls it. Instead, **each docs page owns local brand state** and passes it to `ComponentPagePreview`, which stamps `data-brand` on a nested preview scope. That nested element re-resolves every token, so one page can show a Purpura component inside an otherwise Minimal site. This is why previews change brand but the surrounding chrome does not.

**A consequence worth knowing before reaching for `createPortal`:** anything portalled to `document.body` renders *outside* that wrapper, so its tokens resolve from `:root` — Minimal/light — whatever the app is set to. `Dialog` and `Toast` both render in place rather than portalling for this reason. Moving `data-brand`/`data-mode` onto `<html>` (see the backlog) would remove the constraint.

App-level state lives in `src/context/`, and `App.jsx` nests the providers: `ThemeProvider` wraps `ToastProvider` wraps the router, so the toast region resolves the app's brand and mode.

### Routing

`src/App.jsx` is a hand-rolled hash router: a `switch` over `window.location.hash` with one eager import per page. Adding a page means adding an import, a `case`, and a `navItems` entry in `src/components/Sidebar/Sidebar.jsx`. Unknown hashes silently fall through to `Home`. `Layout` scrolls content to the top on every path change.

### Component conventions

Every component lives in `src/components/<Name>/` with `<Name>.jsx`, `<Name>.css`, and an `index.js` containing `export { default } from './<Name>'`. (`Layout`, `NavBar` and `Sidebar` predate this and lack `index.js`.)

- Class names are BEM under an `mds-` prefix: `mds-button`, `mds-button__icon`, `mds-button--primary`. Variant classes are built by joining an array of strings, not with a classnames library.
- Each `.jsx` opens with a JSDoc block listing every prop and its accepted values. Keep it accurate — it is the only prop documentation that exists.
- Icons are inline SVG constants at the top of the file using `stroke="currentColor"`, not an icon package.
- Components are controlled (`value` + `onChange`) unless the state is purely presentational, like `Accordion`'s open state.
- CSS files open with a banner comment naming the component and noting that values come from tokens.

### Docs pages

`src/pages/ComponentPage.jsx` exports the shared scaffold every component page composes: `ComponentPageHeader`, `ComponentPagePreview` (the controls bar + brand-scoped preview area), `ComponentPageSection`, `ComponentPageBody`, `ComponentPageUsage` (the green "when to use" / red "when not to use" pair) and `ComponentPageStatePanel`. Pages follow a consistent order: header → preview with `Dropdown` controls → Overview → Usage guidelines → component-specific sections.

The preview controls are `Dropdown` components with an `innerLabel`; the first is conventionally Brand.

### Adding a component — checklist

1. `src/components/<Name>/` with the three files above.
2. Tokens only in the CSS; check all three brands and both modes.
3. `src/pages/<Name>Page.jsx` + `.css` using the `ComponentPage` scaffold.
4. Route `case` and import in `src/App.jsx`; `navItems` entry in `Sidebar.jsx` (Components section is alphabetical).
5. Release notes entry in `src/pages/ReleaseNotes.jsx` (newest first; `Major`/`Minor`/`Patch` labels have matching CSS) and a matching `package.json` version bump.

## Known issues and future work

Findings from a September 2026 audit, roughly highest value first. Items are open unless marked otherwise.

### Accessibility — the largest gap

- **No keyboard dismissal or navigation in the older overlays.** `Tooltip` is still the only component handling a key event. `Dialog` cannot be closed with Escape and has no focus trap and no focus restore. `Select` and `Dropdown` close only on outside `mousedown`. `Menu` and `TabGroup` have no arrow-key roving focus.
- **`Tab` is visual only.** `Tab.jsx` sets `role="tab"` with no `id`/`aria-controls`, and no `tabpanel` exists anywhere.
- **ARIA mismatch in `Select`.** `Select.jsx:113` declares `aria-haspopup="listbox"` but renders `Menu`, which is `role="menu"` (`Menu.jsx:23`) with `role="menuitem"` children carrying `aria-selected` — invalid on `menuitem`. `Select` should render `listbox`/`option`; `Dropdown` already does this correctly.
- **`Dialog` hardcodes `id="mds-dialog-title"`** (`Dialog.jsx:57,62`). Two dialogs on a page produce duplicate IDs and a broken `aria-labelledby`. `Tooltip` shows the fix: `useId`.
- **`Accordion`** has `aria-expanded` but no `aria-controls` or region on the body.

### Single source of truth for tokens

`src/pages/DesignTokens.jsx` (593 lines) re-declares every token value in JavaScript, and `Colour.jsx` carries ~95 more hex literals. These are a hand-maintained copy of `tokens.css` and will drift on the first token change. Either read values at runtime with `getComputedStyle` off the themed element, or generate both `tokens.css` and a `tokens.js` map from one JSON source.

### Missing token tiers

Shadows, z-indices and transition timings are hardcoded across component CSS. Add `--elevation-*`, `--z-*` and `--duration-*`/`--easing-*` tiers.

The z-index ladder currently in use, if formalising it: NavBar 10, Layout backdrop 20, Sidebar 30, Dropdown/Select menus 50, Tooltip 60, Dialog 100, Toast region 200. The shadows are the more urgent half — a black shadow on a `#141414` dark-mode surface is invisible.

### Duplication and API shape

- **`Select` and `Dropdown` duplicate ~60 lines** of identical option normalising (string-or-`{value,label}`), outside-click effect, and open state. Extract one primitive with two skins. The same extraction should produce the shared dismissal hook (Escape + outside click) that the accessibility items above need; `Tooltip` currently has its own local copy of the Escape handling.
- **`Input` with `size="large"` renders a `<textarea>`** (`Input.jsx:51,78`). Size and element type are different concerns — make it `multiline`, or a separate `Textarea` component, before consumers depend on the current shape.
- **`Checkbox` has no indeterminate state**, which `CheckboxGroup` will want.

### Missing components

Against peer systems, still absent: Avatar, Badge, Breadcrumb, Pagination, Progress/Spinner, Table. `src/pages/Icons.jsx` also holds ~60 inline icons that no exported `Icon` component makes available to consumers.

### Project hygiene

- No ESLint, no tests, no CI, no LICENSE.
- `README.md` is two lines — no install, dev, or build instructions and no link to the live site.
- Not consumable as a library: needs a `vite build --lib` config, an `exports` field, and a `src/components/index.js` barrel (which does not exist).
- `ThemeContext` has no `localStorage` persistence and no `prefers-color-scheme` default, so mode resets to light on every reload.
- The theme wrapper is a plain `<div>` rather than `data-*` on `<html>`, which is why `App.css` needs `!important` overrides in its mobile block.
- 22 eager page imports in one bundle; no code splitting.

### Recently fixed

- Toast component, `ToastProvider`/`useToast`, and docs page added (v1.2.0) — the library's first context-based component after `ThemeProvider`.
- Tooltip component and docs page added (v1.1.0).
- Azure's `Source Sans Pro` was never loaded by `index.html`, so the brand fell back to a system sans. Now loads Source Sans 3 (the maintained successor) with Pro as fallback — Google Fonts serves Pro at only 400/700 and silently drops the 500 that `--font-weight-medium` needs.
- `--font-size-mobile-*` tokens were defined but referenced nowhere; the responsive alias tier described above now wires them up.
