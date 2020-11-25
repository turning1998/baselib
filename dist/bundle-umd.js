(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['37util-umd'] = {}));
}(this, (function (exports) { 'use strict';

  /**
   * 
   * @desc 判断两个数组是否相等
   * @param {Array} arr1 
   * @param {Array} arr2 
   * @return {Boolean}
   */
  function index (arr1, arr2) {
    if (arr1 === arr2) {
      return true;
    }

    if (arr1.length != arr2.length) {
      return false;
    }

    for (var i = 0; i < arr1.length; ++i) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  }

  var funcA = function funcA() {
    console.log('rollup');
    return 'vin11323223232311ce';
  };

  exports.array = index;
  exports.default = funcA;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bundle-umd.js.map
