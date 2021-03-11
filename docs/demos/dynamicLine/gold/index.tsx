import React, { useEffect } from 'react';
import { Chart, Geometry, Axis, Guide } from '@alitajs/f2';
import Data from './data';
const ChartDemo = () => {
  useEffect(() => {
    Data.forEach(function(obj) {
      result.push(obj.date);
    });
  }, []);
  const result = [];
  // 自定义 x 轴的标签文案
  const texts = [
    {
      content: '00:00',
      x: '2017-06-05',
    },
    {
      content: '02:30',
      x: '2017-06-23',
    },
    {
      content: '24:00',
      x: '2017-07-24',
    },
  ];
  const changeStyle = index => {
    const s = {
      textBaseline: 'bottom',
      fill: '#999',
    } as any;

    if (index === 0) {
      s.textAlign = 'left';
    } else if (index === texts.length - 1) {
      s.textAlign = 'right';
    } else {
      s.textAlign = 'center';
    }
    return s;
  };
  return (
    <>
      <Chart
        width={750}
        height={400}
        // 渲染折线取部分数据，values 作为数据映射取全部数据
        // 这样折线图就不会撑满整个 canvas
        data={Data.slice(0, 30)}
        pixelRatio={window.devicePixelRatio}
        colDefs={{
          value: {
            tickCount: 5,
            min: 0,
          },
          date: {
            type: 'timeCat',
            range: [0, 1],
            mask: 'shortDate',
            values: result,
          },
        }}
      >
        {texts.map((item, index) => {
          return (
            <Guide
              key={`${item.content}${item.x}`}
              type="text"
              position={[item.x, 'min']}
              content={item.x.slice(5, 10)}
              style={changeStyle(index)}
              offsetY={15}
            />
          );
        })}
        <Axis field="date" enable={false} />
        <Geometry type="line" position="date*value" />
      </Chart>
    </>
  );
};

export default ChartDemo;
