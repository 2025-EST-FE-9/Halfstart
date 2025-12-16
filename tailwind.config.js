/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        nike: [
          "Inter",
          "Noto Sans KR",
          "Apple SD Gothic Neo",
          "Malgun Gothic",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};