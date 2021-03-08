import React, { useState } from 'react';
import {
  Chart,
  Geometry,
  Axis,
  Interaction,
  Guide,
  ScrollBar,
  Scale,
  Tooltip,
} from '@alitajs/f2';
import Data from './data.json';

const ChartDemo = () => {
  return (
    <>
      <Chart
        width={750}
        height={400}
        data={Data}
        colDefs={{
          release: {
            min: 1990,
            max: 2010,
          },
        }}
        pixelRatio={window.devicePixelRatio}
      >
        <Tooltip
          showCrosshairs={true}
          showItemMarker={false}
          background={{
            radius: 2,
            fill: '#FF0000',
            padding: [3, 5],
          }}
          nameStyle={{
            fill: '#fff',
          }}
          onShow={(ev: any) => {
            const items = ev.items;
            items[0].name = items[0].title;
          }}
        />
        <Geometry type="line" position="release*count" />
        <Geometry
          type="point"
          position="release*count"
          style={{
            lineWidth: 1,
            stroke: '#fff',
          }}
        />
        <Interaction field="pan" />
        <ScrollBar
          mode="x"
          xStyle={{
            offsetY: -5,
          }}
        />
        {/* <Guide
          type="tag"
          position={[1969, 1344]}
          withPoint={false}
          content="1,344"
          limitInPlot={true}
          offsetX={5}
          direct="cr"
        /> */}
      </Chart>
    </>
  );
};

export default ChartDemo;
