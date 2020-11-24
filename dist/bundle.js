(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['37util'] = factory());
}(this, (function () { 'use strict';

  var version = "1.0.0";

  function index () {
    console.log('version ' + version);
  }

  return index;

})));
