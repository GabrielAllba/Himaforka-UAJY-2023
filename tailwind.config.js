/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: 'white',

                    secondary: '#242879',

                    accent: '#F97C44',

                    neutral: '#FFE1BF',

                    'base-100': '#E8FEFF',

                    info: '#3ABFF8',

                    success: '#36D399',

                    warning: '#FBBD23',

                    error: '#F87272',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
};
