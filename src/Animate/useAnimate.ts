import { useMemo } from 'react';

import { AnimateProps } from './';

export interface UseAnimate extends AnimateProps {}

export default (props = {} as UseAnimate) => {
  const { chart, disable, ...reset } = props;
  useMemo(() => {
    if (!chart) return;
    if (disable) chart.animate(false);
    chart.animate(reset);
  }, [chart]);

  return null;
};
