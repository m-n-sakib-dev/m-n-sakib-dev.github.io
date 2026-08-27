/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        accent: 'var(--color-accent)',

        /* warm off-white — replaces stark #fff so light mode reads as paper */
        white: '#faf7ee',

        /* Terminal theme: every legacy `purple-*` / `violet-*` utility becomes
           amber "phosphor"; every legacy `cyan-*` becomes terminal green. */
        purple: {
          50: '#fff8e1',
          100: '#ffedb8',
          200: '#ffdf85',
          300: '#ffce4d',
          400: '#ffbf2e',
          500: '#ffb000',
          600: '#c98a00',
          700: '#996800',
          800: '#6b4900',
          900: '#463100',
          950: '#241900',
        },
        violet: {
          50: '#fff8e1',
          100: '#ffedb8',
          200: '#ffdf85',
          300: '#ffce4d',
          400: '#ffbf2e',
          500: '#ffb000',
          600: '#c98a00',
          700: '#996800',
          800: '#6b4900',
          900: '#463100',
          950: '#241900',
        },
        cyan: {
          50: '#e9f9ef',
          100: '#c9f2d8',
          200: '#98e6b6',
          300: '#5fd992',
          400: '#3fb950',
          500: '#2ea043',
          600: '#238636',
          700: '#1a6f2b',
          800: '#175e26',
          900: '#123f1c',
          950: '#08260f',
        },

        /* warm sepia neutral ramp — replaces cool `slate`, unifies both themes.
           50-200 are paper tints; 300-900 are warm greys for text & surfaces. */
        slate: {
          50: '#f0e9d9',
          100: '#e7dcc6',
          200: '#cdbc93',
          300: '#c7bda6',
          400: '#a49a84',
          500: '#7c7460',
          600: '#5b5442',
          700: '#423c2e',
          800: '#2c2719',
          900: '#1b1710',
          950: '#0b0906',
        },
      },
      maxWidth: {
        container: '1200px',
      },
      fontFamily: {
        sans: ['"IBM Plex Mono"', '"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        mono: ['"IBM Plex Mono"', '"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};
