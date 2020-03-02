var cnv;
function centerCanvas() {
 var x = (windowWidth - width) / 2;
 var y = (windowHeight-height) / 2;
 cnv.position(x,y);

}

function setup(){
  cnv = createCanvas(810,720);
  centerCanvas();
  background (255,102,102);
}

var r = 90;
var s = 0;
var t = 180;
var u = 270;
var v = 360;
var w = 450;
var x = 540;
var y = 630;
var z = 720;


function draw(){
  noStroke();
  fill (0);
  rect(s,s,r,r);
  rect(r,s,r,r);
  fill(255,255,153);
  rect(t,s,r,r);
  rect(u,s,r,r);
  rect(v,s,r,r);
  rect(w,s,r,r);
  rect(x,s,r,r);
  fill(0);
  rect(y,s,r,r);
  rect(z,s,r,r);
  fill(255,255,153);
  rect(s,r,r,r);
  rect(r,r,r,r);
  rect(t,r,r,r);
  fill (249,206,163);
  rect(u,r,r,r);
  rect(v,r,r,r);
  rect(w,r,r,r);
  rect(x,r,r,r);
  fill(255,255,153);
  rect(y,r,r,r);
  fill (0);
  rect(z,r,r,r);
  fill(255,255,153);
  rect(s,t,r,r);
  rect(r,t,r,r);
  fill (249,206,163);
  rect(t,t,r,r);
  fill (245,206,143);
  rect(u,t,r,r);
  fill (249,206,163);
  rect(v,t,r,r);
  rect(w,t,r,r);
  fill (245,206,143);
  rect(x,t,r,r);
  fill (249,206,163);
  rect(y,t,r,r);
  fill (255,255,153);
  rect(z,t,r,r);
  rect(s,u,r,r);
  fill (249,206,163);
  rect(r,u,r,r);
  rect(t,u,r,r);
  rect(u,u,r,r);
  rect(v,u,r,r);
  rect(w,u,r,r);
  fill (249,206,163);
  rect(x,u,r,r);
  rect(y,u,r,r);
  fill (255,255,153);
  rect(z,u,r,r);
  rect(s,v,r,r);
  fill (102,0,102);
  rect(r,v,r,r);
  fill (249,206,163);
  rect(t,v,r,r);
  rect(u,v,r,r);
  rect(v,v,r,r);
  fill (245,206,143);
  rect(w,v,r,r);
  fill (249,206,163);
  rect(x,v,r,r);
  rect(y,v,r,r);
  fill (255,255,153);
  rect(z,v,r,r);
  rect(s,w,r,r);
  rect(r,w,r,r);
  fill (249,206,163);
  rect(t,w,r,r);
  rect(u,w,r,r);
  rect(v,w,r,r);
  rect(w,w,r,r);
  rect(x,w,r,r);
  rect(y,w,r,r);
  fill (255,255,153);
  rect(z,w,r,r);
  rect(s,x,r,r);
  rect(r,x,r,r);
  fill (249,206,163);
  rect(t,x,r,r);
  rect(u,x,r,r);
  fill (255,102,178);
  rect(v,x,r,r);
  rect(w,x,r,r);
  rect(x,x,r,r);
  fill (249,206,163);
  rect(y,x,r,r);
  fill (255,255,153);
  rect(z,x,r,r);
  rect(s,y,r,r);
  rect(r,y,r,r);
  rect(t,y,r,r);
  fill (249,206,163);
  rect(u,y,r,r);
  rect(v,y,r,r);
  rect(w,y,r,r);
  rect(x,y,r,r);
  fill (255,255,153);
  rect(y,y,r,r);
  rect(z,y,r,r);

}

function windowResized(){
  centerCanvas();
}