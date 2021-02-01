import { useMemo } from 'react';
import { CoordinateProps } from './';

export interface UseCoordinate extends CoordinateProps {}

export default (props = {} as UseCoordinate) => {
  const { chart, type, ...reset } = props;
  useMemo(() => {
    if (!chart || !type) return;
    if (reset) {
      chart.coord(type, reset);
    } else {
      chart.coord(type);
    }
  }, [chart]);

  return null;
};
