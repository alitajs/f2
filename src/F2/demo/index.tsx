import React, { useState, useRef, useEffect } from 'react';
import F2 from '@antv/f2';
import ScrollBar from '@antv/f2/lib/plugin/scroll-bar'; // 引入 ScrollBar 模块
require('@antv/f2/lib/interaction');
import Data from './data.json';

const ChartDemo = () => {
  useEffect(() => {
    const chart = new F2.Chart({
      id: 'container',
      pixelRatio: window.devicePixelRatio,
      plugins: [ScrollBar],
    });
    chart.source(Data, {
      release: {
        min: 1990,
        max: 2010,
      },
    });
    chart.tooltip({
      showCrosshairs: true,
      showItemMarker: false,
      background: {
        radius: 2,
        fill: '#1890FF',
        padding: [3, 5],
      },
      nameStyle: {
        fill: '#fff',
      },
      onShow: function onShow(ev) {
        const items = ev.items;
        items[0].name = items[0].title;
      },
    });
    chart.line().position('release*count');
    chart
      .point()
      .position('release*count')
      .style({
        lineWidth: 1,
        stroke: '#fff',
      });

    chart.interaction('pan');
    // 定义进度条
    chart.scrollBar({
      mode: 'x',
      xStyle: {
        offsetY: -5,
      },
    });

    // 绘制 tag
    chart.guide().tag({
      position: [1969, 1344],
      withPoint: false,
      content: '1,344',
      limitInPlot: true,
      offsetX: 5,
      direct: 'cr',
    });
    chart.render();
  }, []);

  return (
    <>
      <canvas id="container" style={{ display: 'block' }} />
    </>
  );
};

export default ChartDemo;
