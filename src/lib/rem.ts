// 宽度自适应
export const rePositionHorizon = (psdWidth = 750) => {
  const width = document.documentElement.clientWidth || document.body.clientWidth;
  const ratio = width / psdWidth;
  document.getElementsByTagName('html')[0].style.fontSize = 100 * ratio + 'px';
};

// 高度自适应
export const rePositionVertical = (psdHeight = 1334) => {
  const height = document.documentElement.clientHeight || document.body.clientHeight;
  const ratio = height / psdHeight;
  document.getElementsByTagName('html')[0].style.fontSize = 100 * ratio + 'px';
};

/**
 * @function rePosition
 * @desc 重置屏幕rem
 */
function rePosition(psdWidth: number) {
  rePositionHorizon(psdWidth);
}
export const listenResize = (psdWidth = 750) => {
  /* 实时监听屏幕尺寸变化 */
  window.addEventListener(
    'resize',
    function () {
      rePosition(psdWidth);
    },
    false
  );
};
