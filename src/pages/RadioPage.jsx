import { useState } from 'react';
import RadioGroup from '../components/RadioGroup/Radiogroup';
import Link from '../components/Link/Link';
import Dropdown from '../components/Dropdown/Dropdown';
import {
  ComponentPageHeader,
  ComponentPagePreview,
  ComponentPageSection,
  ComponentPageBody,
  ComponentPageUsage,
} from './ComponentPage';
import './RadioPage.css';

const brandOptions = [
  { value: 'minimal', label: 'Minimal' },
  { value: 'purpura', label: 'Purpura' },
  { value: 'azure',   label: 'Azure'   },
];

const layoutOptions = [
  { value: 'vertical',   label: 'Vertical'   },
  { value: 'horizontal', label: 'Horizontal' },
];

const verticalOptions = [
  { id: 'v-opt-1', value: 'option-1', label: 'Label' },
  { id: 'v-opt-2', value: 'option-2', label: 'Label' },
  { id: 'v-opt-3', value: 'option-3', label: 'Label' },
];

const horizontalOptions = [
  { id: 'h-opt-1', value: 'option-1', label: 'Label' },
  { id: 'h-opt-2', value: 'option-2', label: 'Label' },
];

export default function RadioPage() {
  const [brand,   setBrand]   = useState('minimal');
  const [layout,  setLayout]  = useState('vertical');
  const [value,   setValue]   = useState('');

  const options = layout === 'horizontal' ? horizontalOptions : verticalOptions;

  return (
    <div className="mds-component-page mds-radio-page">

      <ComponentPageHeader
        title="Radio Button"
        description="Radio buttons allow users to select a single option from a list of mutually exclusive choices."
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
              options={layoutOptions}
              value={layout}
              innerLabel="Layout"
              onChange={(val) => { setLayout(val); setValue(''); }}
            />
          </>
        }
      >
        <RadioGroup
          label="Group label"
          options={options}
          value={value}
          layout={layout}
          helperText="Helper text"
          name="preview-radio"
          onChange={setValue}
        />
      </ComponentPagePreview>

      <ComponentPageSection title="Overview">
        <ComponentPageBody>
          Radio buttons are used for mutually exclusive choices, not for multiple choices.
          Only one radio button can be selected at a time. When a user chooses a new item,
          the previous choice is automatically deselected.
        </ComponentPageBody>
      </ComponentPageSection>

      <ComponentPageSection title="Usage guidelines">
        <ComponentPageUsage
          whenToUse={[
            'Allowing the selection of only one choice from a list.',
          ]}
          whenNotToUse={[
            <>
              If a user can select from multiple options. Use{' '}
              <Link href="#/checkbox" style="regular">Checkbox</Link> instead.
            </>,
          ]}
        />
      </ComponentPageSection>

      <ComponentPageSection title="Variants">
        <ComponentPageBody>
          The Radio group comes in two layout variants: horizontal and vertical. Use the
          vertical variant for lists of 3–5 options, and the horizontal variant for lists
          of 2 mutually exclusive options, like Yes/No.
        </ComponentPageBody>
        <div className="mds-radio-page__panel">
          <RadioGroup
            label="Group label"
            options={verticalOptions}
            layout="vertical"
            helperText="Helper text"
            name="variants-vertical"
          />
          <RadioGroup
            label="Group label"
            options={horizontalOptions}
            layout="horizontal"
            helperText="Helper text"
            name="variants-horizontal"
          />
        </div>
      </ComponentPageSection>

    </div>
  );
}
