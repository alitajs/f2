import React from 'react';
import { Chart, Geometry, Axis, Tooltip, Scale } from '@alitajs/f2';
import Data from '../withNegative/data';
const ChartDemo = () => {
  return (
    <>
      <Chart
        width={750}
        height={400}
        data={Data}
        pixelRatio={window.devicePixelRatio}
        colDefs={{
          month: {
            range: [0, 1],
          },
          value: {
            tickCount: 5,
          },
        }}
      >
        <Tooltip showCrosshairs />
        <Axis
          field="month"
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
        <Axis
          field="value"
          label={text => {
            const textCfg = {} as any;
            if (text <= 0) {
              textCfg.fill = '#1CAA3D';
              textCfg.fontWeight = 'bold';
            }
            return textCfg;
          }}
        />
        <Geometry type="line" position="month*value" />
        <Geometry
          type="area"
          // 配置 x 轴基线不为 0
          config={{ startOnZero: false }}
          position="month*value"
        />
      </Chart>
    </>
  );
};

export default ChartDemo;
