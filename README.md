# MinimalDS

A multi-brand design system: a React component library and the documentation site that presents it.

- **Live docs:** [minimal-ds.com](https://minimal-ds.com)
- **Figma:** [MinimalDS Community file](https://www.figma.com/community/file/1643197568772735915/minimal-design-system) — the design source of truth

One set of components serves three brands — **Minimal**, **Purpura** and **Azure** — each in light and dark mode. Every component is written against design tokens, so it renders correctly in all six combinations without brand-specific code.

## Getting started

Requires Node 18 or later.

```bash
npm install
npm run dev       # start the Vite dev server
npm run build     # production build into dist/
npm run preview   # serve the built output on :4173
```

There is no test runner or linter yet. `npm run build` is the only automated check, so verify visual and interactive changes in a browser.

## What's inside

**Foundations** — Colour, Typography, Icons, Spacing, Radius and Design Tokens, each documented on the site.

**Components** — Accordion, Alert, Button, Card, Checkbox, Dialog, Dropdown, Input, Link, Progress, Radio Button, Select, Switch, Tabs, Tag, Toast and Tooltip.

See [Release notes](https://minimal-ds.com/#/release-notes) for what changed in each version.

## Project structure

```
src/
  theme/tokens.css     every design token, for three brands × two modes
  context/             ThemeContext (brand and mode) and ToastContext
  components/<Name>/   one folder per component: <Name>.jsx, <Name>.css, index.js
  pages/               the docs site — one page per foundation and component
  App.jsx              hash router and providers
public/                favicons and other files served from the site root
```

## How theming works

`src/theme/tokens.css` defines the same set of CSS custom properties six times, once per `[data-brand][data-mode]` pair. Components reference only those tokens — never a literal colour or size — so setting `data-brand` and `data-mode` on any ancestor element restyles everything inside it. The docs use this to preview a component in one brand while the rest of the site stays in another.

## Contributing

Adding a component follows a fixed checklist — a component folder, a docs page, a route, a sidebar entry and a release-notes entry. The full checklist, the naming conventions and the known issues backlog are in [`CLAUDE.md`](CLAUDE.md).

## Status

The components are not yet published as an npm package: `package.json` is private and there is no library build. Today the published artifact is the documentation site.
