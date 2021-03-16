import React, { useImperativeHandle, forwardRef } from 'react';
import useInteraction from './useInteraction';
import { Chart as F2Chart, InteractionKind } from '@antv/f2';

export interface InteractionProps {
  chart: F2Chart;
  /**
   * 交互行为类型
   */
  field: InteractionKind;
}

export default forwardRef<InteractionProps, InteractionProps>((props, ref) => {
  useInteraction(props);
  useImperativeHandle(ref, () => ({ ...props }), []);
  return null;
});
