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
        main: "30rem minmax(50rem, 1fr)",
      },
    },
  },
  plugins: [],
};
