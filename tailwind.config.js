/**
 * Tailwind CSS Configuration
 * @see https://tailwindcss.com/docs/configuration
 * 
 * Note: Colors and shadows are also defined in src/styles/global.css @theme block
 * for Tailwind v4 CSS-first configuration. Keep both in sync.
 */

export default {
  // =============================================================================
  // Content Sources
  // =============================================================================
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],

  // =============================================================================
  // Theme Extensions
  // =============================================================================
  theme: {
    extend: {
      // Colors
      colors: {
        // Primary
        'evergreen': '#1B4332',
        'evergreen-dark': '#123021',
        'evergreen-light': '#2A5C49',

        // Accent
        'living-soil': '#BC6C25',
        'living-soil-dark': '#A55E1F',
        'living-soil-light': '#D27F35',

        // Neutral
        'sage-mist': '#D8F3DC',
        'mist': '#E9EFE6',
        'warm-paper': '#F7F5F0',
        'card-bg': '#FFFFFF',

        // Text
        'charcoal': '#2D312F',
        'dark-moss': '#081C15',
        'stone': '#6B7280',

        // Semantic
        'burnt-clay': '#D64045',
      },

      // Typography
      fontFamily: {
        heading: ['Lora', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },

      // Shadows
      boxShadow: {
        'card': '0 4px 12px rgba(27, 67, 50, 0.08)',
        'card-hover': '0 8px 24px rgba(27, 67, 50, 0.12)',
        'button': '0 8px 24px rgba(27, 67, 50, 0.12)',
      },

      // Animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            transform: 'translateY(1.25rem)', 
            opacity: '0',
          },
          '100%': { 
            transform: 'translateY(0)', 
            opacity: '1',
          },
        },
      },
    },
  },

  // =============================================================================
  // Plugins
  // =============================================================================
  plugins: [],
};
