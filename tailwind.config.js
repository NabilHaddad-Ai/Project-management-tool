/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#050816", // deep, elegant dark
        surface: "#0b1120",
        card: "#020617",
        accent: "#6366f1",    // subtle indigo accent
        border: "#1f2937",
        muted: "#9ca3af",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15,23,42,0.85)",
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
