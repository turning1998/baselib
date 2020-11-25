// 宽度自适应
var rePositionHorizon = function (psdWidth) {
    if (psdWidth === void 0) { psdWidth = 750; }
    var width = document.documentElement.clientWidth || document.body.clientWidth;
    var ratio = width / psdWidth;
    document.getElementsByTagName('html')[0].style.fontSize = 100 * ratio + 'px';
};
/**
 * @function rePosition
 * @desc 重置屏幕rem
 */
function rePosition(psdWidth) {
    rePositionHorizon(psdWidth);
}
var listenResize = function (psdWidth) {
    if (psdWidth === void 0) { psdWidth = 750; }
    /* 实时监听屏幕尺寸变化 */
    window.addEventListener('resize', function () {
        rePosition(psdWidth);
    }, false);
};

var Sum = function (a, b) {
    return a + b;
};
// export default listenResize;
// export default () => {
//   return {Sum, listenResize};
// };
exports.Sum = Sum;
exports.listenResize = listenResize;
//# sourceMappingURL=es.js.map
