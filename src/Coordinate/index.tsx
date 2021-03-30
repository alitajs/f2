import React, { useImperativeHandle, forwardRef } from 'react';
import useCoordinate from './useCoordinate';
import {
  Chart as F2Chart,
  CoordinateKind,
  CoordinateRectParams,
  CoordinatePolarParams,
} from '@antv/f2';

export interface CoordinateProps
  extends CoordinateRectParams,
    CoordinatePolarParams {
  /**
   * 坐标系类型
   */
  type: CoordinateKind;
  chart: F2Chart;
}

export default forwardRef<CoordinateProps, CoordinateProps>((props, ref) => {
  useCoordinate(props);
  useImperativeHandle(ref, () => ({ ...props }), []);
  return null;
});
