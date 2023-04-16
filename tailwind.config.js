/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
    content: [
        "./pages/**/*.{ts,tsx}",
        "./stories/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: "#111111",
                white: "#FFFFFF",
                yellow: "#EF8F12",
                gray: "#181818"
            },
            fontFamily: {
                primary: ["Red Hat Display", "sans-serif"],
            },
        },
        fontSize: {
            "body-small": "0.812rem",
            body: "1rem",
            "body-bold": "1rem",
            "body-medium": "1.125rem",
            "body-large": "1.250rem",
            h6: "1.250rem",
            h5: "1.562rem",
            h4: "1.938rem",
            h3: "2.438rem",
            h2: "3.062rem",
            h1: "3.812rem",
            sm: "0.875rem",
        },
    },
    
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant("children", "&>*");
        }),
        // require("tailwind-scrollbar"),
    ],
};
