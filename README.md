# rollup常用plugin基本配置

提供alias，eslint，resolve，common，babel，replace，postcss等基本插件，引入方可传入同名属性进行相应的plugin配置（见[使用](#使用)）

---

## dev模式

提供了基本的启动服务以及热更新功能，服务启动在<http://127.0.0.1:8080>，热更新默认监听`./src`目录

## 生产环境

提供uglify和filesize功能

## 使用

安装

```bash
yarn add cerate-rollup-config --dev
```

使用

```js
// rollup.config.js
const path = require('path')
const baseConfig = require('create-rollup-config');

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

## 部分plugin介绍

### postcss

默认开启了minimize功能

参考：[rollup-config-postcss](https://github.com/egoist/rollup-plugin-postcss)

### html
将html文件转为字符串，并支持压缩

参考：[rollup-plugin-string-html](https://github.com/hyhappy/rollup-plugin-string-html)

## License
MIT © [hyhappy](mailto:1056605736@qq.com)