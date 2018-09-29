var xspeed;

var x;

var s;


var c;

var numberDisplay;

var levelDisplay;

var top;
var bottom;
var right;
var left;

var b;

var level;

// level 2:
var started;

var inputTwo;

function setup() {

  started = false;

  level = 1;

  c = 0;

  xspeed =  .1;

  x = 0;

  createCanvas(windowWidth, windowHeight);

  levelDisplay = createElement("h1","Count to 3!!");
  levelDisplay.style("color","white");
  //levelDisplay.position(400,20);
  levelDisplay.position(windowWidth/2,20);

  numberDisplay = createElement("h1","0");
  numberDisplay.style("color","white");
  //numberDisplay.position(400,500);
  numberDisplay.position(windowHeight/2,windowWidth/2-20);

  s = createSlider(1,30,1);
  //s.value = 1;
  //s.position(100,300);
  s.position(windowWidth/3,4*windowHeight/5);

  // for scene 2:

  top = false;
  bottom = false;
  right = false;
  left = false;

}

function draw() {

    if(level == 4) {
      scene4();
      return;
    }

    if(level == 3) {
      scene3();
      return;
    }

    if(level == 2) {
      scene2();
      return;
    }

    if(c == 3) {
      s.hide();
      numberDisplay.hide();
      levelDisplay.html("divide and conquer"); 
      level = 2;
      inputTwo = createInput("type something..");
      //inputTwo.position(500,500);
      inputTwo.position(windowWidth/2,windowHeight/2);
      inputTwo.changed(start);
      //inputTwo.keyReleased(start); 
      //inputTwo.input(start);
      scene2();
      return;
    }

    background(0);

    //fill(255);

    //number.html("" + c);
    numberDisplay.html("" + c);
    //numberDisplay.html("1");

    xspeed = s.value() * .1;

    //background(255);

    translate(round(x),0);

    ellipse(56,83,5,8);

    ellipse(50,100,30,30);

    ellipse(92,120,65,55);

    x = x - xspeed;

    if (x < -150 ) {

       c = c + 1;

       x = windowWidth - 50;

       //x = 100;

    }

    //if(slider.changed) {
    //  xspeed = xspeed * slider.value();
    //}

    //x = x + xspeed;

}

function start() {
  started = true;
  inputTwo.hide();
}

function scene2() {

   if(started) {
     //ellipse(mouseX,mouseY,100,100);
     ellipse(mouseX,mouseY,windowWidth/10,windowHeight/10);
   }

   //if(inputTwo.changed) {
   //  started = true;
   //}

   if(mouseX < 20) {
     left = true;
   }

   if(mouseY < 0) {
     top = true;
   }

   if(mouseY > windowHeight - 20) {
     bottom = true;
   }

   if(mouseX > windowWidth - 20) {
     right = true;
   }

   if( started && ( (top && bottom) || (left && right) ) ) {
     background(255);
     levelDisplay.html("the end?");
     levelDisplay.style("color","black");
     b = createButton("sure!");
     b.position(100,100);
     level = 3;
     scene3();
     return;
   }

}


function scene3() {

   background(255);

   fill(0);

   triangle(mouseX,20,100);

   //if(b.mousePressed) {
   //  scene4();
   //  return;
   //}

   b.mousePressed(preScene4);

}

function preScene4() {
   
   b.hide();
   scene4();

}

function scene4() {

  if(level != 4) {
     level = 4;
  }

  background(0);

}
