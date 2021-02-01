import { useMemo } from 'react';
import { ScrollBarProps } from './';

export interface UseScrollBar extends ScrollBarProps {}

export default (props = {} as UseScrollBar) => {
  const { chart, ...reset } = props;
  useMemo(() => {
    if (!chart) return;
    chart.scrollBar(reset);
  }, [chart]);

  return null;
};
