import './Toast.css';

/**
 * MinimalDS — Toast
 *
 * A single toast. Usually created through useToast() rather than rendered
 * directly; render it directly only for a static example, as the docs do.
 *
 * Props:
 *   role        — 'success' | 'warning' | 'danger' | 'info'
 *   title       — string (optional)
 *   description — string
 *   action      — string (optional button label)
 *   onAction    — function (called when the action button is clicked)
 *   dismissible — boolean (shows close button, default true)
 *   onDismiss   — function (called when the close button is clicked)
 *   static      — boolean (renders without entry animation, for previews)
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

export default function Toast({
  role = 'info',
  title,
  description,
  action,
  onAction,
  dismissible = true,
  onDismiss,
  static: isStatic = false,
}) {
  return (
    <div
      className={[
        'mds-toast',
        `mds-toast--${role}`,
        isStatic ? 'mds-toast--static' : '',
      ].join(' ').trim()}
      // Failures interrupt; everything else waits for a pause in speech.
      role={role === 'danger' ? 'alert' : 'status'}
    >
      <span className="mds-toast__icon" aria-hidden="true">
        {icons[role]}
      </span>

      <div className="mds-toast__content">
        <div className="mds-toast__text">
          {title && (
            <span className="mds-toast__title">{title}</span>
          )}
          {description && (
            <span className="mds-toast__description">{description}</span>
          )}
        </div>

        {action && (
          <button className="mds-toast__action" onClick={onAction}>
            {action}
          </button>
        )}
      </div>

      {dismissible && (
        <button
          className="mds-toast__dismiss"
          onClick={onDismiss}
          aria-label="Dismiss notification"
        >
          {closeIcon}
        </button>
      )}
    </div>
  );
}
