import './Input.css';

/**
 * MinimalDS — Input
 *
 * Props:
 *   size         — 'default' | 'large'
 *   label        — string (optional)
 *   placeholder  — string
 *   value        — string
 *   prefix       — string (optional, e.g. '£')
 *   leadingIcon  — React node (optional icon before content)
 *   helperText   — string (optional)
 *   errorText    — string (shown in error state)
 *   disabled     — boolean
 *   error        — boolean
 *   type         — input type (default 'text')
 *   onChange     — function
 *   id           — string
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

export default function Input({
  size = 'default',
  label,
  placeholder,
  value,
  prefix,
  leadingIcon,
  helperText,
  errorText,
  disabled = false,
  error = false,
  type = 'text',
  onChange,
  id,
}) {
  const state = disabled ? 'disabled' : error ? 'error' : 'base';
  const isLarge = size === 'large';

  return (
    <div
      className={[
        'mds-input',
        `mds-input--${size}`,
        `mds-input--${state}`,
      ].join(' ')}
    >
      {label && (
        <label className="mds-input__label" htmlFor={id}>
          {label}
        </label>
      )}

      <div className="mds-input__field">
        {leadingIcon && (
          <span className="mds-input__leading-icon" aria-hidden="true">
            {leadingIcon}
          </span>
        )}
        {prefix && (
          <span className="mds-input__prefix" aria-hidden="true">
            {prefix}
          </span>
        )}
        {isLarge ? (
          <textarea
            id={id}
            className="mds-input__control mds-input__control--textarea"
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={onChange}
          />
        ) : (
          <input
            id={id}
            type={type}
            className="mds-input__control"
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={onChange}
          />
        )}
      </div>

      {error && errorText && (
        <span className="mds-input__error">
          <span className="mds-input__error-icon" aria-hidden="true">
            {alertTriangleIcon}
          </span>
          {errorText}
        </span>
      )}

      {!error && helperText && (
        <span className="mds-input__helper">{helperText}</span>
      )}
    </div>
  );
}
