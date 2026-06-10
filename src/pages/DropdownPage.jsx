import { useState } from 'react';
import Dropdown from '../components/Dropdown/Dropdown';
import Link from '../components/Link/Link';
import {
  ComponentPageHeader,
  ComponentPagePreview,
  ComponentPageSection,
  ComponentPageBody,
  ComponentPageUsage,
} from './ComponentPage';
import './DropdownPage.css';

const brandOptions = [
  { value: 'minimal', label: 'Minimal' },
  { value: 'purpura', label: 'Purpura' },
  { value: 'azure',   label: 'Azure'   },
];

const variantOptions = [
  { value: 'default',     label: 'Default'     },
  { value: 'inner-label', label: 'Inner label' },
];

const previewOptions = [
  { value: 'option-1', label: 'Option 1' },
  { value: 'option-2', label: 'Option 2' },
  { value: 'option-3', label: 'Option 3' },
];

export default function DropdownPage() {
  const [brand,   setBrand]   = useState('minimal');
  const [variant, setVariant] = useState('default');
  const [value,   setValue]   = useState('');

  const hasInnerLabel = variant === 'inner-label';

  return (
    <div className="mds-component-page mds-dropdown-page">

      <ComponentPageHeader
        title="Dropdown"
        description="Dropdowns have a list of options that a user can select from. These selections can fill in a form, filter, or sort content."
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
              options={variantOptions}
              value={variant}
              innerLabel="Variant"
              onChange={setVariant}
            />
          </>
        }
      >
        <Dropdown
          options={previewOptions}
          value={value}
          placeholder="Content"
          innerLabel={hasInnerLabel ? 'Label' : undefined}
          onChange={setValue}
        />
      </ComponentPagePreview>

      <ComponentPageSection title="Overview">
        <ComponentPageBody>
          Dropdowns present users with a list of options to choose from. They are typically
          used to filter or sort content on a page, or to change the current view. Dropdowns
          are compact by design — they reveal options only when triggered, keeping the
          interface clean until the user needs to make a selection.
        </ComponentPageBody>
        <ComponentPageBody>
          When a user makes a selection, the dropdown closes and the chosen value is
          displayed in the field. If no selection has been made, a placeholder or the
          first option is shown by default.
        </ComponentPageBody>
      </ComponentPageSection>

      <ComponentPageSection title="Usage guidelines">
        <ComponentPageUsage
          whenToUse={[
            'To filter or sort contents on a page.',
            'Changing the view of the content on a page or in a select area.',
          ]}
          whenNotToUse={[
            'Do not nest dropdowns or use them to display overly complex information.',
            <>
              For selection in a form. Use{' '}
              <Link href="#/select" style="regular">Select</Link> instead.
            </>,
          ]}
        />
      </ComponentPageSection>

      <ComponentPageSection title="Variants">
        <ComponentPageBody>
          You can choose to display or hide an inner label in the dropdown, depending on
          your use case. Inner labels can be useful when using multiple dropdowns next
          to each other.
        </ComponentPageBody>
        <div className="mds-dropdown-page__panel">
          <Dropdown
            options={[]}
            placeholder="Content"
          />
          <Dropdown
            options={[]}
            placeholder="Content"
            innerLabel="Label"
          />
        </div>
      </ComponentPageSection>

    </div>
  );
}
