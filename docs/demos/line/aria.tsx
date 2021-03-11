import React from 'react';
import { Chart, Geometry, Axis, Tooltip } from '@alitajs/f2';
import { getDateByName } from '../data';
const ChartDemo = () => {
  const state = getDateByName('line/base');
  return (
    <>
      <Chart
        width={750}
        height={400}
        data={state}
        pixelRatio={window.devicePixelRatio}
        aria
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
        <Geometry type="line" position="date*value" color="#2FC25B" />
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
    </>
  );
};

export default ChartDemo;
