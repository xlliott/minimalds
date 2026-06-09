import { useState } from 'react';
import Dialog from '../components/Dialog/Dialog';
import Alert from '../components/Alert/Alert';
import Dropdown from '../components/Dropdown/Dropdown';
import {
  ComponentPageHeader,
  ComponentPagePreview,
  ComponentPageSection,
  ComponentPageBody,
  ComponentPageUsage,
} from './ComponentPage';
import './DialogPage.css';

const brandOptions = [
  { value: 'minimal', label: 'Minimal' },
  { value: 'purpura', label: 'Purpura' },
  { value: 'azure',   label: 'Azure'   },
];

const sizeOptions = [
  { value: 'default', label: 'Default' },
  { value: 'small',   label: 'Small'   },
];

export default function DialogPage() {
  const [brand, setBrand] = useState('minimal');
  const [size,  setSize]  = useState('default');

  const brandLabel = brand.charAt(0).toUpperCase() + brand.slice(1);

  return (
    <div className="mds-component-page mds-dialog-page">

      <ComponentPageHeader
        title="Dialog"
        description="Dialogs focus the user's attention exclusively on one task or piece of information by using a window that is displayed on top of the page content."
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
          </>
        }
      >
        <Dialog
          static
          size={size}
          title="Title"
          body="Body"
          dismissible={true}
          primaryLabel={brandLabel}
          secondaryLabel={brandLabel}
        />
      </ComponentPagePreview>

      <ComponentPageSection title="Overview">
        <ComponentPageBody>
          Dialogs are used to present critical information or request user input that's needed
          to complete a user's workflow. Dialogs interrupt a user's workflow for short and
          non-frequent tasks, such as editing or management tasks. When the dialog is open,
          the user is blocked from the on-page content and can't return to their previous
          workflow until the dialog task is completed or the user dismisses the dialog.
        </ComponentPageBody>
        <ComponentPageBody>
          While effective when used correctly, dialogs should be used sparingly to limit
          disrupting the user. Therefore, if a user needs to repeatably perform a task,
          consider making the task completable on the main page.
        </ComponentPageBody>
      </ComponentPageSection>

      <ComponentPageSection title="Usage guidelines">
        <ComponentPageUsage
          whenToUse={[
            'Displaying important information requiring a user response.',
          ]}
          whenNotToUse={[
            'Displaying limited additional page content.',
            'Providing status feedback or messages.',
          ]}
        />
      </ComponentPageSection>

      <ComponentPageSection title="Slots">
        <ComponentPageBody>
          The Dialog contains a slot area which allows you to add additional content or
          components depending on your use case.
        </ComponentPageBody>
        <div className="mds-dialog-page__slots-panel">
          <Dialog
            static
            size="default"
            title="Title"
            body="Body"
            dismissible={true}
            primaryLabel="Minimal"
            secondaryLabel="Minimal"
            slot={
              <Alert
                role="success"
                size="default"
                title="Title"
                description="Description"
              />
            }
          />
        </div>
      </ComponentPageSection>

    </div>
  );
}
