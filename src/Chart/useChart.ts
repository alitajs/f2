import { useEffect, useState, useRef } from 'react';
import PieLabel from '@antv/f2/lib/plugin/pie-label'; // 引入 PieLabel 模块
import ScrollBar from '@antv/f2/lib/plugin/scroll-bar'; // 引入 ScrollBar 模块
import '@antv/f2/lib/interaction'; // 引入 ScrollBar 模块
import F2 from '../F2';
import { px2hd } from '../utils';
import { ChartProps } from './';

export interface UseChart extends ChartProps {
  /**
   * 指定的容器
   */
  container?: HTMLElement;
}

export default (props: UseChart) => {
  const {
    pixelRatio,
    padding,
    width,
    height,
    appendPadding,
    data,
    colDefs = {},
    animate = true,
  } = props;
  const [chart, setChart] = useState<F2.Chart>();
  const mounting = useRef(true);
  const [container, setContainer] = useState(props.container);
  useEffect(() => {
    if (container && !chart) {
      const instance = new F2.Chart({
        el: container,
        width: px2hd(width),
        height: px2hd(height),
        padding,
        pixelRatio,
        appendPadding,
        plugins: [PieLabel, ScrollBar],
      });
      instance.source(data, colDefs);
      // instance.animate(!!animate);
      // instance.interval().position('year*sales');
      setChart(instance);
    }
    return () => chart && chart.destroy();
  }, [container, chart]);
  useEffect(() => {
    if (!data || !chart) {
      return;
    }
    if (mounting.current) {
      console.log('chart.render');
      chart.render();
      mounting.current = false;
    }
  });
  useEffect(() => {
    if (chart) {
      chart.changeData(data);
    }
  }, [JSON.stringify(data)]);

  return {
    chart,
    setChart,
    container,
    setContainer,
  };
};
