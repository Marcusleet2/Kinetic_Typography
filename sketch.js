let font, points = [];
let r = 10;
let angle = 0;


function preload() {
  font = loadFont("font/ROADSTORE Dafont.ttf");
}

function setup() {
  createCanvas(1000, 400);
  points = font.textToPoints("blood", 50, 300, 300, {sampleFactor: 0.15, simplifyThreshold: 0});
  print(points);
  frameRate(12)

}


function draw() {
  background(220);
  //text("hello", 10, 50);
  fill("red")
  for(let i = 0; i < points.length; i++) {
    ellipse(points[i].x + r * sin(angle -i*10), points[i].y, 15, 15)
  }
  angle +=10;


}