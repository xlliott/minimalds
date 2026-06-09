import './ComponentPage.css';
import Alert from '../components/Alert/Alert';
import Divider from '../components/Divider/Divider';
import { useTheme } from '../context/ThemeContext';

export function ComponentPageHeader({ title, description, figmaUrl }) {
  return (
    <div className="mds-component-page__header">
      <h1 className="mds-component-page__title">{title}</h1>
      <p className="mds-component-page__subtitle">{description}</p>
      <a
        href={figmaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mds-component-page__figma-link"
      >
        View in Figma
      </a>
    </div>
  );
}

export function ComponentPagePreview({ controls, children, brand }) {
  const { mode } = useTheme();
  return (
    <div className="mds-component-page__preview-panel">
      {controls && (
        <div className="mds-component-page__controls">
          {controls}
        </div>
      )}
      <div className="mds-component-page__preview-area">
        <div
          className="mds-component-page__preview-scope"
          data-brand={brand || 'minimal'}
          data-mode={mode}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function ComponentPageSection({ title, children }) {
  return (
    <>
      <Divider />
      <div className="mds-component-page__section">
        {title && <h2 className="mds-component-page__section-title">{title}</h2>}
        {children}
      </div>
    </>
  );
}

export function ComponentPageBody({ children }) {
  return <p className="mds-component-page__body">{children}</p>;
}

export function ComponentPageUsage({ whenToUse, whenNotToUse }) {
  const toList = (items) => (
    <ul className="mds-component-page__usage-list">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );

  return (
    <div className="mds-component-page__usage">
      <Alert
        role="success"
        title="When to use"
        description={toList(whenToUse)}
      />
      <Alert
        role="danger"
        title="When not to use"
        description={toList(whenNotToUse)}
      />
    </div>
  );
}

export function ComponentPageStatePanel({ children }) {
  return (
    <div className="mds-component-page__state-panel">
      <div className="mds-component-page__state-inner">
        {children}
      </div>
    </div>
  );
}
