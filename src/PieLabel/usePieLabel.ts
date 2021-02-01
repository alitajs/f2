import { useMemo } from 'react';
import { PieLabelProps } from './';

export interface UsePieLabel extends PieLabelProps {}

export default (props = {} as UsePieLabel) => {
  const { chart, ...reset } = props;
  useMemo(() => {
    if (!chart) return;
    chart.pieLabel(reset);
  }, [chart]);

  return null;
};
