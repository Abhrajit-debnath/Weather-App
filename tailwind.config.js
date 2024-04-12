/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      spacing: {
        100: "30%",
      },
      screens: {
        xs: "300px",
      },
      minHeight: {
        1: "66vh",
      },
    },
  },
  plugins: [],
};
