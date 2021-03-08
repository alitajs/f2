import { useState, useMemo } from 'react';
import { Guide } from '@antv/f2';
import { GuideProps } from './';
import { isFunction } from '../utils';

export interface UseGuide extends GuideProps {}

export default (props = {} as UseGuide) => {
  const { chart, type, data, offsetX, content, position, ...reset } = props;
  const [guide, setGuide] = useState<Guide | undefined>();
  useMemo(() => {
    if (!chart || !type) return;
    const guide = chart.guide();
    if (!isFunction(guide[type])) return null;
    if (data && data.length) {
      data.map((item: any) => {
        guide[type]({
          ...reset,
          content: content ? content(item) : undefined,
          position: position ? position(item) : undefined,
          offsetX: offsetX ? offsetX(item) : 0,
        });
      });
    } else {
      guide[type](reset);
    }
    setGuide(guide);
  }, [chart]);

  return {
    guide,
    setGuide,
  };
};
