module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#174B4C", // teal as main
          accent: "#D7520A", // orange for highlights
          accentLight: "#E59B28", // lighter orange for subtle highlights
          surface: "#081026", // dark background
          muted: "#47622B", // green for subtle elements
        },
      },
    },
  },
  plugins: [],
};
