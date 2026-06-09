import { useState } from 'react';
import Card from '../components/Card/Card';
import Dropdown from '../components/Dropdown/Dropdown';
import {
  ComponentPageHeader,
  ComponentPagePreview,
  ComponentPageSection,
  ComponentPageBody,
  ComponentPageUsage,
} from './ComponentPage';
import './CardPage.css';

const brandOptions = [
  { value: 'minimal', label: 'Minimal' },
  { value: 'purpura', label: 'Purpura' },
  { value: 'azure',   label: 'Azure'   },
];

const buttonPositionOptions = [
  { value: 'bottom', label: 'Bottom' },
  { value: 'side',   label: 'Side'   },
];

const modifierOptions = [
  { value: 'without-icon', label: 'Without icon' },
  { value: 'with-icon',    label: 'With icon'    },
];

// Simple icon for card modifier
const CardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
    <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2"/>
    <polyline points="21 15 16 10 5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function CardPage() {
  const [brand,          setBrand]          = useState('minimal');
  const [buttonPosition, setButtonPosition] = useState('bottom');
  const [modifier,       setModifier]       = useState('without-icon');

  const brandLabel = brand.charAt(0).toUpperCase() + brand.slice(1);
  const icon = modifier === 'with-icon' ? <CardIcon /> : undefined;

  return (
    <div className="mds-component-page">

      <ComponentPageHeader
        title="Card"
        description="Cards group content that allows users to browse a collection of related items and actions in a modular, easy-to-read way."
        figmaUrl="https://www.figma.com/community/file/1643197568772735915/minimal-design-system"
      />

      <ComponentPagePreview
        brand={brand}
        controls={
          <>
            <Dropdown
              options={brandOptions}
              value={brand}
              innerLabel="Brand"
              onChange={setBrand}
            />
            <Dropdown
              options={buttonPositionOptions}
              value={buttonPosition}
              innerLabel="Button position"
              onChange={setButtonPosition}
            />
            <Dropdown
              options={modifierOptions}
              value={modifier}
              innerLabel="Modifier"
              onChange={setModifier}
            />
          </>
        }
      >
        <Card
          title="Title"
          description="Description"
          buttonPosition={buttonPosition}
          icon={icon}
          primaryLabel={brandLabel}
        />
      </ComponentPagePreview>

      <ComponentPageSection title="Overview">
        <ComponentPageBody>
          Cards are containers for concise information about a single subject. They can display
          information, related content, or navigational choices. In groups, cards present
          collections of similar content.
        </ComponentPageBody>
      </ComponentPageSection>

      <ComponentPageSection title="Usage guidelines">
        <ComponentPageUsage
          whenToUse={[
            'Containing a related set of information and/or actions into a single cohesive asset.',
            'Creating visual separation of actionable information from the background.',
          ]}
          whenNotToUse={[
            'Detailed articles, forms, or content requiring scrolling. Use a dedicated page instead.',
            'Multi-step processes, or forms with many fields that require significant input.',
          ]}
        />
      </ComponentPageSection>

      <ComponentPageSection title="Button position">
        <ComponentPageBody>
          Positioning the button at the bottom is best for when multiple cards are used in a row.
          Positioning it at the side is best for when the card needs to span a wider area.
        </ComponentPageBody>

        {/* Bottom position — two cards side by side */}
        <div className="mds-card-page__state-panel mds-card-page__state-panel--tall">
          <div className="mds-card-page__card-row">
            <Card title="Title" description="Description" buttonPosition="bottom" primaryLabel="Minimal" />
            <Card title="Title" description="Description" buttonPosition="bottom" primaryLabel="Minimal" />
          </div>
        </div>

        {/* Side position — single wide card */}
        <div className="mds-card-page__state-panel">
          <Card
            title="Title"
            description="Description"
            buttonPosition="side"
            primaryLabel="Minimal"
          />
        </div>
      </ComponentPageSection>

    </div>
  );
}
