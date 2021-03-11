import { useMemo } from 'react';
import { TooltipProps } from './';

export interface UseTooltip extends TooltipProps {}

export default (props = {} as UseTooltip) => {
  const { chart, disable, onChange, ...reset } = props;
  useMemo(() => {
    if (!chart) return;
    if (disable) {
      chart.tooltip(false);
    } else {
      chart.tooltip({
        ...reset,
        onChange: e => {
          onChange && onChange({ ...e, chart });
        },
      });
    }
  }, [chart]);

  return null;
};
