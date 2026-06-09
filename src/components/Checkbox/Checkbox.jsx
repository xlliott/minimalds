import './Checkbox.css';

/**
 * MinimalDS — Checkbox
 *
 * Props:
 *   label       — string
 *   description — string (optional)
 *   checked     — boolean
 *   disabled    — boolean
 *   error       — boolean
 *   onChange    — function
 *   id          — string (for label association)
 */

const checkIcon = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 6L5 9L10 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Checkbox({
  label,
  description,
  checked = false,
  disabled = false,
  error = false,
  onChange,
  id,
}) {
  const state = disabled ? 'disabled' : error ? 'error' : 'base';

  return (
    <label
      className={[
        'mds-checkbox',
        `mds-checkbox--${state}`,
        checked ? 'mds-checkbox--checked' : '',
      ].join(' ').trim()}
      htmlFor={id}
    >
      <span className="mds-checkbox__control-wrapper">
        <span className="mds-checkbox__control" aria-hidden="true">
          {checked && checkIcon}
        </span>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          className="mds-checkbox__input"
        />
      </span>

      <span className="mds-checkbox__text">
        {label && (
          <span className="mds-checkbox__label">{label}</span>
        )}
        {description && (
          <span className="mds-checkbox__description">{description}</span>
        )}
      </span>
    </label>
  );
}
