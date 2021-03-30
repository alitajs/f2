/**
 * 像素转换
 * @param {Number} px - 750视觉稿像素
 * @return {Number} 屏幕上实际像素
 */
export const px2hd = (px?: number): number => {
  if ((window as any).px2hd) return (window as any).px2hd(px);
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

/**
 * 获取%
 * 如：输入 0.200011010 输出 20
 * @param n
 */
export function getPercentage(n: number) {
  return Math.round(parseFloat(`${n || 0}`) * 100);
}
