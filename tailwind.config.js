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
        lightAccent: '#2ecc71',
        dark: '#161b22',
        darkAccent: '#58d68d',
        light2: '#f1f5f9',
        dark2: '#202d3a',
        emeraldGreen: '#00b894',
        techViolet: '#6c5ce7',
        techBlue: '#0984e3',
        graybg:'#1f2937',
        secondarybg:'#374151',
        acent:'#06b6d4',
        successgreen:'#10b981',
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
