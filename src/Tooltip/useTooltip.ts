import { useMemo } from 'react';
import { TooltipProps } from './';
import { F2 } from '..';

export interface UseTooltip extends TooltipProps {}

export default (props = {} as UseTooltip) => {
  const { chart, disable, onChange, ...reset } = props;

  const onTooltipChange = (e: any) => {
    const { items } = e;
    const legendList = chart.get('legendController').legends.top;
    if (legendList && legendList.length) {
      const map = {} as any;
      const legend = legendList[0];
      const legendItems = legend.items;
      legendItems.forEach((item: any) => {
        map[item.name] = F2.Util.mix({}, item);
      });
      items.map((item: any) => {
        const { name, value } = item;
        if (map[name]) {
          map[name].value = value;
        }
      });
      onChange &&
        onChange({ ...e, chart, legend, legendItems: Object.values(map) });
    } else {
      onChange && onChange(e);
    }
  };

  useMemo(() => {
    if (!chart) return;
    if (disable) {
      chart.tooltip(false);
    } else {
      chart.tooltip({
        ...reset,
        onChange: onTooltipChange,
      });
    }
  }, [chart]);

  return null;
};
