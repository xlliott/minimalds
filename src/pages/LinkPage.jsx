import { useState } from 'react';
import Link from '../components/Link/Link';
import Dropdown from '../components/Dropdown/Dropdown';
import {
  ComponentPageHeader,
  ComponentPagePreview,
  ComponentPageSection,
  ComponentPageBody,
  ComponentPageUsage,
} from './ComponentPage';
import './LinkPage.css';

const brandOptions = [
  { value: 'minimal', label: 'Minimal' },
  { value: 'purpura', label: 'Purpura' },
  { value: 'azure',   label: 'Azure'   },
];

const styleOptions = [
  { value: 'regular', label: 'Regular' },
  { value: 'bold',    label: 'Bold'    },
];

const variantOptions = [
  { value: 'default',  label: 'Default'  },
  { value: 'external', label: 'External' },
];

export default function LinkPage() {
  const [brand,   setBrand]   = useState('minimal');
  const [style,   setStyle]   = useState('regular');
  const [variant, setVariant] = useState('default');

  const isExternal = variant === 'external';

  return (
    <div className="mds-component-page mds-link-page">

      <ComponentPageHeader
        title="Link"
        description="Links are used as navigational elements. They navigate users to another location, such as a different site, resource, or section within the same page."
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
              options={styleOptions}
              value={style}
              innerLabel="Style"
              onChange={setStyle}
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
        <Link
          href="#"
          style={style}
          external={isExternal}
        >
          Link
        </Link>
      </ComponentPagePreview>

      <ComponentPageSection title="Overview">
        <ComponentPageBody>
          Links are used as navigational elements and can be used on their own or inline
          with text. They provide a lightweight option for navigation, but like other
          interactive elements, too many links will clutter a page and make it difficult
          for users to identify their next steps. This is especially true for inline links,
          which should be used sparingly.
        </ComponentPageBody>
      </ComponentPageSection>

      <ComponentPageSection title="Usage guidelines">
        <ComponentPageUsage
          whenToUse={[
            'To navigate users to a different page within the application.',
            'When you need to navigate users to an entirely different site.',
            'Jumping to an element on the same page.',
            'When linking to emails or phone numbers.',
          ]}
          whenNotToUse={[
            <>
              For actions that will change data or manipulate how it is displayed, change
              a state, or trigger an action. Use a{' '}
              <Link href="#/button" style="regular">Button</Link> instead.
            </>,
          ]}
        />
      </ComponentPageSection>

      <ComponentPageSection title="Variants">
        <ComponentPageBody>
          For links which navigate the user to another area or page within the current
          site, an external icon is not necessary. To inform the user that they will be
          navigated to a different site, the external icon is necessary.
        </ComponentPageBody>
        <div className="mds-link-page__panel">
          <Link href="#" style="regular">Link</Link>
          <Link href="#" style="regular" external>Link</Link>
        </div>
      </ComponentPageSection>

    </div>
  );
}
