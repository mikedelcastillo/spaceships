import * as PIXI from 'pixi.js';
import * as Matter from 'matter-js';
const PhysicsObject = require('./PhysicsObject');

module.exports = class Ship extends PhysicsObject{
  constructor(x = 0, y = 0, radius = 20){
    super(
      Matter.Bodies.circle(x, y, radius),
      new PIXI.Sprite(PIXI.loader.resources["ball"].texture)
    );

    this.sprite.anchor.x = 0.5;
    this.sprite.anchor.y = 0.5;

    this.sprite.width = radius * 2;
    this.sprite.height = radius * 2;

    let a = Math.random() * Math.PI * 2;
    let amount = 10;

    Matter.Body.applyForce(this.body, this.body.position, {
      x: Math.cos(a) * amount,
      y: Math.sin(a) * amount
    })
  }
}
