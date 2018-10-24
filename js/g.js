

var i;
var s;
var l;
var le;
var d;
var attrs;
var b;

function preload() {
	print("start...");
    //i = loadImage("http://ia600202.us.archive.org/7/items/FrankenberryCountChoculaTevevisionCommercial1971/FrankenberryCountChoculaTevevisionCommercial1971.thumbs/frankerberry_countchockula_1971.0001_000029.jpg");
    print("loaded?");
	//loadJSON("https://odn.data.socrata.com/resource/9jg8-ki9x.json",done);
	loadJSON("https://odn.data.socrata.com/resource/wmwh-4vak.json",done);
}

function done(data) {
    //for(o in data[0]) {
    // print(o);    
    //}
	
    print(data.length);
	
    le = data.length;
	 
    d = data;
	
    print("le: " + le);

    //text(data.name,10,10);
    //i = loadImage("http://ia600202.us.archive.org/7/items/FrankenberryCountChoculaTevevisionCommercial1971/FrankenberryCountChoculaTevevisionCommercial1971.thumbs/frankerberry_countchockula_1971.0001_000029.jpg")
    
    l = 1; // loaded

}

function mozart(data){
	print(data);
}

function setup() {
        print("setup started..");
	createCanvas(windowWidth,windowHeight);
	//image(i,100,100);
	s = createSelect();
	attrs = createSelect();
    	s.position(20,20);
	//a.changed(locchange);
	//a.changed(c);
	attrs.position(20,60);
	b = createButton("place it")
	b.position(20,100);
	b.mousePressed(place);
	print("setup done 6");
}

function c() {
	print("changed");
}

//function locchange() {
  	//print(a.value());
//	print("changed");
//}

function place() {  
   print(place);
   //text(d[loc].attrs.value(),random(windowWidth),random(windowHeight));	
   //text(d[loc].attrs.value(),random(windowWidth),random(windowHeight));
}

function draw() {
 
    if(l) {
	print("l not zero");
	print("le: " + le);
	var i;
    	//for(i=0;i<5;i++) { 
	for(i=0;i<le;i++) {
	  //print(i);
	  //s.option("" + i);
	  s.option(d[i].name,i);
        }
	var o;
	for(o in d[0]) {
	  attrs.option(o);	
	}
        l = 0;
	a.changed(c);
    }
	//if(i) {
		//image(i,100,100);
		//i = null;
	//} 
 
}
