import { useState } from 'react';
import Toast from '../components/Toast/Toast';
import Button from '../components/Button/Button';
import Link from '../components/Link/Link';
import Dropdown from '../components/Dropdown/Dropdown';
import { useToast } from '../context/ToastContext';
import {
  ComponentPageHeader,
  ComponentPagePreview,
  ComponentPageSection,
  ComponentPageBody,
  ComponentPageUsage,
} from './ComponentPage';
import './ToastPage.css';

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

const modifierOptions = [
  { value: 'none',   label: 'None'   },
  { value: 'action', label: 'Action' },
];

const copy = {
  success: { title: 'Changes saved',    description: 'Your updates are now live.' },
  warning: { title: 'Storage almost full', description: 'You have used 90% of your plan.' },
  danger:  { title: 'Upload failed',    description: 'The file could not be uploaded.' },
  info:    { title: 'Version 1.2.0',    description: 'A new version is available.' },
};

const variants = [
  {
    name: 'Positive',
    body: 'Confirms that an action the user took has completed — saved, sent, published.',
  },
  {
    name: 'Warning',
    body: 'Flags a condition the user should know about but does not have to act on immediately.',
  },
  {
    name: 'Danger',
    body: 'Reports that an action failed. Announced assertively, and paired with an action that lets the user retry wherever possible.',
  },
  {
    name: 'Info',
    body: 'Shares neutral, incidental information, such as a background task finishing.',
  },
];

export default function ToastPage() {
  const [brand,    setBrand]    = useState('minimal');
  const [role,     setRole]     = useState('success');
  const [modifier, setModifier] = useState('none');
  const { toast } = useToast();

  return (
    <div className="mds-component-page mds-toast-page">

      <ComponentPageHeader
        title="Toast"
        description="A toast is a brief, self-dismissing message that confirms an action or reports a background event without interrupting the user."
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
            <Dropdown
              options={modifierOptions}
              value={modifier}
              innerLabel="Modifier"
              onChange={setModifier}
            />
          </>
        }
      >
        <div className="mds-toast-page__preview-inner">
          <Toast
            static
            role={role}
            title={copy[role].title}
            description={copy[role].description}
            action={modifier === 'action' ? 'Undo' : undefined}
          />
        </div>
      </ComponentPagePreview>

      <ComponentPageSection title="Overview">
        <ComponentPageBody>
          Toasts appear in a fixed region over the page, stack when several arrive at once,
          and dismiss themselves after a few seconds. They never take focus and never block
          the page, so the user can carry on working while one is on screen. Because a toast
          disappears on its own, the information inside it is never the only record of what
          happened.
        </ComponentPageBody>
      </ComponentPageSection>

      <ComponentPageSection title="Usage guidelines">
        <ComponentPageUsage
          whenToUse={[
            'Confirming that an action succeeded, when the result is not already visible on the page.',
            'Reporting the outcome of a background task the user is no longer watching.',
            'Offering a brief, optional follow-up to an action, such as undoing it.',
          ]}
          whenNotToUse={[
            <>
              For information that must persist or be acted on. Use an{' '}
              <Link href="#/alert" style="regular">Alert</Link> in the page instead.
            </>,
            <>
              For anything that needs a decision before the user continues. Use a{' '}
              <Link href="#/dialog" style="regular">Dialog</Link>.
            </>,
            'For validation errors on a form field, which belong next to the field.',
            'For messages that arrive constantly — a stream of toasts is noise, not feedback.',
          ]}
        />
      </ComponentPageSection>

      <ComponentPageSection title="Raising a toast">
        <ComponentPageBody>
          Wrap the app once in <code>ToastProvider</code>, inside{' '}
          <code>ThemeProvider</code> so the region inherits the current brand and mode,
          then call <code>useToast</code> from anywhere below it. Each call returns an id
          that can be passed to <code>dismiss</code> to remove the toast early.
        </ComponentPageBody>
        <pre className="mds-toast-page__code">{`const { toast } = useToast();

toast({
  role: 'success',
  title: 'Changes saved',
  description: 'Your updates are now live.',
  action: 'Undo',
  onAction: () => restore(),
});`}</pre>
        <div className="mds-toast-page__demo">
          <Button
            role="primary"
            onClick={() =>
              toast({
                role,
                title: copy[role].title,
                description: copy[role].description,
                action: modifier === 'action' ? 'Undo' : undefined,
              })
            }
          >
            Raise a toast
          </Button>
          <span className="mds-toast-page__demo-hint">
            Uses the Role and Modifier controls above. Toasts appear in the corner of the
            page and use the site brand, not the preview brand.
          </span>
        </div>
      </ComponentPageSection>

      <ComponentPageSection title="Variants">
        <ComponentPageBody>
          The role sets the icon and how the message is announced. The surface stays neutral
          in every role, so a toast reads as chrome layered over the page rather than as
          page content.
        </ComponentPageBody>
        <div className="mds-toast-page__variants">
          {variants.map(v => (
            <div key={v.name} className="mds-toast-page__variant">
              <span className="mds-toast-page__variant-name">{v.name}</span>
              <span className="mds-toast-page__variant-body">{v.body}</span>
            </div>
          ))}
        </div>
      </ComponentPageSection>

      <ComponentPageSection title="Behaviour">
        <ComponentPageBody>
          Toasts dismiss themselves after five seconds by default; pass{' '}
          <code>duration</code> to change that, or <code>0</code> for a toast that stays
          until it is dismissed. Hovering or focusing anywhere in the stack pauses every
          countdown, so a toast cannot disappear while it is being read or its action
          reached for. At most four toasts show at once — beyond that the oldest is dropped.
        </ComponentPageBody>
      </ComponentPageSection>

      <ComponentPageSection title="Accessibility">
        <ComponentPageBody>
          A toast never takes focus, since moving focus would interrupt whatever the user is
          doing. Danger toasts are announced assertively; every other role waits for a pause
          in speech. That is also why a toast's action must always be optional — a keyboard
          user who does not reach it before the toast dismisses must lose nothing, so never
          put the only route to an outcome inside a toast.
        </ComponentPageBody>
      </ComponentPageSection>

    </div>
  );
}
