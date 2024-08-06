/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#e2e8f0",
        main: "#1e293b",
        secondary: "#0f172a",
        accent: "#ea580c",
      },
    },
  },
  plugins: [],
};
