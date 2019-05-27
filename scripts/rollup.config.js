const aliasPlugin = require('rollup-plugin-alias');
const eslintPlugin = require('rollup-plugin-eslint');
const resolvePlugin = require('rollup-plugin-node-resolve');
const commonjsPlugin = require('rollup-plugin-commonjs');
const babelPlugin = require('rollup-plugin-babel');
const replacePlugin = require('rollup-plugin-replace');

const servePlugin = require('rollup-plugin-serve');
const livereloadPlugin = require('rollup-plugin-livereload')

const filesize = require('rollup-plugin-filesize');
const uglify = require('rollup-plugin-uglify');
const { minify } = require('uglify-es');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = NODE_ENV === 'development';

module.exports = (config = {}) => {
    const {
        eslint,
        alias = {},
        replace = {},
        serve = {},
        livereload = {},
        commonjs = {}
    } = config

    let plugins = [
        aliasPlugin({
            resolve: ['.js'],
            ...alias
        }),
        replacePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
            NODE_ENV: JSON.stringify(NODE_ENV),
            ...replace
        }),
        resolvePlugin(),
        commonjsPlugin({
            // non-CommonJS modules will be ignored, but you can also
            // specifically include/exclude files
            include: 'node_modules/**',
            ...commonjs
        })
    ]

    if (eslint) {
        plugins.push(eslintPlugin(eslint))
    }
    plugins.push(babelPlugin({
        runtimeHelpers: true,
        exclude: 'node_modules/**' // only transpile our source code
    }))

    if (isDev) {
        plugins = plugins.concat([
            servePlugin(Object.assign({
                contentBase: './',   // 启动文件夹;
                host: '127.0.0.1',      // 设置服务器;
                port: 8080
            }, serve)),
            livereloadPlugin({
                watch: 'src/'     // 监听文件夹;
            }, livereload)
        ])
    } else {
        plugins = plugins.concat([uglify(
            {
                compress: {
                    drop_console: true
                }
            },
            minify
        ),
        filesize()])
    }

    return {
        plugins
    }
}

