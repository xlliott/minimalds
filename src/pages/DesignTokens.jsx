import './DesignTokens.css';

// ─── Colour tokens ────────────────────────────────────────────────────────────

const surface = [
  { name: 'colour.static.surface.default',      label: 'Neutral 0',              color: '#ffffff' },
  { name: 'colour.static.surface.page',         label: 'Neutral 50',             color: '#f5f5f5' },
  { name: 'colour.static.surface.subtle',       label: 'Neutral 100',            color: '#e5e5e5' },
  { name: 'colour.static.surface.inverse',      label: 'Neutral 900',            color: '#141414' },
  { name: 'colour.static.surface.brand',        label: 'Neutral 900',            color: '#141414' },
  { name: 'colour.static.surface.brand-subtle', label: 'Neutral 100',            color: '#e5e5e5' },
  { name: 'colour.static.surface.positive',     label: 'Green 100',              color: '#dcfce7' },
  { name: 'colour.static.surface.warning',      label: 'Yellow 100',             color: '#fef9c3' },
  { name: 'colour.static.surface.danger',       label: 'Red 100',                color: '#fee2e2' },
  { name: 'colour.static.surface.info',         label: 'Blue 100',               color: '#dbeafe' },
  { name: 'colour.static.surface.overlay',      label: 'Transparent Black 700',  color: 'rgba(0,0,0,0.7)' },
];

const text = [
  { name: 'colour.static.text.default',  label: 'Neutral 900',  color: '#141414' },
  { name: 'colour.static.text.subtle',   label: 'Neutral 600',  color: '#4b4b4b' },
  { name: 'colour.static.text.muted',    label: 'Neutral 400',  color: '#919191' },
  { name: 'colour.static.text.disabled', label: 'Neutral 200',  color: '#d4d4d4' },
  { name: 'colour.static.text.inverse',  label: 'Neutral 0',    color: '#ffffff' },
  { name: 'colour.static.text.brand',    label: 'Neutral 900',  color: '#141414' },
  { name: 'colour.static.text.positive', label: 'Green 700',    color: '#15803d' },
  { name: 'colour.static.text.warning',  label: 'Yellow 700',   color: '#a16207' },
  { name: 'colour.static.text.danger',   label: 'Red 700',      color: '#b91c1c' },
  { name: 'colour.static.text.info',     label: 'Blue 700',     color: '#1d4ed8' },
];

const icon = [
  { name: 'colour.static.icon.default',  label: 'Neutral 900',  color: '#141414' },
  { name: 'colour.static.icon.subtle',   label: 'Neutral 600',  color: '#4b4b4b' },
  { name: 'colour.static.icon.muted',    label: 'Neutral 400',  color: '#919191' },
  { name: 'colour.static.icon.disabled', label: 'Neutral 200',  color: '#d4d4d4' },
  { name: 'colour.static.icon.inverse',  label: 'Neutral 0',    color: '#ffffff' },
  { name: 'colour.static.icon.brand',    label: 'Neutral 900',  color: '#141414' },
  { name: 'colour.static.icon.positive', label: 'Green 700',    color: '#15803d' },
  { name: 'colour.static.icon.warning',  label: 'Yellow 700',   color: '#a16207' },
  { name: 'colour.static.icon.danger',   label: 'Red 700',      color: '#b91c1c' },
  { name: 'colour.static.icon.info',     label: 'Blue 700',     color: '#1d4ed8' },
];

