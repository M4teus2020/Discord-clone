/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'discord-primary': '#5865F2',
        'discord-secondary': '#404EED',
        'discord-link': '#00A8FC',
        'discord-dark': '#2C2F33',
        'discord-darker': '#23272A',
        'discord-light': '#99AAB5',
        'discord-lightest': '#E3E5E8',
        'discord-danger': '#F04747',
        'discord-warning': '#FAA61A',
      }
    }
  },
  plugins: []
}
