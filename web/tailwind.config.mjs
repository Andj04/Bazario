/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "../../packages/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          primary:  "#0066dd",
          secondary:"#00c0a3",
          accent:   "#ff9f1c",
          neutral:  "#f5f7fa",
        },
        fontFamily: {
          sans: ["var(--font-sans)"],
          display: ["var(--font-display)"],
        },        
      },
    },
    plugins: [],
  };