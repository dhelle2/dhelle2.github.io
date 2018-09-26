var canvas;

//screen text
var greeting;
var title;
var firstOption;
var secondOption;

//inputs
var nameInput;

//animation variables
var sunX;
var sunY;

//booleans
var firstScreen;
var walkToSun;
var sunAnimate;

function setup() {
  
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");

  beginning();

}


function beginning() {
    background(0);
    greeting = createP("Please type your name and press enter:");
    createElement("br");

    nameInput = createInput("type your name here");
    nameInput.changed(startStory);
}

function startStory() {
    greeting.hide();
    nameInput.hide();
    userName = createElement('h1', nameInput.value());
    title = createElement('h1','Get home before the sun goes down')
    firstOption = createP("walk towards the sun");
    secondOption = createP("go home");

    firstOption.mousePressed(toSun);
    secondOption.mousePressed(toHome);
}


function toSun() {
   walkToSun = true;
   userName.html(nameInput.value());

   title.html("You walk towards the sun it gets bigger");
   firstOption.html('walk closer');

}

function toHome() {
    firstOption.hide();
    secondOption.hide();

    title.html('you have gone home. good night');
}

function draw() {
  
  if(walkToSun == true) {
    toSunAnim();
  }
}


function toSunAnim() {
    background(0);
    sunX = windowWidth/2;
    sunY = windowHeight/2;
    sunX = sunX + random(-5,5);
    sunY = sunY + random(-3,3);
    ellipse(sunX, sunY, 300, 300);
}

function windowResized() {
    canvas = createCanvas(windowWidth, windowHeight);
}