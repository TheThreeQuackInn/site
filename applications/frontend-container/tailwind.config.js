/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const baseConfig = require('@threequackinn/client-common/tailwind.config.js');

module.exports = {
    ...baseConfig,
    purge: {
        content: [path.join(__dirname, 'src/*.tsx')],
    },
};
