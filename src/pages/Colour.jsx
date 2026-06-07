import './Colour.css';

const neutrals = [
  { name: 'Neutral 0', hex: '#FFFFFF' },
  { name: 'Neutral 50', hex: '#F5F5F5' },
  { name: 'Neutral 100', hex: '#E5E5E5' },
  { name: 'Neutral 200', hex: '#D4D4D4' },
  { name: 'Neutral 300', hex: '#B5B5B5' },
  { name: 'Neutral 400', hex: '#919191' },
  { name: 'Neutral 500', hex: '#6E6E6E' },
  { name: 'Neutral 600', hex: '#4B4B4B' },
  { name: 'Neutral 700', hex: '#2E2E2E' },
  { name: 'Neutral 800', hex: '#1F1F1F' },
  { name: 'Neutral 900', hex: '#141414' },
  { name: 'Neutral 950', hex: '#0A0A0A' },
  { name: 'Neutral 1000', hex: '#000000' },
];

const transparentBlack = [
  { name: 'Black 0', hex: '#000000', opacity: '0%' },
  { name: 'Black 50', hex: '#000000', opacity: '5%' },
  { name: 'Black 100', hex: '#000000', opacity: '10%' },
  { name: 'Black 200', hex: '#000000', opacity: '20%' },
  { name: 'Black 300', hex: '#000000', opacity: '30%' },
  { name: 'Black 400', hex: '#000000', opacity: '40%' },
  { name: 'Black 500', hex: '#000000', opacity: '50%' },
  { name: 'Black 600', hex: '#000000', opacity: '60%' },
  { name: 'Black 700', hex: '#000000', opacity: '70%' },
  { name: 'Black 800', hex: '#000000', opacity: '80%' },
  { name: 'Black 900', hex: '#000000', opacity: '90%' },
];

const transparentWhite = [
  { name: 'White 0', hex: '#FFFFFF', opacity: '0%' },
  { name: 'White 50', hex: '#FFFFFF', opacity: '5%' },
  { name: 'White 100', hex: '#FFFFFF', opacity: '10%' },
  { name: 'White 200', hex: '#FFFFFF', opacity: '20%' },
  { name: 'White 300', hex: '#FFFFFF', opacity: '30%' },
  { name: 'White 400', hex: '#FFFFFF', opacity: '40%' },
  { name: 'White 500', hex: '#FFFFFF', opacity: '50%' },
  { name: 'White 600', hex: '#FFFFFF', opacity: '60%' },
  { name: 'White 700', hex: '#FFFFFF', opacity: '70%' },
  { name: 'White 800', hex: '#FFFFFF', opacity: '80%' },
  { name: 'White 900', hex: '#FFFFFF', opacity: '90%' },
];

const red = [
  { name: 'Red 100', hex: '#FEE2E2' },
  { name: 'Red 200', hex: '#FECACA' },
  { name: 'Red 300', hex: '#FCA5A5' },
  { name: 'Red 400', hex: '#F87171' },
  { name: 'Red 500', hex: '#EF4444' },
  { name: 'Red 600', hex: '#DC2626' },
  { name: 'Red 700', hex: '#B91C1C' },
  { name: 'Red 800', hex: '#991B1B' },
  { name: 'Red 900', hex: '#7F1D1D' },
  { name: 'Red 1000', hex: '#5D0D0D' },
];

const yellow = [
  { name: 'Yellow 100', hex: '#FEF9C3' },
  { name: 'Yellow 200', hex: '#FEF08A' },
  { name: 'Yellow 300', hex: '#FDE047' },
  { name: 'Yellow 400', hex: '#FACC15' },
  { name: 'Yellow 500', hex: '#EAB308' },
  { name: 'Yellow 600', hex: '#CA8A04' },
  { name: 'Yellow 700', hex: '#A16207' },
  { name: 'Yellow 800', hex: '#854D0E' },
  { name: 'Yellow 900', hex: '#713F12' },
  { name: 'Yellow 1000', hex: '#562D09' },
];

const green = [
  { name: 'Green 100', hex: '#DCFCE7' },
  { name: 'Green 200', hex: '#BBF7D0' },
  { name: 'Green 300', hex: '#86EFAC' },
  { name: 'Green 400', hex: '#4ADE80' },
  { name: 'Green 500', hex: '#22C55E' },
  { name: 'Green 600', hex: '#16A34A' },
  { name: 'Green 700', hex: '#15803D' },
  { name: 'Green 800', hex: '#166534' },
  { name: 'Green 900', hex: '#14532D' },
  { name: 'Green 1000', hex: '#0B3D1E' },
];

const blue = [
  { name: 'Blue 100', hex: '#DBEAFE' },
  { name: 'Blue 200', hex: '#BFDBFE' },
  { name: 'Blue 300', hex: '#93C5FD' },
  { name: 'Blue 400', hex: '#60A5FA' },
  { name: 'Blue 500', hex: '#3B82F6' },
  { name: 'Blue 600', hex: '#2563EB' },
  { name: 'Blue 700', hex: '#1D4ED8' },
  { name: 'Blue 800', hex: '#1E40AF' },
  { name: 'Blue 900', hex: '#1E3A8A' },
  { name: 'Blue 1000', hex: '#172554' },
];

