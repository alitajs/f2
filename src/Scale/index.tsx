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
  /**
   * 交互行为类型
   */
  field: string;
}

export default forwardRef<ScaleProps, ScaleProps>((props, ref) => {
  useScale(props);
  useImperativeHandle(ref, () => ({ ...props }), []);
  return null;
});
