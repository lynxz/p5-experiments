let bodies = [];

function setup() {
  createCanvas(800, 800);
  bodies.push(new Body(300, 300, 1, 0, 80));
  bodies.push(new Body(300, 500, -1, 0, 100));
  bodies.push(new Body(500, 400, 0, 0, 200));
}

function draw() {
  background(0);

  for (let body of bodies) {
    body.update();
  }

  for (let i = 0; i < bodies.length - 1; i++) {
    for (let j = i + 1; j < bodies.length; j++) {
      let force = bodies[i].calculateAttraction(bodies[j]);
      bodies[i].vx += force[0] / bodies[i].mass;
      bodies[i].vy += force[1] / bodies[i].mass;
      bodies[j].vx -= force[0] / bodies[j].mass;
      bodies[j].vy -= force[1] / bodies[j].mass;
    }
  }

  fill(255);
  noStroke();
  for (let body of bodies) {
    circle(body.x, body.y, body.mass / 5);
  }
}
