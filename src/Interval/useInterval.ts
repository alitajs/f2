import { useState, useMemo } from 'react';
import { IntervalProps } from './';
import { isFunction } from '../utils';

export interface UseInterval extends IntervalProps {}

export default (props = {} as UseInterval) => {
  const { chart, config, container, ...reset } = props;
  const [interval, setInterval] = useState<IntervalProps | undefined>();
  useMemo(() => {
    if (!chart) return;
    const interval = chart.interval(config) as IntervalProps;
    for (const key in reset) {
      const fn = interval[key];
      const value = reset[key];
      if (isFunction(fn)) {
        if (Array.isArray(value)) {
          fn.apply(interval, value);
        } else {
          interval[key](value);
        }
      }
    }
    console.log('setInterval');
    setInterval(interval);
  }, [chart]);

  return {
    interval,
    setInterval,
  };
};
