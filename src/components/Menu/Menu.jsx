import './Menu.css';
import MenuItem from '../MenuItem/MenuItem';

/**
 * MinimalDS — Menu
 *
 * Props:
 *   style    — 'basic' | 'detailed'
 *   items    — array of MenuItem props objects:
 *              { label, description, shortcut, icon, selected, disabled, onClick }
 */

export default function Menu({
  style = 'basic',
  items = [],
}) {
  return (
    <div
      className={[
        'mds-menu',
        `mds-menu--${style}`,
      ].join(' ')}
      role="menu"
    >
      {items.map((item, index) => (
        <div key={index} className="mds-menu__item-wrapper">
          {index > 0 && (
            <div className="mds-menu__divider" aria-hidden="true" />
          )}
          <MenuItem
            style={style}
            label={item.label}
            description={item.description}
            shortcut={item.shortcut}
            icon={item.icon}
            selected={item.selected}
            disabled={item.disabled}
            onClick={item.onClick}
          />
        </div>
      ))}
    </div>
  );
}
