import React, { useRef } from 'react';
import { Chart, Geometry, Axis, Tooltip, Legend } from '@alitajs/f2';
import Data from './data';
import _ from 'lodash';
const ChartDemo = () => {
  const elmRef = useRef(null);
  const formatterPercent = value => {
    value = value || 0;
    value = value * 100;
    return parseInt(value) + '%';
  };
  return (
    <>
      <Chart
        ref={elmRef}
        width={750}
        height={400}
        data={Data}
        pixelRatio={window.devicePixelRatio}
        colDefs={{
          year: {
            range: [0, 1],
          },
          percent: {
            formatter: val => {
              return formatterPercent(val);
            },
            alias: 'percent(%)',
          },
        }}
      >
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
        <Legend
          // 自定义图例项的 marker 图形样式
          marker={(x, y, r, ctx) => {
            // 11px * 9px
            ctx.save();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle;
            ctx.moveTo(x - 5.5, y - 4);
            ctx.lineTo(x + 5.5, y - 4);
            ctx.stroke();
            ctx.restore();
            ctx.globalAlpha = 0.1;
            ctx.moveTo(x - 5.5, y - 4);
            ctx.lineTo(x + 5.5, y - 4);
            ctx.lineTo(x + 5.5, y + 4);
            ctx.lineTo(x - 5.5, y + 4);
            ctx.closePath();
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
          position="year*percent"
          color="country"
          adjust="stack"
        />
        <Geometry
          type="area"
          position="year*percent"
          color="country"
          adjust="stack"
        />
      </Chart>
    </>
  );
};

export default ChartDemo;
