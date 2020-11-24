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