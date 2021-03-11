import React from 'react';
import { Chart, Geometry, Axis, Interaction } from '@alitajs/f2';

const ChartDemo = () => {
  const data = [];
  const step = Math.PI / 4;
  for (let x = -25; x < 25; x += step) {
    data.push({
      x,
      y: Math.sin(x),
    });
  }
  return (
    <>
      <Chart
        width={750}
        height={400}
        data={data}
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
    </>
  );
};

export default ChartDemo;
