import React, { useImperativeHandle, forwardRef } from 'react';
import useInterval from './useInterval';
import {
  Chart as F2Chart,
  GeometryParams,
  Geometry,
  DataRecord,
} from '@antv/f2';

export interface IntervalProps extends Geometry<'interval', DataRecord> {
  chart: F2Chart;
  container?: string | HTMLCanvasElement | null | HTMLElement;
  config?: GeometryParams;
  [key: string]: any;
}

export default forwardRef<
  IntervalProps,
  IntervalProps & { interval: IntervalProps }
>((props, ref) => {
  const { interval } = useInterval(props);
  useImperativeHandle(ref, () => ({ ...props, interval }), [interval]);
  return null;
});
