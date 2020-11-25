//开发环境配置
const configBaseList=require('./rollup.config');

const sourceMaps =require('rollup-plugin-sourcemaps');


configBaseList.output.map((item,index)=>{
    item.sourcemap=true;
});
// sourcemap=true;
configBaseList.plugins=[...configBaseList.plugins,...[
    sourceMaps()// debug
]
];
module.exports=configBaseList;