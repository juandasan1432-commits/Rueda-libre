// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./index.html", "./componentes.html"],
  theme: {
    extend: {
      colors: {
        "verde-ruta": "#1E7A4F",
        "naranja-pedal": "#F39A2B",
        "azul-noche":"#020617",
        crema: "#FAF6EF",
        "amarillo-farol": "#FFD166",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
