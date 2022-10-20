import React, { useState } from 'react';
import {
  Chart,
  Geometry,
  Interaction,
  Guide,
  px2hd,
  Animate,
} from '@alitajs/f2';

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
  const [a, seta] = useState(['1951', '1952', '1956', '1957', '1958']);
  return (
    <>
      <button
        onClick={() => {
          setstate([
            { year: '1951', sales: 52 },
            { year: '1952', sales: 3 },
            { year: '1956', sales: 530 },
            { year: '1962', sales: 38 },
            { year: '1963', sales: 23 },
            { year: '1964', sales: 345 },
          ]);
          seta(['1951', '1952', '1956', '1962', '1963']);
        }}
      >
        数据变化
      </button>
      <Chart
        width={750}
        height={400}
        data={state}
        pixelRatio={window.devicePixelRatio}
        animate
        colDefs={{
          year: {
            tickCount: 5,
            values: a,
          },
        }}
      >
        <Geometry type="interval" position="year*sales" />
        <Animate disable />
        <Interaction field="pan" />
        {state?.map(item => {
          const stringY =
            typeof item.sales === 'number'
              ? String(item.sales)
              : item.sales || '';
          return (
            <Guide
              key={`${item.year}`}
              type="text"
              limitInPlot={true}
              style={{
                textBaseline: 'bottom',
                textAlign: 'center',
                fontSize: px2hd(24),
              }}
              content={item?.sales}
              position={[item?.year, item?.sales]}
              offsetY={px2hd(-10)}
              // offsetX={px2hd(4)}
            />
          );
        })}
      </Chart>
    </>
  );
};

export default ChartDemo;
