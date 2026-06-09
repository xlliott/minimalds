import './Dialog.css';
import Button from '../Button/Button';

/**
 * MinimalDS — Dialog
 *
 * Props:
 *   open          — boolean (controls visibility)
 *   size          — 'default' | 'small'
 *   title         — string
 *   body          — string
 *   slot          — React node (optional custom content)
 *   dismissible   — boolean (shows close button in top right)
 *   primaryLabel  — string (primary button label)
 *   secondaryLabel— string (secondary button label, optional)
 *   onPrimary     — function
 *   onSecondary   — function
 *   onDismiss     — function (called when overlay or close button clicked)
 */

const closeIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 6L18 18M18 6L6 18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default function Dialog({
  open = false,
  size = 'default',
  title,
  body,
  slot,
  dismissible = true,
  primaryLabel,
  secondaryLabel,
  onPrimary,
  onSecondary,
  onDismiss,
  static: isStatic = false,
}) {
  if (!open && !isStatic) return null;

  const panel = (
    <div
      className={[
        'mds-dialog',
        `mds-dialog--${size}`,
      ].join(' ')}
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'mds-dialog-title' : undefined}
    >
      <div className="mds-dialog__header">
        <div className="mds-dialog__title-body">
          {title && (
            <h4 id="mds-dialog-title" className="mds-dialog__title">{title}</h4>
          )}
          {body && (
            <p className="mds-dialog__body">{body}</p>
          )}
        </div>

        {dismissible && (
          <button
            className="mds-dialog__close"
            onClick={onDismiss}
            aria-label="Close dialog"
          >
            {closeIcon}
          </button>
        )}
      </div>

      {slot && (
        <div className="mds-dialog__slot">{slot}</div>
      )}

      {(primaryLabel || secondaryLabel) && (
        <div className="mds-dialog__buttons">
          {primaryLabel && (
            <Button role="primary" size="default" onClick={onPrimary}>
              {primaryLabel}
            </Button>
          )}
          {secondaryLabel && (
            <Button role="secondary" size="default" onClick={onSecondary}>
              {secondaryLabel}
            </Button>
          )}
        </div>
      )}
    </div>
  );

  if (isStatic) return panel;

  return (
    <div className="mds-dialog-overlay" onClick={onDismiss}>
      {panel}
    </div>
  );
}
