import React from 'react';
import { Chart, Geometry, Axis, Interaction } from '@alitajs/f2';
import Data from './data';

const ChartDemo = () => (
  <Chart
    width={750}
    height={400}
    data={Data}
    pixelRatio={window.devicePixelRatio}
  >
    <Geometry type="line" position="x*y" shape="smooth" />
    <Axis
      field="x"
      grid={text => {
        if (text === 0) {
          return {
            lineDash: null,
          };
        }
      }}
    />
    <Axis
      field="y"
      grid={text => {
        if (text === 0) {
          return {
            lineDash: null,
          };
        }
      }}
    />
    <Interaction
      field="pan"
      limitRange={{
        x: {
          min: -100,
          max: 100,
        },
      }}
    />
    <Interaction field="pinch" maxScale={5} minScale={1} />
  </Chart>
);

export default ChartDemo;
