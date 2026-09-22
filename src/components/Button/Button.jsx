import Progress from '../Progress/Progress';
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
 *   loading   — boolean (shows a spinner in the leading slot and ignores clicks;
 *               the button stays focusable and keeps its label)
 *   onClick   — function
 *   children  — button label
 */

export default function Button({
  role = 'primary',
  size = 'default',
  leadingIcon,
  trailingIcon,
  disabled = false,
  loading = false,
  onClick,
  children,
  ...rest
}) {
  // A loading button uses aria-disabled rather than disabled, so focus
  // stays on it while the action runs instead of dropping to the page.
  const handleClick = (e) => {
    if (loading) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <button
      className={[
        'mds-button',
        `mds-button--${role}`,
        `mds-button--${size}`,
        loading ? 'mds-button--loading' : '',
      ].join(' ').trim()}
      disabled={disabled}
      aria-disabled={loading || undefined}
      aria-busy={loading || undefined}
      onClick={handleClick}
      {...rest}
    >
      {loading ? (
        <span className="mds-button__icon mds-button__icon--leading" aria-hidden="true">
          <Progress variant="circular" size="small" color="current" label="Loading" />
        </span>
      ) : leadingIcon && (
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
