/* VARIABLES */
let eyeWidth = 50;
let eyeHeight = 25;
let pupilWidth = 30;
let pupilHeight = 25;
let toggle = false;

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400, 400);
  background(195, 178, 212);
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);

  // hair
  fill('black');
  rect(200, 230, 275, 320, 120, 120)

  // face
  fill(255, 213, 181);
  ellipse(width/2, height/2, 175, 200);

  if(toggle == true){
    // one eye closed
    fill('black');
    ellipse(160, 170, eyeWidth, eyeHeight/8);
    fill(255, 255, 255);
    ellipse(240, 170, eyeWidth, eyeHeight);
    noFill();
    bezier(215, 165, 295, 140, 250, 200, 270, 160);
    fill(23, 16, 11);
    ellipse(235, 170, pupilWidth, pupilHeight);
    fill('white');
    arc(200, 230, 50, 50, 0, 180);
  } 
  else if (toggle == false){
    // eyes
    fill(255, 255, 255);
    ellipse(160, 170, eyeWidth, eyeHeight);
    ellipse(240, 170, eyeWidth, eyeHeight);
    noFill();
    bezier(185, 165, 105, 140, 150, 200, 130, 160);
    bezier(215, 165, 295, 140, 250, 200, 270, 160);

    // pupils
    fill(23, 16, 11);
    ellipse(165, 170, pupilWidth, pupilHeight);
    ellipse(235, 170, pupilWidth, pupilHeight);

    // mouth
    fill(227, 134, 162);
    arc(200, 230, 50, 50, 0, 180);
    fill('white');
    rect(200,235,40,10);
  }

  // bangs
  fill('black');
  arc(120, 100, 180, 120, 0, 100);
  arc(255, 100, 110, 115, 0, -180);

  // glasses
  noFill();
  rect(160,170,60,30);
  rect(240,170,60,30);

  // hello kitty
  fill('white');
  circle(300,100,50);
  circle(280,80,10);
  fill('black');
  circle(315,100,10);
  circle(285,100,10);
  fill('red');
  ellipse(315, 80, 20, 10);
  circle(315,80,8);
  fill('yellow');
  ellipse(300, 105, 10, 5);

  // directions for mouse press
  fill("black");
   text('click to wink & smile! then click to go back!', 100, 50);

  // name
  text('lauren', width/2, 30);
  
}

/* FUNCTIONS */
function mousePressed(){
  toggle = !toggle;
}
