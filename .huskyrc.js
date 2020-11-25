// 在 pre-commit commit 前的阶段，执行 lint-staged 中的命令。
// 使用 husky 与 lint-staged 来强制开发者必须将不符合规则的代码修改完，才能提交代码
module.exports = {
  hooks: {
    'commit-msg': 'commitlint -e $HUSKY_GIT_PARAMS',
    'pre-commit': 'lint-staged',
  },
};