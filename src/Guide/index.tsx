import React, { useImperativeHandle, forwardRef } from 'react';
import useGuide from './useGuide';
import {
  Chart as F2Chart,
  Guide,
  GuideLineParams,
  GuideArcParams,
  GuideHtmlParams,
  GuideTextParams,
  GuideRectParams,
  GuideTagParams,
  GuidePointParams,
  GuideRegionFilterParams,
} from '@antv/f2';

export type GuideKind =
  | 'arc'
  | 'html'
  | 'text'
  | 'rect'
  | 'line'
  | 'tag'
  | 'point'
  | 'regionFilter';

export type GuideParams<TGuideKind extends GuideKind> = TGuideKind extends 'arc'
  ? GuideArcParams
  : TGuideKind extends 'html'
  ? GuideHtmlParams
  : TGuideKind extends 'text'
  ? GuideTextParams
  : TGuideKind extends 'rect'
  ? GuideRectParams
  : TGuideKind extends 'line'
  ? GuideLineParams
  : TGuideKind extends 'tag'
  ? GuideTagParams
  : TGuideKind extends 'point'
  ? GuidePointParams
  : TGuideKind extends 'regionFilter'
  ? GuideRegionFilterParams
  : never;
// TODO: 这里类型需要根据类中的type来确定，不知道该怎么写
// export interface GuideProps extends GuideParams<GuideKind> {
export interface GuideProps {
  type: GuideKind;
  chart: F2Chart;
  [key: string]: any;
}

export default forwardRef<GuideProps, GuideProps & { guide: Guide }>(
  (props, ref) => {
    const { guide } = useGuide(props);
    useImperativeHandle(ref, () => ({ ...props, guide }), [guide]);
    return null;
  },
);
