module.exports = {
  presets: [
    [
      '@babel/preset-env', // 支持使用最新等js语法
      {
        modules: false,
        useBuiltIns: 'usage',
      },
    ],
    ['minify', {builtIns: false}],
  ],
  plugins: [
    '@babel/plugin-external-helpers',
    '@babel/plugin-transform-runtime', // 若使用 babel-runtime，可以用这个插件
  ],
};
