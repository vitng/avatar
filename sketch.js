'use strict'

//let img;try to use background img
let mic;
let micLevel;
let angleWave;
let angle = 0;
let rightWhiteEye;
let colorWhite = true;
let bubble1;
let bubble2;
let bubble3;

let r = 20;

let ellipses = [];

//function preload(){
//img = loadImage ('ocean.jpg');
//}

function setup() {
  createCanvas(500, 500);

//Ellipse Object = new Ellipse (100);
  
  for (let i= 0; i<20 ; i++) {
    ellipses [i] = new Ellipse ( random (width));
                               
  }
    bubble1= new Bubble( 60,110, 90, 90);
    bubble2= new Bubble( 90,180, 80, 80);
    bubble3= new Bubble( 120,210, 10, 10 );

  angleMode(RADIANS);
  
  


  //Audio input
  mic = new p5.AudioIn()
  mic.start();
}



function draw() {
  background (0);
  

  let hr = hour ();
  let mn = minute ();
  let sc = second ();
  
  fill (255);
  noStroke ();
  textSize (90);
  text (hr + ':' + mn + ':' + sc, 200, 70)

  
  for (let i= 0; i<9 ; i++) {
   ellipses [i].display ();
    ellipses[i].grow();
  }
  
  drawEllipse (r);
  
bubble1.move();
bubble1.show();    
bubble2.move();
bubble2.show();
bubble3.move();
bubble3.show();

  micLevel = mic.getLevel();

  //console.log("mouse x is : " + mouseX);
  //console.log("mouse y is : " + mouseY);

  //console.log("mic level"+ mic.getLevel());


  angleWave = map(mic.getLevel(), 0, 0.05, 250, 260);


  drawRightWhiteEye(0);
  drawLeftWhiteEye();
  drawRightPupil();
  drawLeftPupil();
  drawLeftHand(angleWave);
  drawRightHand(angleWave);
  drawBody();
  drawLegs();
  //drawBubble();

  //image(img,0,0);
  
  if (mouseIsPressed) {
    
    fill("lightBlue");
    ellipse(mouseX, mouseY, 40, 40);
    
    fill ("pink");
    
    textSize(20);
    text('Good Bye!', 70, 90);
    
  } else {
    noFill;
    stroke ("red");
  smooth();
    
    ellipse(mouseX, mouseY, 40, 40);
    fill ("lightGreen");
    ellipse(mouseX, mouseY, 20, 20);
    
    fill ("pink");
    textSize(30);
    text('Hello', 70, 90);
  }
}




function mousePressed() {

  if (mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 250) {
    // console.log(" mouse peep in here");
    colorWhite = !colorWhite;
  } 
}


function drawEllipse (_r) {
  fill (255);
   // draw the ellipse with radius _r
  
  ellipse (370, 180, _r);
}
 

function drawRightPupil() {
  //right pupil
  fill(0);
  ellipse(250, 140, 50, 50);
}

function drawLeftPupil() {
  //left pupil

  fill(0);
  ellipse(150, 140, 50, 50);
}

function drawRightWhiteEye() {

  if (colorWhite === true) {
    fill(255);

} else if (colorWhite === false) {

    fill(255, 0, 0);
    ellipse(150, 144, 72, 72);
  }
  //noStroke();
  //right white eye

  ellipse(252, 144, 72, 72);
}

function drawLeftWhiteEye() {
  //left white eye

  fill(255);
  ellipse(150, 144, 72, 72);

}

function drawRightHand() {
  
  
  
  //right hand
  
  fill(240, 191, 144);
  noStroke();
  beginShape();
  vertex(300, 220);
  vertex(280, 200);
  vertex(370, 200);
  endShape();

  fill(240, 191, 144);
  ellipse(350, 185, 20, 20);

  fill(240, 191, 144);
  ellipse(360, 200, 60, 30);

}

function drawBody() {

  // body

  angleMode(RADIANS);

  fill(132, 231, 232);
  arc(200, 300, 280, 280, PI, TWO_PI);
  fill(232, 150, 239);
  arc(200, 290, 250, 250, PI, TWO_PI);
  fill(255, 204, 0);
  arc(200, 285, 230, 230, PI, TWO_PI);
  fill(246, 96, 187);
  arc(200, 280, 220, 210, PI, TWO_PI);
}

function drawLeftHand() {
  
  //left hand

  angleMode(DEGREES);

  push();

  translate(-90, 250);
  rotate(angleWave);
  angle = angle + 1;
  
  fill(240, 191, 144);
  noStroke();
  rect(-30, 190, 80, 10);
  fill(240, 191, 144);
  ellipse(50, 185, 20, 20);
  fill(240, 191, 144);
  ellipse(40, 200, 60, 30);

  pop();
}

function drawLegs() {
  //legs
  fill(240, 191, 144);
  rect(120, 300, 20, 70);
  rect(250, 300, 20, 70);
}




