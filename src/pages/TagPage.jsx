import { useState } from 'react';
import Tag from '../components/Tag/Tag';
import Dropdown from '../components/Dropdown/Dropdown';
import {
  ComponentPageHeader,
  ComponentPagePreview,
  ComponentPageSection,
  ComponentPageBody,
  ComponentPageUsage,
} from './ComponentPage';
import './TagPage.css';

const brandOptions = [
  { value: 'minimal', label: 'Minimal' },
  { value: 'purpura', label: 'Purpura' },
  { value: 'azure',   label: 'Azure'   },
];

const roleOptions = [
  { value: 'success', label: 'Positive' },
  { value: 'warning', label: 'Warning'  },
  { value: 'danger',  label: 'Danger'   },
  { value: 'info',    label: 'Info'     },
];

export default function TagPage() {
  const [brand, setBrand] = useState('minimal');
  const [role,  setRole]  = useState('success');

  return (
    <div className="mds-component-page mds-tag-page">

      <ComponentPageHeader
        title="Tag"
        description="Use tags to label, categorize, or organize items using keywords that describe them."
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
          </>
        }
      >
        <Tag role={role} label="Label" icon={true} />
      </ComponentPagePreview>

      <ComponentPageSection title="Overview">
        <ComponentPageBody>
          Tags are components that are often used to label different items, create
          categorization, filter data, select or deselect options, and include
          functionality to disclose several related tags in another view. To support
          these different use cases, tags come in four variants — read-only, dismissible,
          selectable, and operational.
        </ComponentPageBody>
      </ComponentPageSection>

      <ComponentPageSection title="Usage guidelines">
        <ComponentPageUsage
          whenToUse={[
            'For categorizing, labelling, or read-only situations.',
          ]}
          whenNotToUse={[
            'Do not use tags as links that direct you to an entirely different page or launch you from a current experience to a separate tab.',
          ]}
        />
      </ComponentPageSection>

    </div>
  );
}
