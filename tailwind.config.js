/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // You can define your widget's custom colors here
                primary: 'var(--primary-color)',
                secondary: 'var(--secondary-color)',
            },
            fontFamily: {
                // You can define your widget's custom fonts here
                custom: 'var(--font-family)',
            },
        },
    },
    plugins: [],
}