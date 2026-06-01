import './CheckboxGroup.css';
import Checkbox from '../Checkbox/Checkbox';

/**
 * MinimalDS — Checkbox Group
 *
 * Props:
 *   label      — string (group label)
 *   options    — array of { id, label, description, checked }
 *   layout     — 'vertical' | 'horizontal'
 *   disabled   — boolean (applies to all checkboxes)
 *   error      — boolean
 *   helperText — string (shown in base and disabled states)
 *   errorText  — string (shown in error state)
 *   onChange   — function(id, checked) called when a checkbox changes
 */

const alertTriangleIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.134 2.5L1.5 12.5H14.5L8.866 2.5H7.134Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M8 6V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="8" cy="11" r="0.75" fill="currentColor"/>
  </svg>
);

export default function CheckboxGroup({
  label,
  options = [],
  layout = 'vertical',
  disabled = false,
  error = false,
  helperText,
  errorText,
  onChange,
}) {
  const state = disabled ? 'disabled' : error ? 'error' : 'base';

  return (
    <fieldset
      className={[
        'mds-checkbox-group',
        `mds-checkbox-group--${layout}`,
        `mds-checkbox-group--${state}`,
      ].join(' ')}
    >
      {label && (
        <legend className="mds-checkbox-group__label">{label}</legend>
      )}

      <div className={`mds-checkbox-group__checkboxes mds-checkbox-group__checkboxes--${layout}`}>
        {options.map((option) => (
          <Checkbox
            key={option.id}
            id={option.id}
            label={option.label}
            description={option.description}
            checked={option.checked}
            disabled={disabled}
            error={error}
            onChange={(e) => onChange && onChange(option.id, e.target.checked)}
          />
        ))}
      </div>

      {error && errorText && (
        <span className="mds-checkbox-group__error">
          <span className="mds-checkbox-group__error-icon" aria-hidden="true">
            {alertTriangleIcon}
          </span>
          {errorText}
        </span>
      )}

      {!error && helperText && (
        <span className="mds-checkbox-group__helper">{helperText}</span>
      )}
    </fieldset>
  );
}
