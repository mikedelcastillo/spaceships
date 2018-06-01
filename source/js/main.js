import * as PIXI from 'pixi.js';
import * as Matter from 'matter-js';

const pixi = require('./pixi');
const matter = require('./matter');
const game = require('./game');
const keyboard = require('./keyboard');

const Ship = require('./Ship');
const Ball = require('./Ball');

let ship;

pixi.load((loader, resources) => {

  for(let i = 0; i < 100; i++){
    game.physicsObjects.push(new Ball(
      Math.random() * 3000,
      Math.random() * 3000,
      Math.random() * 50 + 5
    ));
  }

  ship = new Ship();
  game.physicsObjects.push(ship);
  game.ships.push(ship);

  loop();
})


function loop(){
  requestAnimationFrame(loop);

  game.ships.forEach(s => s.update());
  game.physicsObjects.forEach(o => o.updateCoordinates());

  pixi.camera.pivot.x += (ship.body.position.x - pixi.camera.pivot.x) / 20;
  pixi.camera.pivot.y += (ship.body.position.y - pixi.camera.pivot.y) / 20;
  let scale = Math.sqrt(
    ship.body.velocity.x * ship.body.velocity.x +
    ship.body.velocity.y * ship.body.velocity.y
  );
  scale = 1 - Math.sqrt(scale/50);
  pixi.camera.scale.x += (scale - pixi.camera.scale.x) / 20;
  pixi.camera.scale.y += (scale - pixi.camera.scale.y) / 20;
  pixi.camera.position.x = pixi.renderer.width / pixi.renderer.resolution / 2;
  pixi.camera.position.y = pixi.renderer.height / pixi.renderer.resolution / 2;

  matter.update();
  pixi.render();
}
