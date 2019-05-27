# rollup常用plugin基本配置

提供alias，eslint，resolve，common，babel，replace等基本插件，引入方可传入同名属性进行相应的plugin配置（见[使用](#使用)）

---

## dev模式

提供了基本的启动服务以及热更新功能，服务启动在<http://127.0.0.1:8080>，热更新默认监听`./src`目录

## 生产环境

提供uglify和filesize功能

## 使用

安装

```bash
npm install --save-dev @qnpm/rollup-config
```

使用

```js
// rollup.config.js
const path = require('path')
const baseConfig = require('@qnpm/rollup-config');

const config = baseConfig({
    alias: {
        $common: './src/common'
    },
    replace: {
        env: JSON.stringify(process.env.NODE_ENV)
    },
    serve: {
        port: 7001
    },
    livereload: {
        watch: '/src' // default
    }
})

export default [
    {
        input: './src/test.js',
        output: [
            {
                file: 'dist/test.js',
                format: 'cjs'
            }
        ],
        ...config
    }
]
```

package.json配置

```js
{
    ...,
    "scripts": {
        "build": "cross-env NODE_ENV=production rollup -c ./rollup.config.js",
        "server": "cross-env NODE_ENV=development rollup -c ./rollup.config.js --watch",
        ...
    },
    ...
}
```
