import { useState, useMemo } from 'react';
import { GeometryProps } from './';
import { isFunction } from '../utils';

export interface UseGeometry extends GeometryProps {}

export default (props = {} as UseGeometry) => {
  const { chart, config, type, ...reset } = props;
  const [geometry, setGeometry] = useState<GeometryProps | undefined>();
  useMemo(() => {
    if (!chart) return;
    const geometry = chart[type](config) as GeometryProps;
    for (const key in reset) {
      const fn = geometry[key];
      const value = reset[key];
      if (isFunction(fn)) {
        if (Array.isArray(value)) {
          fn.apply(geometry, value);
        } else {
          if (geometry) geometry[key](value);
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
