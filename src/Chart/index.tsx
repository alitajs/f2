import React, {
  useEffect,
  useImperativeHandle,
  forwardRef,
  useRef,
  Fragment,
} from 'react';
import {
  Chart as F2Chart,
  ChartParams,
  DataRecord,
  DataRecordScale,
} from '@antv/f2';
import useChart from './useChart';

export type Data<DataRecord> = DataRecord[];

export interface ChartProps extends ChartParams {
  /**
   * 图表的数据
   */
  data: Data<DataRecord>;
  colDefs?: DataRecordScale<DataRecord>;
  /**
   * canvas 的类名
   */
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  /**
   * canvas 的 style
   */
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
  /**
   * @todo 补全所有的内部属性后去除该项
   */
  [key: string]: any;
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
          });
        })}
    </Fragment>
  );
});

export default Chart;
