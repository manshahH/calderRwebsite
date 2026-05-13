/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
  	extend: {
  		fontFamily: {
  			syne: ['Roboto Condensed', 'sans-serif'],
  			outfit: ['Roboto', 'sans-serif'],
  			mono: ['JetBrains Mono', 'monospace'],
  		},
  		colors: {
  			bg: '#060A14',
  			surface: '#0C1220',
  			surface2: '#111827',
  			accent: '#3BAFD4',
  			amber: '#D4A853',
  			muted: '#6B7A99',
  			muted2: '#3D4A60',
  			navy: '#2B2D42'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [],
}
