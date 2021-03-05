import F2 from '../../F2';
import { isFunction } from '../../utils';

let lastClickedShape: any = undefined;

const init = (chart: any) => {
  const selectShapeByLegendName = (
    name: string,
    onEnd?: (clickedShape: any, coord: any, canvas: any) => void,
  ) => {
    const canvas = chart.get('canvas');
    const coord = chart.get('coord');
    const geom = chart.get('geoms')[0];
    const container = geom.get('container');
    const shapes = geom.get('shapes'); // 只有带精细动画的 geom 才有 shapes 这个属性

    let clickedShape: any;
    F2.Util.each(shapes, (shape: any) => {
      const origin = shape.get('origin');
      if (origin && origin._origin.name === name) {
        clickedShape = shape;
        return false;
      }
    });
    if (lastClickedShape) {
      lastClickedShape
        .animate()
        .to({
          attrs: {
            lineWidth: 0,
          },
          duration: 200,
        })
        .onStart(function() {
          if (lastClickedShape.label) {
            lastClickedShape.label.hide();
          }
        })
        .onEnd(function() {
          lastClickedShape.set('selected', false);
        });
    }

    if (clickedShape.get('selected')) {
      clickedShape
        .animate()
        .to({
          attrs: {
            lineWidth: 0,
          },
          duration: 200,
        })
        .onStart(function() {
          if (clickedShape.label) {
            clickedShape.label.hide();
          }
        })
        .onEnd(function() {
          clickedShape.set('selected', false);
        });
    } else {
      const color = clickedShape.attr('fill');
      clickedShape
        .animate()
        .to({
          attrs: {
            lineWidth: 10,
          },
          duration: 350,
          easing: 'bounceOut',
        })
        .onStart(function() {
          clickedShape.attr('stroke', color);
          clickedShape.set('zIndex', 1);
          container.sort();
        })
        .onEnd(function() {
          clickedShape.set('selected', true);
          clickedShape.set('zIndex', 0);
          container.sort();
          lastClickedShape = clickedShape;
          if (clickedShape.label) {
            clickedShape.label.show();
          } else if (isFunction(onEnd)) {
            onEnd && onEnd(clickedShape, coord, canvas);
            // drawLabel(clickedShape, coord, canvas, x, y, total);
          }
          return { clickedShape, coord, canvas };
        });
    }
  };
  chart.set('selectShapeByLegendName', selectShapeByLegendName);
};
export { init };

export default {
  init,
};
