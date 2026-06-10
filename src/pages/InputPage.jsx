import { useState } from 'react';
import Input from '../components/Input/Input';
import Link from '../components/Link/Link';
import Dropdown from '../components/Dropdown/Dropdown';
import { useTheme } from '../context/ThemeContext';
import {
  ComponentPageHeader,
  ComponentPagePreview,
  ComponentPageSection,
  ComponentPageBody,
  ComponentPageUsage,
} from './ComponentPage';
import './InputPage.css';

const brandOptions = [
  { value: 'minimal', label: 'Minimal' },
  { value: 'purpura', label: 'Purpura' },
  { value: 'azure',   label: 'Azure'   },
];

const sizeOptions = [
  { value: 'default', label: 'Default' },
  { value: 'large',   label: 'Large'   },
];

const modifierOptions = [
  { value: 'none',         label: 'None'          },
  { value: 'leading-icon', label: 'Leading asset'  },
];

const atSignIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.5 8C10.5 9.38071 9.38071 10.5 8 10.5C6.61929 10.5 5.5 9.38071 5.5 8C5.5 6.61929 6.61929 5.5 8 5.5C9.38071 5.5 10.5 6.61929 10.5 8Z"
      stroke="currentColor" strokeWidth="1.5"
    />
    <path
      d="M10.5 8V9.5C10.5 10.3284 11.1716 11 12 11V11C12.8284 11 13.5 10.3284 13.5 9.5V8C13.5 4.96243 11.0376 2.5 8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5H11"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
    />
  </svg>
);

export default function InputPage() {
  const { mode } = useTheme();
  const [brand,    setBrand]    = useState('minimal');
  const [size,     setSize]     = useState('default');
  const [modifier, setModifier] = useState('none');
  const [value,    setValue]    = useState('');

  const leadingIcon = modifier === 'leading-icon' ? atSignIcon : undefined;

  return (
    <div className="mds-component-page mds-input-page">

      <ComponentPageHeader
        title="Input"
        description="Inputs enable users to enter free-form text data. You can use them for long and short-form entries."
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
              options={sizeOptions}
              value={size}
              innerLabel="Size"
              onChange={setSize}
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
        <Input
          size={size}
          label="Label text"
          placeholder="Placeholder"
          value={value}
          leadingIcon={leadingIcon}
          onChange={(e) => setValue(e.target.value)}
        />
      </ComponentPagePreview>

      <ComponentPageSection title="Overview">
        <ComponentPageBody>
          Inputs enable users to enter free-form text data. The type of text field used should
          reflect the length of the content you expect the user to enter. The default input is
          for short, one-line content, whereas text area is for longer, multi-line entries.
        </ComponentPageBody>
      </ComponentPageSection>

      <ComponentPageSection title="Usage guidelines">
        <ComponentPageUsage
          whenToUse={[
            'If a user needs to input unique information that cannot be predicted with a preset of options.',
          ]}
          whenNotToUse={[
            <>
              If a user can only enter an option from a predefined list. Consider using a{' '}
              <Link href="#/select" style="regular">Select</Link> or{' '}
              <Link href="#/radio" style="regular">Radio group</Link> instead.
            </>,
          ]}
        />
      </ComponentPageSection>

      <ComponentPageSection title="Variants">
        <ComponentPageBody>
          The input comes in two sizes: Default and Large. Use Default when the expected user
          input is a single line of text. Use Large when the expected user input is more than
          a few words that could span multiple lines.
        </ComponentPageBody>
        <div
          className="mds-input-page__panel"
          data-brand="minimal"
          data-mode={mode}
        >
          <Input
            size="default"
            label="Label text"
            placeholder="Content"
          />
          <Input
            size="large"
            label="Label text"
            placeholder="Content"
          />
        </div>
      </ComponentPageSection>

      <ComponentPageSection title="Leading assets">
        <ComponentPageBody>
          Leading assets can be useful to provide additional context to the expected content
          of the input.
        </ComponentPageBody>
        <div
          className="mds-input-page__panel"
          data-brand="minimal"
          data-mode={mode}
        >
          <Input
            size="default"
            label="Instagram handle"
            placeholder="creamsoda"
            leadingIcon={atSignIcon}
          />
        </div>
      </ComponentPageSection>

    </div>
  );
}
