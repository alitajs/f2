import React, { useState, useRef, useEffect } from 'react';
import { useChart, useGeometry } from '@alitajs/f2';

const ChartDemo = () => {
  const [state, setstate] = useState([
    { year: '1951', sales: 38 },
    { year: '1952', sales: 52 },
    { year: '1956', sales: 61 },
    { year: '1957', sales: 145 },
    { year: '1958', sales: 48 },
    { year: '1959', sales: 38 },
    { year: '1960', sales: 38 },
    { year: '1962', sales: 38 },
  ]);
  const [isXy, setIsXy] = useState(true);
  const elmRef = useRef<HTMLCanvasElement>(null);
  const { setContainer, container, chart } = useChart({
    container: elmRef.current as HTMLCanvasElement,
    width: 750,
    height: 400,
    data: state,
    pixelRatio: window.devicePixelRatio,
    animate: true,
  });
  const { geometry } = useGeometry({
    type: 'interval',
    chart,
    container,
    position: 'year*sales',
  });

  useEffect(() => setContainer(elmRef.current as HTMLElement | undefined), [
    elmRef.current,
  ]);
  useEffect(() => {
    if (chart && geometry) {
      geometry.position(isXy ? 'year*sales' : 'sales*year');
      chart.repaint();
    }
  }, [isXy]);

  return (
    <>
      <button
        onClick={() => {
          setstate([
            { year: '1951', sales: 50 },
            { year: '1952', sales: 50 },
            { year: '1956', sales: 50 },
            { year: '1962', sales: 38 },
          ]);
        }}
      >
        数据变化
      </button>
      <button
        onClick={() => {
          setIsXy(!isXy);
        }}
      >
        两级反转
      </button>
      <canvas ref={elmRef} style={{ display: 'block' }} />
    </>
  );
};

export default ChartDemo;
