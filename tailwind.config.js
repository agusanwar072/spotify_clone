/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#789DBC",
        primary2: "#C2FFC7",
        secondary: "#78B3CE",
        secondary2: "#FC8F54",
      },
      fontFamily: {
        title: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
