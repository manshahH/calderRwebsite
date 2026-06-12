/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Brand
        brand: '#1D9E75',
        'brand-dark': '#0F6E56',
        'brand-tint': '#E1F5EE',
        'brand-tint-text': '#0F6E56',

        // Score states
        'score-good': '#639922',
        'score-good-bg': '#EAF3DE',
        'score-warn': '#EF9F27',
        'score-warn-bg': '#FAEEDA',
        'score-poor': '#E24B4A',
        'score-poor-bg': '#FCEBEB',

        // Neutrals
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#F7F8FA',
        'border-light': 'rgba(0,0,0,0.08)',
        'border-mid': 'rgba(0,0,0,0.13)',
        'text-primary': '#111827',
        'text-secondary': '#6B7280',
        'text-tertiary': '#9CA3AF',
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'bar-grow': {
          from: { width: '0%' },
          to: { width: 'var(--bar-width)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'bar-grow': 'bar-grow 0.8s ease-out forwards',
        'fade-up': 'fade-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
