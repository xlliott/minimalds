import { useState, useEffect, useRef } from 'react';
import Progress from '../components/Progress/Progress';
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
import './ProgressPage.css';

const brandOptions = [
  { value: 'minimal', label: 'Minimal' },
  { value: 'purpura', label: 'Purpura' },
  { value: 'azure',   label: 'Azure'   },
];

const variantOptions = [
  { value: 'linear',   label: 'Linear'   },
  { value: 'circular', label: 'Circular' },
];

const valueOptions = [
  { value: 'indeterminate', label: 'Indeterminate' },
  { value: '25',            label: '25%'           },
  { value: '60',            label: '60%'           },
  { value: '100',           label: '100%'          },
];

const sizeOptions = [
  { value: 'small',   label: 'Small'   },
  { value: 'default', label: 'Default' },
  { value: 'large',   label: 'Large'   },
];

const variants = [
  {
    name: 'Linear',
    body: 'The default. Use for work that belongs to a region of the page — an upload, an import, a multi-step form — where there is room to show a label and a percentage above the bar.',
  },
  {
    name: 'Circular',
    body: 'Use where space is tight or the progress belongs to a single control, such as a button, a table row or a card that is still loading its content.',
  },
];

const modes = [
  {
    name: 'Determinate',
    body: 'Pass a value from 0 to 100 when the amount of work is known. The fill eases between values, and the percentage can be shown alongside it.',
  },
  {
    name: 'Indeterminate',
    body: 'Omit the value when the length of the work is unknown. The indicator animates continuously until it is removed, and never shows a percentage.',
  },
];

export default function ProgressPage() {
  const [brand,   setBrand]   = useState('minimal');
  const [variant, setVariant] = useState('linear');
  const [value,   setValue]   = useState('60');
  const [size,    setSize]    = useState('default');

  // Live demo — a simulated upload that fills in uneven steps
  const [demo, setDemo] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => () => clearInterval(timerRef.current), []);

  const startDemo = () => {
    clearInterval(timerRef.current);
    setDemo(0);
    timerRef.current = setInterval(() => {
      setDemo(prev => {
        const next = Math.min(100, prev + 4 + Math.random() * 12);
        if (next >= 100) clearInterval(timerRef.current);
        return next;
      });
    }, 300);
  };

  const numericValue = value === 'indeterminate' ? undefined : Number(value);

  return (
    <div className="mds-component-page mds-progress-page">

      <ComponentPageHeader
        title="Progress"
        description="A progress indicator shows that work is underway and, where it can be measured, how much of it is complete."
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
              options={variantOptions}
              value={variant}
              innerLabel="Variant"
              onChange={setVariant}
            />
            <Dropdown
              options={valueOptions}
              value={value}
              innerLabel="Value"
              onChange={setValue}
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
        <div className={`mds-progress-page__preview-inner mds-progress-page__preview-inner--${variant}`}>
          <Progress
            variant={variant}
            value={numericValue}
            size={size}
            label={value === 'indeterminate' ? 'Preparing files' : 'Uploading files'}
            showLabel
            showValue
          />
        </div>
      </ComponentPagePreview>

      <ComponentPageSection title="Overview">
        <ComponentPageBody>
          Progress indicators tell the user that the interface has not stalled. They come in
          two shapes — a linear bar and a circular ring — and two modes: determinate, which
          shows how much of the work is done, and indeterminate, which shows only that work is
          happening. Prefer a determinate indicator whenever the amount of work can be
          measured, since knowing how long is left is what makes a wait tolerable.
        </ComponentPageBody>
      </ComponentPageSection>

      <ComponentPageSection title="Usage guidelines">
        <ComponentPageUsage
          whenToUse={[
            'For any operation that takes longer than about a second, such as an upload, a save or a search.',
            'To show where the user is in a long task that runs in the background, like an import.',
            'In place of content that is still loading, when the layout of that content is not yet known.',
          ]}
          whenNotToUse={[
            'For operations that finish in under a second. A flash of progress reads as a glitch.',
            <>
              To report that work has finished or failed. Remove the indicator and raise a{' '}
              <Link href="#/toast" style="regular">Toast</Link> or show an{' '}
              <Link href="#/alert" style="regular">Alert</Link> instead.
            </>,
            'For static quantities, such as storage used or a profile being complete. Those are measurements, not progress.',
            'Several at once for one task. Show a single indicator for the whole operation.',
          ]}
        />
      </ComponentPageSection>

      <ComponentPageSection title="Variants">
        <ComponentPageBody>
          Both variants take the same props and use the brand colour for the fill against a
          subtle track, so they can be swapped without changing the surrounding code.
        </ComponentPageBody>
        <div className="mds-progress-page__variants">
          {variants.map(v => (
            <div key={v.name} className="mds-progress-page__variant">
              <span className="mds-progress-page__variant-name">{v.name}</span>
              <span className="mds-progress-page__variant-body">{v.body}</span>
            </div>
          ))}
        </div>
      </ComponentPageSection>

      <ComponentPageSection title="Determinate and indeterminate">
        <div className="mds-progress-page__variants">
          {modes.map(v => (
            <div key={v.name} className="mds-progress-page__variant">
              <span className="mds-progress-page__variant-name">{v.name}</span>
              <span className="mds-progress-page__variant-body">{v.body}</span>
            </div>
          ))}
        </div>
        <div className="mds-progress-page__demo">
          <div className="mds-progress-page__demo-bar">
            <Progress
              value={demo ?? 0}
              label="Uploading report.pdf"
              showLabel
              showValue
            />
          </div>
          <Button role="primary" onClick={startDemo}>
            {demo === null ? 'Start upload' : 'Restart upload'}
          </Button>
          <span className="mds-progress-page__demo-hint">
            Simulates an upload that reports its progress in uneven steps.
          </span>
        </div>
      </ComponentPageSection>

      <ComponentPageSection title="Accessibility">
        <ComponentPageBody>
          Every indicator has <code>role="progressbar"</code> and needs a <code>label</code>,
          even when it is not shown — it becomes the accessible name, visibly with{' '}
          <code>showLabel</code> or through <code>aria-label</code> without it. A determinate
          indicator reports its value through <code>aria-valuenow</code>; an indeterminate one
          leaves it unset, which is how assistive technology knows the value is unknown.
          Screen readers do not announce a progress bar changing on its own, so when the work
          finishes, confirm it with a message the user will hear, such as a{' '}
          <Link href="#/toast" style="regular">Toast</Link>. Under reduced motion the fill stops
          easing between values, the spinner slows, and the indeterminate bar pulses in place
          rather than travelling.
        </ComponentPageBody>
      </ComponentPageSection>

    </div>
  );
}
