/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": "#ffffff",
        "primary-shade-light": "#f8fafc",
        "secondary-light": "#1e293b",
        "tertiary-light": "#475569",
        "accent-light": "#00B1F5",
        "accent-shade-light": "#3b82f6",

        "primary-dark": "#0f172a",
        "primary-shade-dark": "#1e293b",
        "secondary-dark": "#f1f5f9",
        "tertiary-dark": "#94a3b8",
        "accent-dark": "#3b82f6",
        "accent-shade-dark": "#60a5fa",
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: "class"
}

