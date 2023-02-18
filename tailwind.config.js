/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    darkMode: "class",
    theme: {
        container: {
            screens: {
                sm: "540px",
                md: "720px",
                lg: "960px",
                xl: "1140px",
                "2xl": "1320px",
            },
            padding: {
                DEFAULT: "1rem",
                sm: "1rem",
                lg: "1rem",
                xl: "1rem",
                "2xl": "3rem",
            },
            center: true,
        },
        extend: {
            colors: {
                limeGreen: "hsl(163, 72%, 41%)",
                brightRed: "hsl(356, 69%, 56%)",
                facebook: "hsl(208, 92%, 53%)",
                twitter: "hsl(203, 89%, 53%)",
                youtube: "hsl(348, 97%, 39%)",
                toggle: "hsl(230, 22%, 74%)",
                dark: "hsl(230, 17%, 14%)",
                dark2: "hsl(232, 19%, 15%)",
                cardDark: "hsl(228, 28%, 20%)",
                textDark: "hsl(228, 34%, 66%)",
                light: "hsl(225, 100%, 98%)",
                card: "hsl(227, 47%, 96%)",
                textLight: "hsl(228, 12%, 44%)",
                instaFrom: "hsl(37, 97%, 70%)",
                instaTo: "hsl(329, 70%, 58%)",
                hoverLight: "hsla(232, 33%, 91%, 1)",
                hoverDark: "hsla(228, 26%, 27%, 1)",
                toggleFrom: "hsl(210, 78%, 56%)",
                toggleTo: "hsl(146, 68%, 55%)",
            },
        },
    },
    plugins: [],
};
