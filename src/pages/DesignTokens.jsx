import { useState } from 'react';
import TabGroup from '../components/TabGroup/Tabgroup';
import { useTheme } from '../context/ThemeContext';
import './DesignTokens.css';

// ─── Primitive colour lookup ─────────────────────────────────────────────────
const HEX_TO_LABEL = {
  '#ffffff': 'Neutral 0',    'white': 'Neutral 0',
  '#f5f5f5': 'Neutral 50',  '#faf5ff': 'Purpura page', '#f0f9ff': 'Azure page',
  '#e5e5e5': 'Neutral 100', '#d4d4d4': 'Neutral 200',  '#b5b5b5': 'Neutral 300',
  '#919191': 'Neutral 400', '#6e6e6e': 'Neutral 500',  '#4b4b4b': 'Neutral 600',
  '#2e2e2e': 'Neutral 700', '#1f1f1f': 'Neutral 800',  '#141414': 'Neutral 900',
  '#0a0a0a': 'Neutral 950',
  '#dcfce7': 'Green 100',   '#bbf7d0': 'Green 200',    '#86efac': 'Green 300',
  '#16a34a': 'Green 600',   '#15803d': 'Green 700',    '#14532d': 'Green 900',  '#0b3d1e': 'Green 1000',
  '#fef9c3': 'Yellow 100',  '#fde047': 'Yellow 300',   '#a16207': 'Yellow 700', '#713f12': 'Yellow 900',
  '#fee2e2': 'Red 100',     '#fca5a5': 'Red 300',      '#b91c1c': 'Red 700',
  '#7f1d1d': 'Red 900',     '#5d0d0d': 'Red 1000',
  '#dbeafe': 'Blue 100',    '#93c5fd': 'Blue 300',     '#1d4ed8': 'Blue 700',
  '#1e3a8a': 'Blue 900',
  '#f3e8ff': 'Purpura 100', '#c084fc': 'Purpura 400',  '#a855f7': 'Purpura 500',
  '#9333ea': 'Purpura 600', '#7e22ce': 'Purpura 700',  '#6b21a8': 'Purpura 800', '#581c87': 'Purpura 900',
  '#e0f2fe': 'Azure 100',   '#38bdf8': 'Azure 400',    '#0ea5e9': 'Azure 500',
  '#0284c7': 'Azure 600',   '#0369a1': 'Azure 700',    '#075985': 'Azure 800',   '#0c4a6e': 'Azure 900',
};

