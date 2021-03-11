import React, { useEffect, useRef } from 'react';
import { Chart, Geometry, Axis } from '@alitajs/f2';
import Data from './data';
const ChartDemo = () => {
  const elmRef = useRef(null);
  useEffect(() => {
    Data.forEach(function(obj) {
      result.push(obj.date);
    });
    // 同步任务执行完成后获取ref
    setTimeout(() => {
      drawXText(elmRef.current.chart);
    }, 0);
  }, []);
  const result = [];
  const drawXText = chart => {
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

    texts.forEach(function(item, index) {
      chart.guide().text({
        // 位置可以选择实际数值
        // 也可以选实际数值的索引
        // 甚至 min、max、median
        position: [item.x, 'min'],
        content: item.x.slice(5, 10),
        style: (function() {
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
        })(),
        offsetY: 20,
      });
    });
  };

  return (
    <>
      <Chart
        ref={elmRef}
        width={750}
        height={400}
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
        <Axis field="date" disable={true} />
        <Geometry type="line" position="date*value" />
      </Chart>
    </>
  );
};

export default ChartDemo;
