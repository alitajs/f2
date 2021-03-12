import React, { useEffect, useRef } from 'react';
import { Chart, Geometry, Axis, F2 } from '@alitajs/f2';
const ChartDemo = () => {
  const elmRef = useRef(null);
  const data = [];
  useEffect(() => {
    // 给三个初始的数据
    data.push(getRecord(-2));
    data.push(getRecord(-1));
    data.push(getRecord());

    setInterval(function() {
      data.push(getRecord());
      elmRef.current.chart.changeData(data);
    }, 1000);
  }, []);
  // 添加数据，模拟数据，可以指定当前时间的偏移的秒
  function getRecord(offset?) {
    offset = offset || 0;
    return {
      time: new Date().getTime() + offset * 1000,
      value: Math.random() + 10,
    };
  }
  // 定义动画
  F2.Animate.registerAnimation('lineUpdate', function(updateShape, animateCfg) {
    const cacheShape = updateShape.get('cacheShape'); // 该动画 shape 的前一个状态
    const cacheAttrs = cacheShape.attrs; // 上一个 shape 属性
    const oldPoints = cacheAttrs.points; // 上一个状态的关键点
    const newPoints = updateShape.attr('points'); // 当前 shape 的关键点

    const oldLength = oldPoints.length;
    const newLength = newPoints.length;
    const deltaLength = newLength - oldLength;

    const lastPoint = newPoints[newPoints.length - 1];
    for (let i = 0; i < deltaLength; i++) {
      oldPoints.push(lastPoint);
    }
    updateShape.attr(cacheAttrs);
    updateShape.animate().to({
      attrs: {
        points: newPoints,
      },
      duration: 800,
      easing: animateCfg.easing,
    });
  });
  return (
    <>
      <Chart
        ref={elmRef}
        width={750}
        height={400}
        data={data}
        pixelRatio={window.devicePixelRatio}
        colDefs={{
          time: {
            type: 'timeCat',
            mask: 'HH:mm:ss',
            range: [0, 1],
          },
          value: {
            tickCount: 5,
            min: 8,
          },
        }}
      >
        <Axis
          field="time"
          label={(text, index, total) => {
            const textCfg = {
              text: '',
            } as any;
            if (index === 0) {
              textCfg.textAlign = 'left';
              textCfg.text = text;
            } else if (index === total - 1) {
              textCfg.textAlign = 'right';
              textCfg.text = text;
            }
            return textCfg;
          }}
        />
        <Geometry
          type="line"
          position="time*value"
          animate={{
            update: {
              animation: 'lineUpdate',
            },
          }}
        />
      </Chart>
    </>
  );
};

export default ChartDemo;
