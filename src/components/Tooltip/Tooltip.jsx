import { useState, useRef, useEffect, useId, cloneElement, isValidElement } from 'react';
import './Tooltip.css';

/**
 * MinimalDS — Tooltip
 *
 * Props:
 *   content    — string or React node (tooltip text)
 *   placement  — 'top' | 'right' | 'bottom' | 'left'
 *   delay      — number (ms before showing on hover, default 150)
 *   disabled   — boolean (never show)
 *   open       — boolean (optional, forces visibility — used for docs previews)
 *   children   — the trigger element the tooltip describes
 */

export default function Tooltip({
  content,
  placement = 'top',
  delay = 150,
  disabled = false,
  open,
  children,
}) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);
  const id = useId();

  const isControlled = open !== undefined;
  const isVisible = (isControlled ? open : visible) && !disabled && Boolean(content);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => clearTimer, []);

  // Escape dismisses the tooltip while it is showing.
  useEffect(() => {
    if (!isVisible || isControlled) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        clearTimer();
        setVisible(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, isControlled]);

  const show = () => {
    if (disabled || isControlled) return;
    clearTimer();
    timerRef.current = setTimeout(() => setVisible(true), delay);
  };

  const hide = () => {
    if (isControlled) return;
    clearTimer();
    setVisible(false);
  };

  // The trigger carries aria-describedby so screen readers announce the
  // tooltip as supplementary description, never as the element's only name.
  const trigger = isValidElement(children)
    ? cloneElement(children, {
        'aria-describedby': isVisible ? id : undefined,
      })
    : children;

  return (
    <span
      className="mds-tooltip"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {trigger}

      <span
        id={id}
        role="tooltip"
        className={[
          'mds-tooltip__bubble',
          `mds-tooltip__bubble--${placement}`,
          isVisible ? 'mds-tooltip__bubble--visible' : '',
        ].join(' ').trim()}
      >
        <span className="mds-tooltip__content">{content}</span>
        <span className="mds-tooltip__arrow" aria-hidden="true" />
      </span>
    </span>
  );
}
