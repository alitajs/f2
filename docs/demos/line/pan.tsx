import React from 'react';
import {
  Chart,
  Geometry,
  Axis,
  Tooltip,
  Interaction,
  ScrollBar,
  Guide,
} from '@alitajs/f2';
import { getDateByName } from '../data';
const ChartDemo = () => {
  const state = getDateByName('line/pan');
  return (
    <>
      <Chart
        width={750}
        height={400}
        data={state}
        pixelRatio={window.devicePixelRatio}
        colDefs={{
          release: {
            min: 1990,
            max: 2010,
          },
        }}
      >
        <Geometry type="line" position="release*count" />
        <Geometry
          type="point"
          position="release*count"
          style={{ lineWidth: 1, stroke: '#fff' }}
        />
        <Tooltip
          showCrosshairs
          showItemMarker={false}
          background={{
            radius: 2,
            fill: '#1890FF',
            padding: [3, 5],
          }}
          nameStyle={{
            fill: '#fff',
          }}
          onShow={ev => {
            const items = ev.items;
            items[0].name = items[0].title;
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
        <Interaction field="pan" />
        <ScrollBar
          mode="x"
          xStyle={{
            offsetY: -5,
          }}
        />
        <Guide
          type="tag"
          position={[1969, 1344]}
          withPoint={false}
          content="1,344"
          limitInPlot
          offsetX={5}
          direct="cr"
        />
      </Chart>
    </>
  );
};

export default ChartDemo;
