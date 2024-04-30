let font;

function preload() {
  font = loadFont("font/ROADSTORE Dafont.ttf");
}

function setup() {
  createCanvas(400, 400);
  fill("red");
  textSize(36);
  textFont(font);



}


function draw() {
  background(220);
  text("hello", 10, 50);



}