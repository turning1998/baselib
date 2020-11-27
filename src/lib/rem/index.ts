
export const rePositionHorizon = () => {
  const vwFontsize=75; //iphone 6 尺寸的根元素大小基准值
  const vwDesigin=750;
  const mediaMax=window.matchMedia('@media screen and (max-width: 320px)')
  const mediaMin=window.matchMedia('@media screen and (min-width: 540px)')
  document.getElementsByTagName('html')[0].style.fontSize = (vwFontsize/(vwDesigin/2))*100+'vw';
  if(mediaMax.matches){   //大于320
    document.getElementsByTagName('html')[0].style.fontSize = 64+'px';
  }
  if(mediaMin.matches){   //大于540
    document.getElementsByTagName('html')[0].style.fontSize = 108+'px';
  }
  document.getElementsByTagName('body')[0].style.maxWidth = 540+'px';
  document.getElementsByTagName('body')[0].style.minWidth =320+'px';
};
export const listenResize = () => {
  /* 实时监听屏幕尺寸变化 */
  window.addEventListener(
    'resize',
    function () {
      rePositionHorizon();
    },
    false
  );
};
// 1rem =75px