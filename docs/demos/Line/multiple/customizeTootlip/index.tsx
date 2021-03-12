import React from 'react';
import { Chart, Geometry, Axis, Legend, Guide, Tooltip } from '@alitajs/f2';
import $ from 'jquery';
import Data from './data';
const ChartDemo = () => {
  return (
    <>
      <Chart
        width={750}
        height={400}
        data={Data}
        pixelRatio={window.devicePixelRatio}
        padding={[45, 'auto', 'auto']}
        colDefs={{
          value: {
            tickCount: 5,
            min: 0,
            formatter: val => {
              return val.toFixed(2) + '%';
            },
          },
          date: {
            type: 'timeCat',
            range: [0, 1],
            tickCount: 3,
          },
        }}
      >
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
        <Axis
          field="value"
          label={(text, index, total) => {
            const textCfg = {} as any;
            if (index === 0) {
              textCfg.textBaseline = 'bottom';
            } else if (index === total - 1) {
              textCfg.textBaseline = 'top';
            }
            return textCfg;
          }}
        />
        <Legend
          custom
          itemWidth={null}
          items={[
            {
              name: '买入点',
              marker: 'circle',
              fill: '#F35833',
            },
            {
              name: '卖出点',
              marker: 'circle',
              fill: '#518DFE',
            },
          ]}
        />
        <Guide
          type="html"
          position={['min', 'max']}
          html={`<div id="tooltipWrapper" style="height: 30px;background-color:#E9F1FF;line-height: 30px;">
          <div id="tooltipName" style="float:left;font-size:12px;color:#2E2E2E;"></div>
          <div id="tooltipValue" style="float:right;font-size:12px;color:#2E2E2E;"></div>
        </div>`}
          offsetY={-22.5}
        />
        <Tooltip
          showCrosshairs
          custom
          onChange={obj => {
            const items = obj.items;
            const originData = items[0].origin;
            const date = originData.date;
            const value = originData.value;
            const tag = originData.tag;

            $('.guideWapper').css('position', 'static');
            $('#tooltipWrapper').width($('#container').width());
            $('#tooltipWrapper').css('left', 0);
            $('#tooltipWrapper').css('width', '100%');
            $('#tooltipName').css('margin-left', 15);
            $('#tooltipValue').css('margin-right', 15);

            if (tag === 1) {
              $('#tooltipName').html(
                date +
                  '<img style="width:27.5px;vertical-align:middle;margin-left:3px;" src="https://gw.alipayobjects.com/zos/rmsportal/RcgYrLNGIUfTytjjijER.png">',
              );
            } else if (tag === 2) {
              $('#tooltipName').html(
                date +
                  '<img style="width:27.5px;vertical-align:middle;margin-left:3px;" src="https://gw.alipayobjects.com/zos/rmsportal/XzNFpOkuSLlmEWUSZErB.png">',
              );
            } else {
              $('#tooltipName').text(date);
            }
            const color = value >= 0 ? '#FA541C' : '#1CAA3D';

            $('#tooltipValue').html(
              '涨幅：<span style="color:' +
                color +
                '">' +
                items[0].value +
                '</span>',
            );
            $('#tooltipWrapper').show();
          }}
          onHide={() => {
            $('#tooltipWrapper').hide();
          }}
        />
        <Geometry type="line" position="date*value" color="#518DFE" />
        <Geometry
          type="point"
          position="date*value"
          size={[
            'tag',
            val => {
              return val ? 3 : 0;
            },
          ]}
          style={[
            'tag',
            {
              fill: val => {
                if (val === 2) {
                  return '#518DFE';
                } else if (val === 1) {
                  return '#F35833';
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
