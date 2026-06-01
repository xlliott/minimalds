import { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

/**
 * MinimalDS — Dropdown
 *
 * Props:
 *   options     — array of { value, label } or strings
 *   value       — currently selected value
 *   placeholder — string shown when nothing selected
 *   innerLabel  — string (optional floating label shown above content)
 *   disabled    — boolean
 *   onChange    — function(value)
 */

const chevronIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Dropdown({
  options = [],
  value,
  placeholder = 'Select',
  innerLabel,
  disabled = false,
  onChange,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selectedOption = options.find((o) =>
    typeof o === 'string' ? o === value : o.value === value
  );

  const selectedLabel = selectedOption
    ? typeof selectedOption === 'string' ? selectedOption : selectedOption.label
    : null;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    const val = typeof option === 'string' ? option : option.value;
    onChange && onChange(val);
    setOpen(false);
  };

  return (
    <div
      ref={ref}
      className={[
        'mds-dropdown',
        open ? 'mds-dropdown--active' : '',
        disabled ? 'mds-dropdown--disabled' : '',
        innerLabel ? 'mds-dropdown--inner-label' : '',
      ].join(' ').trim()}
    >
      <button
        className="mds-dropdown__field"
        onClick={() => !disabled && setOpen(!open)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="mds-dropdown__content">
          {innerLabel && (
            <span className="mds-dropdown__inner-label">{innerLabel}</span>
          )}
          <span className="mds-dropdown__value">
            {selectedLabel || placeholder}
          </span>
        </span>
        <span className={`mds-dropdown__chevron ${open ? 'mds-dropdown__chevron--open' : ''}`} aria-hidden="true">
          {chevronIcon}
        </span>
      </button>

      {open && (
        <ul className="mds-dropdown__menu" role="listbox">
          {options.map((option, index) => {
            const optVal = typeof option === 'string' ? option : option.value;
            const optLabel = typeof option === 'string' ? option : option.label;
            const isSelected = optVal === value;

            return (
              <li key={optVal}>
                {index > 0 && <div className="mds-dropdown__divider" aria-hidden="true" />}
                <button
                  className={[
                    'mds-dropdown__item',
                    isSelected ? 'mds-dropdown__item--selected' : '',
                  ].join(' ').trim()}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(option)}
                >
                  {optLabel}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
