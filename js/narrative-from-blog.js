var canvas;

//screen text
var greeting;
var title;
var firstOption;
var secondOption;
var userName;

//inputs
var nameInput;

//animation variables
var sunX;
var sunY;

//boolean
var firstScreen;
var walkToSun;
var sunAnimate;
var walkCloser;

function setup(){

canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style("z-index", "-1");

beginning();
}

function beginning(){
background(0);
greeting = createP("Please type your name and press enter");
createElement("br");

nameInput = createInput("type your name here");
nameInput.changed(startStory);
}

function startStory(){
greeting.hide();
nameInput.hide();
userName = createElement('h1', nameInput.value());
title = createElement('h1', "Get home before the sun sets");

firstOption = createP("walk towards the sun");
secondOption = createP("go home");

firstOption.mousePressed(toSun);
secondOption.mousePressed(toHome);
}

function toSun(){
walkToSun = true;
userName.html(nameInput.value());

title.html('Yourk towards the sun, it gets bigger');
firstOption.html('walkser');
secondOption.html("controlsun");
firstOption.mousePressed(walkCloserToSun);
}


function toHome(){
firstOption.hide();
secondOption.hide();

title.html('youe gone home. good night');

}
function walkCloserToSun(){
walkToSun = false;
walkCloser = true;
}


function draw(){
background(0);
if(walkToSun == true){
toSunAnim();
}else if(walkCloser == true){

}

}

//animation functions
function toSunAnim(){

sunX = windowWidth/2;
sunY = windowHeight/2;
sunX = sunX + random(-5, 5);
sunY = sunY + random(-3, 3);
ellipse(sunX, sunY, 300, 300);
}

function WindowResized(){
canvas = createCanvas(windowWidth, windowHeight);

}