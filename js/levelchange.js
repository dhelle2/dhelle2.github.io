function beginning() {
    background(0);

    //mozart.play();

    greeting = createP("Choose your fate!");
    createElement("br");

    nameInput = createButton("mozart");
    //nameInput.changed(startStory);
    //nameInput.clicked(startStory)
    nameInput.mousePressed(startStory);
    bachButton = createButton("bach");
    //bachButton.changed(walkCloserToSun);
    //bachButton.clicked(walkCloserToSun);
    //bachButton.mousePressed(walkCloserToSun);
    bachButton.mousePressed(playBach);
}

function startStory() {
    greeting.hide();
    nameInput.hide();
    bachButton.hide();
    bach.stop();
    mozart.play();
    userName = createElement('h1', nameInput.value());
    title = createElement('h1','Get home before the sun goes down')
    firstOption = createA("#","walk towards the sun");
    createElement('br');
    secondOption = createA("#","go home");

    firstOption.mousePressed(toSun);
    secondOption.mousePressed(toHome);
}


function toSun() {
   walkToSun = true;
   userName.html(nameInput.value());

   title.html("You walk towards the sun it gets bigger");
   firstOption.html('walk closer');
   secondOption.html("control the sun");
   firstOption.mousePressed(walkCloserToSun);

}

function toHome() {
    firstOption.hide();
    secondOption.hide();

    title.html('you have gone home. good night');
}

function walkCloserToSun() {

  // walkToSun = true;

   //nameInput.hide();
   //bachButton.hide();

   mozart.stop();

   walkToSun = false;
   walkCloser = true;

   userName.html(nameInput.value());

   title.html("You are very close to the sun");
   firstOption.html('Go home');
   secondOption.html("fly away");

   //modem.play();
   bach.play(); //?

   //mozart.play();

   sunSlider = createSlider(0, 255, 0);
   sunSlider.position(50, 600);
}

function playBach() {

  //nameInput.hide();
  bachButton.hide();

  background(spaceBG);

  mozart.stop();


  bach.play();
}