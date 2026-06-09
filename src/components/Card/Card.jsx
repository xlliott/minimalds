import './Card.css';
import Button from '../Button/Button';

/**
 * MinimalDS — Card
 *
 * Props:
 *   size           — 'default' | 'small'
 *   buttonPosition — 'bottom' | 'side'
 *   title          — string
 *   description    — string
 *   icon           — React node (optional)
 *   slot           — React node (optional custom content)
 *   primaryLabel   — string (primary button label, optional)
 *   secondaryLabel — string (secondary button label, optional)
 *   onPrimary      — function
 *   onSecondary    — function
 */

export default function Card({
  size = 'default',
  buttonPosition = 'bottom',
  title,
  description,
  icon,
  slot,
  primaryLabel,
  secondaryLabel,
  onPrimary,
  onSecondary,
}) {
  const hasButtons = primaryLabel || secondaryLabel;

  const buttons = hasButtons && (
    <div className="mds-card__buttons">
      {secondaryLabel && (
        <Button role="secondary" size="default" onClick={onSecondary}>
          {secondaryLabel}
        </Button>
      )}
      {primaryLabel && (
        <Button role="secondary" size="default" onClick={onPrimary}>
          {primaryLabel}
        </Button>
      )}
    </div>
  );

  return (
    <div
      className={[
        'mds-card',
        `mds-card--${size}`,
        `mds-card--${buttonPosition}`,
      ].join(' ')}
    >
      <div className="mds-card__content">
        {icon && (
          <span className="mds-card__icon" aria-hidden="true">
            {icon}
          </span>
        )}
        <div className="mds-card__text">
          {title && (
            <h4 className="mds-card__title">{title}</h4>
          )}
          {description && (
            <p className="mds-card__description">{description}</p>
          )}
        </div>
        {slot && (
          <div className="mds-card__slot">{slot}</div>
        )}
        {buttonPosition === 'bottom' && buttons}
      </div>

      {buttonPosition === 'side' && buttons}
    </div>
  );
}
