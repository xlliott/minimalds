import './ReleaseNotes.css';

const releases = [
  {
    version: 'v1.0.0',
    date: '01 Jan 2026',
    label: 'Major',
    notes: [
      'Initial release of MinimalDS.',
      'Token system with Minimal, Purpura and Azure brands.',
      'Full component library including Accordion, Alert, Button, Card, Checkbox, Dialog, Divider, Dropdown, Input, Link, Menu, Radio, Select, Switch, Tabs and Tag.',
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
