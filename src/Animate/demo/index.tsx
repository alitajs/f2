import React, { useState } from 'react';
import { Chart, Geometry, Axis, Animate } from '@alitajs/f2';

const ChartDemo = () => {
  const state = [
    { year: '1951', sales: 38 },
    { year: '1952', sales: 52 },
    { year: '1956', sales: 61 },
    { year: '1957', sales: 145 },
    { year: '1958', sales: 48 },
    { year: '1959', sales: 38 },
    { year: '1960', sales: 38 },
    { year: '1962', sales: 38 },
  ];
  return (
    <>
      <Chart
        width={750}
        height={400}
        data={state}
        pixelRatio={window.devicePixelRatio}
        animate
      >
        <Geometry type="interval" position="year*sales" />
        <Axis
          disable
          field="year"
          label={{
            rotate: -Math.PI / 2,
            textAlign: 'end',
            textBaseline: 'middle',
          }}
        />
        <Animate
          appear={{
            animation: 'groupWaveIn', // 执行的具体动画
            easing: 'elasticIn', // 动画缓动函数
            delay: 1000, // 动画延迟执行时间，单位 ms
            duration: 6000, // 动画执行时间，单位 ms
          }}
        />
      </Chart>
    </>
  );
};

export default ChartDemo;