const border = [
  { name: 'colour.static.border.default',  label: 'Neutral 200',  color: '#d4d4d4' },
  { name: 'colour.static.border.subtle',   label: 'Neutral 100',  color: '#e5e5e5' },
  { name: 'colour.static.border.muted',    label: 'Neutral 50',   color: '#f5f5f5' },
  { name: 'colour.static.border.disabled', label: 'Neutral 200',  color: '#d4d4d4' },
  { name: 'colour.static.border.inverse',  label: 'Neutral 700',  color: '#2e2e2e' },
  { name: 'colour.static.border.brand',    label: 'Neutral 900',  color: '#141414' },
  { name: 'colour.static.border.positive', label: 'Green 300',    color: '#86efac' },
  { name: 'colour.static.border.warning',  label: 'Yellow 300',   color: '#fde047' },
  { name: 'colour.static.border.danger',   label: 'Red 300',      color: '#fca5a5' },
  { name: 'colour.static.border.info',     label: 'Blue 300',     color: '#93c5fd' },
  { name: 'colour.static.border.focus',    label: 'Neutral 900',  color: '#141414' },
];

const interactiveDefault = [
  { name: 'colour.interactive.default.base',     label: 'Neutral 900', color: '#141414' },
  { name: 'colour.interactive.default.hover',    label: 'Neutral 700', color: '#2e2e2e' },
  { name: 'colour.interactive.default.active',   label: 'Neutral 600', color: '#4b4b4b' },
  { name: 'colour.interactive.default.disabled', label: 'Neutral 200', color: '#d4d4d4' },
];

const interactivePale = [
  { name: 'colour.interactive.pale.base',     label: 'Neutral 0',   color: '#ffffff' },
  { name: 'colour.interactive.pale.hover',    label: 'Neutral 100', color: '#f5f5f5' },
  { name: 'colour.interactive.pale.active',   label: 'Neutral 200', color: '#d4d4d4' },
  { name: 'colour.interactive.pale.disabled', label: 'Neutral 0',   color: '#ffffff' },
];

const interactiveGhost = [
  { name: 'colour.interactive.ghost.base',     label: 'Transparent Black 0',   color: 'rgba(0,0,0,0)'   },
  { name: 'colour.interactive.ghost.hover',    label: 'Transparent Black 100', color: 'rgba(0,0,0,0.1)' },
  { name: 'colour.interactive.ghost.active',   label: 'Transparent Black 200', color: 'rgba(0,0,0,0.2)' },
  { name: 'colour.interactive.ghost.disabled', label: 'Transparent Black 0',   color: 'rgba(0,0,0,0)'   },
];

const interactivePositive = [
  { name: 'colour.interactive.positive.base',     label: 'Green 700',  color: '#15803d' },
  { name: 'colour.interactive.positive.hover',    label: 'Green 900',  color: '#14532d' },
  { name: 'colour.interactive.positive.active',   label: 'Green 1000', color: '#0b3d1e' },
  { name: 'colour.interactive.positive.disabled', label: 'Neutral 200',color: '#d4d4d4' },
];

const interactiveDanger = [
  { name: 'colour.interactive.danger.base',     label: 'Red 700',    color: '#b91c1c' },
  { name: 'colour.interactive.danger.hover',    label: 'Red 900',    color: '#7f1d1d' },
  { name: 'colour.interactive.danger.active',   label: 'Red 1000',   color: '#5d0d0d' },
  { name: 'colour.interactive.danger.disabled', label: 'Neutral 200',color: '#d4d4d4' },
];

const interactiveBrand = [
  { name: 'colour.interactive.brand.base',     label: 'Neutral 900', color: '#141414' },
  { name: 'colour.interactive.brand.hover',    label: 'Neutral 700', color: '#2e2e2e' },
  { name: 'colour.interactive.brand.active',   label: 'Neutral 600', color: '#4b4b4b' },
  { name: 'colour.interactive.brand.disabled', label: 'Neutral 200', color: '#d4d4d4' },
];

const interactiveInverse = [
  { name: 'colour.interactive.inverse.base',     label: 'Neutral 0',   color: '#ffffff' },
  { name: 'colour.interactive.inverse.hover',    label: 'Neutral 100', color: '#e5e5e5' },
  { name: 'colour.interactive.inverse.active',   label: 'Neutral 200', color: '#d4d4d4' },
  { name: 'colour.interactive.inverse.disabled', label: 'Neutral 0',   color: '#ffffff' },
];

