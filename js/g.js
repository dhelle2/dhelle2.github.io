

var i;
var s;
var l;

function preload() {
	print("start...");
    //i = loadImage("http://ia600202.us.archive.org/7/items/FrankenberryCountChoculaTevevisionCommercial1971/FrankenberryCountChoculaTevevisionCommercial1971.thumbs/frankerberry_countchockula_1971.0001_000029.jpg");
    print("loaded?");
	loadJSON("https://odn.data.socrata.com/resource/9jg8-ki9x.json",done);
}

function done(data) {
    print(data.length);

    //text(data.name,10,10);
    //i = loadImage("http://ia600202.us.archive.org/7/items/FrankenberryCountChoculaTevevisionCommercial1971/FrankenberryCountChoculaTevevisionCommercial1971.thumbs/frankerberry_countchockula_1971.0001_000029.jpg")
    
    l = 1; // loaded

}

function mozart(data){
	print(data);
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	//image(i,100,100);
	s = createSelect();
    	s.position(20,20);
}

function draw() {
	
    if(l) {
	print("l not zero");
	var i;
    	for(i=0;i<5;i++) { //<data.length;i++) {
	  print(i);
	  s.option("" + i);
        }
        l = 0;
    }
	//if(i) {
		//image(i,100,100);
		//i = null;
	//}
}
