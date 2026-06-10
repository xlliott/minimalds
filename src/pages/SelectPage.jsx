import { useState } from 'react';
import Select from '../components/Select/Select';
import Link from '../components/Link/Link';
import Dropdown from '../components/Dropdown/Dropdown';
import {
  ComponentPageHeader,
  ComponentPagePreview,
  ComponentPageSection,
  ComponentPageBody,
  ComponentPageUsage,
} from './ComponentPage';
import './SelectPage.css';

const brandOptions = [
  { value: 'minimal', label: 'Minimal' },
  { value: 'purpura', label: 'Purpura' },
  { value: 'azure',   label: 'Azure'   },
];

const previewOptions = [
  { value: 'option-1', label: 'Option 1' },
  { value: 'option-2', label: 'Option 2' },
  { value: 'option-3', label: 'Option 3' },
];

export default function SelectPage() {
  const [brand, setBrand] = useState('minimal');
  const [value, setValue] = useState('');

  return (
    <div className="mds-component-page mds-select-page">

      <ComponentPageHeader
        title="Select"
        description="Select allows users to choose one option from a list of values."
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
        <Select
          label="Label text"
          options={previewOptions}
          value={value}
          placeholder="Content"
          onChange={setValue}
        />
      </ComponentPagePreview>

      <ComponentPageSection title="Overview">
        <ComponentPageBody>
          The select component collects user-provided information from a list of options.
          Selects are usually used in forms where a user submits data and chooses one
          option from a list.
        </ComponentPageBody>
      </ComponentPageSection>

      <ComponentPageSection title="Usage guidelines">
        <ComponentPageUsage
          whenToUse={[
            'In a form where users are selecting from a list of options and submitting data.',
            'When the experience is mostly form-based.',
          ]}
          whenNotToUse={[
            <>
              When there are fewer than three options for selection. Use a vertical{' '}
              <Link href="#/radio" style="regular">Radio group</Link> instead.
            </>,
          ]}
        />
      </ComponentPageSection>

      <ComponentPageSection title="Select versus Dropdown">
        <ComponentPageBody>
          While the select and dropdown components look similar, they have different functions.
        </ComponentPageBody>
        <div className="mds-select-page__comparison">
          <div className="mds-select-page__comparison-item">
            <p className="mds-select-page__comparison-title">Select</p>
            <p className="mds-select-page__comparison-body">
              A select presents a list of options from which the users can select only one
              item from that list. It works best in forms when users choose an option from
              the select list and submit data.
            </p>
          </div>
          <div className="mds-select-page__comparison-item">
            <p className="mds-select-page__comparison-title">Dropdown</p>
            <p className="mds-select-page__comparison-body">
              A dropdown presents a list of options that users can select one or several
              options from that list. Dropdown options are used for taking an action,
              filtering, or sorting existing content.
            </p>
          </div>
        </div>
      </ComponentPageSection>

    </div>
  );
}
