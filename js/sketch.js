function setup() {
  // backfround(120);
 // createCanvas(600,600);
  createCanvas(windowWidth,windowHeight);
  background(120);
}

function draw() {
  //background(120);
  //fill(255, 0, 0)
  stroke(110)
  strokeWeight(20)
  //ellipse(400, 500, 100, 100);
  ellipse(400, 500, 50, mouseY);
  if(mouseIsPressed) {
     fill(110)
  }
  else {
     fill(120)
  }
 }

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  background(120);
}
