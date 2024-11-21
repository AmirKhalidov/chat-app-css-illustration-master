/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            screens: {
                mine: '850px',
                mine2: '950px',
            },
        },
    },
    plugins: [],
};
