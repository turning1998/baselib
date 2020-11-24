https://zhuanlan.zhihu.com/p/75717476
# baselib
基于rollup打包的库
webpack                                    rollup                      对比
1.致力于复杂SPA的模块化构建                     类库（纯js项目）
2.打包后会生成_webpack_require等             没有多余代码，执行效率更高
runtime代码              
3.   不支持导出‘es’模块文件                   支持导出`es`模块文件
通过loader处理各种各样的资源依赖                     
按需加载                                     模块过于静态化，HMR很难实现
提取公共模块                           仅面向ES module，无法可靠的处理`commonjs以及umd依赖`



rollup常用插件
rollup-plugin-json            从json文件中读取数据
rollup-plugin-uglify         对rollup打包后的代码进行压缩，可以引入插件rollup-plugin-uglify，但是这个插件只支持es5，不支持es6+,  所以实际开发中建议在代码被rollup打包后另外使用工具压缩，比如uglify-es和terser。但是uglify-es作者目前不再维护，至于terser是对uglify-es的fork，并且保留了与uglify-es和uglify-js@3的API和CLI兼容性，在最新版的webpack@4中也用terser-webpack-plugin取代了uglify-webpack-plugin，所以推荐使用terser来压缩es6+代码。

rollup-plugin-babel：使用Babel编译ES 2015+代码
  使用rollup-plugin-babel将您的ES 2015+代码转换为向后兼容的JavaScript版本


rollup-plugin-buble:显示bundle文件大小 将 ES6+代码编译成 ES2015 标准。配合rollup-plugin-async来支持async/await。



## 安装 rollup.js 基础模块
npm i --save-dev rollup 

## 安装 rollup.js 编译本地开发服务插件
npm i --save-dev rollup-plugin-serve

## 安装 rollup.js 编译代码混淆插件
npm i --save-dev rollup-plugin-uglify

## 安装 rollup.js 编译ES6+的 babel 模块
npm i --save-dev @rollup/plugin-babel @babel/core @babel/preset-env

npm i -D rollup-plugin-node-resolve使用Nodejs节点分辨率算法定位modules，以便使用第三方模块node_modules。、帮助 Rollup 查找外部模块，然后导入
rollup-plugin-buble:显示bundle文件大小

external属性
使用rollup打包，我们在自己的库中需要使用第三方库，例如lodash等，又不想在最终生成的打包文件中出现jquery。这个时候我们就需要使用external属性

导出模式
我们可以将自己的代码导出成commonjs模块，es模块，以及浏览器能识别的模块，通过如下方式设置：
{
  input: 'src/main.js',
  external: ['ms'],
  output: [
	{ file: pkg.main, format: 'cjs' },
	{ file: pkg.module, format: 'es' },
	{ file: pkg.module, format: 'umd' }
  ]
}

开发环境 debug 
生产环境：
代码uglify
关闭sourceMap
保证代码混淆，编译结果不可读
体积压缩
信息脱敏

支持打包 npm 包
默认情况下，rollup 是不支持将引入的 npm 包进行打包的，假设我门将 lodash 引入：
需要 @rollup/plugin-node-resolve 这个插件来对 npm 包进行处理


 npm i rollup-plugin-commonjs -D 转换 CommonJs 成 ES Module而 rollup 是不支持 import 的













 1支持异步 
 2.文档说明
 3.按需使用
 4。可引入其它文件
 