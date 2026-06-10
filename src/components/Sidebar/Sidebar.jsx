import './Sidebar.css';

const navItems = [
  { label: 'FOUNDATIONS', section: true },
  { label: 'Colour', href: '#/colour' },
  { label: 'Typography', href: '#/typography' },
  { label: 'Icons', href: '#/icons' },
  { label: 'Spacing', href: '#/spacing' },
  { label: 'Radius', href: '#/radius' },
  { label: 'Design Tokens', href: '#/tokens', dividerAfter: true },
  { label: 'COMPONENTS', section: true },
  { label: 'Accordion', href: '#/accordion' },
  { label: 'Alert', href: '#/alert' },
  { label: 'Button', href: '#/button' },
  { label: 'Card', href: '#/card' },
  { label: 'Checkbox', href: '#/checkbox' },
  { label: 'Dialog', href: '#/dialog' },
  { label: 'Dropdown', href: '#/dropdown' },
  { label: 'Input', href: '#/input' },
  { label: 'Link', href: '#/link' },
  { label: 'Radio Button', href: '#/radio' },
  { label: 'Select', href: '#/select' },
  { label: 'Switch', href: '#/switch' },
  { label: 'Tabs', href: '#/tabs' },
  { label: 'Tag', href: '#/tag' },
];

const closeIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default function Sidebar({ currentPath, isOpen, onClose }) {
  return (
    <aside className={['mds-sidebar', isOpen ? 'mds-sidebar--open' : ''].join(' ').trim()}>
      <div className="mds-sidebar__mobile-header">
        <button
          className="mds-sidebar__close"
          onClick={onClose}
          aria-label="Close navigation"
        >
          {closeIcon}
        </button>
      </div>
      <nav className="mds-sidebar__nav">
        {navItems.map((item, index) =>
          item.section ? (
            <span key={index} className="mds-sidebar__section-label">
              {item.label}
            </span>
          ) : (
            <div key={index}>
              <a
                href={item.href}
                className={[
                  'mds-sidebar__nav-item',
                  currentPath === item.href ? 'mds-sidebar__nav-item--active' : '',
                ].join(' ').trim()}
                onClick={onClose}
              >
                {item.label}
              </a>
              {item.dividerAfter && (
                <div className="mds-sidebar__divider" aria-hidden="true" />
              )}
            </div>
          )
        )}
      </nav>

      <div className="mds-sidebar__footer">
        <a
          href="https://elliminxte.com"
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
