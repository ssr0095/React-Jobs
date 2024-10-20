/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        sm: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "900px",
        xl: "1000px",
        "2xl": "1100px",
      },
    },
    extend: {
      fontFamily: {
        outfit: "Outfit",
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
    },
  },
  plugins: [],
};
