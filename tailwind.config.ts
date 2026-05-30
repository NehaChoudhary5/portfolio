/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        primary: '#6C63FF',
        'primary-dark': '#5A52D5',
        'primary-light': '#8B83FF',
        secondary: '#00D4AA',
        accent: '#FF6B6B',
       'dark-bg':    '#f5f5fa',
       'dark-card':  '#ffffff',
       'dark-card-2':'#eeeef8',
      },
      animation: {
        'pulse-slow': 'pulse 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'blink': 'blink 0.8s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6C63FF 0%, #00D4AA 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0c0c1d 0%, #1a1a3e 50%, #0f0f2d 100%)',
      }
    },
  },
  plugins: [],
}
