var canvas;
let duck;

function preload() {
  duck = loadImage('images/duck.png');
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.parent('sketch')
  canvas.style('z-index','-1');
  }
 
  
  function draw() {
      noStroke();
      fill(255, random(140,204), random(100,197));
      ellipse(mouseX,mouseY,random(10,40),random(10,40));
      if (mouseIsPressed) {
        background(255);
      }
    // image(duck,mouseX, mouseY, 200, 200);
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }