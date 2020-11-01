module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {},
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
    variants: {},
    plugins: [],
};
