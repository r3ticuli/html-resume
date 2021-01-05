module.exports = {
  // purge: {
  //   enabled: false,
  //   content: ["./src/**/*.hbs", "./src/**/*.js", "./src/**/*.scss"],
  // },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      mono: ["Fira Code"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
