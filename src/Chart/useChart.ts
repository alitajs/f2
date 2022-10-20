import { useEffect, useState, useRef } from 'react';
import F2 from '../F2';
import { px2hd } from '../utils';
import { ChartProps } from './';
import * as selectShapeByLegendName from './plugins/selectShapeByLegendName';

F2.Chart.plugins.register([selectShapeByLegendName]);
export interface UseChart extends ChartProps {
  /**
   * 指定的容器
   */
  container?: HTMLElement;
}

export default (props: UseChart) => {
  const { width, height, data, colDefs = {}, ...reset } = props;
  const [chart, setChart] = useState<F2.Chart>();
  const mounting = useRef(true);
  const [container, setContainer] = useState(props.container);
  useEffect(() => {
    if (container && !chart) {
      const instance = new F2.Chart({
        el: container,
        width: px2hd(width),
        height: px2hd(height),
        ...reset,
      });
      instance.source(data, colDefs);
      // @ts-ignore
      // instance.set('selectShapeByLegend', () => console.log('selectShapeByLegend'))
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
      chart.render();
      mounting.current = false;
    }
  });
  useEffect(() => {
    if (chart) {
      chart.changeData(data);
    }
  }, [JSON.stringify(data)]);

  //TODO: 更新 guide,因为 guide 改成每次渲染都添加
  chart?.guide().clear();

  return {
    chart,
    setChart,
    container,
    setContainer,
  };
};
