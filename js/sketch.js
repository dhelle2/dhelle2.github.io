function setup() {
  // backfround(120);
 // createCanvas(600,600);
  createCanvas(windowWidth,windowHeight);
  background(120);
}

function draw() {
  //background(120);
  //fill(255, 0, 0)
  stroke(0, 255, 0)
  strokeWeight(20)
  //ellipse(400, 500, 100, 100);
  ellipse(400, 500, mouseX, mouseY);
  if(mouseIsPressed) {
     fill(0, 0, 255)
  }
  else {
     fill(255, 0, 0)
  }
 }

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  background(120);
}
