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
          month: {
            range: [0, 1],
          },
          value: {
            nice: false,
            min: -100,
            max: 100,
            tickCount: 5,
          },
        }}
      >
        <Tooltip showCrosshairs />
        <Axis
          field="month"
          line={null}
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
          grid={text => {
            if (text === '0') {
              return {
                lineDash: null,
                lineWidth: 1,
              };
            }
          }}
        />
        <Geometry type="line" position="month*value" />
        <Geometry type="area" position="month*value" />
      </Chart>
    </>
  );
};

export default ChartDemo;
