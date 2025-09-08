/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",   // azul oscuro
        secondary: "#2563eb", // azul más claro
      },
    },
  },
  plugins: [],
};
