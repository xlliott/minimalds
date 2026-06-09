import { useState } from 'react';
import Alert from '../components/Alert/Alert';
import Dropdown from '../components/Dropdown/Dropdown';
import {
  ComponentPageHeader,
  ComponentPagePreview,
  ComponentPageSection,
  ComponentPageBody,
  ComponentPageUsage,
  ComponentPageStatePanel,
} from './ComponentPage';
import './AlertPage.css';

const brandOptions = [
  { value: 'minimal', label: 'Minimal' },
  { value: 'purpura', label: 'Purpura' },
  { value: 'azure',   label: 'Azure'   },
];

const roleOptions = [
  { value: 'danger',  label: 'Danger'        },
  { value: 'warning', label: 'Warning'       },
  { value: 'success', label: 'Success'       },
  { value: 'info',    label: 'Informational' },
];

export default function AlertPage() {
  const [brand, setBrand] = useState('minimal');
  const [role,  setRole]  = useState('danger');

  return (
    <div className="mds-component-page">

      <ComponentPageHeader
        title="Alert"
        description="Alerts are messages that communicate information to the user."
        figmaUrl="https://www.figma.com/community/file/1643197568772735915/minimal-design-system"
      />

      <ComponentPagePreview
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
        <div data-brand={brand} data-mode="light" style={{ width: 400 }}>
          <Alert
            role={role}
            title="Title"
            description="Description"
          />
        </div>
      </ComponentPagePreview>

      <ComponentPageSection title="Overview">
        <ComponentPageBody>
          Alerts provide a method for communicating with users and sharing feedback. They come in
          four statuses which when combined with the right variants make alerts that are relevant,
          timely, and informative for each use case.
        </ComponentPageBody>
        <ComponentPageBody>
          Their status signifies the purpose of the information being conveyed and allow you to
          tailor the disruptiveness of the alert to the specific situation.
        </ComponentPageBody>
      </ComponentPageSection>

      <ComponentPageSection title="Usage guidelines">
        <ComponentPageUsage
          whenToUse={[
            'To inform users of updates or changes to system status.',
          ]}
          whenNotToUse={[
            'For messages that are invasive, such as promotional messages or pop-ups.',
          ]}
        />
      </ComponentPageSection>

      <ComponentPageSection title="Alert status">
        <ComponentPageBody>
          Alert statuses are designed to convey the emotional tone of the information being
          communicated. Each status is associated with a specific colour and icon, ensuring a
          consistent and universal user experience.
        </ComponentPageBody>

        {/* 2×2 grid of state panels */}
        <div className="mds-alert-page__states">
          <div className="mds-alert-page__states-row">
            <ComponentPageStatePanel>
              <Alert role="danger"  title="Danger alert"        description="Description" />
            </ComponentPageStatePanel>
            <ComponentPageStatePanel>
              <Alert role="warning" title="Warning alert"       description="Description" />
            </ComponentPageStatePanel>
          </div>
          <div className="mds-alert-page__states-row">
            <ComponentPageStatePanel>
              <Alert role="success" title="Success alert"       description="Description" />
            </ComponentPageStatePanel>
            <ComponentPageStatePanel>
              <Alert role="info"    title="Informational alert" description="Description" />
            </ComponentPageStatePanel>
          </div>
        </div>

        {/* Status descriptions */}
        <div className="mds-alert-page__descriptions">
          <div className="mds-alert-page__description">
            <span className="mds-alert-page__description-title">Danger</span>
            <span className="mds-alert-page__description-body">
              Inform users of an error or critical failure and optionally block the user from
              proceeding until the issue has been resolved.
            </span>
          </div>
          <div className="mds-alert-page__description">
            <span className="mds-alert-page__description-title">Warning</span>
            <span className="mds-alert-page__description-body">
              Inform users that they are taking actions that are not desirable or might have
              unexpected results.
            </span>
          </div>
          <div className="mds-alert-page__description">
            <span className="mds-alert-page__description-title">Success</span>
            <span className="mds-alert-page__description-body">
              Confirm a task was completed as expected.
            </span>
          </div>
          <div className="mds-alert-page__description">
            <span className="mds-alert-page__description-title">Informational</span>
            <span className="mds-alert-page__description-body">
              Provide additional information to users that may not be tied to their current
              action or task.
            </span>
          </div>
        </div>
      </ComponentPageSection>

    </div>
  );
}