// ─── Radius tokens ───────────────────────────────────────────────────────────

const radiusTokens = [
  { name: 'radius.none',   value: '0px'    },
  { name: 'radius.sm',     value: '0px'    },
  { name: 'radius.md',     value: '4px'    },
  { name: 'radius.lg',     value: '6px'    },
  { name: 'radius.full',   value: '9999px' },
  { name: 'radius.button', value: '0px'    },
  { name: 'radius.input',  value: '0px'    },
  { name: 'radius.card',   value: '0px'    },
];

// ─── Spacing tokens ──────────────────────────────────────────────────────────

const spacingComponent = [
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

const spacingLayout = [
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

// ─── Components ──────────────────────────────────────────────────────────────

function ColourRow({ name, label, color }) {
  return (
    <div className="mds-tokens__row">
      <span className="mds-tokens__name">{name}</span>
      <div className="mds-tokens__colour-right">
        <span className="mds-tokens__label">{label}</span>
        <div
          className="mds-tokens__swatch"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}

function ValueRow({ name, value }) {
  return (
    <div className="mds-tokens__row">
      <span className="mds-tokens__name">{name}</span>
      <span className="mds-tokens__value">{value}</span>
    </div>
  );
}

function TokenTable({ children }) {
  return <div className="mds-tokens__table">{children}</div>;
}

function Section({ id, title, children }) {
  return (
    <div id={id} className="mds-tokens__section">
      <h2 className="mds-tokens__section-title">{title}</h2>
      {children}
    </div>
  );
}

function SubSection({ title, children }) {
  return (
    <div className="mds-tokens__subsection">
      <h3 className="mds-tokens__subsection-title">{title}</h3>
      {children}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const anchors = [
  { href: '#tokens-colour',  label: 'Colour'  },
  { href: '#tokens-radius',  label: 'Radius'  },
  { href: '#tokens-spacing', label: 'Spacing' },
];

export default function DesignTokens() {
  return (
    <div className="mds-page-tokens">
      <h1 className="mds-page-tokens__title">Design Tokens</h1>
      <p className="mds-page-tokens__subtitle">
        Design tokens are the single source of truth for all design decisions across MinimalDS.
      </p>

      <div className="mds-tokens__anchors">
        {anchors.map(a => (
          <a key={a.href} href={a.href} className="mds-tokens__anchor-link">
            {a.label}
          </a>
        ))}
      </div>

      {/* Colour */}
      <Section id="tokens-colour" title="Colour">
        <SubSection title="Surface">
          <TokenTable>
            {surface.map(t => <ColourRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Text">
          <TokenTable>
            {text.map(t => <ColourRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Icon">
          <TokenTable>
            {icon.map(t => <ColourRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Border">
          <TokenTable>
            {border.map(t => <ColourRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Interactive Default">
          <TokenTable>
            {interactiveDefault.map(t => <ColourRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Interactive Pale">
          <TokenTable>
            {interactivePale.map(t => <ColourRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Interactive Ghost">
          <TokenTable>
            {interactiveGhost.map(t => <ColourRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Interactive Positive">
          <TokenTable>
            {interactivePositive.map(t => <ColourRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Interactive Danger">
          <TokenTable>
            {interactiveDanger.map(t => <ColourRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Interactive Brand">
          <TokenTable>
            {interactiveBrand.map(t => <ColourRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Interactive Inverse">
          <TokenTable>
            {interactiveInverse.map(t => <ColourRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
      </Section>

      {/* Radius */}
      <Section id="tokens-radius" title="Radius">
        <TokenTable>
          {radiusTokens.map(t => <ValueRow key={t.name} {...t} />)}
        </TokenTable>
      </Section>

      {/* Spacing */}
      <Section id="tokens-spacing" title="Spacing">
        <SubSection title="Component">
          <TokenTable>
            {spacingComponent.map(t => <ValueRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Layout">
          <TokenTable>
            {spacingLayout.map(t => <ValueRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
      </Section>

    </div>
  );
}
