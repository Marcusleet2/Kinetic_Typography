let font, points = [];

function preload() {
  font = loadFont("font/ROADSTORE Dafont.ttf");
}

function setup() {
  createCanvas(600, 400);
  points = font.textToPoints("PCC", 50, 300, 300, {sampleFactor: 0.1, simplifyThreshold: 0});
  print(points);

}


function draw() {
  background(220);
  //text("hello", 10, 50);
  for(let i = 0; i < points.length; i++) {
    ellipse(points[i].x, points[i].y, 15, 15)
  }




}