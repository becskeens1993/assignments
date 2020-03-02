var cnv;

function centerCanvas() {
 var x = (windowWidth - width) / 2;
 var y = (windowHeight-height) / 2;
 cnv.position(x,y);
 angleMode(DEGREES);
 
}

function setup() {
  cnv = createCanvas(1000,870);
  centerCanvas();
  bgColor = random(255);
  background(220);

}


function draw() {
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
  fill(bgColor);
  noStroke();
  ellipse(500, 480, 500, 500);
  fill(bgColor);
  translate(500, 480);
   rotate(-90);
   if (frameCount % 60 == 0) {
    bgColor = color(random(255), random(255), random(255));
  
  }

   let hr = hour();
   let mn = minute();
   let sc = second();

   strokeWeight(12);

   let minuteAngle = map(mn, 0, 60, 0, 360);

   let hourAngle = map(hr % 12, 0, 12, 0, 360);

   let scAng = map(sc, 0, 60, 0, 360);

   push();
   rotate(minuteAngle);
   stroke(255);
   line(0, 0, 150, 0);
   pop();

   push();
   rotate(hourAngle);
   stroke(0);
   line(0, 0, 125, 0);
   pop();

   push();
   stroke(170,169,171);
   rotate(scAng);
   line(0, 0, 200, 0);
   pop();

   stroke(bgColor);
   point(0, 0);

 }
 
 function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  ellipse(x, y, speed, speed);
}