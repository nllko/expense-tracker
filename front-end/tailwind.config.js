/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                crust: 'var(--crust)',
                mantle: 'var(--mantle)',
                core: 'var(--core)',
                green: 'var(--green)',
                red: 'var(--red)',
            },
        },
    },
    plugins: [],
}

