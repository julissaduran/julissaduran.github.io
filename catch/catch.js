var screen = 0;
var y= -20;
var x= 200;
var speed = 2;
var score = 0;
var star;
var basket;
var bg;

// score,stars,space.
function preload() {
  star = loadImage('stars.png');
  basket = loadImage('basket.png');
  bg = loadImage('space.jpg');
}

// canvas setup
function setup() {
  createCanvas (600, 400);
}

// loading screens
function draw() {
  if (screen == 0) {
    startScreen()
  } else if (screen == 1) {
    gameOn()
  } else if (screen == 2) {
    endScreen()
  }
}


// Start Screen
function startScreen() {
  background(0);
  image (bg, 0, 0, 600, 400);
  fill (255);
  textAlign(CENTER);
  textSize (20);
  textFont ('impact');
  text( 'Catch the stars!', width/2, height/2);
  text ('click to start', width /2, height /2
    + 30);
  reset();
}


// Starting the game
function gameOn() {
  imageMode(CENTER);
  image (bg, width /2, height /2, 600, 400)
    textSize(20)

    // score display
    text("score =" + score, 50, 20)

    // positioning the basket and star
    rectMode(CENTER)
    image (basket, mouseX, height - 80, 150, 180)
    image (star, x, y, 50, 50)

    // star drops
    y+= speed;

  //player loses when star isn't caught
  if (y>height) {
    screen = 2
  }
  // speed gets faster once caught
  if (y>height-50 && x>mouseX-35 && x<mouseX+35) {
    y = -20
      speed+= 0.5
      score+= 1
  }
  //random star
  if (y== -20) {
    pickRandom();
  }
}
function pickRandom() {
  x= random(20, width-20)
}

// end screen
function endScreen() {
  background (bg)
    textAlign(CENTER);
  textFont('impact');
  textSize(20);
  text('GAME OVER', width /2, height /2)
    text ("SCORE=" + score, width /2, height /2 + 40)
    text('click to play again', width / 2, height / 2 + 80);
}

// starting screen when mouse is pressed
function mousePressed() {
  if (screen==0) {
    screen=1
  }

  // Restart the game
  else if (screen==2) {
    screen=0
  }
}


// Reset values for a new game
function reset() {
  score=0;
  speed=2;
  y=-20;
}
