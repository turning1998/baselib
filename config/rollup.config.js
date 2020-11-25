// 基本rollup.js配置
import RollupPluginBabel from 'rollup-plugin-babel';
// import resolve from('rollup-plugin-node-resolve'); //外部引入npm 配合external,
import RollupPluginBuble from 'rollup-plugin-buble';
import async from 'rollup-plugin-async';
import json from 'rollup-plugin-json';
import clear from 'rollup-plugin-clear';
import commonjs from 'rollup-plugin-commonjs'; //支持export default导入
import copy from 'rollup-plugin-copy';
import path from 'path';
import html from 'rollup-plugin-gen-html';
import {eslint} from 'rollup-plugin-eslint';
import typescript from 'rollup-plugin-typescript2';
const resolveFile = function (filePath) {
  return path.join(__dirname, '..', filePath);
};
export default {
  experimentalCodeSplitting: true,
  input: resolveFile('./src/index.ts'), //入口文件
  output: [
    {
      //cjs模式
      file: resolveFile('dist/cjs.js'),
      format: 'cjs', //commonjs模块
      name: '37util-cjs',
    },
    {
      //出口文件
      file: resolveFile('dist/es.js'),
      format: 'es', // es模块
      name: '37util-es',
    },
    {
      //出口文件
      file: resolveFile('dist/umd.js'),
      format: 'umd', // 浏览器能识别模块
      name: '37util-umd',
    },
  ],
  external: [], // 需要外部引用的包添加到数组中，rollup 即不会将其打包到打包文件中。

  plugins: [
    clear({targets: ['dist']}), //清除dist目录
    copy({'src/assets': 'dist/assets'}), //复制静态文件
    typescript({useTsconfigDeclarationDir: true}), //useTsconfigDeclarationDir使用根目录tsconfig
    async(),
    json(),
    // resolve({extensions: ['.jsx', '.js', 'ts']}),
    commonjs(), //  // 支持代码中引用 CommonJS 规格的模块 在其他插件转换模块之前 - 这是为了防止其他插件的改变破坏CommonJS的检测。
    RollupPluginBuble({
      objectAssign: 'Object.assign',
      exclude: ['node_modules/**'],
    }),
    eslint({}),
    // 从模板生成 html 文件，并自动引入生成的脚本和样式
    html({
      template: 'src/index.html',
      target: '../index.html',
      eplaceToMinScripts: true,
    }),
    RollupPluginBabel({
      presets: [['@babel/preset-env']],
      // include: ['src/**'],
      exclude: ['node_modules/**'], // 防止打包node_modules下的文件
      plugins: [
        '@babel/transform-runtime',
        '@babel/transform-regenerator',
        '@babel/transform-async-to-generator',
      ],
      runtimeHelpers: true, // 用来开启transform-runtme
    }),
  ],
};