// All token values per brand per mode
const TOKEN_VALUES = {
  minimal: {
    light: {
      'color-surface-default': '#ffffff',      'color-surface-page': '#f5f5f5',
      'color-surface-subtle': '#e5e5e5',       'color-surface-inverse': '#141414',
      'color-surface-brand': '#141414',        'color-surface-brand-subtle': '#e5e5e5',
      'color-surface-positive': '#dcfce7',     'color-surface-warning': '#fef9c3',
      'color-surface-danger': '#fee2e2',       'color-surface-info': '#dbeafe',
      'color-surface-overlay': 'rgba(0,0,0,0.7)',
      'color-text-default': '#141414',         'color-text-subtle': '#4b4b4b',
      'color-text-muted': '#919191',           'color-text-disabled': '#d4d4d4',
      'color-text-inverse': '#ffffff',         'color-text-brand': '#141414',
      'color-text-positive': '#15803d',        'color-text-warning': '#a16207',
      'color-text-danger': '#b91c1c',          'color-text-info': '#1d4ed8',
      'color-border-default': '#d4d4d4',       'color-border-subtle': '#e5e5e5',
      'color-border-muted': '#f5f5f5',         'color-border-disabled': '#d4d4d4',
      'color-border-inverse': '#2e2e2e',       'color-border-brand': '#141414',
      'color-border-positive': '#86efac',      'color-border-warning': '#fde047',
      'color-border-danger': '#fca5a5',        'color-border-info': '#93c5fd',
      'color-border-focus': '#141414',
      'color-interactive-default-base': '#141414',   'color-interactive-default-hover': '#2e2e2e',
      'color-interactive-default-active': '#4b4b4b', 'color-interactive-default-disabled': '#d4d4d4',
      'color-interactive-pale-base': '#ffffff',      'color-interactive-pale-hover': '#e5e5e5',
      'color-interactive-pale-active': '#d4d4d4',    'color-interactive-pale-disabled': '#ffffff',
      'color-interactive-ghost-base': 'rgba(0,0,0,0)', 'color-interactive-ghost-hover': 'rgba(0,0,0,0.1)',
      'color-interactive-ghost-active': 'rgba(0,0,0,0.2)', 'color-interactive-ghost-disabled': 'rgba(0,0,0,0)',
      'color-interactive-positive-base': '#15803d',  'color-interactive-positive-hover': '#14532d',
      'color-interactive-positive-active': '#0b3d1e','color-interactive-positive-disabled': '#d4d4d4',
      'color-interactive-danger-base': '#b91c1c',    'color-interactive-danger-hover': '#7f1d1d',
      'color-interactive-danger-active': '#5d0d0d',  'color-interactive-danger-disabled': '#d4d4d4',
      'color-interactive-brand-base': '#141414',     'color-interactive-brand-hover': '#2e2e2e',
      'color-interactive-brand-active': '#4b4b4b',   'color-interactive-brand-disabled': '#d4d4d4',
      'color-interactive-inverse-base': '#ffffff',   'color-interactive-inverse-hover': '#e5e5e5',
      'color-interactive-inverse-active': '#d4d4d4', 'color-interactive-inverse-disabled': '#ffffff',
    },
    dark: {
      'color-surface-default': '#141414',      'color-surface-page': '#0a0a0a',
      'color-surface-subtle': '#1f1f1f',       'color-surface-inverse': '#f5f5f5',
      'color-surface-brand': '#f5f5f5',        'color-surface-brand-subtle': '#1f1f1f',
      'color-surface-positive': '#14532d',     'color-surface-warning': '#713f12',
      'color-surface-danger': '#7f1d1d',       'color-surface-info': '#1e3a8a',
      'color-surface-overlay': 'rgba(0,0,0,0.7)',
      'color-text-default': '#f5f5f5',         'color-text-subtle': '#919191',
      'color-text-muted': '#4b4b4b',           'color-text-disabled': '#2e2e2e',
      'color-text-inverse': '#141414',         'color-text-brand': '#f5f5f5',
      'color-text-positive': '#86efac',        'color-text-warning': '#fde047',
      'color-text-danger': '#fca5a5',          'color-text-info': '#93c5fd',
      'color-border-default': '#2e2e2e',       'color-border-subtle': '#1f1f1f',
      'color-border-muted': '#141414',         'color-border-disabled': '#1f1f1f',
      'color-border-inverse': '#d4d4d4',       'color-border-brand': '#f5f5f5',
      'color-border-positive': '#15803d',      'color-border-warning': '#a16207',
      'color-border-danger': '#b91c1c',        'color-border-info': '#1d4ed8',
      'color-border-focus': '#f5f5f5',
      'color-interactive-default-base': '#f5f5f5',   'color-interactive-default-hover': '#d4d4d4',
      'color-interactive-default-active': '#b5b5b5', 'color-interactive-default-disabled': '#2e2e2e',
      'color-interactive-pale-base': '#141414',      'color-interactive-pale-hover': '#1f1f1f',
      'color-interactive-pale-active': '#2e2e2e',    'color-interactive-pale-disabled': '#141414',
      'color-interactive-ghost-base': 'rgba(255,255,255,0)', 'color-interactive-ghost-hover': 'rgba(255,255,255,0.1)',
      'color-interactive-ghost-active': 'rgba(255,255,255,0.2)', 'color-interactive-ghost-disabled': 'rgba(255,255,255,0)',
      'color-interactive-positive-base': '#86efac',  'color-interactive-positive-hover': '#bbf7d0',
      'color-interactive-positive-active': '#dcfce7','color-interactive-positive-disabled': '#2e2e2e',
      'color-interactive-danger-base': '#fca5a5',    'color-interactive-danger-hover': '#fecaca',
      'color-interactive-danger-active': '#fee2e2',  'color-interactive-danger-disabled': '#2e2e2e',
      'color-interactive-brand-base': '#f5f5f5',     'color-interactive-brand-hover': '#d4d4d4',
      'color-interactive-brand-active': '#b5b5b5',   'color-interactive-brand-disabled': '#2e2e2e',
      'color-interactive-inverse-base': '#141414',   'color-interactive-inverse-hover': '#1f1f1f',
      'color-interactive-inverse-active': '#2e2e2e', 'color-interactive-inverse-disabled': '#141414',
    },
  },
  purpura: {
    light: {
      'color-surface-default': '#ffffff',      'color-surface-page': '#faf5ff',
      'color-surface-subtle': '#e5e5e5',       'color-surface-inverse': '#141414',
      'color-surface-brand': '#6b21a8',        'color-surface-brand-subtle': '#f3e8ff',
      'color-surface-positive': '#dcfce7',     'color-surface-warning': '#fef9c3',
      'color-surface-danger': '#fee2e2',       'color-surface-info': '#dbeafe',
      'color-surface-overlay': 'rgba(0,0,0,0.7)',
      'color-text-default': '#141414',         'color-text-subtle': '#4b4b4b',
      'color-text-muted': '#919191',           'color-text-disabled': '#d4d4d4',
      'color-text-inverse': '#ffffff',         'color-text-brand': '#7e22ce',
      'color-text-positive': '#15803d',        'color-text-warning': '#a16207',
      'color-text-danger': '#b91c1c',          'color-text-info': '#1d4ed8',
      'color-border-default': '#d4d4d4',       'color-border-subtle': '#e5e5e5',
      'color-border-muted': '#f5f5f5',         'color-border-disabled': '#d4d4d4',
      'color-border-inverse': '#2e2e2e',       'color-border-brand': '#7e22ce',
      'color-border-positive': '#86efac',      'color-border-warning': '#fde047',
      'color-border-danger': '#fca5a5',        'color-border-info': '#93c5fd',
      'color-border-focus': '#7e22ce',
      'color-interactive-default-base': '#6b21a8',   'color-interactive-default-hover': '#581c87',
      'color-interactive-default-active': '#4c1d95', 'color-interactive-default-disabled': '#d4d4d4',
      'color-interactive-pale-base': '#ffffff',      'color-interactive-pale-hover': '#f3e8ff',
      'color-interactive-pale-active': '#e9d5ff',    'color-interactive-pale-disabled': '#ffffff',
      'color-interactive-ghost-base': 'rgba(0,0,0,0)', 'color-interactive-ghost-hover': 'rgba(0,0,0,0.1)',
      'color-interactive-ghost-active': 'rgba(0,0,0,0.2)', 'color-interactive-ghost-disabled': 'rgba(0,0,0,0)',
      'color-interactive-positive-base': '#15803d',  'color-interactive-positive-hover': '#14532d',
      'color-interactive-positive-active': '#0b3d1e','color-interactive-positive-disabled': '#d4d4d4',
      'color-interactive-danger-base': '#b91c1c',    'color-interactive-danger-hover': '#7f1d1d',
      'color-interactive-danger-active': '#5d0d0d',  'color-interactive-danger-disabled': '#d4d4d4',
      'color-interactive-brand-base': '#6b21a8',     'color-interactive-brand-hover': '#581c87',
      'color-interactive-brand-active': '#4c1d95',   'color-interactive-brand-disabled': '#d4d4d4',
      'color-interactive-inverse-base': '#ffffff',   'color-interactive-inverse-hover': '#f3e8ff',
      'color-interactive-inverse-active': '#e9d5ff', 'color-interactive-inverse-disabled': '#ffffff',
    },
    dark: {
      'color-surface-default': '#141414',      'color-surface-page': '#0a0a0a',
      'color-surface-subtle': '#1f1f1f',       'color-surface-inverse': '#f5f5f5',
      'color-surface-brand': '#a855f7',        'color-surface-brand-subtle': '#581c87',
      'color-surface-positive': '#14532d',     'color-surface-warning': '#713f12',
      'color-surface-danger': '#7f1d1d',       'color-surface-info': '#1e3a8a',
      'color-surface-overlay': 'rgba(0,0,0,0.7)',
      'color-text-default': '#f5f5f5',         'color-text-subtle': '#919191',
      'color-text-muted': '#4b4b4b',           'color-text-disabled': '#2e2e2e',
      'color-text-inverse': '#141414',         'color-text-brand': '#c084fc',
      'color-text-positive': '#86efac',        'color-text-warning': '#fde047',
      'color-text-danger': '#fca5a5',          'color-text-info': '#93c5fd',
      'color-border-default': '#2e2e2e',       'color-border-subtle': '#1f1f1f',
      'color-border-muted': '#141414',         'color-border-disabled': '#1f1f1f',
      'color-border-inverse': '#d4d4d4',       'color-border-brand': '#c084fc',
      'color-border-positive': '#15803d',      'color-border-warning': '#a16207',
      'color-border-danger': '#b91c1c',        'color-border-info': '#1d4ed8',
      'color-border-focus': '#c084fc',
      'color-interactive-default-base': '#c084fc',   'color-interactive-default-hover': '#a855f7',
      'color-interactive-default-active': '#9333ea', 'color-interactive-default-disabled': '#2e2e2e',
      'color-interactive-pale-base': '#141414',      'color-interactive-pale-hover': '#1f1f1f',
      'color-interactive-pale-active': '#2e2e2e',    'color-interactive-pale-disabled': '#141414',
      'color-interactive-ghost-base': 'rgba(255,255,255,0)', 'color-interactive-ghost-hover': 'rgba(255,255,255,0.1)',
      'color-interactive-ghost-active': 'rgba(255,255,255,0.2)', 'color-interactive-ghost-disabled': 'rgba(255,255,255,0)',
      'color-interactive-positive-base': '#86efac',  'color-interactive-positive-hover': '#bbf7d0',
      'color-interactive-positive-active': '#dcfce7','color-interactive-positive-disabled': '#2e2e2e',
      'color-interactive-danger-base': '#fca5a5',    'color-interactive-danger-hover': '#fecaca',
      'color-interactive-danger-active': '#fee2e2',  'color-interactive-danger-disabled': '#2e2e2e',
      'color-interactive-brand-base': '#c084fc',     'color-interactive-brand-hover': '#a855f7',
      'color-interactive-brand-active': '#9333ea',   'color-interactive-brand-disabled': '#2e2e2e',
      'color-interactive-inverse-base': '#141414',   'color-interactive-inverse-hover': '#1f1f1f',
      'color-interactive-inverse-active': '#2e2e2e', 'color-interactive-inverse-disabled': '#141414',
    },
  },
  azure: {
    light: {
      'color-surface-default': '#ffffff',      'color-surface-page': '#f0f9ff',
      'color-surface-subtle': '#e5e5e5',       'color-surface-inverse': '#141414',
      'color-surface-brand': '#075985',        'color-surface-brand-subtle': '#e0f2fe',
      'color-surface-positive': '#dcfce7',     'color-surface-warning': '#fef9c3',
      'color-surface-danger': '#fee2e2',       'color-surface-info': '#dbeafe',
      'color-surface-overlay': 'rgba(0,0,0,0.7)',
      'color-text-default': '#141414',         'color-text-subtle': '#4b4b4b',
      'color-text-muted': '#919191',           'color-text-disabled': '#d4d4d4',
      'color-text-inverse': '#ffffff',         'color-text-brand': '#0369a1',
      'color-text-positive': '#15803d',        'color-text-warning': '#a16207',
      'color-text-danger': '#b91c1c',          'color-text-info': '#1d4ed8',
      'color-border-default': '#d4d4d4',       'color-border-subtle': '#e5e5e5',
      'color-border-muted': '#f5f5f5',         'color-border-disabled': '#d4d4d4',
      'color-border-inverse': '#2e2e2e',       'color-border-brand': '#0369a1',
      'color-border-positive': '#86efac',      'color-border-warning': '#fde047',
      'color-border-danger': '#fca5a5',        'color-border-info': '#93c5fd',
      'color-border-focus': '#0369a1',
      'color-interactive-default-base': '#075985',   'color-interactive-default-hover': '#0c4a6e',
      'color-interactive-default-active': '#0c4a6e', 'color-interactive-default-disabled': '#d4d4d4',
      'color-interactive-pale-base': '#ffffff',      'color-interactive-pale-hover': '#e0f2fe',
      'color-interactive-pale-active': '#bae6fd',    'color-interactive-pale-disabled': '#ffffff',
      'color-interactive-ghost-base': 'rgba(0,0,0,0)', 'color-interactive-ghost-hover': 'rgba(0,0,0,0.1)',
      'color-interactive-ghost-active': 'rgba(0,0,0,0.2)', 'color-interactive-ghost-disabled': 'rgba(0,0,0,0)',
      'color-interactive-positive-base': '#15803d',  'color-interactive-positive-hover': '#14532d',
      'color-interactive-positive-active': '#0b3d1e','color-interactive-positive-disabled': '#d4d4d4',
      'color-interactive-danger-base': '#b91c1c',    'color-interactive-danger-hover': '#7f1d1d',
      'color-interactive-danger-active': '#5d0d0d',  'color-interactive-danger-disabled': '#d4d4d4',
      'color-interactive-brand-base': '#075985',     'color-interactive-brand-hover': '#0c4a6e',
      'color-interactive-brand-active': '#0c4a6e',   'color-interactive-brand-disabled': '#d4d4d4',
      'color-interactive-inverse-base': '#ffffff',   'color-interactive-inverse-hover': '#e0f2fe',
      'color-interactive-inverse-active': '#bae6fd', 'color-interactive-inverse-disabled': '#ffffff',
    },
    dark: {
      'color-surface-default': '#141414',      'color-surface-page': '#0a0a0a',
      'color-surface-subtle': '#1f1f1f',       'color-surface-inverse': '#f5f5f5',
      'color-surface-brand': '#0ea5e9',        'color-surface-brand-subtle': '#0c4a6e',
      'color-surface-positive': '#14532d',     'color-surface-warning': '#713f12',
      'color-surface-danger': '#7f1d1d',       'color-surface-info': '#1e3a8a',
      'color-surface-overlay': 'rgba(0,0,0,0.7)',
      'color-text-default': '#f5f5f5',         'color-text-subtle': '#919191',
      'color-text-muted': '#4b4b4b',           'color-text-disabled': '#2e2e2e',
      'color-text-inverse': '#141414',         'color-text-brand': '#38bdf8',
      'color-text-positive': '#86efac',        'color-text-warning': '#fde047',
      'color-text-danger': '#fca5a5',          'color-text-info': '#93c5fd',
      'color-border-default': '#2e2e2e',       'color-border-subtle': '#1f1f1f',
      'color-border-muted': '#141414',         'color-border-disabled': '#1f1f1f',
      'color-border-inverse': '#d4d4d4',       'color-border-brand': '#38bdf8',
      'color-border-positive': '#15803d',      'color-border-warning': '#a16207',
      'color-border-danger': '#b91c1c',        'color-border-info': '#1d4ed8',
      'color-border-focus': '#38bdf8',
      'color-interactive-default-base': '#38bdf8',   'color-interactive-default-hover': '#7dd3fc',
      'color-interactive-default-active': '#bae6fd', 'color-interactive-default-disabled': '#2e2e2e',
      'color-interactive-pale-base': '#141414',      'color-interactive-pale-hover': '#1f1f1f',
      'color-interactive-pale-active': '#2e2e2e',    'color-interactive-pale-disabled': '#141414',
      'color-interactive-ghost-base': 'rgba(255,255,255,0)', 'color-interactive-ghost-hover': 'rgba(255,255,255,0.1)',
      'color-interactive-ghost-active': 'rgba(255,255,255,0.2)', 'color-interactive-ghost-disabled': 'rgba(255,255,255,0)',
      'color-interactive-positive-base': '#86efac',  'color-interactive-positive-hover': '#bbf7d0',
      'color-interactive-positive-active': '#dcfce7','color-interactive-positive-disabled': '#2e2e2e',
      'color-interactive-danger-base': '#fca5a5',    'color-interactive-danger-hover': '#fecaca',
      'color-interactive-danger-active': '#fee2e2',  'color-interactive-danger-disabled': '#2e2e2e',
      'color-interactive-brand-base': '#38bdf8',     'color-interactive-brand-hover': '#7dd3fc',
      'color-interactive-brand-active': '#bae6fd',   'color-interactive-brand-disabled': '#2e2e2e',
      'color-interactive-inverse-base': '#141414',   'color-interactive-inverse-hover': '#1f1f1f',
      'color-interactive-inverse-active': '#2e2e2e', 'color-interactive-inverse-disabled': '#141414',
    },
  },
};

