import './Alert.css';

/**
 * MinimalDS — Alert
 *
 * Props:
 *   role        — 'success' | 'warning' | 'danger' | 'info'
 *   size        — 'default' | 'large'
 *   title       — string (optional)
 *   description — string
 *   dismissible — boolean (shows close button)
 *   action      — string (optional button label)
 *   onDismiss   — function (called when close button clicked)
 *   onAction    — function (called when action button clicked)
 */

const icons = {
  success: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  warning: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="8" cy="11" r="0.75" fill="currentColor"/>
    </svg>
  ),
  danger: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.134 2.5L1.5 12.5H14.5L8.866 2.5H7.134Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M8 6V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="8" cy="11" r="0.75" fill="currentColor"/>
    </svg>
  ),
  info: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 7V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="8" cy="5" r="0.75" fill="currentColor"/>
    </svg>
  ),
};

const closeIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default function Alert({
  role = 'info',
  size = 'large',
  title,
  description,
  dismissible = false,
  action,
  onDismiss,
  onAction,
}) {
  return (
    <div
      className={[
        'mds-alert',
        `mds-alert--${role}`,
        `mds-alert--${size}`,
      ].join(' ')}
      role="alert"
    >
      <span className="mds-alert__icon" aria-hidden="true">
        {icons[role]}
      </span>

      <div className="mds-alert__content">
        <div className="mds-alert__text">
          {title && (
            <span className="mds-alert__title">{title}</span>
          )}
          {description && (
            <span className="mds-alert__description">{description}</span>
          )}
        </div>

        {action && (
          <button className="mds-alert__action" onClick={onAction}>
            {action}
          </button>
        )}
      </div>

      {dismissible && (
        <button
          className="mds-alert__dismiss"
          onClick={onDismiss}
          aria-label="Dismiss"
        >
          {closeIcon}
        </button>
      )}
    </div>
  );
}
