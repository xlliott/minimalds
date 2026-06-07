import { useState } from 'react';
import Accordion from '../components/Accordion/Accordion';
import Dropdown from '../components/Dropdown/Dropdown';
import Divider from '../components/Divider/Divider';
import './AccordionPage.css';

const brandOptions = [
  { value: 'minimal', label: 'Minimal' },
  { value: 'purpura', label: 'Purpura' },
  { value: 'azure',   label: 'Azure' },
];

export default function AccordionPage() {
  const [brand, setBrand] = useState('minimal');

  return (
    <div className="mds-page-accordion">

      {/* Page header */}
      <h1 className="mds-page-accordion__title">Accordion</h1>
      <p className="mds-page-accordion__subtitle">
        Accordions are a vertically stacked list of headers that reveal or hide associated sections of content.
      </p>
      <a
        href="https://www.figma.com/community/file/1643197568772735915/minimal-design-system"
        target="_blank"
        rel="noopener noreferrer"
        className="mds-page-accordion__figma-link"
      >
        View in Figma ↗
      </a>

      <Divider />

      {/* Overview */}
      <section className="mds-page-accordion__section">
        <h2 className="mds-page-accordion__section-title">Overview</h2>
        <p className="mds-page-accordion__body">
          The accordion component delivers large amounts of content in a small space through
          progressive disclosure. The header title gives the user a high level overview of the
          content allowing the user to decide which sections to read.
        </p>
        <p className="mds-page-accordion__body">
          Accordions can make information processing and discovering more effective. However, it
          does hide content from users and it's important to account for a user not noticing or
          reading all of the included content.
        </p>
      </section>

      <Divider />

      {/* Usage guidelines */}
      <section className="mds-page-accordion__section">
        <h2 className="mds-page-accordion__section-title">Usage guidelines</h2>
        <div className="mds-page-accordion__usage">
          <div className="mds-page-accordion__usage-col">
            <h3 className="mds-page-accordion__usage-heading mds-page-accordion__usage-heading--when">When to use</h3>
            <ul className="mds-page-accordion__usage-list">
              <li>Providing users more content for information within the same layout.</li>
              <li>Displaying content that is directly related to the main subject of the page.</li>
              <li>When vertical space is limited and there is enough content to condense.</li>
            </ul>
          </div>
          <div className="mds-page-accordion__usage-col">
            <h3 className="mds-page-accordion__usage-heading mds-page-accordion__usage-heading--when-not">When not to use</h3>
            <ul className="mds-page-accordion__usage-list">
              <li>Linking a title to another page. Instead, use Link.</li>
              <li>Designing with sparse content.</li>
              <li>When content is lengthy. Instead, use Tabs.</li>
            </ul>
          </div>
        </div>
      </section>

      <Divider />

      {/* Interactive preview */}
      <section className="mds-page-accordion__section">
        <div className="mds-page-accordion__panel">
          <div className="mds-page-accordion__controls">
            <Dropdown
              options={brandOptions}
              value={brand}
              innerLabel="Brand"
              onChange={setBrand}
            />
          </div>
          <div className="mds-page-accordion__preview" data-brand={brand} data-mode="light">
            <Accordion title="Title" description="Description" />
          </div>
        </div>
      </section>

      <Divider />

      {/* States */}
      <section className="mds-page-accordion__section">
        <h2 className="mds-page-accordion__section-title">States</h2>
        <p className="mds-page-accordion__body">
          The accordion component has two main states: collapsed and expanded. The chevron icon
          at the end of the accordion indicates which state the accordion is in. The chevron
          points down to indicate collapsed and up to indicate expanded.
        </p>
        <p className="mds-page-accordion__body">
          Accordions begin by default in the collapsed state with all content panels closed.
          Starting in a collapsed state gives the user a high level overview of the available
          information.
        </p>
        <div className="mds-page-accordion__states">
          <div className="mds-page-accordion__state">
            <span className="mds-page-accordion__state-label">Collapsed</span>
            <Accordion title="Title" />
          </div>
          <div className="mds-page-accordion__state">
            <span className="mds-page-accordion__state-label">Expanded</span>
            <Accordion title="Title" description="Description" defaultOpen />
          </div>
        </div>
      </section>

    </div>
  );
}
