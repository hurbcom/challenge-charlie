const path = require('path')

module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@services': path.resolve(__dirname, 'src/services'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@config': path.resolve(__dirname, 'src/config'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
        },
    },
}
