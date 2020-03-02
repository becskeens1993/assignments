var img;

function preload(){
    img=loadImage("https://github.com/becskeens/Skeens_Bec_ART2210/raw/master/oct1/motorcycletire.jpg");
    
}

function setup(){
        createCanvas(windowWidth,windowHeight);
  
}


function draw(){
  image(img,windowWidth/2-345,windowHeight/2-194);
  
}


function windowResized(){
    resizeCanvas(windowWidth,windowHeight); 

}
