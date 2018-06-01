const keyboard = {
  down: {}
};

window.addEventListener("keydown", ({keyCode}) => {
  keyboard.down[keyCode] = true;
}, false);

window.addEventListener("keyup", ({keyCode}) => {
  keyboard.down[keyCode] = false;
}, false);

module.exports = keyboard;
