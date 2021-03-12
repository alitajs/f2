import React from 'react';
import { Chart, Geometry, Axis, Tooltip } from '@alitajs/f2';
import Data from './data';

const ChartDemo = () => (
  <Chart
    width={750}
    height={400}
    data={Data}
    pixelRatio={window.devicePixelRatio}
    colDefs={{
      time: {
        type: 'timeCat',
        mask: 'MM/DD',
        tickCount: 3,
        range: [0, 1],
      },
      tem: {
        tickCount: 5,
        min: 0,
        alias: '日均温度',
      },
    }}
  >
    <Geometry type="line" position="time*tem" shape="smooth" />
    <Geometry type="point" position="time*tem" shape="smooth" />
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
  </Chart>
);

export default ChartDemo;
