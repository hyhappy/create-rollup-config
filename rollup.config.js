const baseConfig = require('./scripts/rollup.config')

module.exports = [{
    input: 'src/main.js',
    output: [
        {
            file: 'dist/main.js',
            format: 'umd',
            name: 'Main'
        }
    ],
    ...baseConfig()
}]