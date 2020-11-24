
import JsonPluginJson from 'rollup-plugin-json'
import { uglify } from 'rollup-plugin-uglify';
import { terser } from 'rollup-plugin-terser';
import RollupPluginBabel from 'rollup-plugin-babel'
import RollupPluginBuble from 'rollup-plugin-buble'
export default{
  input:'./src/index.js', //入口文件
  output:{               //出口文件
    file: 'dist/bundle.js',
    format: 'umd',// 源码输出格式 umd:兼容amd,cjs,iife三种模块规范
    name: '37util'
  },
  plugins: [
   JsonPluginJson(),
  //  uglify(), //压缩es5
  //  terser({  //压缩es6
  //     output: {
  //       ascii_only: true // 仅输出ascii字符
  //     },
  //     compress: {
  //       pure_funcs: ['console.log'] // 去掉console.log函数
  //     }
  //  }), 
   RollupPluginBuble({
    objectAssign: 'Object.assign',
    exclude: ['node_modules/**']
 }),
   RollupPluginBabel({
    babelrc: false,
    presets: [['@babel/preset-env', { modules: false }]],
    include: ['src/**'],
    exclude: ['node_modules/**'], // 避免转译第三方脚本
    // plugins: ['external-helpers', 'babel-plugin-transform-object-rest-spread'], 
    runtimeHelpers: true, // 用来开启transform-runtme
    comments: false  // 删除注释
  })
  ]
}