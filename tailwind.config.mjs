/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['"Dancing Script"', 'cursive'],
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          green:       '#a8cbb7',
          greenlight:  '#a8cbb7',
          greendark:   '#5a9480',
          cream:       '#f6f6e9',
          gold:        '#e6be8a',
          terra:       '#ab4210',
          rose:        '#b76666',
        }
      }
    },
  },
  plugins: [],
}
