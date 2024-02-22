/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily:{
        "pixel": ["Pixelify Sans", "sans-serif"],
        "glich": ["Rubik Glitch", "sans-serif"],
        "pixel2": ["Press Start 2P", "sans-serif"],
        "dmmono": ["DM Mono", "sans-serif"],
      }
    },
  },
  plugins: [],
}

