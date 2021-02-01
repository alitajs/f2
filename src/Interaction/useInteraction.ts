import { useMemo } from 'react';
import { InteractionProps } from './';

export interface UseInteraction extends InteractionProps {}

export default (props = {} as UseInteraction) => {
  const { chart, field, ...reset } = props;
  useMemo(() => {
    if (!chart || !field) return;
    if (reset) {
      console.log('interaction');
      console.log(field);
      chart.interaction(field, reset);
    } else {
      chart.interaction(field);
    }
  }, [chart]);

  return null;
};
