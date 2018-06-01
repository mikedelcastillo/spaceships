import * as Matter from 'matter-js';

const engine = Matter.Engine.create({
  // enableSleeping: true
});
const world = engine.world;

world.gravity.x = 0;
world.gravity.y = 0;

const add = a => Matter.World.add(world, a);
const update = () => Matter.Engine.update(engine);

module.exports = {
  engine,
  world,
  update,
  add
};
