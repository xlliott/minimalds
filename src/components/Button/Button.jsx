import './Button.css';

/**
 * MinimalDS — Button
 *
 * Props:
 *   role      — 'primary' | 'secondary' | 'ghost' | 'inverse' | 'success' | 'danger'
 *   size      — 'default' | 'small'
 *   leadingIcon  — React node (optional)
 *   trailingIcon — React node (optional)
 *   disabled  — boolean
 *   onClick   — function
 *   children  — button label
 */

export default function Button({
  role = 'primary',
  size = 'default',
  leadingIcon,
  trailingIcon,
  disabled = false,
  onClick,
  children,
  ...rest
}) {
  return (
    <button
      className={[
        'mds-button',
        `mds-button--${role}`,
        `mds-button--${size}`,
      ].join(' ')}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {leadingIcon && (
        <span className="mds-button__icon mds-button__icon--leading" aria-hidden="true">
          {leadingIcon}
        </span>
      )}
      <span className="mds-button__label">{children}</span>
      {trailingIcon && (
        <span className="mds-button__icon mds-button__icon--trailing" aria-hidden="true">
          {trailingIcon}
        </span>
      )}
    </button>
  );
}
