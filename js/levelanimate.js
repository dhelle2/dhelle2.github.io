//animation functions

function toSunAnim() {
    background(0);
    sunX = windowWidth/2;
    sunY = windowHeight/2;
    sunX = sunX + random(-5,5);
    sunY = sunY + random(-3,3);
    ellipse(sunX, sunY, 300, 300);
}


function walkCloserAnim() {

   background(spaceBG);
   //background(255);
   //modem.play();
   //image(effect1, 100, 50);
   image(spaceBG, 500, 600, 900, 50);
   //fill(sunSlider.value(), 0, 0);
   ellipse(windowWidth/2, windowHeight/2, sunSlider.value(), sunSlider.value() );
   //ellipse(10,10,100,100);


   if(sunSlider.value() > 200){
      title.html("faster?")
      //mozart.speed(sunSlider.value());
      bach.rate(sunSlider.value());
      bach.stop();
      bach.start();
   }
   else {
      //mozart.speed(1);
      bach.rate(1);
   }

}