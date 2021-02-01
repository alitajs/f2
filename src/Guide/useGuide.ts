import { useState, useMemo } from 'react';
import { Guide } from '@antv/f2';
import { GuideProps } from './';
import { isFunction } from '../utils';

export interface UseGuide extends GuideProps {}

export default (props = {} as UseGuide) => {
  const { chart, type, ...reset } = props;
  const [guide, setGuide] = useState<Guide | undefined>();
  useMemo(() => {
    if (!chart || !type) return;
    const guide = chart.guide();
    if (!isFunction(guide[type])) return null;
    guide[type](reset);
    setGuide(guide);
  }, [chart]);

  return {
    guide,
    setGuide,
  };
};
