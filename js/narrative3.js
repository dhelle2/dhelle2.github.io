var canvas;

// screen text
var greeting;
var title;
var firstOption;
var secondOption;
var walkCloser;

// images
var spaceBG;
var effect1;

// sounds
var modem;
var bach;

function preload() {

  text("loading...",100,100);

  spaceBG = loadImage('./images/space.png');
  effect1 = loadImage('./images/effect1.png');

  modem = loadSound('./sounds/ModemSound1.mp3'); // he used "audio", "modem.mps"
  bach = loadSound("./sounds/bach.mp3"); // public domain from: http://freemusicarchive.org/tag/bach/ (Kevin MacLeod)
}

//inputs
var nameInput;

//animation variables
var sunX;
var sunY;

var sunSlider;

//booleans
var firstScreen;
var walkToSun = false;
var sunAnimate = false;
var walktoSun = false;
var walkCloser = false;

function setup() {

  //walkCloser = false;
  
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");

  beginning();

}



function draw() {
  
  if(walkToSun == true) {
    toSunAnim();
  } else if(walkCloser == true){
      walkCloserAnim();
  }
}


function windowResized() {
    canvas = createCanvas(windowWidth, windowHeight);
}