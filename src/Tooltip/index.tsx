import React, { useImperativeHandle, forwardRef } from 'react';
import useTooltip from './useTooltip';
import { Chart as F2Chart, TooltipParams, DataRecord } from '@antv/f2';

export interface TooltipProps extends TooltipParams<DataRecord> {
  chart: F2Chart;
  /**
   * 当 disable 为 true 时，不渲染 Tooltip
   */
  disable?: boolean;
  [key: string]: any;
}

export default forwardRef<TooltipProps, TooltipProps>((props, ref) => {
  useTooltip(props);
  useImperativeHandle(ref, () => ({ ...props }), []);
  return null;
});
