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
        animate={false}
      >
        <Axis
          field="year"
          tickLine={{
            length: 4,
            stroke: '#e8e8e8',
            lineWidth: 1,
          }}
          label={{
            textAlign: 'start',
            textBaseline: 'middle',
            rotate: Math.PI / 2,
          }}
        />
        <Tooltip
          showCrosshairs
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
        <Geometry
          type="line"
          position="year*count"
          adjust="stack"
          // 自定义折线颜色
          color={[
            'medalType',
            val => {
              if (val === 'Gold Medals') {
                return '#f3ac32';
              } else if (val === 'Silver Medals') {
                return '#b8b8b8';
              } else if (val === 'Bronze Medals') {
                return '#bb6e36';
              }
            },
          ]}
          /*
           不知道具体字段的情况下直接使用系统默认颜色 color="medalType"
           */
        />
        <Geometry
          type="point"
          position="year*count"
          adjust="stack"
          style={[
            'medalType',
            {
              lineWidth: 1,
              fill: '#fff',
              stroke: val => {
                if (val === 'Gold Medals') {
                  return '#f3ac32';
                } else if (val === 'Silver Medals') {
                  return '#b8b8b8';
                } else if (val === 'Bronze Medals') {
                  return '#bb6e36';
                }
              },
            },
          ]}
        />
      </Chart>
    </>
  );
};

export default ChartDemo;
