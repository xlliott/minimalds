import './MenuItem.css';

/**
 * MinimalDS — Menu Item
 *
 * Props:
 *   style       — 'basic' | 'detailed'
 *   label       — string
 *   description — string (detailed style only, optional)
 *   shortcut    — string (optional, e.g. '⇧M')
 *   icon        — React node (optional)
 *   selected    — boolean
 *   disabled    — boolean
 *   onClick     — function
 */

export default function MenuItem({
  style = 'basic',
  label,
  description,
  shortcut,
  icon,
  selected = false,
  disabled = false,
  onClick,
}) {
  return (
    <button
      className={[
        'mds-menu-item',
        `mds-menu-item--${style}`,
        selected ? 'mds-menu-item--selected' : '',
        disabled ? 'mds-menu-item--disabled' : '',
      ].join(' ').trim()}
      onClick={onClick}
      disabled={disabled}
      role="menuitem"
      aria-selected={selected}
    >
      {icon && (
        <span className="mds-menu-item__icon" aria-hidden="true">
          {icon}
        </span>
      )}

      <span className="mds-menu-item__content">
        {style === 'detailed' ? (
          <span className="mds-menu-item__title-description">
            <span className="mds-menu-item__label">{label}</span>
            {description && (
              <span className="mds-menu-item__description">{description}</span>
            )}
          </span>
        ) : (
          <span className="mds-menu-item__label">{label}</span>
        )}
      </span>

      {shortcut && (
        <span className="mds-menu-item__shortcut" aria-label={`Shortcut: ${shortcut}`}>
          {shortcut}
        </span>
      )}
    </button>
  );
}
