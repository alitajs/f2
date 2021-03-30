import React, { useImperativeHandle, forwardRef } from 'react';
import useAnimate from './useAnimate';
import { Chart as F2Chart, AnimateChartParams, AnimateConfig } from '@antv/f2';

export interface AnimateProps extends AnimateConfig, AnimateChartParams {
  chart: F2Chart;
  /**
   * 当 disable 为 true 时，不渲染坐标轴
   */
  disable?: boolean;
}

export default forwardRef<AnimateProps, AnimateProps>((props, ref) => {
  useAnimate(props);
  useImperativeHandle(ref, () => ({ ...props }), []);
  return null;
});
