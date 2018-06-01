import * as PIXI from 'pixi.js';

const shipTypes = require('./ship-types');

const stage = new PIXI.Container();
const camera = new PIXI.Container();

const renderer = PIXI.autoDetectRenderer(800, 600, {
  transparent: false,
  resolution: window.devicePixelRatio || 1
});

renderer.view.id = "canvas";

const resize = () => {
  renderer.resize(window.innerWidth, window.innerHeight);
};

resize();
window.addEventListener("load", resize, false);
window.addEventListener("resize", resize, false);

document.body.append(renderer.view);

const render = () => renderer.render(stage);

const load = callback => {
  PIXI.loader
  .add(shipTypes)
  .add("ball", "img/objects/ball.png")
  .load((loader, resources) => {
    console.log(resources)
    stage.addChild(camera);
    callback(loader, resources);
  });
};

module.exports = {
  stage,
  camera,
  renderer,
  render,
  load
};
