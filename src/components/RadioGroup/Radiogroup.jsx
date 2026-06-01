import './RadioGroup.css';
import Radio from '../Radio/Radio';

/**
 * MinimalDS — Radio Group
 *
 * Props:
 *   label      — string (group label)
 *   options    — array of { id, value, label, description }
 *   value      — currently selected value
 *   layout     — 'vertical' | 'horizontal'
 *   disabled   — boolean (applies to all radios)
 *   error      — boolean
 *   helperText — string (shown in base and disabled states)
 *   errorText  — string (shown in error state)
 *   name       — string (radio group name for accessibility)
 *   onChange   — function(value) called when selection changes
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

export default function RadioGroup({
  label,
  options = [],
  value,
  layout = 'vertical',
  disabled = false,
  error = false,
  helperText,
  errorText,
  name,
  onChange,
}) {
  const state = disabled ? 'disabled' : error ? 'error' : 'base';

  return (
    <fieldset
      className={[
        'mds-radio-group',
        `mds-radio-group--${layout}`,
        `mds-radio-group--${state}`,
      ].join(' ')}
    >
      {label && (
        <legend className="mds-radio-group__label">{label}</legend>
      )}

      <div className={`mds-radio-group__radios mds-radio-group__radios--${layout}`}>
        {options.map((option) => (
          <Radio
            key={option.id}
            id={option.id}
            name={name}
            value={option.value}
            label={option.label}
            description={option.description}
            checked={option.value === value}
            disabled={disabled}
            error={error}
            onChange={() => onChange && onChange(option.value)}
          />
        ))}
      </div>

      {error && errorText && (
        <span className="mds-radio-group__error">
          <span className="mds-radio-group__error-icon" aria-hidden="true">
            {alertTriangleIcon}
          </span>
          {errorText}
        </span>
      )}

      {!error && helperText && (
        <span className="mds-radio-group__helper">{helperText}</span>
      )}
    </fieldset>
  );
}
