import React, { useImperativeHandle, forwardRef } from 'react';
import useScale from './useScale';
import {
  Chart as F2Chart,
  ScaleCommonProps,
  ScaleType,
  DataRecord,
  DataField,
} from '@antv/f2';

export interface ScaleProps
  extends ScaleCommonProps<ScaleType, DataRecord, DataField<DataRecord>> {
  chart: F2Chart;
  field: string;
  [key: string]: any;
}

export default forwardRef<ScaleProps, ScaleProps>((props, ref) => {
  useImperativeHandle(ref, () => ({ ...props }), []);
  return null;
});
