/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2FA4A9',
        primaryDark: '#1F7F83',
        accent: '#E64C87',
        background: '#F4FBFB',
        text: '#4A4A4A',
      },
    },
  },
  plugins: [],
};
