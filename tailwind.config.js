/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: '#root',

  theme: {
    extend: {
      colors: {
        slack: '#3f0e40',
        slackLight: '#49274b',
        slackDark: '#340e36',
      },
    },
  },
  plugins: [],
}
