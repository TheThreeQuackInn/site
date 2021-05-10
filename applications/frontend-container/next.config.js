/* eslint-disable */

const withTM = require('next-transpile-modules')([
    '../../packages/client/conjure-animals',
    '../../packages/client/common',
]);

module.exports = withTM({
    future: {
        webpack5: true,
    },
});
