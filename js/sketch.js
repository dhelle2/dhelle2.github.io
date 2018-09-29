var xspeed;

var x;

var s;


var c;

var numberDisplay;


function setup() {

  c = 0;

  xspeed =  .1;

  x = 0;

  createCanvas(windowWidth, windowHeight);

  numberDisplay = createElement("h1","0");
  numberDisplay.style("color","white");
  numberDisplay.position(400,500);

  s = createSlider(1,40,1);
  //s.value = 1;
  s.position(100,300);

}


function draw() {

    background(0);

    //fill(255);

    //number.html("" + c);
    numberDisplay.html("1");

    xspeed = s.value() * .1;

    //background(255);

    translate(round(x),0);

    ellipse(56,83,5,8);

    ellipse(50,100,30,30);

    ellipse(92,120,65,55);

    x = x - xspeed;

    if (x < -150 ) {

       x = windowWidth - 50;

       //x = 100;

    }

    //if(slider.changed) {
    //  xspeed = xspeed * slider.value();
    //}

    //x = x + xspeed;

}
