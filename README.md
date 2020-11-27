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
rollup-plugin-eslint — js代码检测

需求
脚本代码是 ES6 语法和 相关 API 书写 
样式用 POSTCSS 相关插件的规则书写
应用需要在 IE9、Chrome 50、Firefox 50 浏览器中正常使用
项目包含有一些静态的图片、字体
项目代码中，通过 ES Module 方式引用了一些其他模块中的代码，这些模块通过 npm 或 yarn 安装在 node_modules 文件夹中。这些依赖到的文件代码，需要打包合并到目标文件中。
项目中包含一些在页面中直接引用的三方脚本和样式，这些三方文件，最好能通过 npm 或 yarn 进行安装和更新。这些文件，不想被打包合并到目标文件中。
开发过程中，所需生成的文件名称、数量可能有变化，每次打包前，希望清理目录，避免留下垃圾  rollup-plugin-clear
需要在 HTML 文件中自动按正确路径引用生成后的脚本、样式文件，且为了避免浏览器缓存，希望目标文件名称在每次生成后能有所变化。


git commit 
类型	描述
feat：新功能（feature）
fix	修复bug
docs	仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等
style	仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑
refactor	代码重构，没有加新功能或者修复bug
perf	优化相关，比如提升性能、体验
test	测试用例，包括单元测试、集成测试等
tips	增加一些提示信息，例如错误提示
chore：构建过程或辅助工具的变动
eg
git commit -am "fix: 2038 解决点击无反应的问题"
配置 ESLint 与 Prettier
在配置之前，先简单介绍依赖包的作用：
• eslint：eslint 核心库，负责整个 eslint 的调度工作
• @typescript-eslint/parser：ESLint的解析器，用于解析typescript，从而检查和规范Typescript代码
• @typescript-eslint/eslint-plugin：ESLint插件，包含了各类定义好的检测 typescript 代码的规范
• prettier：prettier 核心库
• eslint-config-prettier：解决 ESLint 中的样式规范和 prettier 中样式规范的冲突，以 prettier 的样式规范为准，使 ESLint 中的样式规范自动失效
• eslint-plugin-prettier：将 prettier 的规范作为 ESLint 规范来使用



/**
* @author Mondo
* @description list 数据结构 转换成 树结构
* @param {Array} data 需要转换的数据
* @param {String} id 节点 id
* @param {String} pid 父级节点 id
* @param {String} child 子树为节点对象的某个属性值
* @param {Object} labels 需要新增的字段名集合 { label: 'category_name' }
* @return {Array}
*
* @example
* formatListToTree({data: [{id:1}, {id: 2}, {id: 3, pid: 1}]})
* =>
* [ { id: 1, children: [ {id: 3, pid: 1} ] }, { id: 2 } ]
*/

@author 该类/方法的作者。
@class 表示这是一个类。
@function/@method 表示这是一个函数/方法(这是同义词)。
@private 表示该类/方法是私有的，JSDOC 不会为其生成文档。
@name 该类/方法的名字。
@description 该类/方法的描述。
@param 该类/方法的参数，可重复定义。
@return 该类/方法的返回类型。
@link 创建超链接，生成文档时可以为其链接到其他部分。
@example 创建例子。







 1支持异步 
 2.文档说明
 3.按需使用
 4。可引入其它文件
 

babel
 配置：babel 运行必须要有配置参数，一般写在名为 babel.config.js 或 .babelrc 的文件中
plugin： 是完成单一功能的插件，有些插件需要进行配置
preset：一组完成特定功能的 plugins 的组合
polyfill：babel 的各路 preset 通常只是转换 JS 语法，不能直接提供一些新对象、新 API 的支持。 polyfill 是用来转换这些新鲜 API 的方式，它也是通过 plugin 来进行的。


[!] TypeError: eslint is not a function
https://stackoverflow.com/questions/54293089/rollup-and-eslint-how-can-i-fix-this-error-typeerror-eslint-is-not-a-function

[!] Error: Could not resolve entry module (rollup.config.js).

    at error (/Users/yulang/Desktop/项目/myproject/baselib/node_modules/rollup/dist/shared/rollup.js:5253:30)
    at ModuleLoader.loadEntryModule (/Users/yulang/Desktop/项目/myproject/baselib/node_modules/rollup/dist/shared/rollup.js:18424:20)
    at async Promise.all (index 0)

// 按需引入
1.以方法类型进行拆分  eg lib-array-index lib -doubble-index
2

https://www.coder.work/article/1050944

https://github.com/jsdoc/jsdoc/issues/517

https://stackoverflow.com/questions/37989710/how-to-use-jsdoc-in-local-project

https://github.com/jsdoc/jsdoc/issues/1155


生成ts文档
https://github.com/TypeStrong/TypeDoc

Warning: You are running in an unsupported TypeScript version! TypeDoc supports 3.9.x || 4.0.x
https://stackoverflow.com/questions/57216110/the-angular-compiler-requires-typescript-3-4-0-and-3-5-0-but-3-5-3-was-found


例如，在桌面端浏览器视口尺寸为650px，那么 1vw = 650 * 1% = 6.5px（这是理论推算的出，如果浏览器不支持0.5px，那么实际渲染结果可能是7px）

20vw=375px
2=37.5