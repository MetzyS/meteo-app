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
        partialcloud: "url('./src/assets/partialcloud.jpg')",
        heavyrain: "url('./src/assets/heavyrain.jpg')",
        rain: "url('./src/assets/rain.jpg')",
        fog: "url('./src/assets/fog.jpg')",
        clear: "url('./src/assets/clear.jpg')",
        wind: "url('./src/assets/wind.jpg')",
        thunder: "url('./src/assets/thunder.jpg')",
      },
    },
  },
  plugins: [],
};
