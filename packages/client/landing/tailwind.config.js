const colors = require('tailwindcss/colors');

module.exports = {
    darkMode: 'class',
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        content: ['../**/*.tsx'],
    },
    theme: {
        extend: {},
        colors: {
            white: colors.white,
            gray: colors.blueGray,
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
