import React from 'react';
import { Chart, Geometry, Axis, Tooltip, Scale } from '@alitajs/f2';
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
          time: {
            type: 'timeCat',
            tickCount: 3,
            range: [0, 1],
          },
          tem: {
            tickCount: 5,
            min: 0,
          },
        }}
      >
        <Tooltip showCrosshairs />
        <Axis
          field="time"
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
        <Geometry
          type="line"
          position="time*tem"
          color="l(90) 0:#1890FF 1:#f7f7f7"
          shape="smooth"
        />
        <Geometry
          type="area"
          position="time*tem"
          color="l(90) 0:#1890FF 1:#f7f7f7"
          shape="smooth"
        />
      </Chart>
    </>
  );
};

export default ChartDemo;
