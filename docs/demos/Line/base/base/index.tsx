import React, { useState } from 'react';
import { Chart, Geometry, Axis, Tooltip, Guide } from '@alitajs/f2';
import Data from './data';
const ChartDemo = () => {
  const [data, setData] = useState(Data);
  return (
    <>
      <Chart
        width={750}
        height={400}
        data={data}
        pixelRatio={window.devicePixelRatio}
        colDefs={{
          value: {
            tickCount: 5,
            min: 0,
          },
          date: {
            type: 'timeCat',
            range: [0, 1],
            tickCount: 3,
          },
        }}
      >
        <Geometry type="line" position="date*value" />
        <Tooltip
          custom
          showXTip
          showYTip
          snap
          crosshairsType="xy"
          crosshairsStyle={{
            lineDash: [2],
          }}
        />
        {data.map((i, index) => {
          // 掩饰 demo 随便写的
          if (index % 5 === 0) {
            return (
              <Guide
                key={index}
                type="text"
                position={[index, i.value + 100]}
                content={i.value}
                offsetY={15}
              />
            );
          }
          return null;
        })}

        <Axis
          field="date"
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
      </Chart>

      <p
        onClick={() => {
          setData([
            {
              date: '2017-06-05',
              value: 200,
            },
            {
              date: '2017-06-06',
              value: 100,
            },
            {
              date: '2017-06-07',
              value: 98,
            },
            {
              date: '2017-06-08',
              value: 86,
            },
          ]);
        }}
      >
        Click Me!
      </p>
    </>
  );
};

export default ChartDemo;
