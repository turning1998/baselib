// 基本rollup.js配置
const JsonPluginJson = require('rollup-plugin-json');
const RollupPluginBabel = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve');
const RollupPluginBuble = require('rollup-plugin-buble')
const async = require('rollup-plugin-async');
const commonjs=require('rollup-plugin-commonjs')
const path = require('path')
const resolveFile = function (filePath) {
  return path.join(__dirname, '..', filePath)
}
module.exports = {
  input: resolveFile('./src/index.js'), //入口文件
  output: [
    {               //cjs模式
      file: resolveFile('dist/bundle-cjs.js'),
      format: 'cjs',//commonjs模块
      name: '37util-cjs',
      sourcemap: true
    },
    {               //出口文件
      file: resolveFile('dist/bundle-es.js'),
      format: 'es',// es模块
      name: '37util-es',
      sourcemap: true
    },
    {               //出口文件
      file: resolveFile('dist/bundle-umd.js'),
      format: 'umd',// 浏览器能识别模块
      name: '37util-umd',
      sourcemap: true
    }
  ],
  plugins: [
    async(),
    resolve(),
    commonjs(),// 在其他插件转换模块之前 - 这是为了防止其他插件的改变破坏CommonJS的检测。
    JsonPluginJson(),
    RollupPluginBuble({
      objectAssign: 'Object.assign',
      exclude: ['node_modules/**']
    }),

    RollupPluginBabel({
      presets: [['@babel/preset-env']],
      // include: ['src/**'],
      exclude: ['node_modules/**'], // // 防止打包node_modules下的文件
      plugins: [
        "@babel/transform-runtime",
        "@babel/transform-regenerator",
        "@babel/transform-async-to-generator",
      ],
      runtimeHelpers: true, // 用来开启transform-runtme
    })
  ]
}