/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { bg: "#0d0e11", panel: "#14161a", ink: "#ecebe6", mute: "#9a9ca3", line: "#25272d", accent: "#8fb0ff" },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"], display: ["var(--font-display)", "Georgia", "serif"] },
    },
  },
  plugins: [],
};
