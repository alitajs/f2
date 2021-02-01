import { useMemo } from 'react';
import { TooltipProps } from './';

export interface UseTooltip extends TooltipProps {}

export default (props = {} as UseTooltip) => {
  const { chart, disable, ...reset } = props;
  useMemo(() => {
    if (!chart) return;
    if (disable) {
      chart.tooltip(false);
    } else {
      chart.tooltip(reset);
    }
  }, [chart]);

  return null;
};
