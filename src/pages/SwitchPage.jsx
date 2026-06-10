import { useState } from 'react';
import Switch from '../components/Switch/Switch';
import Link from '../components/Link/Link';
import Dropdown from '../components/Dropdown/Dropdown';
import {
  ComponentPageHeader,
  ComponentPagePreview,
  ComponentPageSection,
  ComponentPageBody,
  ComponentPageUsage,
} from './ComponentPage';
import './SwitchPage.css';

const brandOptions = [
  { value: 'minimal', label: 'Minimal' },
  { value: 'purpura', label: 'Purpura' },
  { value: 'azure',   label: 'Azure'   },
];

export default function SwitchPage() {
  const [brand,   setBrand]   = useState('minimal');
  const [checked, setChecked] = useState(true);

  return (
    <div className="mds-component-page mds-switch-page">

      <ComponentPageHeader
        title="Switch"
        description='A switch is used to quickly change between two possible states. They are commonly used for "on/off" switches.'
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
        <Switch
          checked={checked}
          onChange={() => setChecked(!checked)}
          id="switch-preview"
        />
      </ComponentPagePreview>

      <ComponentPageSection title="Overview">
        <ComponentPageBody>
          Switch is a control that is used to quickly switch between two possible states.
          Switches are only used for these binary actions that occur immediately after the
          user "flips the switch". They are commonly used for "on/off" switches.
        </ComponentPageBody>
      </ComponentPageSection>

      <ComponentPageSection title="Usage guidelines">
        <ComponentPageUsage
          whenToUse={[
            'To turn off and on a single option that affects the system or page settings.',
            'Ideal for settings or preferences that can be immediately applied.',
            'Recommended for actions where the change is reversible without additional confirmation.',
          ]}
          whenNotToUse={[
            'If the action requires immediate feedback or confirmation, such as deleting a file.',
            <>
              For more than two options. Use a{' '}
              <Link href="#/radio" style="regular">Radio group</Link> or{' '}
              <Link href="#/checkbox" style="regular">Checkbox</Link> instead.
            </>,
            'For settings that aren\'t binary in nature or don\'t provide instant application.',
          ]}
        />
      </ComponentPageSection>

    </div>
  );
}
