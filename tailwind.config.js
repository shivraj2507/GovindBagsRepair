/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "4xl": ["2.25rem", { lineHeight: "3.75rem" }],
        "4.5xl": ["2.5rem", { lineHeight: "3.75rem" }],
      },
      maxWidth: ({ theme, breakpoints }) => ({
        lg2: "33.75rem",
        "8xl": "86rem",
        "9xl": "90rem",
        "12xl": "102rem",
      }),
      padding: {
        27: "6.75rem",
      },
      colors: {
        SkyBlue: "#34BBFF",
        lightSkyBlue: "#DBF2FF",
        darkSkyBlue: "#0693e3",
        darkGrey: "#475166",
        lightGrey: "#595959",
        black: "#3F3F3F",
        lightBlue: "#DBF2FF",
        bluePrimary: "#3C50E0",

        colorYellow: "#E7C62F",
        Purple: "#C1C9FF",
        dark: "#3C50E0",
        stoke: "#3C50E0",
      },
    },
  },
  plugins: [],
};
