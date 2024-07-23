/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                laptop: "1024px",
            },
            gridTemplateColumns: {
                // Simple 16 column grid
                16: "repeat(16, minmax(0, 1fr))",
            },
            colors: {
                gradientPurple: "#925FE2",
                gradientLight: "#af8aea",
                customPurple: "#925FE2",
            },
        },
        plugins: [],
    },
};
