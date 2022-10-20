import React, { useState } from 'react';
import {
  Chart,
  Geometry,
  Axis,
  Coordinate,
  Legend,
  Tooltip,
  Guide,
} from '@alitajs/f2';
import PieLabel from '..';

const ChartDemo = () => {
  const [a, seta] = useState(
    '<div style="text-align: center;width:1.5rem;height: 0.5rem;">\n      <p style="font-size: 0.12rem;color: #999;margin: 0" id="title">1111</p>\n      <p style="font-size: 0.18rem;color: #343434;margin: 0;font-weight: bold;" id="money"></p>\n      </div>',
  );
  const data = [
    {
      const: 'const',
      type: '交通出行',
      money: 51.39,
    },
    {
      const: 'const',
      type: '饮食',
      money: 356.68,
    },
    {
      const: 'const',
      type: '生活日用',
      money: 20.0,
    },
    {
      const: 'const',
      type: '住房缴费',
      money: 116.53,
    },
  ];
  return (
    <>
      <Chart
        width={750}
        height={400}
        data={data}
        pixelRatio={window.devicePixelRatio}
        animate
      >
        <Coordinate
          type="polar"
          transposed={true}
          radius={0.9}
          innerRadius={0.5}
        />
        <Axis disable />
        <Legend disable />
        <Tooltip disable />
        <Guide type="html" position={['50%', '50%']} html={a} />
        <Geometry
          type="interval"
          position="const*money"
          adjust="stack"
          color={['type', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14']]}
        />
        <PieLabel
          sidePadding={30}
          activeShape={true}
          label1={(da: any) => ({
            text: '￥' + da.money,
            fill: '#343434',
            fontWeight: 'bold',
          })}
          label2={(da: any) => ({
            text: da.type,
            fill: '#999',
          })}
          onClick={(ev: any) => {
            const dat = ev.data;
            if (dat) {
              // @ts-ignore
              document.getElementById('title').innerText = dat.type;
              // @ts-ignore
              document.getElementById('money').innerText = dat.money;
            }
          }}
        />
      </Chart>
      <div
        onClick={() => {
          seta(
            '<div style="text-align: center;width:1.5rem;height: 0.5rem;">\n      <p style="font-size: 0.12rem;color: #999;margin: 0" id="title">2222</p>\n      <p style="font-size: 0.18rem;color: #343434;margin: 0;font-weight: bold;" id="money"></p>\n      </div>',
          );
        }}
      >
        切换文字1
      </div>

      <div
        onClick={() => {
          seta(
            '<div style="text-align: center;width:1.5rem;height: 0.5rem;">\n      <p style="font-size: 0.12rem;color: #999;margin: 0" id="title">3333</p>\n      <p style="font-size: 0.18rem;color: #343434;margin: 0;font-weight: bold;" id="money"></p>\n      </div>',
          );
        }}
      >
        切换文字2
      </div>
    </>
  );
};

export default ChartDemo;
