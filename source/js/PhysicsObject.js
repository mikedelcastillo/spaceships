import * as PIXI from 'pixi.js';
import * as Matter from 'matter-js';

const pixi = require('./pixi');
const matter = require('./matter');

module.exports = class PhysicsObject{
  constructor(body, sprite){
    this.body = body;
    this.sprite = sprite;

    this.body.frictionAir = 0 * 0.005;
    this.body.frictionStatic = 0.5;
    this.body.friction = 0.5;


    matter.add(this.body);
    pixi.camera.addChild(this.sprite);
  }

  updateCoordinates(){
    this.sprite.position.x = this.body.position.x;
    this.sprite.position.y = this.body.position.y;
    this.sprite.rotation = this.body.angle;
  }
}
