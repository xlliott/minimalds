import './Divider.css';

/**
 * MinimalDS — Divider
 *
 * Props:
 *   orientation — 'horizontal' | 'vertical'
 */

export default function Divider({ orientation = 'horizontal' }) {
  return (
    <div
      className={[
        'mds-divider',
        `mds-divider--${orientation}`,
      ].join(' ')}
      role="separator"
      aria-orientation={orientation}
    />
  );
}
