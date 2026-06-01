import { useState } from 'react';
import './Accordion.css';

/**
 * MinimalDS — Accordion
 *
 * Props:
 *   title       — string (accordion header label)
 *   description — string (body text shown when open, optional if using slot)
 *   slot        — React node (optional custom content shown when open)
 *   defaultOpen — boolean (default false)
 */

export default function Accordion({
  title = 'Title',
  description,
  slot,
  defaultOpen = false,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={[
        'mds-accordion',
        open ? 'mds-accordion--open' : '',
        hovered ? 'mds-accordion--hover' : '',
      ].join(' ').trim()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        className="mds-accordion__header"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="mds-accordion__title">{title}</span>
        <span className="mds-accordion__icon" aria-hidden="true">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {open && (
        <div className="mds-accordion__body">
          {slot ? slot : description && (
            <p className="mds-accordion__description">{description}</p>
          )}
        </div>
      )}
    </div>
  );
}
