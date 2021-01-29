import React, {
  useEffect,
  useImperativeHandle,
  forwardRef,
  useRef,
  Fragment,
} from 'react';
import { Chart as F2Chart, ChartParams } from '@antv/f2';

import useChart from './useChart';

export interface ChartProps extends ChartParams {
  /**
   * 图表的数据
   */
  data: any[];
  /**
   * canvas 的类名
   */
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  /**
   * canvas 的 style
   */
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
}

export type ChartChildRenderProps =
  | {
      children?: (data: {
        chart: F2Chart;
        container?: string | HTMLCanvasElement | null | HTMLElement;
      }) => void;
    }
  | { children?: React.ReactNode };

const Chart = forwardRef<
  ChartProps & { chart?: F2Chart },
  ChartProps & ChartChildRenderProps
>((props, ref) => {
  const { style = {}, className, children, ...rest } = props;
  const elmRef = useRef<HTMLCanvasElement>(null);
  const { setContainer, container, chart } = useChart({
    container: elmRef.current as HTMLCanvasElement,
    ...rest,
  });
  useEffect(() => setContainer(elmRef.current as HTMLElement | undefined), [
    elmRef.current,
  ]);

  useImperativeHandle(ref, () => ({ ...props, chart, container: elmRef }), [
    chart,
  ]);
  const childs = React.Children.toArray(children);
  return (
    <Fragment>
      <canvas
        className={className}
        ref={elmRef}
        style={{ display: 'block', ...style }}
      />
      {chart &&
        typeof children === 'function' &&
        children({ chart, container })}
      {chart &&
        childs.map(child => {
          if (!React.isValidElement(child)) return;
          return React.cloneElement(child, {
            ...child.props,
            chart,
            container,
          });
        })}
    </Fragment>
  );
});

export default Chart;
