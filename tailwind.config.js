/* eslint-disable global-require */

'use strict';

const reactComponentsSafeList = require('@flybywiresim/react-components/build/usedCSSClasses.json');

module.exports = {
    mode: 'jit',
    purge: {
        options: { safelist: [...reactComponentsSafeList] },
        content: [
            './pages/**/*.{js,ts,jsx,tsx}',
            './components/**/*.{js,ts,jsx,tsx}',
            './node_modules/@flybywiresim/react-components/build/usedCSSClasses.json',
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                '3xl': '1792px',
                '4xl': '2048px',
            },
            spacing: {
                128: '32rem',
                160: '40rem',
                192: '48rem',
                224: '56rem',
                256: '64rem',
                288: '72rem',
                320: '80rem',
                352: '88rem',
                384: '96rem',
            },
            colors: {
                blue: { 'dark-contrast': '#1d2838' },
                discord: { DEFAULT: '#7289DA' },
            },
            typography: {
                '2xl': {
                    css: {
                        'maxWidth': '73ch',
                        'color': 'hsl(0, 0%, 94%)',
                        'h1, h2, h3, h4, h5, h6': {
                            paddingTop: '.4em',
                            fontWeight: '500',
                        },
                        'h1': {
                            color: 'hsl(0, 0%, 100%)',
                            fontSize: '2.5rem',
                        },
                        'h2': {
                            color: 'hsl(0, 0%, 100%)',
                            fontSize: '1.7rem',
                        },
                        'h3': {
                            color: 'hsl(0, 0%, 100%)',
                            fontSize: '1.5rem',
                        },
                        'p': {
                            paddingTop: '.75em',
                            marginBottom: '0',
                        },
                        'p:first-child, h1 + p, h2 + p, h3 + p, h4 + p, h5 + p, h6 + p': {
                            paddingTop: '0',
                            // eslint-disable-next-line object-curly-newline
                        },
                    },
                },
            },
        },
    },
    plugins: [
        require('@flybywiresim/tailwind-config'),
        require('@tailwindcss/typography'),
    ],
};
