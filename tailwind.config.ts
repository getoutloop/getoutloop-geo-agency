import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A0E27',
          soft: '#0D1429',
          border: '#1A2230',
        },
        electric: {
          DEFAULT: '#00A8FF',
          hover: '#33BCFF',
          dim: 'rgba(0,168,255,0.15)',
        },
        neon: {
          DEFAULT: '#00FF9D',
          hover: '#33FFB3',
          dim: 'rgba(0,255,157,0.15)',
        },
        muted: '#B0B8C8',
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'Syne', 'sans-serif'],
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-electric': 'linear-gradient(135deg, #00A8FF, #00FF9D)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
