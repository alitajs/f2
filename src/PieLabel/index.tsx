import React, { useImperativeHandle, forwardRef } from 'react';
import usePieLabel from './usePieLabel';
import {
  Chart as F2Chart,
  PieLabelParams,
  DataRecord,
  DataField,
} from '@antv/f2';

export interface PieLabelProps extends PieLabelParams<DataRecord> {
  chart: F2Chart;
}

export default forwardRef<PieLabelProps, PieLabelProps>((props, ref) => {
  usePieLabel(props);
  useImperativeHandle(ref, () => ({ ...props }), []);
  return null;
});
