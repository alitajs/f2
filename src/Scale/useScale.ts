import { useMemo } from 'react';
import { ScaleProps } from './';

export interface UseScale extends ScaleProps {}

export default (props = {} as UseScale) => {
  const { chart, field, ...reset } = props;
  useMemo(() => {
    if (!chart || !field) return;
    chart.scale(field, reset);
  }, [chart]);

  return null;
};
