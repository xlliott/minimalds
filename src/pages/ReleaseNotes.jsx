import './ReleaseNotes.css';

const releases = [
  {
    version: 'v1.2.0',
    date: '12 Sep 2026',
    label: 'Minor',
    notes: [
      'New Toast component — a brief, self-dismissing message that confirms an action or reports a background event, in positive, warning, danger and info roles.',
      'Toasts are raised imperatively through the new ToastProvider and useToast hook, and stack in a fixed region with a configurable placement.',
      'Countdowns pause while the stack is hovered or focused, danger toasts are announced assertively, and toasts never take focus.',
      'Toast documentation page added under Components, with brand, role and modifier controls and a live demo.',
    ],
  },
  {
    version: 'v1.1.0',
    date: '10 Sep 2026',
    label: 'Minor',
    notes: [
      'New Tooltip component — a short contextual message shown on hover or keyboard focus, with top, right, bottom and left placements and a configurable hover delay.',
      'Tooltips are associated with their trigger through aria-describedby, and can be dismissed with the Escape key.',
      'Tooltip documentation page added under Components, with brand, placement and trigger controls.',
    ],
  },
  {
    version: 'v1.0.0',
    date: '10 Jun 2026',
    label: 'Major',
    notes: [
      'Initial release of MinimalDS.',
      'Three-brand token system — Minimal, Purpura and Azure — each with light and dark mode support.',
      'Foundations documentation covering Colour, Typography, Icons, Spacing, Radius and Design Tokens.',
      'Full component library: Accordion, Alert, Button, Card, Checkbox, Dialog, Dropdown, Input, Link, Radio Button, Select, Switch, Tabs and Tag.',
      'Interactive component previews with brand and variant controls on every component page.',
      'Figma Community file published alongside the documentation site.',
    ],
  },
];

export default function ReleaseNotes() {
  return (
    <div className="mds-page-releases">
      <h1 className="mds-page-releases__title">Release notes</h1>
      <p className="mds-page-releases__subtitle">
        Details about the latest and previous releases of MinimalDS.
      </p>

      <div className="mds-page-releases__list">
        {releases.map((release, index) => (
          <div key={index} className="mds-page-releases__release">
            <div className="mds-page-releases__release-header">
              <div className="mds-page-releases__release-meta">
                <span className="mds-page-releases__version">{release.version}</span>
                <span className="mds-page-releases__date">{release.date}</span>
              </div>
              <span className={`mds-page-releases__label mds-page-releases__label--${release.label.toLowerCase()}`}>
                {release.label}
              </span>
            </div>
            <ul className="mds-page-releases__notes">
              {release.notes.map((note, i) => (
                <li key={i} className="mds-page-releases__note">{note}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
