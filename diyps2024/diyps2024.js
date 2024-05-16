var img;
var initials ='jd'; 
var choice = '1'; 
var screenbg = 250; 
var lastscreenshot=61; 

function preload() {
  img = loadImage('https://julissaduran.github.io/diy/fortune.jpg');
  img0 = loadImage('https://julissaduran.github.io/diy/number0.png');
  img1 = loadImage('https://julissaduran.github.io/diy/number1.png');
  img2 = loadImage('https://julissaduran.github.io/diy/number2.png');
  img3 = loadImage('https://julissaduran.github.io/diy/number3.png');
  img4 = loadImage('https://julissaduran.github.io/diy/number4.png');
  img5 = loadImage('https://julissaduran.github.io/diy/number5.png');
  img6 = loadImage('https://julissaduran.github.io/diy/number6.png');
  img7 = loadImage('https://julissaduran.github.io/diy/number7.png');
  img8 = loadImage('https://julissaduran.github.io/diy/number8.png');
  img9 = loadImage('https://julissaduran.github.io/diy/number9.png');
  
}

function setup(){
  createCanvas(1000,666);
  background(img);
}

function draw(){
  if(keyIsPressed){
  choice = key;// set choice to the key that was pressed 
  clear_print();// check to see if it is clear screen or save image
  }
if(mouseIsPressed){
  newkeyChoice(choice);// if the mouse is pressed call newkeychoice 
  }  
}
function newkeyChoice(toolChoice){//toolchoice is the key that was pressed
//the key mapping if statements that you can change to do anything you want.
//just make sure each key option has the a stroke or fill and then what type of
//graphic function

if(toolChoice =='0'){ //first tool 
  image(img0,mouseX-180, mouseY-500,500);
  
} else if(toolChoice =='1'){//second tool
  image(img1,mouseX-180, mouseY-500,500);
  
} else if(toolChoice =='2'){//third tool
  image(img2,mouseX-180, mouseY-500,500);

} else if(toolChoice =='3'){
  image(img3,mouseX-180, mouseY-500,500);
  
} else if(toolChoice =='4'){
  image(img4,mouseX-180, mouseY-500,500);
  
} else if(toolChoice =='5'){
  image(img5,mouseX-180, mouseY-500,500);
  
} else if(toolChoice =='6'){
  image(img6,mouseX-180, mouseY-500,500);

} else if(toolChoice =='7'){
  image(img7,mouseX-180, mouseY-500,500);
  
} else if(toolChoice =='8'){
  image(img8,mouseX-180, mouseY-500,500);
 
} else if(toolChoice =='9'){
  image(img9,mouseX-180, mouseY-500,500);
  }
}
function clear_print(){
  //this will do one of two things,x clears the screen by resetting the background
  // p calls the routine saveme, which saves a copy of the screen
  if(key =='x'||key == 'X'){
    background(img);//set the screen back to the background color
  } else if(key == 'p'||key =='P'){
    saveme();// call saveme which saves an image of the screen
  } 
}
function saveme(){
  //this will save the name as the initials,date,time,and a millis counting number.
  //it will always be larger in value then the last one.
filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
