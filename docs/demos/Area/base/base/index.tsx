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
      >
        <Tooltip showCrosshairs />
        <Scale field="time" range={[0, 1]}></Scale>
        <Scale field="tem" tickCount={5} min={0}></Scale>
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
        <Geometry type="line" position="time*tem" />
        <Geometry type="area" position="time*tem" />
      </Chart>
    </>
  );
};

export default ChartDemo;
