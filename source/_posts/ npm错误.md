---
title: NPM错误
date: 2016-04-23 19:31:16
tags:
---
当执行 npm install 的时候，出现下面的错误：

```js
module.js:340
    throw err;
          ^
Error: Cannot find module '/usr/local/lib/node_modules/npm/bin/node_modules/npm/bin/npm-cli.js'
    at Function.Module._resolveFilename (module.js:338:15)
    at Function.Module._load (module.js:280:25)
    at Function.Module.runMain (module.js:497:10)
    at startup (node.js:119:16)
    at node.js:929:3
```

可行的解决方法是执行

```shell
npm install -g grunt-cli	
```

上述问题出现的前提是 npm 的版本太低，我在执行了` npm i npm` 后，并删除了 `/usr/local/bin` 目录下的对应 ` npm` 目录，并将上述执行命令后生成的最新版本的` npm` 拷贝至`/usr/local/bin/` 。此时，执行`npm` 或者`cnpm` 都会报错。