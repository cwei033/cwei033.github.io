let column = [];
let columncalc = 2000;
let columnmove;
let stripe = [0,40];

function setup() {
  createCanvas(windowWidth, windowHeight);



}

function draw() {
  background('#CFC096');

  columncalc -= 80;
  column.push(columncalc);
  for (let i = 0; i < column.length; i++) {
    stripe[i] = new Stripe(column[i] += 1, 'rgba(223, 47, 2, 1)', 1); }


  console.log(column);

  for (let i = 0; i < column.length; i++) {
    stripe[i].display();
    // stripe[i].move();

    // if (stripe[i].x >= windowWidth) {
    //   stripe[i].x = column[0];
    // }
  }



}
