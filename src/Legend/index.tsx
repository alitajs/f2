import React, { useImperativeHandle, forwardRef } from 'react';
import useLegend from './useLegend';
import { Chart as F2Chart, LegendParams } from '@antv/f2';

export interface LegendProps extends LegendParams {
  chart: F2Chart;
  /**
   * 当 disable 为 true 时，不渲染图例
   */
  disable?: boolean;
  [key: string]: any;
}

export default forwardRef<LegendProps, LegendProps>((props, ref) => {
  useLegend(props);
  useImperativeHandle(ref, () => ({ ...props }), []);
  return null;
});
