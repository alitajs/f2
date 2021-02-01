import { useMemo } from 'react';
import { LegendProps } from './';

export interface UseLegend extends LegendProps {}

export default (props = {} as UseLegend) => {
  const { chart, disable, ...reset } = props;
  useMemo(() => {
    if (!chart) return;
    if (disable) {
      chart.legend(false);
    } else {
      chart.legend(reset);
    }
  }, [chart]);

  return null;
};
