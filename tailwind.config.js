/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D1117",
        secondary: "#161B22",
        accent: "#58A6FF",
        highlight: "#FF7B72",
        lightText: "#C9D1D9",
        darkText: "#F0F6FC",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
