var circleX=0;
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
	background(255,0,0); //an RGB color for the canvas' background
  //circle
}

//The draw function happens over and over again
function draw() {
	noFill();
  stroke(255);
  ellipse(mouseX - 150, mouseY - 75, 60, 60);


 
  stroke(255,255,255) // an RGB color for the circle's border
  fill(255,204,204) // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,20,20); // center of canvas, 20px dia
  fill(255,131,156) // an RGB color for the inside of the circle
  ellipse(width/2,height/2,10,20); // center of canvas, 20px dia
  
  fill(255,204,229); //an RGB color for the inside of the circle
  ellipse(circleX, 150,80,80) //moving circle is superpower
  ellipse(circleX, 350,80,80) //moving circle is superpower


  circleX=circleX+1









}

