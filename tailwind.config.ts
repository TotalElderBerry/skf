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
        // Tonal Architecture (Surfaces)
        // Replacing the old #130b1a (dark purple) with Administrative Whites
        surface: '#fbf9f8',                   // Global Canvas
        'surface-low': '#f5f3f3',             // Sectioning
        'surface-lowest': '#ffffff',          // Cards / Focal Points
        'surface-highest': '#e4e2e2',         // Headers / Input Tracks
        'surface-dim': '#dbd9d9',             // Table Headers

        // Brand & Actions (The Administrative Blue)
        primary: {
          DEFAULT: '#3947de',
          container: '#5563f8',
          'on-fixed': '#2a34a8',
        },

        // --- Mockup Tonal Palette ---
        "on-tertiary-container": "#fefcff",
        "tertiary-fixed": "#e0e2ee",
        "surface-container": "#efeded",
        "surface-container-high": "#eae8e7",
        "secondary-fixed": "#dfe2ef",
        "tertiary-fixed-dim": "#c4c6d2",
        "secondary-fixed-dim": "#c3c6d3",
        "on-secondary-fixed": "#171c25",
        "on-primary-fixed-variant": "#1d2bc9",
        "primary-fixed": "#e0e0ff",
        "inverse-primary": "#bdc2ff",
        "on-primary-fixed": "#000668",
        "primary-fixed-dim": "#bdc2ff",
        "tertiary-container": "#71747f",
        "on-secondary-fixed-variant": "#434751",
        "on-tertiary": "#ffffff",
        "tertiary": "#595c66",
        "on-error": "#ffffff",
        "secondary": "#5a5e69",
        "secondary-container": "#dcdfec",
        "on-secondary": "#ffffff",
        "surface-variant": "#e4e2e2",
        "background": "#fbf9f8",
        "on-primary": "#ffffff",
        "error-container": "#ffdad6",
        "on-secondary-container": "#5f626e",
        "inverse-on-surface": "#f2f0f0",
        "on-tertiary-fixed-variant": "#434750",
        "inverse-surface": "#303030",
        "on-background": "#1b1c1c",
        "outline-variant": "#c6c5d8",
        "on-primary-container": "#fffbff",
        "on-tertiary-fixed": "#181b24",
        "surface-tint": "#3c4ae1",
        "on-error-container": "#93000a",
        "primary-container": "#5563f8",
        "on-surface-variant": "#454655",
        "on-surface": "#1b1c1c",
        "surface-container-highest": "#e4e2e2",
        "surface-bright": "#fbf9f8",
        "surface-container-lowest": "#ffffff",
        "error": "#ba1a1a",
        "surface-container-low": "#f5f3f3"
      },

      fontFamily: {
        // Updated to the dual-font strategy
        headline: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },

      letterSpacing: {
        tightest: '-0.02em', // For that "Masthead" look
      },

      boxShadow: {
        // The Ambient Shadow Rule
        'ambient': '0 12px 32px rgba(27, 28, 28, 0.06)',
      },

      // Editorial Spacing
      spacing: {
        '12': '3rem',
        '16': '4rem',
      },

      borderRadius: {
        'button': '0.5rem',  // Per the button rule
        '3xl': '1.5rem',     // Regular Cards
        'panel': '3rem',     // Major Sections
      }
    },
  },
  plugins: [],
}