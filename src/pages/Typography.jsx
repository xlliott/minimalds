import { useState } from 'react';
import Dropdown from '../components/Dropdown/Dropdown';
import './Typography.css';

const brandOptions = [
  { value: 'minimal', label: 'Minimal' },
  { value: 'purpura', label: 'Purpura' },
  { value: 'azure',   label: 'Azure' },
];

const resolutionOptions = [
  { value: 'desktop', label: 'Desktop' },
  { value: 'mobile',  label: 'Mobile' },
];

const weightOptions = [
  { value: 'regular', label: 'Regular' },
  { value: 'medium',  label: 'Medium' },
  { value: 'bold',    label: 'Bold' },
];

const fontFamilies = {
  minimal: {
    display: "'Roboto Mono', monospace",
    heading: "'Inter', sans-serif",
    global:  "'Inter', sans-serif",
  },
  purpura: {
    display: "'Montserrat', sans-serif",
    heading: "'Montserrat', sans-serif",
    global:  "'Montserrat', sans-serif",
  },
  azure: {
    display: "'Playfair Display', serif",
    heading: "'Source Sans Pro', sans-serif",
    global:  "'Source Sans Pro', sans-serif",
  },
};

const fontWeights = {
  regular: 400,
  medium:  500,
  bold:    700,
};

const typeStyles = [
  {
    name:     'Display',
    role:     'display',
    sizes:    { desktop: '48px', mobile: '32px' },
    leading:  1.2,
    sample:   'The quick brown fox',
  },
  {
    name:     'Heading 1',
    role:     'heading',
    sizes:    { desktop: '40px', mobile: '28px' },
    leading:  1.2,
    sample:   'The quick brown fox',
  },
  {
    name:     'Heading 2',
    role:     'heading',
    sizes:    { desktop: '32px', mobile: '24px' },
    leading:  1.2,
    sample:   'The quick brown fox jumps',
  },
  {
    name:     'Heading 3',
    role:     'heading',
    sizes:    { desktop: '24px', mobile: '20px' },
    leading:  1.3,
    sample:   'The quick brown fox jumps over the lazy dog',
  },
  {
    name:     'Heading 4',
    role:     'heading',
    sizes:    { desktop: '18px', mobile: '16px' },
    leading:  1.3,
    sample:   'The quick brown fox jumps over the lazy dog',
  },
  {
    name:     'Body',
    role:     'global',
    sizes:    { desktop: '14px', mobile: '14px' },
    leading:  1.5,
    sample:   'The quick brown fox jumps over the lazy dog. A wonderful serenity has taken possession of my entire soul.',
  },
  {
    name:     'Link',
    role:     'global',
    sizes:    { desktop: '14px', mobile: '14px' },
    leading:  1.5,
    sample:   'View on Figma',
    isLink:   true,
  },
  {
    name:     'Helper text',
    role:     'global',
    sizes:    { desktop: '12px', mobile: '12px' },
    leading:  1.5,
    sample:   'This field is required',
  },
];

export default function Typography() {
  const [brand,      setBrand]      = useState('minimal');
  const [resolution, setResolution] = useState('desktop');
  const [weight,     setWeight]     = useState('bold');

  const fonts   = fontFamilies[brand];
  const fontWeight = fontWeights[weight];

  return (
    <div className="mds-page-typography">
      <h1 className="mds-page-typography__title">Typography</h1>
      <p className="mds-page-typography__subtitle">
        A system of fonts and text styles which enhance communication and reinforce a brand.
      </p>

      <div className="mds-page-typography__panel">
        <div className="mds-page-typography__controls">
          <Dropdown
            options={brandOptions}
            value={brand}
            innerLabel="Brand"
            onChange={setBrand}
          />
          <Dropdown
            options={resolutionOptions}
            value={resolution}
            innerLabel="Resolution"
            onChange={setResolution}
          />
          <Dropdown
            options={weightOptions}
            value={weight}
            innerLabel="Weight"
            onChange={setWeight}
          />
        </div>

        <div className="mds-page-typography__table">
        {typeStyles.map((style) => {
          const family   = fonts[style.role];
          const fontSize = style.sizes[resolution];

          return (
            <div key={style.name} className="mds-page-typography__row">
              <div className="mds-page-typography__meta">
                <span className="mds-page-typography__style-name">{style.name}</span>
                <span className="mds-page-typography__style-detail">
                  {fontSize} / {style.leading} / {fontWeight}
                </span>
              </div>
              <div
                className={[
                  'mds-page-typography__sample',
                  style.isLink ? 'mds-page-typography__sample--link' : '',
                ].join(' ').trim()}
                style={{
                  fontFamily:  family,
                  fontSize:    fontSize,
                  fontWeight:  fontWeight,
                  lineHeight:  style.leading,
                }}
              >
                {style.sample}
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
