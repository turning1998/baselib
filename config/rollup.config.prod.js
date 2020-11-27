// 生产环境
// import {uglify} from 'rollup-plugin-uglify';
import {terser} from 'rollup-plugin-terser';
import configBaseList from './rollup.config';
configBaseList.map((item, index) => {
  item.plugins = [
    ...item.plugins,
    ...[
      // uglify(), //压缩es5
      terser({
        //压缩es6
        output: {
          ascii_only: true, // 仅输出ascii字符
        },
        compress: {
          pure_funcs: ['console.log'], // 去掉console.log函数
        },
      }),
    ],
  ];
});
// configBaseList.plugins = [
//   ...configBaseList.plugins,
//   ...[
//     // uglify(), //压缩es5
//     terser({
//       //压缩es6
//       output: {
//         ascii_only: true, // 仅输出ascii字符
//       },
//       compress: {
//         pure_funcs: ['console.log'], // 去掉console.log函数
//       },
//     }),
//   ],
// ];
module.exports = configBaseList;
