const data = [];
const step = Math.PI / 4;
for (let x = -25; x < 25; x += step) {
  data.push({
    x,
    y: Math.sin(x),
  });
}
export default data;
