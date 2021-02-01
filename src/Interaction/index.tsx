import React, { useImperativeHandle, forwardRef } from 'react';
import useInteraction from './useInteraction';
import { Chart as F2Chart } from '@antv/f2';

export interface InteractionProps {
  chart: F2Chart;
  [key: string]: any;
}

export default forwardRef<InteractionProps, InteractionProps>((props, ref) => {
  useInteraction(props);
  useImperativeHandle(ref, () => ({ ...props }), []);
  return null;
});
