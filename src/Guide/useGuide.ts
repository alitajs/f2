import { GuideProps } from './';
import { isFunction } from '../utils';

export interface UseGuide extends GuideProps {}

export default (props = {} as UseGuide) => {
  const { chart, type, ...reset } = props;
  if (!chart || !type) return null;
  const guide = chart.guide();
  if (!isFunction(guide[type])) return null;
  guide[type](reset);
  return null;
};
