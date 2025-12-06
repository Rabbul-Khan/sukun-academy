/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'evergreen': '#1B4332',
        'evergreen-dark': '#123021',
        'evergreen-light': '#2A5C49',
        'living-soil': '#BC6C25',
        'living-soil-dark': '#9F5A1F',
        'living-soil-light': '#D27F35',
        'sage-mist': '#D8F3DC',
        'mist': '#E9EFE6',
        'warm-paper': '#F7F5F0',
        'charcoal': '#2D312F',
        'dark-moss': '#081C15',
        'stone': '#6B7280',
        'burnt-clay': '#D64045',
        'card-bg': '#FFFFFF',
      },
      fontFamily: {
        heading: ['Lora', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 12px rgba(27, 67, 50, 0.08)',
        'card-hover': '0 8px 24px rgba(27, 67, 50, 0.12)',
        'button': '0 8px 24px rgba(27, 67, 50, 0.12)',
      },
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
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
