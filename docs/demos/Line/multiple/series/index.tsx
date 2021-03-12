import React, { useRef } from 'react';
import { Chart, Geometry, Axis, Tooltip } from '@alitajs/f2';
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
        colDefs={{
          date: {
            type: 'timeCat',
            tickCount: 3,
          },
          value: {
            tickCount: 5,
          },
        }}
      >
        <Geometry type="line" position="date*value" color="type" />
        <Tooltip
          custom
          onChange={e => {
            const legend =
              elmRef.current.chart._attrs.legendController.legends.top[0];
            const tooltipItems = e.tooltipMarkerCfg.items;
            const legendItems = legend.items;
            const map = {};
            legendItems.forEach(function(item) {
              map[item.name] = _.clone(item);
            });
            tooltipItems.forEach(function(item) {
              const name = item.name;
              const value = item.value;
              if (map[name]) {
                map[name].value = value;
              }
            });
            legend.setItems(_.values(map));
          }}
          onHide={() => {
            const legend =
              elmRef.current.chart._attrs.legendController.legends.top[0];
            legend.setItems(elmRef.current.chart.getLegendItems().country);
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
