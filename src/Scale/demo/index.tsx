import React, { useState } from 'react';
import { Chart, Geometry, Scale } from '@alitajs/f2';

const ChartDemo = () => {
  const [state, setstate] = useState([
    {
      timestamp: 1529856000000,
      rate: 0,
    },
    {
      timestamp: 1529942400000,
      rate: 0.0082,
    },
    {
      timestamp: 1530028800000,
      rate: 0.0284,
    },
    {
      timestamp: 1530115200000,
      rate: -0.0385,
    },
    {
      timestamp: 1530201600000,
      rate: -0.0139,
    },
  ]);
  return (
    <>
      <Chart
        width={750}
        height={400}
        data={state}
        pixelRatio={window.devicePixelRatio}
        animate
      >
        <Geometry type="line" position="timestamp*rate" color="codeType" />
        <Scale
          field="timestamp"
          range={[0, 1]}
          tickCount={3}
          type="timeCat"
          mask="MM-DD"
        />
        <Scale
          field="rate"
          tickCount={5}
          formatter={(rate: number) => `${(rate * 100).toFixed(2)}%`}
        />
      </Chart>
    </>
  );
};

export default ChartDemo;
