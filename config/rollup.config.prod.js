// 生产环境
const {uglify} =require('rollup-plugin-uglify') 
const {terser} =require('rollup-plugin-terser');
const configBaseList=require('./rollup.config');
configBaseList.plugins=[...configBaseList.plugins,...[
    uglify(), //压缩es5
    terser({  //压缩es6
      output: {
        ascii_only: true // 仅输出ascii字符
      },
      compress: {
        pure_funcs: ['console.log'] // 去掉console.log函数
      }
   }), 
  ]
]
module.exports=configBaseList;