var x1 = -15
var x2 = 15
var x3 = 40
var x4 = 28
var x5 = 50

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background(102,102,255);
    x1 += 1;
    x2 += 1;
    x3 += 1;
    x4 += 1;
    x5 += 1;
    rect(40, 30, 100, 100);
    rect(130, 120, 75, 75, 20);
    rect(300, 200, 205, 205, 200, 195, 190, 185);
}