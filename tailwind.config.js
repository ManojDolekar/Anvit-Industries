/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      colors: {
        light: '#f9fafb',
        commonColor: '#004cba',
      },
    },
  },
  plugins: [],
};
