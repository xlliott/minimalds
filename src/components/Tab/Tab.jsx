import './Tab.css';

/**
 * MinimalDS — Tab (single tab item)
 * Used internally by TabGroup — not intended to be used standalone.
 *
 * Props:
 *   label    — string
 *   selected — boolean
 *   onClick  — function
 */

export default function Tab({ label, selected = false, onClick }) {
  return (
    <button
      className={[
        'mds-tab',
        selected ? 'mds-tab--selected' : '',
      ].join(' ').trim()}
      onClick={onClick}
      role="tab"
      aria-selected={selected}
    >
      <span className="mds-tab__text">{label}</span>
      <span className="mds-tab__indicator" aria-hidden="true" />
    </button>
  );
}
