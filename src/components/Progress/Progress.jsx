import { useId } from 'react';
import './Progress.css';

/**
 * MinimalDS — Progress
 *
 * Props:
 *   variant    — 'linear' | 'circular'
 *   value      — number 0–100 (omit for indeterminate)
 *   size       — 'small' | 'default' | 'large'
 *   color      — 'brand' | 'current' (current inherits the surrounding text colour)
 *   label      — string (accessible name; always required)
 *   showLabel  — boolean (renders the label visibly beside the indicator)
 *   showValue  — boolean (renders the percentage; determinate only)
 */

export default function Progress({
  variant = 'linear',
  value,
  size = 'default',
  color = 'brand',
  label,
  showLabel = false,
  showValue = false,
  ...rest
}) {
  const labelId = useId();

  const isDeterminate = typeof value === 'number' && !Number.isNaN(value);
  const clamped = isDeterminate ? Math.min(100, Math.max(0, value)) : undefined;
  const rounded = isDeterminate ? Math.round(clamped) : undefined;

  const hasText = showLabel || (showValue && isDeterminate);

  const indicator = variant === 'circular' ? (
    <svg
      className="mds-progress__ring"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle className="mds-progress__ring-track" cx="12" cy="12" r="10" />
      <circle
        className="mds-progress__ring-fill"
        cx="12"
        cy="12"
        r="10"
        pathLength="100"
        strokeDasharray={isDeterminate ? `${clamped} 100` : undefined}
      />
    </svg>
  ) : (
    <span className="mds-progress__track" aria-hidden="true">
      <span
        className="mds-progress__fill"
        style={isDeterminate ? { width: `${clamped}%` } : undefined}
      />
    </span>
  );

  // A span, not a div, so the indicator is valid inside phrasing content
  // such as a button label.
  return (
    <span
      className={[
        'mds-progress',
        `mds-progress--${variant}`,
        `mds-progress--${size}`,
        color === 'current' ? 'mds-progress--current' : '',
        isDeterminate ? '' : 'mds-progress--indeterminate',
      ].join(' ').trim()}
      role="progressbar"
      aria-label={showLabel ? undefined : label}
      aria-labelledby={showLabel ? labelId : undefined}
      aria-valuemin={isDeterminate ? 0 : undefined}
      aria-valuemax={isDeterminate ? 100 : undefined}
      aria-valuenow={isDeterminate ? rounded : undefined}
      {...rest}
    >
      {variant === 'circular' && indicator}

      {hasText && (
        <span className="mds-progress__header">
          {showLabel && (
            <span id={labelId} className="mds-progress__label">{label}</span>
          )}
          {showValue && isDeterminate && (
            <span className="mds-progress__value" aria-hidden="true">{rounded}%</span>
          )}
        </span>
      )}

      {variant === 'linear' && indicator}
    </span>
  );
}
