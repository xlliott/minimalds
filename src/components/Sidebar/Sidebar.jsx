import './Sidebar.css';

const logo = (
  <svg width="24" height="15" viewBox="0 0 300 187" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60.4317 0L0 62.6316V187L120 62.6316V0H60.4317Z" fill="currentColor"/>
    <path d="M180.432 0L120 62.6316V187L240 62.6316V0H180.432Z" fill="currentColor"/>
    <path d="M270 31.1667L240 62.3333V154.943L270 186.11L300 154.943V62.3333L270 31.1667Z" fill="currentColor"/>
  </svg>
);

const navItems = [
  { label: 'Foundations', href: '#/foundations', section: true },
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
      <a href="#/" className="mds-sidebar__logo" aria-label="MinimalDS home">
        {logo}
      </a>

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
