import { useMemo } from 'react';
import { LegendProps } from './';

export interface UseLegend extends LegendProps {}

export default (props = {} as UseLegend) => {
  const { chart, disable, onClick, ...reset } = props;
  useMemo(() => {
    if (!chart) return;
    if (disable) {
      chart.legend(false);
    } else {
      chart.legend({
        ...reset,
        onClick: (args: any) => {
          onClick && onClick({ ...args, chart });
        },
      });
    }
  }, [chart]);

  return null;
};
