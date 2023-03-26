/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "0.625rem",
        screens: {
          wtf: {
            min: "1920px",
          },
        },
      },

      fontFamily: {
        sans: "'Poppins', sans-serif",
      },

      colors: {
        yellow: {
          500: "#F6CD25",
        },
        red: {
          500: "#DC163B",
        },
      },
    },
  },
  plugins: [],
};