function getLabel(cssVar, brand, mode) {
  const key = cssVar.replace('--', '');
  const val = TOKEN_VALUES[brand]?.[mode]?.[key];
  if (!val) return '—';
  const lower = val.toLowerCase().replace(/\s/g, '');
  return HEX_TO_LABEL[lower] || HEX_TO_LABEL[val.toLowerCase()] || val;
}

// ─── Token definitions ────────────────────────────────────────────────────────

const surfaceTokens = [
  { name: 'colour.static.surface.default',      cssVar: '--color-surface-default'      },
  { name: 'colour.static.surface.page',         cssVar: '--color-surface-page'         },
  { name: 'colour.static.surface.subtle',       cssVar: '--color-surface-subtle'       },
  { name: 'colour.static.surface.inverse',      cssVar: '--color-surface-inverse'      },
  { name: 'colour.static.surface.brand',        cssVar: '--color-surface-brand'        },
  { name: 'colour.static.surface.brand-subtle', cssVar: '--color-surface-brand-subtle' },
  { name: 'colour.static.surface.positive',     cssVar: '--color-surface-positive'     },
  { name: 'colour.static.surface.warning',      cssVar: '--color-surface-warning'      },
  { name: 'colour.static.surface.danger',       cssVar: '--color-surface-danger'       },
  { name: 'colour.static.surface.info',         cssVar: '--color-surface-info'         },
  { name: 'colour.static.surface.overlay',      cssVar: '--color-surface-overlay'      },
];
const textTokens = [
  { name: 'colour.static.text.default',  cssVar: '--color-text-default'  },
  { name: 'colour.static.text.subtle',   cssVar: '--color-text-subtle'   },
  { name: 'colour.static.text.muted',    cssVar: '--color-text-muted'    },
  { name: 'colour.static.text.disabled', cssVar: '--color-text-disabled' },
  { name: 'colour.static.text.inverse',  cssVar: '--color-text-inverse'  },
  { name: 'colour.static.text.brand',    cssVar: '--color-text-brand'    },
  { name: 'colour.static.text.positive', cssVar: '--color-text-positive' },
  { name: 'colour.static.text.warning',  cssVar: '--color-text-warning'  },
  { name: 'colour.static.text.danger',   cssVar: '--color-text-danger'   },
  { name: 'colour.static.text.info',     cssVar: '--color-text-info'     },
];
const iconTokens = [
  { name: 'colour.static.icon.default',  cssVar: '--color-icon-default'  },
  { name: 'colour.static.icon.subtle',   cssVar: '--color-icon-subtle'   },
  { name: 'colour.static.icon.muted',    cssVar: '--color-icon-muted'    },
  { name: 'colour.static.icon.disabled', cssVar: '--color-icon-disabled' },
  { name: 'colour.static.icon.inverse',  cssVar: '--color-icon-inverse'  },
  { name: 'colour.static.icon.brand',    cssVar: '--color-icon-brand'    },
  { name: 'colour.static.icon.positive', cssVar: '--color-icon-positive' },
  { name: 'colour.static.icon.warning',  cssVar: '--color-icon-warning'  },
  { name: 'colour.static.icon.danger',   cssVar: '--color-icon-danger'   },
  { name: 'colour.static.icon.info',     cssVar: '--color-icon-info'     },
];
const borderColourTokens = [
  { name: 'colour.static.border.default',  cssVar: '--color-border-default'  },
  { name: 'colour.static.border.subtle',   cssVar: '--color-border-subtle'   },
  { name: 'colour.static.border.muted',    cssVar: '--color-border-muted'    },
  { name: 'colour.static.border.disabled', cssVar: '--color-border-disabled' },
  { name: 'colour.static.border.inverse',  cssVar: '--color-border-inverse'  },
  { name: 'colour.static.border.brand',    cssVar: '--color-border-brand'    },
  { name: 'colour.static.border.positive', cssVar: '--color-border-positive' },
  { name: 'colour.static.border.warning',  cssVar: '--color-border-warning'  },
  { name: 'colour.static.border.danger',   cssVar: '--color-border-danger'   },
  { name: 'colour.static.border.info',     cssVar: '--color-border-info'     },
  { name: 'colour.static.border.focus',    cssVar: '--color-border-focus'    },
];
const intDefaultTokens = [
  { name: 'colour.interactive.default.base',     cssVar: '--color-interactive-default-base'     },
  { name: 'colour.interactive.default.hover',    cssVar: '--color-interactive-default-hover'    },
  { name: 'colour.interactive.default.active',   cssVar: '--color-interactive-default-active'   },
  { name: 'colour.interactive.default.disabled', cssVar: '--color-interactive-default-disabled' },
];
const intPaleTokens = [
  { name: 'colour.interactive.pale.base',     cssVar: '--color-interactive-pale-base'     },
  { name: 'colour.interactive.pale.hover',    cssVar: '--color-interactive-pale-hover'    },
  { name: 'colour.interactive.pale.active',   cssVar: '--color-interactive-pale-active'   },
  { name: 'colour.interactive.pale.disabled', cssVar: '--color-interactive-pale-disabled' },
];
const intGhostTokens = [
  { name: 'colour.interactive.ghost.base',     cssVar: '--color-interactive-ghost-base'     },
  { name: 'colour.interactive.ghost.hover',    cssVar: '--color-interactive-ghost-hover'    },
  { name: 'colour.interactive.ghost.active',   cssVar: '--color-interactive-ghost-active'   },
  { name: 'colour.interactive.ghost.disabled', cssVar: '--color-interactive-ghost-disabled' },
];
const intPositiveTokens = [
  { name: 'colour.interactive.positive.base',     cssVar: '--color-interactive-positive-base'     },
  { name: 'colour.interactive.positive.hover',    cssVar: '--color-interactive-positive-hover'    },
  { name: 'colour.interactive.positive.active',   cssVar: '--color-interactive-positive-active'   },
  { name: 'colour.interactive.positive.disabled', cssVar: '--color-interactive-positive-disabled' },
];
const intDangerTokens = [
  { name: 'colour.interactive.danger.base',     cssVar: '--color-interactive-danger-base'     },
  { name: 'colour.interactive.danger.hover',    cssVar: '--color-interactive-danger-hover'    },
  { name: 'colour.interactive.danger.active',   cssVar: '--color-interactive-danger-active'   },
  { name: 'colour.interactive.danger.disabled', cssVar: '--color-interactive-danger-disabled' },
];
const intBrandTokens = [
  { name: 'colour.interactive.brand.base',     cssVar: '--color-interactive-brand-base'     },
  { name: 'colour.interactive.brand.hover',    cssVar: '--color-interactive-brand-hover'    },
  { name: 'colour.interactive.brand.active',   cssVar: '--color-interactive-brand-active'   },
  { name: 'colour.interactive.brand.disabled', cssVar: '--color-interactive-brand-disabled' },
];
const intInverseTokens = [
  { name: 'colour.interactive.inverse.base',     cssVar: '--color-interactive-inverse-base'     },
  { name: 'colour.interactive.inverse.hover',    cssVar: '--color-interactive-inverse-hover'    },
  { name: 'colour.interactive.inverse.active',   cssVar: '--color-interactive-inverse-active'   },
  { name: 'colour.interactive.inverse.disabled', cssVar: '--color-interactive-inverse-disabled' },
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
const borderWidthTokens = [
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

// ─── Row components ───────────────────────────────────────────────────────────

function ColourRow({ name, cssVar, brand, mode }) {
  const tokenKey = cssVar.replace('--', '');
  const hexVal = TOKEN_VALUES[brand]?.[mode]?.[tokenKey] || 'transparent';
  const label = getLabel(cssVar, brand, mode);
  return (
    <div className="mds-tokens__row">
      <span className="mds-tokens__name">{name}</span>
      <div className="mds-tokens__colour-right">
        <span className="mds-tokens__label">{label}</span>
        <div className="mds-tokens__swatch" style={{ backgroundColor: hexVal }} />
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

function Section({ id, title, children, first }) {
  return (
    <div id={id} className={`mds-tokens__section${first ? ' mds-tokens__section--first' : ''}`}>
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

const brands = ['Minimal', 'Purpura', 'Azure'];
const anchors = [
  { id: 'tokens-colour',  label: 'Colour'  },
  { id: 'tokens-radius',  label: 'Radius'  },
  { id: 'tokens-spacing', label: 'Spacing' },
  { id: 'tokens-border',  label: 'Border'  },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function DesignTokens() {
  const { mode } = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);
  const brand = brands[selectedTab].toLowerCase();

  return (
    <div className="mds-page-tokens">
      <h1 className="mds-page-tokens__title">Design Tokens</h1>
      <p className="mds-page-tokens__subtitle">
        Design tokens are the single source of truth for all design decisions across MinimalDS.
      </p>

      {/* Anchor nav */}
      <div className="mds-tokens__anchors">
        {anchors.map(a => (
          <button
            key={a.id}
            className="mds-tokens__anchor-link"
            onClick={() => scrollTo(a.id)}
          >
            ↳ {a.label}
          </button>
        ))}
      </div>

      {/* Brand tabs — local state only, does NOT change global theme */}
      <div className="mds-tokens__tabs">
        <TabGroup
          tabs={brands}
          selectedIndex={selectedTab}
          onChange={setSelectedTab}
        />
      </div>

      {/* Colour */}
      <Section id="tokens-colour" title="Colour" first>
        <SubSection title="Surface">
          <TokenTable>
            {surfaceTokens.map(t => <ColourRow key={t.name} {...t} brand={brand} mode={mode} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Text">
          <TokenTable>
            {textTokens.map(t => <ColourRow key={t.name} {...t} brand={brand} mode={mode} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Icon">
          <TokenTable>
            {iconTokens.map(t => <ColourRow key={t.name} {...t} brand={brand} mode={mode} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Border">
          <TokenTable>
            {borderColourTokens.map(t => <ColourRow key={t.name} {...t} brand={brand} mode={mode} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Interactive Default">
          <TokenTable>
            {intDefaultTokens.map(t => <ColourRow key={t.name} {...t} brand={brand} mode={mode} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Interactive Pale">
          <TokenTable>
            {intPaleTokens.map(t => <ColourRow key={t.name} {...t} brand={brand} mode={mode} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Interactive Ghost">
          <TokenTable>
            {intGhostTokens.map(t => <ColourRow key={t.name} {...t} brand={brand} mode={mode} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Interactive Positive">
          <TokenTable>
            {intPositiveTokens.map(t => <ColourRow key={t.name} {...t} brand={brand} mode={mode} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Interactive Danger">
          <TokenTable>
            {intDangerTokens.map(t => <ColourRow key={t.name} {...t} brand={brand} mode={mode} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Interactive Brand">
          <TokenTable>
            {intBrandTokens.map(t => <ColourRow key={t.name} {...t} brand={brand} mode={mode} />)}
          </TokenTable>
        </SubSection>
        <SubSection title="Interactive Inverse">
          <TokenTable>
            {intInverseTokens.map(t => <ColourRow key={t.name} {...t} brand={brand} mode={mode} />)}
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
          {borderWidthTokens.map(t => <ValueRow key={t.name} {...t} />)}
        </TokenTable>
      </Section>

    </div>
  );
}
