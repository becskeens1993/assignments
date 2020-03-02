let ball1;
let ball2;
let ball3;
let ball4;
let ball5;
let xBall = Math.floor(Math.random() * 1500) + 50;
let yBall = 50;
let diameter = 50;
let xBallspeed = 5;
let yBallspeed = 2;

function setup(){
    createCanvas(windowWidth, windowHeight);
    noStroke();
	ball1 = new Ball(30);
    ball2 = new Ball(45);
    ball3 = new Ball(50);
    ball4 = new Ball(55);
    ball5 = new Ball(60);
}



var a = 0;
function draw (){
   background(240,248,255);
   if (keyIsPressed) {
       if(key == 'a') {
        a--;
       }

       if(key == 'd') {
        a++;
       }
       
   }
   translate(a, 0);
   var xMouse;
   var yMouse;
   var mouseWidth = 100;
   var mouseHeight = 130;
   var started = false;
   
   if (!started) {
       xMouse = windowWidth / 2;
       yMouse = windowHeight - 100;
       started = true;
     }
     fill(196,98,16);
     ellipse(770, 580, 100, 130);


   head();
   ears();
   stomach();
   mouth();
   eyes();
   pupils();
   nose();
   rfoot();
   lfoot();
   ball1.move();
   ball1.display();
   ball2.move();
   ball2.display();
   ball3.move();
   ball3.display();
   ball4.move();
   ball4.display();
   ball5.move();
   ball5.display();

   fill(0);
   ellipse(xBall, yBall, diameter, diameter);
   xBall += xBallspeed;
   yBall += yBallspeed;
   if (xBall > width - diameter || xBall < diameter) {
     xBallspeed = -xBallspeed;
   }
   if (yBall > height - diameter || yBall < diameter) {
     yBallspeed = -yBallspeed;
   }   

   if ((xBall > xMouse &&
    xBall < xMouse + mouseWidth) &&
    (yBall + (diameter) >= yMouse)) {
xBallChange *= -1;
yBallChange *= -1;
}
}


function head(){
    fill(196, 98, 16);
    noStroke();
    circle(767,510,65);
}

function ears(){
    fill(196,98,16);
    noStroke();
    circle(730,470,80);
    circle(810,470,80);
}

function stomach(){
    fill(239,222,205);
    ellipse(770, 590, 70, 80);
}

function mouth(){
    fill(196, 98, 16);
    noStroke();
    triangle(740, 500, 770, 580, 800, 500);
}

function eyes(){
    fill(255);
    circle(750, 510, 20);
    circle(785, 510,20);
}

function pupils(){
    fill(0);
    circle(750, 510, 5);
    fill(0);
    circle(785, 510, 5);
}

function nose(){
    fill(255,153,204);
    circle(770, 578, 10);
}

function rfoot(){
    fill(196, 98, 16);
    ellipse(750, 640,10);
    ellipse(744, 636, 10);
    ellipse(738, 631, 10);
}

function lfoot(){
    fill(196, 98, 16);
    ellipse(785, 642,10);
    ellipse(792, 638, 10);
    ellipse(799, 633, 10);
}   

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
 }

 class Ball {
	constructor(r, x, y) {
		this.r = r;
		this.x = random(this.r/2, width - this.r/2);
		this.y = random(this.r/2, height - this.r/2);
		this.xspeed = random(-2, 2);
		this.yspeed = random(-2, 2);
	}

	display() {
		fill(178,132,190);
		ellipse(this.x, this.y, this.r);
	}

	move() {
		this.x += this.xspeed;
		this.y += this.yspeed;

		if ((this.x + this.r/2 >= width) || 
			(this.x <= this.r/2)) {
			this.xspeed *= -1;
		} 
		if ((this.y + this.r/2 >= height) || 
			(this.y <= this.r/2)) {
			this.yspeed *= -1;
		}
	}
}
