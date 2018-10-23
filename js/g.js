//http://gutendex.com/books/

var i 

function preload() {
	print("start...");
    i = loadImage("http://ia600202.us.archive.org/7/items/FrankenberryCountChoculaTevevisionCommercial1971/FrankenberryCountChoculaTevevisionCommercial1971.thumbs/frankerberry_countchockula_1971.0001_000029.jpg");
    print("loaded?");
	loadJSON("https://odn.data.socrata.com/resource/9jg8-ki9x.json",done);
}

function done(data) {
    print(data);
    text(data,10,10);
    //i = loadImage("http://ia600202.us.archive.org/7/items/FrankenberryCountChoculaTevevisionCommercial1971/FrankenberryCountChoculaTevevisionCommercial1971.thumbs/frankerberry_countchockula_1971.0001_000029.jpg")
}

function mozart(data){
	print(data);
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	image(i,100,100);
}

function draw() {
	//if(i) {
		//image(i,100,100);
		//i = null;
	//}
}
