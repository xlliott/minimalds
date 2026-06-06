import './Sidebar.css';

const navItems = [
  { label: 'Foundations', section: true },
  { label: 'Design Tokens', href: '#/tokens' },
  { label: 'Components', section: true },
  { label: 'Accordion', href: '#/accordion' },
  { label: 'Alert', href: '#/alert' },
  { label: 'Button', href: '#/button' },
  { label: 'Card', href: '#/card' },
  { label: 'Checkbox', href: '#/checkbox' },
  { label: 'Dialog', href: '#/dialog' },
  { label: 'Divider', href: '#/divider' },
  { label: 'Dropdown', href: '#/dropdown' },
  { label: 'Input', href: '#/input' },
  { label: 'Link', href: '#/link' },
  { label: 'Menu', href: '#/menu' },
  { label: 'Radio', href: '#/radio' },
  { label: 'Select', href: '#/select' },
  { label: 'Switch', href: '#/switch' },
  { label: 'Tabs', href: '#/tabs' },
  { label: 'Tag', href: '#/tag' },
];

export default function Sidebar({ currentPath }) {
  return (
    <aside className="mds-sidebar">
      <nav className="mds-sidebar__nav">
        {navItems.map((item, index) =>
          item.section ? (
            <span key={index} className="mds-sidebar__section-label">
              {item.label}
            </span>
          ) : (
            <a
              key={index}
              href={item.href}
              className={[
                'mds-sidebar__nav-item',
                currentPath === item.href ? 'mds-sidebar__nav-item--active' : '',
              ].join(' ').trim()}
            >
              {item.label}
            </a>
          )
        )}
      </nav>

      <div className="mds-sidebar__footer">
        <a
          href="https://github.com/xlliott"
          target="_blank"
          rel="noopener noreferrer"
          className="mds-sidebar__built-by"
        >
          Built by xlliott
        </a>
      </div>
    </aside>
  );
}
