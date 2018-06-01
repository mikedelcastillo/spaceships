import * as Matter from 'matter-js';

const shipTypes = [];

const add = (id, width, height, verts) => {
  shipTypes.push({
    id, name: id, type: id,
    url: `img/spaceships/${id}.png`,
    width, height,
    verts: Matter.Vertices.create(verts)
  });
};

let w = 150;
let h = 242;
let v = [
  {x: 0, y: -121},
  {x: 48, y: -42},
  {x: 75, y: 58},
  {x: 57, y: 87},
  {x: 29, y: 65},
  {x: 10, y: 109},
  {x: 10, y: 121},
  {x: 0, y: 117},
  {x: -10, y: 121},
  {x: -10, y: 109},
  {x: -29, y: 65},
  {x: -57, y: 87},
  {x: -75, y: 58},
  {x: -75, y: 58},
  {x: -48, y: -42},
];

let m = 0.5;
w = w * m;
h = h * m;
v = v.map(c => { return {x: c.x * m, y: c.y * m};});

add("01", w, h, v);
add("02", w, h, v);
add("03", w, h, v);
add("04", w, h, v);

module.exports = shipTypes;
