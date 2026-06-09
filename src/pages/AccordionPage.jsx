import { useState } from 'react';
import Accordion from '../components/Accordion/Accordion';
import Alert from '../components/Alert/Alert';
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
      <div className="mds-page-accordion__header">
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
      </div>

      {/* Interactive preview */}
      <div className="mds-page-accordion__panel">
        <div className="mds-page-accordion__controls">
          <Dropdown
            options={brandOptions}
            value={brand}
            innerLabel="Brand"
            onChange={setBrand}
          />
          <div className="mds-page-accordion__controls-spacer" />
          <div className="mds-page-accordion__controls-spacer" />
        </div>
        <div className="mds-page-accordion__preview" data-brand={brand} data-mode="light">
          <Accordion title="Title" description="Description" />
        </div>
      </div>

      {/* Overview */}
      <div className="mds-page-accordion__section">
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
      </div>

      <Divider />

      {/* Usage guidelines */}
      <div className="mds-page-accordion__section">
        <h2 className="mds-page-accordion__section-title">Usage guidelines</h2>
        <div className="mds-page-accordion__usage">
          <Alert
            role="success"
            title="When to use"
            description="Providing users more content for information within the same layout. Displaying content that is directly related to the main subject of the page. When vertical space is limited and there is enough content to condense."
          />
          <Alert
            role="danger"
            title="When not to use"
            description="Linking a title to another page. Instead, use Link. Designing with sparse content. When content is lengthy. Instead, use Tabs."
          />
        </div>
      </div>

      <Divider />

      {/* States */}
      <div className="mds-page-accordion__section">
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
        <div className="mds-page-accordion__state-panel">
          <Accordion title="Title" />
        </div>
        <div className="mds-page-accordion__state-panel">
          <Accordion title="Title" description="Description" defaultOpen />
        </div>
      </div>

    </div>
  );
}
