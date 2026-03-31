import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Unified Premium Design System Colors
        primary: {
          DEFAULT: '#cc97ff',
          dim: '#9c48ea',
          light: '#e0c2ff',
        },
        secondary: {
          DEFAULT: '#fed01b',
          dim: '#eec200',
          light: '#ffdf5e',
        },
        tertiary: {
          DEFAULT: '#47c4ff',
          dim: '#00a3ff',
        },
        surface: {
          DEFAULT: '#130b1a',
          variant: '#2d2137',
          sunken: '#0f0814',
          highest: '#2d2137',
          high: '#261b30',
          low: '#190f21',
        },
        background: '#070114',
        "on-surface": {
          DEFAULT: '#f6e6fd',
          variant: '#b4a6bc',
        },
        "on-primary": '#47007c',
        "on-secondary": '#594700',
        error: '#ff6e84',
        outline: {
          variant: '#4f4456',
        }
      },
      fontFamily: {
        headline: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
        display: ["Manrope", "sans-serif"],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-20px) rotate(1deg)' },
        }
      }
    },
  },
  plugins: [],
}
