import { useState, useRef, useEffect } from 'react';
import './Select.css';
import Menu from '../Menu/Menu';

/**
 * MinimalDS — Select
 *
 * Props:
 *   label       — string (optional label above field)
 *   options     — array of { value, label } or strings
 *   value       — currently selected value
 *   placeholder — string shown when nothing selected
 *   helperText  — string (optional)
 *   errorText   — string (shown in error state)
 *   disabled    — boolean
 *   error       — boolean
 *   onChange    — function(value)
 *   id          — string
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

const alertTriangleIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.134 2.5L1.5 12.5H14.5L8.866 2.5H7.134Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M8 6V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="8" cy="11" r="0.75" fill="currentColor"/>
  </svg>
);

export default function Select({
  label,
  options = [],
  value,
  placeholder = 'Select',
  helperText,
  errorText,
  disabled = false,
  error = false,
  onChange,
  id,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selectedOption = options.find((o) =>
    typeof o === 'string' ? o === value : o.value === value
  );

  const selectedLabel = selectedOption
    ? typeof selectedOption === 'string' ? selectedOption : selectedOption.label
    : null;

  const state = disabled ? 'disabled' : error ? 'error' : open ? 'active' : 'base';

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = options.map((option) => {
    const optVal = typeof option === 'string' ? option : option.value;
    const optLabel = typeof option === 'string' ? option : option.label;
    return {
      label: optLabel,
      selected: optVal === value,
      onClick: () => {
        onChange && onChange(optVal);
        setOpen(false);
      },
    };
  });

  return (
    <div
      ref={ref}
      className={[
        'mds-select',
        `mds-select--${state}`,
      ].join(' ')}
    >
      {label && (
        <label className="mds-select__label" htmlFor={id}>
          {label}
        </label>
      )}

      <button
        id={id}
        className="mds-select__field"
        onClick={() => !disabled && setOpen(!open)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="mds-select__value">
          {selectedLabel || placeholder}
        </span>
        <span
          className={[
            'mds-select__chevron',
            open ? 'mds-select__chevron--open' : '',
          ].join(' ').trim()}
          aria-hidden="true"
        >
          {chevronIcon}
        </span>
      </button>

      {open && (
        <div className="mds-select__menu">
          <Menu style="basic" items={menuItems} />
        </div>
      )}

      {error && errorText && (
        <span className="mds-select__error">
          <span className="mds-select__error-icon" aria-hidden="true">
            {alertTriangleIcon}
          </span>
          {errorText}
        </span>
      )}

      {!error && helperText && (
        <span className="mds-select__helper">{helperText}</span>
      )}
    </div>
  );
}
