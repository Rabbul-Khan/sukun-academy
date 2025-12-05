/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'forest': '#0F3D2E',
        'forest-dark': '#0a2a1f',
        'leaf': '#2E7D32',
        'leaf-dark': '#1b5e20',
        'leaf-light': '#4caf50',
        'mint': '#A8D5BA',
        'mint-light': '#c8e6d0',
        'mint-dark': '#88c5a0',
        'sand': '#F4F7F2',
        'sand-light': '#f9fbf8',
        'charcoal': '#1C1C1C',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 8px 20px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 28px rgba(0, 0, 0, 0.08)',
        'button': '0 6px 16px rgba(15, 61, 46, 0.12)',
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
