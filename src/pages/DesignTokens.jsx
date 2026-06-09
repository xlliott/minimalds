import { useState } from 'react';
import TabGroup from '../components/TabGroup/Tabgroup';
import { useTheme } from '../context/ThemeContext';
import './DesignTokens.css';

// ─── Token definitions ────────────────────────────────────────────────────────
// colour values use CSS custom properties so they respond to brand + dark mode

const surfaceTokens = [
  { name: 'colour.static.surface.default',      label: 'Neutral 0',             cssVar: '--color-surface-default'      },
  { name: 'colour.static.surface.page',         label: 'Neutral 50',            cssVar: '--color-surface-page'         },
  { name: 'colour.static.surface.subtle',       label: 'Neutral 100',           cssVar: '--color-surface-subtle'       },
  { name: 'colour.static.surface.inverse',      label: 'Neutral 900',           cssVar: '--color-surface-inverse'      },
  { name: 'colour.static.surface.brand',        label: 'Brand',                 cssVar: '--color-surface-brand'        },
  { name: 'colour.static.surface.brand-subtle', label: 'Brand subtle',          cssVar: '--color-surface-brand-subtle' },
  { name: 'colour.static.surface.positive',     label: 'Green 100',             cssVar: '--color-surface-positive'     },
  { name: 'colour.static.surface.warning',      label: 'Yellow 100',            cssVar: '--color-surface-warning'      },
  { name: 'colour.static.surface.danger',       label: 'Red 100',               cssVar: '--color-surface-danger'       },
  { name: 'colour.static.surface.info',         label: 'Blue 100',              cssVar: '--color-surface-info'         },
  { name: 'colour.static.surface.overlay',      label: 'Transparent Black 700', cssVar: '--color-surface-overlay'      },
];

const textTokens = [
  { name: 'colour.static.text.default',  label: 'Neutral 900', cssVar: '--color-text-default'  },
  { name: 'colour.static.text.subtle',   label: 'Neutral 600', cssVar: '--color-text-subtle'   },
  { name: 'colour.static.text.muted',    label: 'Neutral 400', cssVar: '--color-text-muted'    },
  { name: 'colour.static.text.disabled', label: 'Neutral 200', cssVar: '--color-text-disabled' },
  { name: 'colour.static.text.inverse',  label: 'Neutral 0',   cssVar: '--color-text-inverse'  },
  { name: 'colour.static.text.brand',    label: 'Brand',       cssVar: '--color-text-brand'    },
  { name: 'colour.static.text.positive', label: 'Green 700',   cssVar: '--color-text-positive' },
  { name: 'colour.static.text.warning',  label: 'Yellow 700',  cssVar: '--color-text-warning'  },
  { name: 'colour.static.text.danger',   label: 'Red 700',     cssVar: '--color-text-danger'   },
  { name: 'colour.static.text.info',     label: 'Blue 700',    cssVar: '--color-text-info'     },
];

const iconTokens = [
  { name: 'colour.static.icon.default',  label: 'Neutral 900', cssVar: '--color-icon-default'  },
  { name: 'colour.static.icon.subtle',   label: 'Neutral 600', cssVar: '--color-icon-subtle'   },
  { name: 'colour.static.icon.muted',    label: 'Neutral 400', cssVar: '--color-icon-muted'    },
  { name: 'colour.static.icon.disabled', label: 'Neutral 200', cssVar: '--color-icon-disabled' },
  { name: 'colour.static.icon.inverse',  label: 'Neutral 0',   cssVar: '--color-icon-inverse'  },
  { name: 'colour.static.icon.brand',    label: 'Brand',       cssVar: '--color-icon-brand'    },
  { name: 'colour.static.icon.positive', label: 'Green 700',   cssVar: '--color-icon-positive' },
  { name: 'colour.static.icon.warning',  label: 'Yellow 700',  cssVar: '--color-icon-warning'  },
  { name: 'colour.static.icon.danger',   label: 'Red 700',     cssVar: '--color-icon-danger'   },
  { name: 'colour.static.icon.info',     label: 'Blue 700',    cssVar: '--color-icon-info'     },
];