const purpura = [
  { name: 'Purpura 100', hex: '#F3E8FF' },
  { name: 'Purpura 200', hex: '#E9D5FF' },
  { name: 'Purpura 300', hex: '#D8B4FE' },
  { name: 'Purpura 400', hex: '#C084FC' },
  { name: 'Purpura 500', hex: '#A855F7' },
  { name: 'Purpura 600', hex: '#9333EA' },
  { name: 'Purpura 700', hex: '#7E22CE' },
  { name: 'Purpura 800', hex: '#6B21A8' },
  { name: 'Purpura 900', hex: '#581C87' },
  { name: 'Purpura 1000', hex: '#3B0764' },
];

const azure = [
  { name: 'Azure 100', hex: '#E0F2FE' },
  { name: 'Azure 200', hex: '#BAE6FD' },
  { name: 'Azure 300', hex: '#7DD3FC' },
  { name: 'Azure 400', hex: '#38BDF8' },
  { name: 'Azure 500', hex: '#0EA5E9' },
  { name: 'Azure 600', hex: '#0284C7' },
  { name: 'Azure 700', hex: '#0369A1' },
  { name: 'Azure 800', hex: '#075985' },
  { name: 'Azure 900', hex: '#0C4A6E' },
  { name: 'Azure 1000', hex: '#082F49' },
];

function isLight(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 128;
}

function SwatchRow({ name, hex, opacity, transparentDark, transparentLight }) {
  let textColor;
  if (transparentDark) {
    textColor = parseInt(opacity) >= 50 ? '#FFFFFF' : '#141414';
  } else if (transparentLight) {
    textColor = '#141414';
  } else {
    textColor = isLight(hex) ? '#141414' : '#FFFFFF';
  }

  const bgColor = opacity !== undefined
    ? `rgba(${parseInt(hex.slice(1,3),16)}, ${parseInt(hex.slice(3,5),16)}, ${parseInt(hex.slice(5,7),16)}, ${parseInt(opacity)/100})`
    : hex;
  const label = opacity !== undefined ? `${hex} @${opacity}` : hex;

  return (
    <div className="mds-colour__swatch-row" style={{ backgroundColor: bgColor }}>
      <span className="mds-colour__swatch-name" style={{ color: textColor }}>{name}</span>
      <span className="mds-colour__swatch-hex" style={{ color: textColor }}>{label}</span>
    </div>
  );
}

function SwatchTable({ colours, transparentDark, transparentLight }) {
  return (
    <div className="mds-colour__table">
      {colours.map((c, i) => (
        <SwatchRow
          key={i}
          name={c.name}
          hex={c.hex}
          opacity={c.opacity}
          transparentDark={transparentDark}
          transparentLight={transparentLight}
        />
      ))}
    </div>
  );
}

function Section({ tag, title, children }) {
  return (
    <div className="mds-colour__section">
      <span className="mds-colour__tag">{tag}</span>
      <h2 className="mds-colour__section-title">{title}</h2>
      {children}
    </div>
  );
}

export default function Colour() {
  return (
    <div className="mds-page-colour">
      <h1 className="mds-page-colour__title">Colour</h1>
      <p className="mds-page-colour__subtitle">
        Colours help distinguish a brand and reinforce consistent experiences across products.
      </p>

      <Section tag="Global" title="Neutral">
        <SwatchTable colours={neutrals} />
      </Section>

      <Section tag="Global" title="Transparent">
        <div className="mds-colour__two-col">
          <SwatchTable colours={transparentBlack} transparentDark />
          <SwatchTable colours={transparentWhite} transparentLight />
        </div>
      </Section>

      <div className="mds-colour__two-col mds-colour__section">
        <div>
          <span className="mds-colour__tag">Global</span>
          <h2 className="mds-colour__section-title">Red</h2>
          <SwatchTable colours={red} />
        </div>
        <div>
          <span className="mds-colour__tag">Global</span>
          <h2 className="mds-colour__section-title">Yellow</h2>
          <SwatchTable colours={yellow} />
        </div>
      </div>

      <div className="mds-colour__two-col mds-colour__section">
        <div>
          <span className="mds-colour__tag">Global</span>
          <h2 className="mds-colour__section-title">Green</h2>
          <SwatchTable colours={green} />
        </div>
        <div>
          <span className="mds-colour__tag">Global</span>
          <h2 className="mds-colour__section-title">Blue</h2>
          <SwatchTable colours={blue} />
        </div>
      </div>

      <div className="mds-colour__two-col mds-colour__section">
        <div>
          <span className="mds-colour__tag">Brand</span>
          <h2 className="mds-colour__section-title">Purpura</h2>
          <SwatchTable colours={purpura} />
        </div>
        <div>
          <span className="mds-colour__tag">Brand</span>
          <h2 className="mds-colour__section-title">Azure</h2>
          <SwatchTable colours={azure} />
        </div>
      </div>
    </div>
  );
}
