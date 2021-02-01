import React, { useImperativeHandle, forwardRef } from 'react';
import useCoordinate from './useCoordinate';
import { Chart as F2Chart, CoordinateKind, CoordinateParams } from '@antv/f2';

// export interface CoordinateProps extends CoordinateParams<> {
export interface CoordinateProps {
  /**
   * 坐标系类型
   */
  type: CoordinateKind;
  chart: F2Chart;
  [key: string]: any;
}

export default forwardRef<CoordinateProps, CoordinateProps>((props, ref) => {
  useCoordinate(props);
  useImperativeHandle(ref, () => ({ ...props }), []);
  return null;
});
