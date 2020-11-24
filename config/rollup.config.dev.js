//开发环境配置
const configBaseList=require('./rollup.config');
const sourceMaps =require('rollup-plugin-sourcemaps')
configBaseList.plugins=[...configBaseList.plugins,...[
  sourceMaps(),// debug
]
]
module.exports=configBaseList;