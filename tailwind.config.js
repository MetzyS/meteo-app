/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heavyclouds: "url('./src/assets/heavyclouds.jpg')",
        rainy: "url('./src/assets/rainy.jpg')",
        rain: "url('./src/assets/rain.jpg')",
      },
    },
  },
  plugins: [],
};
