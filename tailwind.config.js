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
        heavyclouds: "url('./src/assets/backgrounds/heavyclouds.jpg')",
        partialcloud: "url('./src/assets/backgrounds/partialcloud.jpg')",
        heavyrain: "url('./src/assets/backgrounds/heavyrain.jpg')",
        rain: "url('./src/assets/backgrounds/rain.jpg')",
        fog: "url('./src/assets/backgrounds/fog.jpg')",
        clear: "url('./src/assets/backgrounds/clear.jpg')",
        wind: "url('./src/assets/backgrounds/wind.jpg')",
        thunder: "url('./src/assets/backgrounds/thunder.jpg')",
        gauge: "url('./src/assets/backgrounds/gauge_empty.svg')",
        gaugefull: "url('./src/assets/backgrounds/gauge_full.svg')",
      },
    },
  },
  plugins: [],
};
