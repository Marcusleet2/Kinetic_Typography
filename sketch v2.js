let font, points = [];

function preload() {
  font = loadFont("font/ROADSTORE Dafont.ttf");
}

function setup() {
  createCanvas(400, 400);
  points = font.textToPoints("PCC", 50, 200, 300);
  print(points);

}


function draw() {
  background(220);
  text("hello", 10, 50);




}