const borderTokens = [
  { name: 'colour.static.border.default',  label: 'Neutral 200', cssVar: '--color-border-default'  },
  { name: 'colour.static.border.subtle',   label: 'Neutral 100', cssVar: '--color-border-subtle'   },
  { name: 'colour.static.border.muted',    label: 'Neutral 50',  cssVar: '--color-border-muted'    },
  { name: 'colour.static.border.disabled', label: 'Neutral 200', cssVar: '--color-border-disabled' },
  { name: 'colour.static.border.inverse',  label: 'Neutral 700', cssVar: '--color-border-inverse'  },
  { name: 'colour.static.border.brand',    label: 'Brand',       cssVar: '--color-border-brand'    },
  { name: 'colour.static.border.positive', label: 'Green 300',   cssVar: '--color-border-positive' },
  { name: 'colour.static.border.warning',  label: 'Yellow 300',  cssVar: '--color-border-warning'  },
  { name: 'colour.static.border.danger',   label: 'Red 300',     cssVar: '--color-border-danger'   },
  { name: 'colour.static.border.info',     label: 'Blue 300',    cssVar: '--color-border-info'     },
  { name: 'colour.static.border.focus',    label: 'Brand',       cssVar: '--color-border-focus'    },
];

const interactiveDefaultTokens = [
  { name: 'colour.interactive.default.base',     label: 'Neutral 900', cssVar: '--color-interactive-default-base'     },
  { name: 'colour.interactive.default.hover',    label: 'Neutral 700', cssVar: '--color-interactive-default-hover'    },
  { name: 'colour.interactive.default.active',   label: 'Neutral 600', cssVar: '--color-interactive-default-active'   },
  { name: 'colour.interactive.default.disabled', label: 'Neutral 200', cssVar: '--color-interactive-default-disabled' },
];

const interactivePaleTokens = [
  { name: 'colour.interactive.pale.base',     label: 'Neutral 0',   cssVar: '--color-interactive-pale-base'     },
  { name: 'colour.interactive.pale.hover',    label: 'Neutral 100', cssVar: '--color-interactive-pale-hover'    },
  { name: 'colour.interactive.pale.active',   label: 'Neutral 200', cssVar: '--color-interactive-pale-active'   },
  { name: 'colour.interactive.pale.disabled', label: 'Neutral 0',   cssVar: '--color-interactive-pale-disabled' },
];

const interactiveGhostTokens = [
  { name: 'colour.interactive.ghost.base',     label: 'Transparent 0',   cssVar: '--color-interactive-ghost-base'     },
  { name: 'colour.interactive.ghost.hover',    label: 'Transparent 100', cssVar: '--color-interactive-ghost-hover'    },
  { name: 'colour.interactive.ghost.active',   label: 'Transparent 200', cssVar: '--color-interactive-ghost-active'   },
  { name: 'colour.interactive.ghost.disabled', label: 'Transparent 0',   cssVar: '--color-interactive-ghost-disabled' },
];

const interactivePositiveTokens = [
  { name: 'colour.interactive.positive.base',     label: 'Green 700',   cssVar: '--color-interactive-positive-base'     },
  { name: 'colour.interactive.positive.hover',    label: 'Green 900',   cssVar: '--color-interactive-positive-hover'    },
  { name: 'colour.interactive.positive.active',   label: 'Green 1000',  cssVar: '--color-interactive-positive-active'   },
  { name: 'colour.interactive.positive.disabled', label: 'Neutral 200', cssVar: '--color-interactive-positive-disabled' },
];

const interactiveDangerTokens = [
  { name: 'colour.interactive.danger.base',     label: 'Red 700',     cssVar: '--color-interactive-danger-base'     },
  { name: 'colour.interactive.danger.hover',    label: 'Red 900',     cssVar: '--color-interactive-danger-hover'    },
  { name: 'colour.interactive.danger.active',   label: 'Red 1000',    cssVar: '--color-interactive-danger-active'   },
  { name: 'colour.interactive.danger.disabled', label: 'Neutral 200', cssVar: '--color-interactive-danger-disabled' },
];

const interactiveBrandTokens = [
  { name: 'colour.interactive.brand.base',     label: 'Brand',       cssVar: '--color-interactive-brand-base'     },
  { name: 'colour.interactive.brand.hover',    label: 'Brand hover',  cssVar: '--color-interactive-brand-hover'    },
  { name: 'colour.interactive.brand.active',   label: 'Brand active', cssVar: '--color-interactive-brand-active'   },
  { name: 'colour.interactive.brand.disabled', label: 'Neutral 200', cssVar: '--color-interactive-brand-disabled' },
];

