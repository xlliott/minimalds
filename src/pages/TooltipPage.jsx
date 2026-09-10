import { useState } from 'react';
import Tooltip from '../components/Tooltip/Tooltip';
import Button from '../components/Button/Button';
import Link from '../components/Link/Link';
import Dropdown from '../components/Dropdown/Dropdown';
import {
  ComponentPageHeader,
  ComponentPagePreview,
  ComponentPageSection,
  ComponentPageBody,
  ComponentPageUsage,
} from './ComponentPage';
import './TooltipPage.css';

const brandOptions = [
  { value: 'minimal', label: 'Minimal' },
  { value: 'purpura', label: 'Purpura' },
  { value: 'azure',   label: 'Azure'   },
];

const placementOptions = [
  { value: 'top',    label: 'Top'    },
  { value: 'right',  label: 'Right'  },
  { value: 'bottom', label: 'Bottom' },
  { value: 'left',   label: 'Left'   },
];

const triggerOptions = [
  { value: 'hover',  label: 'On hover / focus' },
  { value: 'always', label: 'Always visible'   },
];

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="8" r="1" fill="currentColor"/>
    <line x1="12" y1="12" x2="12" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const variants = [
  {
    name: 'Top',
    body: 'The default. Use when there is clear space above the trigger, such as for controls in a toolbar or a form field label.',
  },
  {
    name: 'Bottom',
    body: 'Use for triggers near the top of the viewport, where a tooltip above would be clipped — for example, items in a navigation bar.',
  },
  {
    name: 'Left and Right',
    body: 'Use for triggers in a vertical list or a narrow column, where a tooltip above or below would cover the adjacent items.',
  },
];

export default function TooltipPage() {
  const [brand,     setBrand]     = useState('minimal');
  const [placement, setPlacement] = useState('top');
  const [trigger,   setTrigger]   = useState('hover');

  return (
    <div className="mds-component-page mds-tooltip-page">

      <ComponentPageHeader
        title="Tooltip"
        description="A tooltip is a short, contextual message that appears when a user hovers over or focuses an element."
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
              options={placementOptions}
              value={placement}
              innerLabel="Placement"
              onChange={setPlacement}
            />
            <Dropdown
              options={triggerOptions}
              value={trigger}
              innerLabel="Trigger"
              onChange={setTrigger}
            />
          </>
        }
      >
        <div className="mds-tooltip-page__preview-inner">
          <Tooltip
            content="Adds the selected items to your library."
            placement={placement}
            open={trigger === 'always' ? true : undefined}
          >
            <Button role="primary" leadingIcon={<InfoIcon />}>
              Hover me
            </Button>
          </Tooltip>
        </div>
      </ComponentPagePreview>

      <ComponentPageSection title="Overview">
        <ComponentPageBody>
          Tooltips display supplementary information about an element when the user hovers over
          it with a pointer or moves focus to it with a keyboard. They are always triggered by
          another element and never appear on their own. Because a tooltip is supplementary, the
          content inside it is never essential — the interface must remain usable for someone who
          never sees it.
        </ComponentPageBody>
      </ComponentPageSection>

      <ComponentPageSection title="Usage guidelines">
        <ComponentPageUsage
          whenToUse={[
            'To clarify the purpose of an icon-only control, such as a close or filter button.',
            'To spell out a label that has been truncated or abbreviated to fit its container.',
            'To add brief, non-essential context to a form field or a piece of data.',
          ]}
          whenNotToUse={[
            'For information the user needs to complete a task. Use helper text on the field instead.',
            <>
              For content the user needs to interact with, such as links or buttons. Use a{' '}
              <Link href="#/dialog" style="regular">Dialog</Link> or a{' '}
              <Link href="#/dropdown" style="regular">Dropdown</Link> instead.
            </>,
            'For long-form content. Keep tooltips to a single short sentence.',
            'On elements that are not focusable, as keyboard and screen reader users will never reach them.',
          ]}
        />
      </ComponentPageSection>

      <ComponentPageSection title="Placement">
        <ComponentPageBody>
          Tooltips can be placed on any of the four sides of their trigger. Choose the placement
          that keeps the tooltip inside the viewport and clear of the content the user is
          currently reading.
        </ComponentPageBody>
        <div className="mds-tooltip-page__variants">
          {variants.map(v => (
            <div key={v.name} className="mds-tooltip-page__variant">
              <span className="mds-tooltip-page__variant-name">{v.name}</span>
              <span className="mds-tooltip-page__variant-body">{v.body}</span>
            </div>
          ))}
        </div>
      </ComponentPageSection>

      <ComponentPageSection title="Behaviour">
        <ComponentPageBody>
          A tooltip appears after a short delay on hover, so that moving a pointer across a row
          of controls does not flash a tooltip on every one. It appears immediately on keyboard
          focus, and is dismissed on blur, on pointer exit, or when the user presses Escape.
        </ComponentPageBody>
      </ComponentPageSection>

      <ComponentPageSection title="Accessibility">
        <ComponentPageBody>
          The tooltip is associated with its trigger through <code>aria-describedby</code>, so
          assistive technology announces it as a description rather than as the element's name.
          This means an icon-only trigger still needs its own accessible name — usually an{' '}
          <code>aria-label</code> — because the tooltip alone will not provide one. Triggers must
          be focusable so the tooltip can be reached without a pointer.
        </ComponentPageBody>
      </ComponentPageSection>

    </div>
  );
}
