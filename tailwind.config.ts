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

        // Typography Colors (On-Surface)
        'on-surface': {
          DEFAULT: '#1b1c1c',                // High-contrast text
          variant: '#5c5e5e',                // Muted/Editorial metadata
        },

        // Semantic
        error: {
          container: '#fce8e8',
          'on-container': '#d93025',
        },

        // The Ghost Border (15% opacity fallback)
        outline: {
          variant: 'rgba(198, 197, 216, 0.15)',
        }
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