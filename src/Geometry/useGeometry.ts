import { useState, useMemo } from 'react';
import { GeometryProps } from './';
import { isFunction } from '../utils';

export interface UseGeometry extends GeometryProps {
  [key: string]: any;
}

export default (props = {} as UseGeometry) => {
  const { chart, config, container, type, ...reset } = props;
  const [geometry, setGeometry] = useState<UseGeometry | undefined>();
  useMemo(() => {
    if (!chart) return;
    const geometry = chart[type](config) as UseGeometry;
    if (!geometry) {
      setGeometry(undefined);
      return;
    }
    for (const key in reset) {
      const fn = geometry[key];
      const value = reset[key];
      if (isFunction(fn)) {
        if (Array.isArray(value)) {
          fn.apply(geometry, value);
        } else {
          geometry[key](value);
        }
      }
    }
    setGeometry(geometry);
  }, [chart]);

  return {
    geometry,
    setGeometry,
  };
};
