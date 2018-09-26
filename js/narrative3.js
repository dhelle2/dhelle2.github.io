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
var h;

// sounds
var modem;
var bach;
var mozart;

function preload() {
  // doesn't work:?
  //createP("loading...");

  spaceBG = loadImage('./images/space.png');
  effect1 = loadImage('./images/effect1.png');
  h = loadImage('./images/HumboldtPark.jpg');

  modem = loadSound('./sounds/ModemSound1.mp3'); // he used "audio", "modem.mps"
  bach = loadSound("./sounds/bach.mp3"); // public domain from: http://freemusicarchive.org/tag/bach/ (Kevin MacLeod)
  mozart = loadSound("./sounds/mozart.mp3"); // public domain from: http://freemusicarchive.org/  from MIT 
}

//inputs
var nameInput;
var bachButton;

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
