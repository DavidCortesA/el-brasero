import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ember: {
          50: '#fef7ee',
          100: '#fdecd3',
          200: '#fad6a5',
          300: '#f7b86d',
          400: '#f49133',
          500: '#f1730c',
          600: '#e25807',
          700: '#bb4109',
          800: '#95330f',
          900: '#792c10',
          950: '#411406',
        },
        charcoal: {
          50: '#f7f7f6',
          100: '#e3e3e1',
          200: '#c7c7c3',
          300: '#a5a59f',
          400: '#84847d',
          500: '#6b6b65',
          600: '#56564f',
          700: '#464641',
          800: '#3a3a37',
          900: '#2f2f2d',
          950: '#1a1a19',
        },
        clay: {
          50: '#f9f7f4',
          100: '#f1ebe3',
          200: '#e3d5c5',
          300: '#d0b9a0',
          400: '#bb997a',
          500: '#ac825f',
          600: '#9f7053',
          700: '#855b46',
          800: '#6c4c3d',
          900: '#584033',
          950: '#2f211a',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-plus-jakarta)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in': 'slideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
