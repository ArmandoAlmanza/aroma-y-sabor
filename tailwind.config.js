/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                brown: {
                    light: "#DDD3CA",
                    dark: "#29170F",
                },
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
              },
        },
    },
    plugins: [],
};
