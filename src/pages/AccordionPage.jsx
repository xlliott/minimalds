import { useState } from 'react';
import Accordion from '../components/Accordion/Accordion';
import Dropdown from '../components/Dropdown/Dropdown';
import {
  ComponentPageHeader,
  ComponentPagePreview,
  ComponentPageSection,
  ComponentPageBody,
  ComponentPageUsage,
  ComponentPageStatePanel,
} from './ComponentPage';
import './AccordionPage.css';

const brandOptions = [
  { value: 'minimal', label: 'Minimal' },
  { value: 'purpura', label: 'Purpura' },
  { value: 'azure',   label: 'Azure' },
];

export default function AccordionPage() {
  const [brand, setBrand] = useState('minimal');

  return (
    <div className="mds-component-page">

      <ComponentPageHeader
        title="Accordion"
        description="Accordions are a vertically stacked list of headers that reveal or hide associated sections of content."
        figmaUrl="https://www.figma.com/community/file/1643197568772735915/minimal-design-system"
      />

      <ComponentPagePreview
        brand={brand}
        controls={
          <Dropdown
            options={brandOptions}
            value={brand}
            innerLabel="Brand"
            onChange={setBrand}
          />
        }
      >
        <Accordion title="Title" description="Description" />
      </ComponentPagePreview>

      <ComponentPageSection title="Overview">
        <ComponentPageBody>
          The accordion component delivers large amounts of content in a small space through
          progressive disclosure. The header title gives the user a high level overview of the
          content allowing the user to decide which sections to read.
        </ComponentPageBody>
        <ComponentPageBody>
          Accordions can make information processing and discovering more effective. However, it
          does hide content from users and it's important to account for a user not noticing or
          reading all of the included content.
        </ComponentPageBody>
      </ComponentPageSection>

      <ComponentPageSection title="Usage guidelines">
        <ComponentPageUsage
          whenToUse={[
            'Providing users more content for information within the same layout.',
            'Displaying content that is directly related to the main subject of the page.',
            'When vertical space is limited and there is enough content to condense.',
          ]}
          whenNotToUse={[
            'Linking a title to another page. Instead, use Link.',
            'Designing with sparse content.',
            'When content is lengthy. Instead, use Tabs.',
          ]}
        />
      </ComponentPageSection>

      <ComponentPageSection title="States">
        <ComponentPageBody>
          The accordion component has two main states: collapsed and expanded. The chevron icon
          at the end of the accordion indicates which state the accordion is in. The chevron
          points down to indicate collapsed and up to indicate expanded.
        </ComponentPageBody>
        <ComponentPageBody>
          Accordions begin by default in the collapsed state with all content panels closed.
          Starting in a collapsed state gives the user a high level overview of the available
          information.
        </ComponentPageBody>
        <ComponentPageStatePanel>
          <div className="mds-component-page__state-static">
            <Accordion title="Title" />
          </div>
        </ComponentPageStatePanel>
        <ComponentPageStatePanel>
          <div className="mds-component-page__state-static">
            <Accordion title="Title" description="Description" defaultOpen />
          </div>
        </ComponentPageStatePanel>
      </ComponentPageSection>

    </div>
  );
}
