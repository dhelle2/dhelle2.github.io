

var i;
var s;
var l;
var le;
var d;
var attrs;
var b;
var count;

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
	count = 0;
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
	print("setup done 18");
}


//function locchange() {
  	//print(a.value());
//	print("changed");
//}

function place() {  
   print(place);
   print(d[s.value()]);
   var ob = d[s.value()]; 
   var obd = ob[attrs.value()];
   print(obd);

   //text(d[s.value()].attrs.value(),random(windowWidth),random(windowHeight));	
   //text(d[loc].attrs.value(),random(windowWidth),random(windowHeight));
   
   text("" + obd,random(windowWidth),random(windowHeight));

   var loc = "https://goweather.herokuapp.com/weather/" + ob.name;
   print(loc);
   if(count > 7) {
     loadJSON(loc,we);    
     count = 0;
   }
   count++;
}

function we(data) {
   print("in we...");
   co = data.temperature;
   print(co);
   //fill(co*10);
   text(co,random(windowWidth),random(windowHeight));
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
	s.changed(c);
    }
	//if(i) {
		//image(i,100,100);
		//i = null;
	//} 
 
}

function c() {
	print("changed");
	print(s.value());
}
