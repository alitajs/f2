import React, { useState } from 'react';
import { Chart, Geometry, Guide } from '@alitajs/f2';

const ChartDemo = () => {
  const [state, setstate] = useState([
    { year: '1951', sales: 38 },
    { year: '1952', sales: 52 },
    { year: '1956', sales: 61 },
    { year: '1957', sales: 145 },
    { year: '1958', sales: 48 },
    { year: '1959', sales: 38 },
    { year: '1960', sales: 38 },
    { year: '1962', sales: 38 },
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
        <Geometry type="line" position="year*sales" />
        <Guide
          type="line"
          top={true}
          style={{
            stroke: '#FF0000', // 线的颜色
            lineDash: [0, 2, 2], // 虚线的设置
            lineWidth: 3, // 线的宽度
          }}
        />
      </Chart>
    </>
  );
};

export default ChartDemo;
