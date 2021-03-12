import React from 'react';
import { Chart, Geometry, Axis, Tooltip } from '@alitajs/f2';
import Data from './data';
const ChartDemo = () => {
  return (
    <>
      <Chart
        width={750}
        height={400}
        data={Data}
        pixelRatio={window.devicePixelRatio}
        colDefs={{
          value: {
            tickCount: 5,
            min: 0,
          },
          date: {
            type: 'timeCat',
            range: [0, 1],
            tickCount: 3,
          },
        }}
      >
        <Geometry type="line" position="date*value" />
        <Tooltip
          custom
          showXTip
          showYTip
          snap
          crosshairsType="xy"
          crosshairsStyle={{
            lineDash: [2],
          }}
        />
        <Axis
          field="date"
          label={(text, index, total) => {
            const textCfg = {} as any;
            if (index === 0) {
              textCfg.textAlign = 'left';
            } else if (index === total - 1) {
              textCfg.textAlign = 'right';
            }
            return textCfg;
          }}
        />
      </Chart>
    </>
  );
};

export default ChartDemo;
