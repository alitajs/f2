import React, { useRef } from 'react';
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
          day: {
            range: [0, 1],
          },
        }}
      >
        <Axis
          field="day"
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
        <Tooltip showCrosshairs />
        <Geometry
          config={{ connectNulls: true }}
          type="line"
          position="day*value"
        />
        <Geometry type="point" position="day*value" />
      </Chart>
    </>
  );
};

export default ChartDemo;
