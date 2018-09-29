var xspeed;

var x;

var s;


function setup() {

  xspeed =  .1;

  x = 0;

  createCanvas(windowWidth, windowHeight);

  //s = createSlider("test");

}


function draw() {

    background(255);

    translate(round(x),0);

    ellipse(56,83,5,8);

    ellipse(50,100,30,30);

    ellipse(92,120,65,55);

    x = x - xspeed;

    if (x < -150 ) {

       x = windowWidth - 50;

       //x = 100;

    }

    //x = x + xspeed;

}
