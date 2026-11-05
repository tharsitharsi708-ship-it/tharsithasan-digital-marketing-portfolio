const c = (n) => `rgb(var(--${n}) / <alpha-value>)`;
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { bg: c("bg"), surface: c("surface"), ink: c("ink"), muted: c("muted"), line: c("line"), link: c("link"), accent: c("accent") },
      fontFamily: { display: ["var(--font-display)", "system-ui", "sans-serif"], sans: ["var(--font-body)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
