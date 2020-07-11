function setup() {
  createCanvas(520, 520);
}

function draw() {
  background(0);
  for (y = 520; y > 20; y = y - 20) {
    if (y % 3 == 0) {
      fill(0, 0, 255);
    }
    if (y % 3 == 1) {
      fill(255, 0, 0);
    }
    if (y % 3 == 2) {
      fill(0, 255, 0);
    }
    circle(260, 260, y);
  }
}
