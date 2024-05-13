let bodies = [];
let steps = [];
let index = 0;

function setup() {
  createCanvas(800, 800);
  steps = linSpace(0.7, 4, 10000);
  index = 0;
  background(0);
}

function draw() {
  stroke(255);

  var u = steps[index];

  var s = random(0, 1);
  for (i = 0; i < 1001; i++) {
    s = u * s * (1 - s);
  }
  for (i = 0; i < 1051; i++) {
    s = u * s * (1 - s);
  }

  var y = map(s, 0, 1, height, 0);
  var x = map(u, 0.7, 4, 0, width);
  print(y);
  point(x, y);
  index = index + 1;
}

function linSpace(start, end, num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(start + ((end - start) * i) / (num - 1));
  }
  return arr;
}
