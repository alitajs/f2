import React from 'react';
import { Chart, Geometry, Axis, Legend } from '@alitajs/f2';
import { getDateByName } from '../data';
const ChartDemo = () => {
  const state = getDateByName('multipleLine/shapes');
  return (
    <>
      <Chart
        width={750}
        height={400}
        data={state}
        pixelRatio={window.devicePixelRatio}
        colDefs={{
          time: {
            type: 'timeCat',
            tickCount: 3,
            mask: 'hh:mm',
            range: [0, 1],
          },
          value: {
            tickCount: 3,
            formatter: ivalue => {
              return ivalue + '%';
            },
          },
        }}
      >
        <Geometry type="line" position="time*value" color="type" shape="type" />
        <Axis
          field="time"
          line={null}
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
        <Axis
          field="tem"
          grid={text => {
            console.log(text);
            if (text === '0%') {
              return {
                lineDash: null,
                lineWidth: 1,
              };
            }
          }}
        />
        <Legend position="bottom" offsetY={-5} />
      </Chart>
    </>
  );
};

export default ChartDemo;
