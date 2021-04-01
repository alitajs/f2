import React, { useRef } from 'react';
import { Chart, Geometry, Axis, Tooltip, Scale, Legend } from '@alitajs/f2';
import Data from './data';
import _ from 'lodash';
const ChartDemo = () => {
  const elmRef = useRef(null);
  return (
    <>
      <Chart
        ref={elmRef}
        width={750}
        height={400}
        data={Data}
        pixelRatio={window.devicePixelRatio}
      >
        <Scale field="year" tickCount={5} range={[0, 1]} />
        <Tooltip showCrosshairs />
        <Axis
          field="year"
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
        <Legend disable />
        <Geometry
          type="line"
          position="year*value"
          color="type"
          shape="smooth"
        />
        <Geometry
          type="area"
          position="year*value"
          color="type"
          shape="smooth"
        />
      </Chart>
    </>
  );
};

export default ChartDemo;
