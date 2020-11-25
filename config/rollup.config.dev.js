//开发环境配置
import configBaseList from './rollup.config';
import sourceMaps from 'rollup-plugin-sourcemaps';
configBaseList.output.map((item, index) => {
  item.sourcemap = true;
});
// sourcemap=true;
configBaseList.plugins = [
  ...configBaseList.plugins,
  ...[
    sourceMaps(), // debug
  ],
];
module.exports = configBaseList;
