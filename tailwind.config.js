/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Dark backgrounds
        'bg-base':    '#0A0A0B',
        'bg-surface': '#111114',
        'bg-raised':  '#18181C',
        'bg-overlay': '#202025',

        // Borders
        'border-subtle': 'rgba(255,255,255,0.06)',
        'border-mid':    'rgba(255,255,255,0.10)',
        'border-strong': 'rgba(255,255,255,0.16)',

        // Text
        'text-primary':   '#F2F2F3',
        'text-secondary': '#A1A1AA',
        'text-muted':     '#71717A',

        // Accent — muted electric blue
        accent:        '#3B82F6',
        'accent-dark': '#2563EB',
        'accent-dim':  'rgba(59,130,246,0.12)',
        'accent-glow': 'rgba(59,130,246,0.20)',

        // Score states (kept for audit tool compatibility)
        'score-good':    '#22C55E',
        'score-good-bg': '#052E16',
        'score-warn':    '#F59E0B',
        'score-warn-bg': '#451A03',
        'score-poor':    '#EF4444',
        'score-poor-bg': '#450A0A',

        // Legacy brand (kept so audit pages still compile without error)
        brand:            '#3B82F6',
        'brand-dark':     '#2563EB',
        'brand-tint':     'rgba(59,130,246,0.10)',
        'brand-tint-text':'#93C5FD',
      },
      borderRadius: {
        card: '10px',
        btn:  '7px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to:   { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to:   { height: '0' },
        },
        'bar-grow': {
          from: { width: '0%' },
          to:   { width: 'var(--bar-width)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-ring': {
          '0%':   { transform: 'scale(1)',   opacity: '0.6' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up':   'accordion-up 0.2s ease-out',
        'bar-grow':       'bar-grow 0.8s ease-out forwards',
        'fade-up':        'fade-up 0.5s ease-out forwards',
        'pulse-ring':     'pulse-ring 1.5s ease-out infinite',
      },
    },
  },
  plugins: [],
};
