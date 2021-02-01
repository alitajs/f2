import React, { useState } from 'react';
import { Chart, Geometry, Legend, Scale } from '@alitajs/f2';

const ChartDemo = () => {
  const [state, setstate] = useState([
    { year: '1951', sales: 38, type: 'Men1' },
    { year: '1952', sales: 52, type: 'Men2' },
    { year: '1956', sales: 61, type: 'Men3' },
    { year: '1957', sales: 145, type: 'Men1' },
    { year: '1958', sales: 48, type: 'Men2' },
    { year: '1959', sales: 38, type: 'Men3' },
    { year: '1960', sales: 38, type: 'Men1' },
    { year: '1962', sales: 38, type: 'Men3' },
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
        <Geometry type="line" position="year*sales" color="type" />
        <Geometry type="point" position="year*sales" color="type" />
        <Legend align="center" itemWidth={null} />
      </Chart>
    </>
  );
};

export default ChartDemo;
