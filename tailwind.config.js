module.exports = {
  purge: {
    enabled: true,
    content: ["./public/**/*.html", "./public/**/*.js", "./public/**/*.css"],
  },
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
