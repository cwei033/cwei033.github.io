class Stripe {
  constructor(_x, _color, _scale) {
    this.x = _x;
    this.color = _color;
    this.scale = _scale;
  }

  display() {
    push();
    fill(this.color);
    scale(this.scale);
    noStroke();
    rect(this.x, 0, 40, height);
    pop();
  }

  move() {
    this.x += 5;
  }
}
