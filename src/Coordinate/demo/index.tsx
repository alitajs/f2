import React, { useState } from 'react';
import { Chart, Geometry, Coordinate, Axis } from '@alitajs/f2';

const ChartDemo = () => {
  const [state, setstate] = useState([
    { name: '芳华', proportion: 0.4, a: '1' },
    { name: '妖猫传', proportion: 0.2, a: '1' },
    { name: '机器之血', proportion: 0.18, a: '1' },
    { name: '心理罪', proportion: 0.15, a: '1' },
    { name: '寻梦环游记', proportion: 0.05, a: '1' },
    { name: '其他', proportion: 0.02, a: '1' },
  ]);
  return (
    <>
      <Chart
        width={750}
        height={750 * 0.64}
        data={state}
        pixelRatio={window.devicePixelRatio}
        animate
      >
        <Geometry
          type="interval"
          position="a*proportion"
          color="name"
          adjust="stack"
        />
        <Coordinate type="polar" transposed={true} innerRadius={0.7} />
        <Axis disable />
      </Chart>
    </>
  );
};

export default ChartDemo;
