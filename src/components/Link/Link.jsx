import './Link.css';

/**
 * MinimalDS — Link
 *
 * Props:
 *   href     — string
 *   style    — 'regular' | 'bold'
 *   brand    — boolean (uses brand colour instead of default)
 *   external — boolean (shows external link icon, opens in new tab)
 *   children — link label
 *   onClick  — function (optional, for non-href usage)
 */

const externalIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 3H3C2.44772 3 2 3.44772 2 4V13C2 13.5523 2.44772 14 3 14H12C12.5523 14 13 13.5523 13 13V10M9 2H14M14 2V7M14 2L7 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Link({
  href,
  style = 'regular',
  brand = false,
  external = false,
  children,
  onClick,
}) {
  return (
    <a
      href={href}
      className={[
        'mds-link',
        `mds-link--${style}`,
        brand ? 'mds-link--brand' : '',
      ].join(' ').trim()}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={onClick}
    >
      {children}
      {external && (
        <span className="mds-link__external-icon" aria-label="(opens in new tab)">
          {externalIcon}
        </span>
      )}
    </a>
  );
}
