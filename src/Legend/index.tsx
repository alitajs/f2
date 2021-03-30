import React, { useImperativeHandle, forwardRef } from 'react';
import useLegend from './useLegend';
import { Chart as F2Chart, LegendParams } from '@antv/f2';

export interface LegendProps extends LegendParams {
  chart: F2Chart;
  /**
   * 当 disable 为 true 时，不渲染图例
   */
  disable?: boolean;
  /**
   * 用于自定义鼠标点击图例项的交互，当 clickable 为 false 时不生效。
   */
  onClick?: ({
    clickedItem,
    selectShapeByLegend,
  }: {
    clickedItem: any;
    selectShapeByLegend: (
      name: string,
      onEnd?: (clickedShape: any, coord: any, canvas: any) => void,
    ) => void;
  }) => any;
}

export default forwardRef<LegendProps, LegendProps>((props, ref) => {
  useLegend(props);
  useImperativeHandle(ref, () => ({ ...props }), []);
  return null;
});
