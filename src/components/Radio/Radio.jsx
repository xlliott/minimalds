import './Radio.css';

/**
 * MinimalDS — Radio
 *
 * Props:
 *   label       — string
 *   description — string (optional)
 *   checked     — boolean
 *   disabled    — boolean
 *   error       — boolean
 *   onChange    — function
 *   id          — string
 *   name        — string (radio group name)
 *   value       — string
 */

export default function Radio({
  label,
  description,
  checked = false,
  disabled = false,
  error = false,
  onChange,
  id,
  name,
  value,
}) {
  const state = disabled ? 'disabled' : error ? 'error' : 'base';

  return (
    <label
      className={[
        'mds-radio',
        `mds-radio--${state}`,
        checked ? 'mds-radio--checked' : '',
      ].join(' ').trim()}
      htmlFor={id}
    >
      <span className="mds-radio__control-wrapper">
        <span className="mds-radio__control" aria-hidden="true">
          {checked && <span className="mds-radio__dot" />}
        </span>
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          className="mds-radio__input"
        />
      </span>

      <span className="mds-radio__text">
        {label && (
          <span className="mds-radio__label">{label}</span>
        )}
        {description && (
          <span className="mds-radio__description">{description}</span>
        )}
      </span>
    </label>
  );
}
