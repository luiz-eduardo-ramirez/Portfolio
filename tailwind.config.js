/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        le: {
          DEFAULT: '#00D4E8',
          glow:    '#00D4E8',
          dark:    '#001a2e',
          muted:   '#00D4E820',
          border:  '#00D4E840',
        },
        brand: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1', // indigo principal
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        accent: {
          400: '#34d399', // emerald
          500: '#10b981',
          600: '#059669',
        },
        dark: {
          900: '#0a0a0f',
          800: '#0f0f1a',
          700: '#141428',
          600: '#1a1a35',
          500: '#21213f',
        },
      },
      backgroundImage: {
        'gradient-radial':  'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in':       'fadeIn 0.6s ease-out both',
        'slide-up':      'slideUp 0.7s ease-out both',
        'slide-in-left': 'slideInLeft 0.7s ease-out both',
        'float':         'float 6s ease-in-out infinite',
        'pulse-slow':    'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow':     'spin 20s linear infinite',
        'glow':          'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%':   { boxShadow: '0 0 20px rgba(99,102,241,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(99,102,241,0.7)' },
        },
      },
      boxShadow: {
        'le':        '0 0 30px rgba(0,212,232,0.35)',
        'le-lg':     '0 0 60px rgba(0,212,232,0.45)',
        'brand':     '0 0 30px rgba(99,102,241,0.25)',
        'brand-lg':  '0 0 60px rgba(99,102,241,0.35)',
        'accent':    '0 0 30px rgba(52,211,153,0.25)',
        'glass':     '0 8px 32px rgba(0,0,0,0.4)',
        'card':      '0 4px 24px rgba(0,0,0,0.3)',
        'card-hover':'0 8px 40px rgba(99,102,241,0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
