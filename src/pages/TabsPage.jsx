import { useState } from 'react';
import TabGroup from '../components/TabGroup/Tabgroup';
import Dropdown from '../components/Dropdown/Dropdown';
import {
  ComponentPageHeader,
  ComponentPagePreview,
  ComponentPageSection,
  ComponentPageBody,
  ComponentPageUsage,
} from './ComponentPage';
import './TabsPage.css';

const brandOptions = [
  { value: 'minimal', label: 'Minimal' },
  { value: 'purpura', label: 'Purpura' },
  { value: 'azure',   label: 'Azure'   },
];

const previewTabs = ['Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab'];

export default function TabsPage() {
  const [brand,         setBrand]         = useState('minimal');
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="mds-component-page mds-tabs-page">

      <ComponentPageHeader
        title="Tabs"
        description="Tabs are used to organize related content. They allow the user to navigate between groups of information that appear within the same context."
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
        <TabGroup
          tabs={previewTabs}
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
        />
      </ComponentPagePreview>

      <ComponentPageSection title="Overview">
        <ComponentPageBody>
          Tabs are used to group different but related content, allowing users to navigate
          views without leaving the page. Tabs can be used on full page layouts or in
          components such as modals, cards, or side panels.
        </ComponentPageBody>
      </ComponentPageSection>

      <ComponentPageSection title="Usage guidelines">
        <ComponentPageUsage
          whenToUse={[
            'To group related information into different categories.',
            'To organize content such as forms, settings, and dashboards so a user does not have to navigate away from their workflow to complete their task.',
          ]}
          whenNotToUse={[
            'When toggling between different formats of the same content or filtering the same content.',
            'When the user needs to work through a step by step linear process.',
            'If the user needs to compare information in different groups.',
          ]}
        />
      </ComponentPageSection>

    </div>
  );
}
