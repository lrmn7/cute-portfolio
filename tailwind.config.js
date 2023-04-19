module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Work Sans', 'sans-serif'],
        "doodle": ['Eczar', 'serif'],
      },
      colors: {
        "peach": {
          "50": "#ffffff",
          "100": "#ffffff",
          "200": "#fffdf5",
          "300": "#fff3eb",
          "400": "#f5e9e1",
          "500": "#ebdfd7",
          "600": "#e1d5cd",
          "700": "#d7cbc3",
          "800": "#cdc1b9",
          "900": "#c3b7af"
        }
      }
    },
  },
  plugins: [],
}