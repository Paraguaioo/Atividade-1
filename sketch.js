function setup() {
  createCanvas(800,800);
  background("violet");
}

function draw() {
  stroke("orange");
  fill("yellow");
  
  if(mouseIsPressed){
    circle(mouseX,mouseY,20,150)
  }
}