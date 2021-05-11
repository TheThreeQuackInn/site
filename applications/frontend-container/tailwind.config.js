const colors = require('tailwindcss/colors');

module.exports = {
    darkMode: 'class',
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        content: ['../../packages/client/**/*.tsx', './**/*.tsx'],
    },
    theme: {
        extend: {},
        colors: {
            white: colors.white,
            gray: colors.gray,
            primary: {
                default: '#11978C',
                100: '#83F1E8',
                200: '#55ECE0',
                300: '#27E7D7',
                400: '#16C5B7',
                500: '#11978C',
                600: '#0C6A62',
                700: '#073C37',
                800: '#020E0D',
                900: '#000000',
            },
        },
        container: (theme) => ({
            padding: {
                default: theme('spacing.4'),
            },
            screens: {
                sm: '540px',
                md: '720px',
                lg: '960px',
                xl: '1140px',
            },
        }),
    },
    variants: {
        extend: {
            outline: ['dark'],
        },
    },
    plugins: [],
};
