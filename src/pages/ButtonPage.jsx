import { useState } from 'react';
import Button from '../components/Button/Button';
import Dropdown from '../components/Dropdown/Dropdown';
import {
  ComponentPageHeader,
  ComponentPagePreview,
  ComponentPageSection,
  ComponentPageBody,
  ComponentPageUsage,
  ComponentPageStatePanel,
} from './ComponentPage';
import './ButtonPage.css';

const brandOptions = [
  { value: 'minimal', label: 'Minimal' },
  { value: 'purpura', label: 'Purpura' },
  { value: 'azure',   label: 'Azure'   },
];

const roleOptions = [
  { value: 'primary',   label: 'Primary'   },
  { value: 'secondary', label: 'Secondary' },
  { value: 'ghost',     label: 'Ghost'     },
  { value: 'danger',    label: 'Danger'    },
  { value: 'success',   label: 'Positive'  },
];

const modifierOptions = [
  { value: 'label-only',     label: 'Label only'     },
  { value: 'leading-icon',   label: 'Leading icon'   },
  { value: 'trailing-icon',  label: 'Trailing icon'  },
];

// Simple plus / arrow icons for the button modifiers
const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const variants = [
  {
    name: 'Primary',
    body: 'For the principal call to action on the page. Primary buttons should only appear once per screen (not including the application header, modal dialog, or side panel).',
  },
  {
    name: 'Secondary',
    body: 'For secondary actions on each page. Secondary buttons can only be used in conjunction with a primary button. As part of a pair, the secondary button\'s function is to perform the negative action of the set, such as "Cancel" or "Back". Do not use a secondary button in isolation and do not use a secondary button for a positive action.',
  },
  {
    name: 'Ghost',
    body: 'For the least pronounced actions; often used in conjunction with a primary button. In a situation such as a progress flow, a ghost button may be paired with a primary and secondary button set, where the primary button is for forward action, the secondary button is for "Back", and the ghost button is for "Cancel".',
  },
  {
    name: 'Danger',
    body: 'For actions that could have destructive effects on the user\'s data (for example, delete or remove).',
  },
  {
    name: 'Positive',
    body: 'For actions that confirm a positive outcome or completion (for example, save or submit).',
  },
];

export default function ButtonPage() {
  const [brand,    setBrand]    = useState('minimal');
  const [role,     setRole]     = useState('primary');
  const [modifier, setModifier] = useState('leading-icon');

  const leadingIcon  = modifier === 'leading-icon'  ? <PlusIcon />  : undefined;
  const trailingIcon = modifier === 'trailing-icon' ? <ArrowIcon /> : undefined;

  return (
    <div className="mds-component-page">

      <ComponentPageHeader
        title="Button"
        description="Buttons are used to initialize an action. Button labels express what action will occur when the user interacts with it."
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
              options={roleOptions}
              value={role}
              innerLabel="Role"
              onChange={setRole}
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
        <div className="mds-button-page__preview-inner">
          <Button
            role={role}
            leadingIcon={leadingIcon}
            trailingIcon={trailingIcon}
          >
            {brand.charAt(0).toUpperCase() + brand.slice(1)}
          </Button>
        </div>
      </ComponentPagePreview>

      <ComponentPageSection title="Overview">
        <ComponentPageBody>
          Buttons are clickable elements that are used to trigger actions. They communicate calls
          to action to the user and allow users to interact with pages in a variety of ways.
          Button labels express what action will occur when the user interacts with it.
        </ComponentPageBody>
      </ComponentPageSection>

      <ComponentPageSection title="Usage guidelines">
        <ComponentPageUsage
          whenToUse={[
            'To allow user to trigger an action.',
            'Progressing or regressing a user through a step in a flow.',
            'Submitting requested information.',
          ]}
          whenNotToUse={[
            'As navigational elements. Instead, use Link when the desired action is to take the user to a new page.',
          ]}
        />
      </ComponentPageSection>

      <ComponentPageSection title="Variants">
        <ComponentPageBody>
          Each button variant has a particular function and its design signals that function to
          the user. It is, therefore, very important that the different variants are implemented
          consistently across products to convey the correct actions.
        </ComponentPageBody>
        <div className="mds-button-page__variants">
          {variants.map(v => (
            <div key={v.name} className="mds-button-page__variant">
              <span className="mds-button-page__variant-name">{v.name}</span>
              <span className="mds-button-page__variant-body">{v.body}</span>
            </div>
          ))}
        </div>
      </ComponentPageSection>

      <ComponentPageSection title="States">
        <ComponentPageBody>
          Each variant has its own visual style to communicate its level of emphasis and intended action.
        </ComponentPageBody>
        <div className="mds-button-page__states">
          <div className="mds-button-page__states-row">
            <ComponentPageStatePanel>
              <Button role="primary">Primary</Button>
            </ComponentPageStatePanel>
            <ComponentPageStatePanel>
              <Button role="secondary">Secondary</Button>
            </ComponentPageStatePanel>
          </div>
          <div className="mds-button-page__states-row">
            <ComponentPageStatePanel>
              <Button role="ghost">Ghost</Button>
            </ComponentPageStatePanel>
            <ComponentPageStatePanel>
              <Button role="danger">Danger</Button>
            </ComponentPageStatePanel>
          </div>
          <div className="mds-button-page__states-row mds-button-page__states-row--single">
            <ComponentPageStatePanel>
              <Button role="success">Positive</Button>
            </ComponentPageStatePanel>
          </div>
        </div>
      </ComponentPageSection>

    </div>
  );
}
