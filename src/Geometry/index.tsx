import React, { useImperativeHandle, forwardRef } from 'react';
import useGeometry from './useGeometry';
import {
  Chart as F2Chart,
  GeometryParams,
  Geometry,
  DataRecord,
  GeometryKind,
} from '@antv/f2';

export interface GeometryProps extends Geometry<GeometryKind, DataRecord> {
  type: GeometryKind;
  chart: F2Chart;
  config?: GeometryParams;
}

export default forwardRef<
  GeometryProps,
  GeometryProps & { geometry: GeometryProps }
>((props, ref) => {
  const { geometry } = useGeometry(props);
  useImperativeHandle(ref, () => ({ ...props, geometry }), [geometry]);
  return null;
});
