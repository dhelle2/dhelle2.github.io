var canvas;

var bgColor;

var userName;

colorButton;

var paragraph;

var textInput;

var ellipseSlider;

function setup() {

    canvas = createCanvas(600,600);
    canvas.position(100, 200);
    bgColor = 200;

    //create a h1 element
    userName = createElement('h1', 'Dan Heller');
    //userName.position(100,20);

    // create a button element
    button = createButton('Change Color');
    button.mousePressed(changeColor);

    paragraph = createP('this is a paragraph');
    // check to see if the mouse hovers over a paragraph
    paragraph.mouseOver(changeColor);
    //mouseOut().. where?

    // create text box
    textInput = createInput( '' );
    //userName.html(textInput.value())
    //textInput.input( updateName );
    textInput.changed(updateName);
    textInput.changed(updateFontColor);

    createElement( 'br' );

    // create a slider element min, max, start
    ellipseSlider = createSlider( 0, 600, 300 );

}

// call back functions

function updateFontColor() {

	paragraph.style("color","black");
	paragraph.style("font-size","24pt;=");
	userName.style("color","black");
}

function updateName() {

    userName.html( textInput.value( ) );	
}


function changeColor() {
    
    bgColor = color( random( 255 ) );
    //bgColor = color( random( 255 ),random( 25 ), random( 255 ) );
    //bgColor = color( random( textInput.text ),random( textInput.text),random(textInput.text));
    //bgColor = color( random( textInput.value() ),random( textInput.value() ),random( textInput.value() ) );
}

// dynamic drawing

function draw() {
    background( bgColor );
    //fill( 255, 0, 0 );
    //fill( 100 );
    text( textInput.value(), 50, 100 );
    ellipse( width/2, height/2, ellipseSlider.value(), ellipseSlider.value() );
    userName.position( ellipseSlider.value(), 0 );

    if( ellipseSlider.value() > 400 ) {
       fill(80);
       userName.hide();
    }
    else{
       userName.show();
       userName.position( ellipseSlider.value(), 0 );
       fill(100);
    }
}