import { useState } from 'react';
import CheckboxGroup from '../components/CheckboxGroup/Checkboxgroup';
import Dropdown from '../components/Dropdown/Dropdown';
import {
  ComponentPageHeader,
  ComponentPagePreview,
  ComponentPageSection,
  ComponentPageBody,
  ComponentPageUsage,
  ComponentPageStatePanel,
} from './ComponentPage';
import './CheckboxPage.css';

const brandOptions = [
  { value: 'minimal', label: 'Minimal' },
  { value: 'purpura', label: 'Purpura' },
  { value: 'azure',   label: 'Azure'   },
];

const layoutOptions = [
  { value: 'vertical',   label: 'Vertical'   },
  { value: 'horizontal', label: 'Horizontal' },
];

const defaultOptions = [
  { id: '1', label: 'Label', checked: false },
  { id: '2', label: 'Label', checked: false },
];

const verticalOptions = [
  { id: '1', label: 'Label', checked: false },
  { id: '2', label: 'Label', checked: false },
  { id: '3', label: 'Label', checked: false },
  { id: '4', label: 'Label', checked: false },
  { id: '5', label: 'Label', checked: false },
];

const horizontalOptions = [
  { id: '1', label: 'Label', checked: false },
  { id: '2', label: 'Label', checked: false },
];

export default function CheckboxPage() {
  const [brand,   setBrand]   = useState('minimal');
  const [layout,  setLayout]  = useState('vertical');
  const [options, setOptions] = useState(defaultOptions);

  const handleChange = (id, checked) => {
    setOptions(prev => prev.map(o => o.id === id ? { ...o, checked } : o));
  };

  return (
    <div className="mds-component-page">

      <ComponentPageHeader
        title="Checkbox"
        description="Checkboxes are used when there are multiple items to select in a list. Users can select zero, one, or any number of items."
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
              onChange={setLayout}
            />
          </>
        }
      >
        <CheckboxGroup
          label="Group label"
          options={options}
          layout={layout}
          helperText="Helper text"
          onChange={handleChange}
        />
      </ComponentPagePreview>

      <ComponentPageSection title="Overview">
        <ComponentPageBody>
          Checkboxes are used for multiple choices, not for mutually exclusive choices. Each
          checkbox works independently from other checkboxes in the list, therefore checking an
          additional box does not affect any other selections.
        </ComponentPageBody>
      </ComponentPageSection>

      <ComponentPageSection title="Usage guidelines">
        <ComponentPageUsage
          whenToUse={[
            'Selecting one or more multiple choice options from a list.',
            'When viewing all available options is needed.',
          ]}
          whenNotToUse={[
            'Selecting from a list when only one choice is allowed. Instead, use Radio.',
          ]}
        />
      </ComponentPageSection>

      <ComponentPageSection title="Variants">
        <ComponentPageBody>
          Use the vertical variant when there are more than 2 options to display. Use the
          horizontal variant for displaying 2 short-label options when vertical space is limited.
        </ComponentPageBody>
        <ComponentPageStatePanel>
          <div className="mds-checkbox-page__variants">
            <CheckboxGroup
              label="Group label"
              options={verticalOptions}
              layout="vertical"
              helperText="Helper text"
            />
            <CheckboxGroup
              label="Group label"
              options={horizontalOptions}
              layout="horizontal"
              helperText="Helper text"
            />
          </div>
        </ComponentPageStatePanel>
      </ComponentPageSection>

    </div>
  );
}
