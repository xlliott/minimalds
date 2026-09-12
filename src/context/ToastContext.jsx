import { createContext, useContext, useState, useRef, useCallback, useEffect } from 'react';
import Toast from '../components/Toast/Toast';

/**
 * MinimalDS — Toast provider
 *
 * Wrap the app once, inside ThemeProvider so the toast region resolves the
 * app's brand and mode tokens, then raise toasts from anywhere:
 *
 *   const { toast } = useToast();
 *   toast({ role: 'success', title: 'Saved', description: 'Your changes are live.' });
 *
 * Props:
 *   placement — 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
 *   duration  — default ms before a toast auto-dismisses (0 never dismisses)
 *   limit     — maximum toasts on screen; the oldest is dropped past this
 */

const ToastContext = createContext(null);

const DEFAULT_DURATION = 5000;

export function ToastProvider({
  children,
  placement = 'bottom-right',
  duration = DEFAULT_DURATION,
  limit = 4,
}) {
  const [toasts, setToasts] = useState([]);
  const idRef = useRef(0);
  // id -> { timer, remaining, startedAt }
  const timersRef = useRef(new Map());

  const dismiss = useCallback((id) => {
    const entry = timersRef.current.get(id);
    if (entry?.timer) clearTimeout(entry.timer);
    timersRef.current.delete(id);
    setToasts((current) => current.filter((t) => t.id !== id));
  }, []);

  const startTimer = useCallback((id, ms) => {
    if (!ms) return;
    const timer = setTimeout(() => dismiss(id), ms);
    timersRef.current.set(id, { timer, remaining: ms, startedAt: Date.now() });
  }, [dismiss]);

  const toast = useCallback((options = {}) => {
    const id = ++idRef.current;
    const ms = options.duration === undefined ? duration : options.duration;

    setToasts((current) => {
      const next = [...current, { ...options, id }];
      // Drop the oldest rather than letting the stack grow without bound
      while (next.length > limit) {
        const dropped = next.shift();
        const entry = timersRef.current.get(dropped.id);
        if (entry?.timer) clearTimeout(entry.timer);
        timersRef.current.delete(dropped.id);
      }
      return next;
    });

    startTimer(id, ms);
    return id;
  }, [duration, limit, startTimer]);

  // Hovering or focusing the stack pauses every countdown, so a toast cannot
  // disappear while it is being read or its action is being reached for.
  const pauseAll = useCallback(() => {
    timersRef.current.forEach((entry, id) => {
      if (!entry.timer) return;
      clearTimeout(entry.timer);
      const elapsed = Date.now() - entry.startedAt;
      timersRef.current.set(id, {
        timer: null,
        remaining: Math.max(entry.remaining - elapsed, 0),
        startedAt: entry.startedAt,
      });
    });
  }, []);

  const resumeAll = useCallback(() => {
    timersRef.current.forEach((entry, id) => {
      if (entry.timer || !entry.remaining) return;
      startTimer(id, entry.remaining);
    });
  }, [startTimer]);

  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      timers.forEach((entry) => entry.timer && clearTimeout(entry.timer));
      timers.clear();
    };
  }, []);

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}

      {toasts.length > 0 && (
        <div
          className={`mds-toast-region mds-toast-region--${placement}`}
          aria-label="Notifications"
          onMouseEnter={pauseAll}
          onMouseLeave={resumeAll}
          onFocus={pauseAll}
          onBlur={resumeAll}
        >
          {toasts.map((t) => (
            <Toast
              key={t.id}
              role={t.role}
              title={t.title}
              description={t.description}
              action={t.action}
              onAction={() => {
                t.onAction && t.onAction();
                dismiss(t.id);
              }}
              dismissible={t.dismissible}
              onDismiss={() => dismiss(t.id)}
            />
          ))}
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used inside a ToastProvider');
  }
  return context;
}
