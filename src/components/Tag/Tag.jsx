import './Tag.css';

/**
 * MinimalDS — Tag
 *
 * Props:
 *   role     — 'success' | 'warning' | 'danger' | 'info'
 *   label    — string
 *   icon     — boolean (shows role-specific icon)
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

export default function Tag({
  role = 'info',
  label,
  icon = true,
}) {
  return (
    <span
      className={[
        'mds-tag',
        `mds-tag--${role}`,
      ].join(' ')}
    >
      {icon && (
        <span className="mds-tag__icon" aria-hidden="true">
          {icons[role]}
        </span>
      )}
      <span className="mds-tag__label">{label}</span>
    </span>
  );
}
