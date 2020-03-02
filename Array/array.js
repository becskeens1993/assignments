var x = 60
var y = 150
var z = 40




function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight-height) / 2;
    cnv.position(x,y);
   
   }
   
   function setup(){
     cnv = createCanvas(810,720);
     centerCanvas();
   }

   function draw(){
    background (102,102,255);
    x += 0.8;
    y += 0.8;
    z += 0.8;
    rect(x,340,100,100);
    rect(y,500,70,70);
    rect(z,90,10,10);
   }