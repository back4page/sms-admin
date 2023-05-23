/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        "custom-gray": "#EFEFF6",
        "custom-gray2": "#3D405C",
        "custom-gray3": "#71748D",
        "custom-blue": "#0E0C28",
        "custom-blue2": "#7A80B4",
        "custom-blue3": "#F9F9FF",
        "custom-blue4": "#484c75",
        "custom-blue5": "#242849",
        "custom-indigo": "#A4AADB",
        "custom-indigo2": "#7171a6",
      },
    },
  },
  plugins: [],
};
