import { useEffect, useState, useRef } from 'react';
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
    animate,
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
      });
      instance.source(data);
      console.log('首次渲染1');
      instance.animate(!!animate);
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
      console.log('首次渲染2');
      mounting.current = false;
    }
  });
  useEffect(() => {
    if (chart) {
      console.log('首次渲染，变化');
      const a = chart.get('geoms');
      console.log(a);
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
