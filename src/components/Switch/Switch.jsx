import './Switch.css';

/**
 * MinimalDS — Switch
 *
 * Props:
 *   checked  — boolean
 *   disabled — boolean
 *   onChange — function
 *   id       — string
 *   label    — string (optional, for accessibility)
 */

export default function Switch({
  checked = false,
  disabled = false,
  onChange,
  id,
  label,
}) {
  const state = disabled ? 'disabled' : 'base';

  return (
    <label
      className={[
        'mds-switch',
        `mds-switch--${state}`,
        checked ? 'mds-switch--checked' : '',
      ].join(' ').trim()}
      htmlFor={id}
    >
      <input
        type="checkbox"
        id={id}
        role="switch"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className="mds-switch__input"
        aria-checked={checked}
      />
      <span className="mds-switch__track" aria-hidden="true">
        <span className="mds-switch__thumb" />
      </span>
      {label && (
        <span className="mds-switch__label">{label}</span>
      )}
    </label>
  );
}
