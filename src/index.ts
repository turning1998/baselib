import {listenResize} from './lib/rem/index';
const Sum = (a: number, b: number): number => {
  return a + b;
};
// export default listenResize;
// export default () => {
//   return {Sum, listenResize};
// };
exports.Sum = Sum;
exports.listenResize = listenResize;
