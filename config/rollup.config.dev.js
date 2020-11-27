//开发环境配置
import configBaseList from './rollup.config';
import sourceMaps from 'rollup-plugin-sourcemaps';
configBaseList.map((item, index) => {
  item.output.map(val => {
    val.sourcemap = true;
  });
  item.plugins = [
    ...item.plugins,
    ...[
      sourceMaps(), // debug
    ],
  ];
});
module.exports = configBaseList;
