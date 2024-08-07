/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#e2e8f0",
        main: "#111827",
        secondary: "#1f2937",
        accent: "#ea580c",
      },
      gridTemplateColumns: {
        main: "minmax(20rem, 30rem) minmax(210mm, 1fr)",
      },
      gridTemplateRows: {
        main: "max-content max-content",
      },
      fontFamily: {
        main: ["Nunito", "Times New Roman", "sans-serif"],
        special: ["Times New Roman", "Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
