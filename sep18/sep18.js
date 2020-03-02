var x = 1
var y = 1
var px = 2
var py = 2
var easing = 0.08 



function setup(){
    createCanvas(windowWidth, windowHeight);
    stroke(153,0,76);
}

function draw (){
    var weight =dist(mouseX, mouseY, pmouseX, pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY)
    background (102, 102, 255);
    var targetX = mouseX;
    x += (targetX - x) * easing;
    var targetY = mouseY;
    y += (targetY - y) * easing;
    var weight = dist(x, y, px, py);
    strokeWeight(weight);
    line(x,y,px,py);
    py = y;
    px = x;
    if (mouseIsPressed == true) {
        stroke(255,255,0)

    }
    ellipse(mouseX, mouseY, 80,80);


}