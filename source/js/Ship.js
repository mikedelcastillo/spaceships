import * as PIXI from 'pixi.js';
import * as Matter from 'matter-js';
const PhysicsObject = require('./PhysicsObject');
const keyboard = require('./keyboard');
const shipTypes = require('./ship-types');

module.exports = class Ship extends PhysicsObject{
  constructor(type = "01", x = 0, y = 0){
    const shipType = shipTypes.find(s => s.type == type);

    super(
      Matter.Bodies.fromVertices(x, y, shipType.verts),
      new PIXI.Sprite(PIXI.loader.resources[type].texture)
    );

    this.shipType = shipType;
    this.sprite.width = this.shipType.width;
    this.sprite.height = this.shipType.height;

    this.sprite.anchor.x = 0.5;
    this.sprite.anchor.y = 0.5;

    this.rotationSpeed = 0.001;
    this.movementSpeed = 0.005;

    window.Matter = Matter;
    window.body = this.body;
    window.sprite = this.sprite;
  }

  thrust(amount){
    Matter.Body.applyForce(this.body, this.body.position, {
      x: Math.cos(this.body.angle - Math.PI / 2) * amount,
      y: Math.sin(this.body.angle - Math.PI / 2) * amount
    })
  }

  turn(amount){
    Matter.Body.setAngularVelocity(
      body, body.angularVelocity + amount
    );
  }

  update(){
    //65 A
    //87 W
    //68 D
    // 83 S

    if(keyboard.down[65]){
      this.turn(-this.rotationSpeed);
    }

    if(keyboard.down[68]){
      this.turn(this.rotationSpeed);
    }

    if(keyboard.down[87]){
      this.thrust(this.movementSpeed);
    }

    if(keyboard.down[83]){
      this.thrust(-this.movementSpeed);
    }
  }
}
