import {listenResize} from './lib/rem/index';
const Sum = (a: number, b: number): number => {
  return a + b;
};
/**
* @author Mondo
* @description list 数据结构 转换成 树结构
* @param {Array} data 需要转换的数据
* @param {String} id 节点 id
* @param {String} pid 父级节点 id
* @param {String} child 子树为节点对象的某个属性值
* @param {Object} labels 需要新增的字段名集合 { label: 'category_name' }
* @return {Array}
*
* @example
* formatListToTree({data: [{id:1}, {id: 2}, {id: 3, pid: 1}]})
* =>
* [ { id: 1, children: [ {id: 3, pid: 1} ] }, { id: 2 } ]
*/
async function name() {
  await 1;
}
// export default listenResize;
// export default () => {
//   return {Sum, listenResize};
// };
exports.Sum = Sum;
exports.listenResize = listenResize;
exports.name = name;
