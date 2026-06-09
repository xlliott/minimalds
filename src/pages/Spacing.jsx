import './Spacing.css';

const componentTokens = [
  { name: 'spacing.component.minus', value: '-1px' },
  { name: 'spacing.component.none',  value: '0px'  },
  { name: 'spacing.component.xs',    value: '4px'  },
  { name: 'spacing.component.sm',    value: '8px'  },
  { name: 'spacing.component.md',    value: '12px' },
  { name: 'spacing.component.lg',    value: '16px' },
  { name: 'spacing.component.xl',    value: '20px' },
  { name: 'spacing.component.2xl',   value: '24px' },
  { name: 'spacing.component.3xl',   value: '28px' },
  { name: 'spacing.component.4xl',   value: '32px' },
  { name: 'spacing.component.5xl',   value: '40px' },
];

const layoutTokens = [
  { name: 'spacing.layout.minus', value: '-1px' },
  { name: 'spacing.layout.none',  value: '0px'  },
  { name: 'spacing.layout.xs',    value: '8px'  },
  { name: 'spacing.layout.sm',    value: '16px' },
  { name: 'spacing.layout.md',    value: '24px' },
  { name: 'spacing.layout.lg',    value: '32px' },
  { name: 'spacing.layout.xl',    value: '48px' },
  { name: 'spacing.layout.2xl',   value: '64px' },
  { name: 'spacing.layout.3xl',   value: '80px' },
  { name: 'spacing.layout.4xl',   value: '96px' },
];

function SpacingTable({ tokens }) {
  return (
    <div className="mds-spacing__table">
      {tokens.map((token) => (
        <div key={token.name} className="mds-spacing__row">
          <span className="mds-spacing__name">{token.name}</span>
          <span className="mds-spacing__value">{token.value}</span>
        </div>
      ))}
    </div>
  );
}

export default function Spacing() {
  return (
    <div className="mds-page-spacing">
      <h1 className="mds-page-spacing__title">Spacing</h1>
      <p className="mds-page-spacing__subtitle">
        A spacing system simplifies the creation of page layouts and UI.
      </p>

      <div className="mds-spacing__cols">
        <div className="mds-spacing__col">
          <h2 className="mds-spacing__col-title">Component</h2>
          <SpacingTable tokens={componentTokens} />
        </div>
        <div className="mds-spacing__col">
          <h2 className="mds-spacing__col-title">Layout</h2>
          <SpacingTable tokens={layoutTokens} />
        </div>
      </div>
    </div>
  );
}
