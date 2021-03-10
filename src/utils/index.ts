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

/**
 * 获取%
 * 如：输入 0.200011010 输出 20
 * @param n
 */
export function getPercentage(n: number) {
  return Math.round(parseFloat(`${n || 0}`) * 100);
}

/**
 * 柱形图排列规则是按中心点两边排列，左右对称
 * 分组柱状图自动调整 Guide 位置 offsetX
 * @param index // 该组位于第几个位置
 * @param length // 每组共有几个位置
 */
export const autoGetOffsetX = (index: number, length: number): number => {
  const size = 40 / length;
  const m = index + 1;
  let offsetX = 0;
  let c = Math.ceil(length / 2);
  if (length % 2 === 0) {
    // 偶数列 2
    if (m > c) {
      // 右侧
      offsetX = (m - c) * (m - 1) * size;
      return offsetX;
    } else {
      offsetX = (c - m + 1) * (length - m) * size;
      return -offsetX;
    }
  } else {
    // 奇数列
    if (m === c) return 0;
    if (m > c) {
      // 右侧
      offsetX = (m - c + 1) * (m - 1) * size;
      return offsetX;
    } else {
      offsetX = (c - m + 1) * (length - m) * size - size / 2;
      return -offsetX;
    }
  }
};