const interactiveInverseTokens = [
  { name: 'colour.interactive.inverse.base',     label: 'Neutral 0',   cssVar: '--color-interactive-inverse-base'     },
  { name: 'colour.interactive.inverse.hover',    label: 'Neutral 100', cssVar: '--color-interactive-inverse-hover'    },
  { name: 'colour.interactive.inverse.active',   label: 'Neutral 200', cssVar: '--color-interactive-inverse-active'   },
  { name: 'colour.interactive.inverse.disabled', label: 'Neutral 0',   cssVar: '--color-interactive-inverse-disabled' },
];

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

const borderTokens2 = [
  { name: 'border.default', value: '1px' },
  { name: 'border.strong',  value: '2px' },
];

const spacingComponentTokens = [
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

const spacingLayoutTokens = [
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

function ColourRow({ name, label, cssVar }) {
  return (
    <div className="mds-tokens__row">
      <span className="mds-tokens__name">{name}</span>
      <div className="mds-tokens__colour-right">
        <span className="mds-tokens__label">{label}</span>
        <div
          className="mds-tokens__swatch"
          style={{ backgroundColor: `var(${cssVar})` }}
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

const brands = ['Minimal', 'Azure', 'Purpura'];
const anchors = [
  { href: '#tokens-colour',  label: 'Colour'  },
  { href: '#tokens-radius',  label: 'Radius'  },
  { href: '#tokens-spacing', label: 'Spacing' },
  { href: '#tokens-border',  label: 'Border'  },
];

export default function DesignTokens() {
  const { setBrand, mode } = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
    setBrand(brands[index].toLowerCase());
  };

  return (
    <div className="mds-page-tokens">
      <h1 className="mds-page-tokens__title">Design Tokens</h1>
      <p className="mds-page-tokens__subtitle">
        Design tokens are the single source of truth for all design decisions across MinimalDS.
      </p>

      {/* Anchor nav — 2-column grid */}
      <div className="mds-tokens__anchors">
        {anchors.map(a => (
          <a key={a.href} href={a.href} className="mds-tokens__anchor-link">
            ↳ {a.label}
          </a>
        ))}
      </div>

      {/* Brand tabs */}
      <div className="mds-tokens__tabs">
        <TabGroup
          tabs={brands}
          selectedIndex={selectedTab}
          onChange={handleTabChange}
        />
      </div>

      {/* Colour */}
      <Section id="tokens-colour" title="Colour">
        <SubSection title="Surface">
          <TokenTable>
            {surfaceTokens.map(t => <ColourRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Text">
          <TokenTable>
            {textTokens.map(t => <ColourRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Icon">
          <TokenTable>
            {iconTokens.map(t => <ColourRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Border">
          <TokenTable>
            {borderTokens.map(t => <ColourRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Interactive Default">
          <TokenTable>
            {interactiveDefaultTokens.map(t => <ColourRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Interactive Pale">
          <TokenTable>
            {interactivePaleTokens.map(t => <ColourRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Interactive Ghost">
          <TokenTable>
            {interactiveGhostTokens.map(t => <ColourRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Interactive Positive">
          <TokenTable>
            {interactivePositiveTokens.map(t => <ColourRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Interactive Danger">
          <TokenTable>
            {interactiveDangerTokens.map(t => <ColourRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Interactive Brand">
          <TokenTable>
            {interactiveBrandTokens.map(t => <ColourRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Interactive Inverse">
          <TokenTable>
            {interactiveInverseTokens.map(t => <ColourRow key={t.name} {...t} />)}
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
            {spacingComponentTokens.map(t => <ValueRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Layout">
          <TokenTable>
            {spacingLayoutTokens.map(t => <ValueRow key={t.name} {...t} />)}
          </TokenTable>
        </SubSection>
      </Section>

      {/* Border */}
      <Section id="tokens-border" title="Border">
        <TokenTable>
          {borderTokens2.map(t => <ValueRow key={t.name} {...t} />)}
        </TokenTable>
      </Section>

    </div>
  );
}
