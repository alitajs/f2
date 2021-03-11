import React from 'react';
import { Chart, Geometry, Axis, Tooltip } from '@alitajs/f2';
import Data from './data';

const ChartDemo = () => (
  <Chart
    width={700}
    height={400}
    data={Data}
    pixelRatio={window.devicePixelRatio}
    colDefs={{
      value: {
        tickCount: 5,
        min: 0,
      },
      day: {
        range: [0, 1],
      },
    }}
  >
    <Geometry type="line" position="day*value" />
    <Geometry
      type="point"
      position="day*value"
      style={{ stroke: '#fff', lineWidth: 1 }}
    />
    <Tooltip
      showCrosshairs
      showItemMarker={false}
      onShow={ev => {
        const items = ev.items;
        items[0].name = null;
        items[0].value = '$ ' + items[0].value;
      }}
    />
    <Axis
      field="day"
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
);

export default ChartDemo;
