import { useMemo } from 'react';
import { LegendProps } from './';

export interface UseLegend extends LegendProps {}

export default (props = {} as UseLegend) => {
  const { chart, disable, onClick, ...reset } = props;
  const onLegendClick = (e: any) => {
    const selectShapeByLegend = chart.get('selectShapeByLegendName');
    onClick && onClick({ ...e, chart, selectShapeByLegend });
  };
  useMemo(() => {
    if (!chart) return;
    if (disable) {
      chart.legend(false);
    } else {
      chart.legend({ ...reset, onClick: onLegendClick });
    }
  }, [chart]);

  return null;
};
