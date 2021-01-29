/**
 * 像素转换
 * @param {Number} px - 750视觉稿像素
 * @return {Number} 屏幕上实际像素
 */
export const px2hd = (px?: number): number => {
  if (!px) return 0;
  const ONE_REM =
    parseInt(document.documentElement.style.fontSize || '100', 10) || 100;
  const SCALE = ONE_REM / 100;
  return Number((px * SCALE).toFixed(1));
};

/**
 * 判断是否方法
 * @param {Array} obj
 * @return {Boolean} bool
 */
export function isFunction(obj: any) {
  return Object.prototype.toString.call(obj) === '[object Function]';
}
