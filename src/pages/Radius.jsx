import { useState } from 'react';
import Dropdown from '../components/Dropdown/Dropdown';
import './Radius.css';

const brandOptions = [
  { value: 'minimal', label: 'Minimal' },
  { value: 'purpura', label: 'Purpura' },
  { value: 'azure',   label: 'Azure'   },
];

const radiusOptions = [
  { value: 'none',   label: 'None'   },
  { value: 'sm',     label: 'Small'  },
  { value: 'md',     label: 'Medium' },
  { value: 'lg',     label: 'Large'  },
  { value: 'full',   label: 'Full'   },
  { value: 'button', label: 'Button' },
  { value: 'input',  label: 'Input'  },
  { value: 'card',   label: 'Card'   },
];

// Radius values per brand per token
const radiusValues = {
  minimal: {
    none:   { value: '0px',    css: '0px'    },
    sm:     { value: '0px',    css: '0px'    },
    md:     { value: '4px',    css: '4px'    },
    lg:     { value: '6px',    css: '6px'    },
    full:   { value: '9999px', css: '9999px' },
    button: { value: '0px',    css: '0px'    },
    input:  { value: '0px',    css: '0px'    },
    card:   { value: '0px',    css: '0px'    },
  },
  purpura: {
    none:   { value: '0px',    css: '0px'    },
    sm:     { value: '4px',    css: '4px'    },
    md:     { value: '6px',    css: '6px'    },
    lg:     { value: '12px',   css: '12px'   },
    full:   { value: '9999px', css: '9999px' },
    button: { value: '9999px', css: '9999px' },
    input:  { value: '9999px', css: '9999px' },
    card:   { value: '12px',   css: '12px'   },
  },
  azure: {
    none:   { value: '0px',    css: '0px'    },
    sm:     { value: '4px',    css: '4px'    },
    md:     { value: '4px',    css: '4px'    },
    lg:     { value: '6px',    css: '6px'    },
    full:   { value: '9999px', css: '9999px' },
    button: { value: '8px',    css: '8px'    },
    input:  { value: '8px',    css: '8px'    },
    card:   { value: '6px',    css: '6px'    },
  },
};

export default function Radius() {
  const [brand,  setBrand]  = useState('minimal');
  const [radius, setRadius] = useState('none');

  const current = radiusValues[brand][radius];

  return (
    <div className="mds-page-radius">
      <h1 className="mds-page-radius__title">Radius</h1>
      <p className="mds-page-radius__subtitle">
        Radius tokens standardise the corner roundness for visual elements.
      </p>

      <div className="mds-page-radius__panel">
        <div className="mds-page-radius__controls">
          <Dropdown
            options={brandOptions}
            value={brand}
            innerLabel="Brand"
            onChange={setBrand}
          />
          <Dropdown
            options={radiusOptions}
            value={radius}
            innerLabel="Radius"
            onChange={setRadius}
          />
        </div>
        <div className="mds-page-radius__preview-area">
          <div
            className="mds-page-radius__shape"
            style={{ borderRadius: current.css }}
          />
          <span className="mds-page-radius__value">{current.value}</span>
        </div>
      </div>
    </div>
  );
}
