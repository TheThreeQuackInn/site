/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
    client: {
        addTypename: true,
        includes: [path.join(__dirname, '../../**/*.ts')],
        service: {
            name: '5e-srd-graphql',
            url: 'https://www.dnd5eapi.co/graphql',
        },
    },
};
