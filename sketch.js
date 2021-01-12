var hr, mn, sc;

function setup() {
  createCanvas(310,310);

  hr = hour();
  mn = minute();
  sc = second();  
  
  strokeWeight(4);
}

function draw() {
  background(0);
  angleMode(DEGREES);

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);

  stroke(255, 0, 0);
  sc = line(210, 110, 130, 150);

  stroke(0, 255, 0);
  mn = line(200, 140, 130, 150);

  stroke(0, 0, 255);
  hr = line(130, 190, 130, 150);

  noFill();
  stroke(255, 0, 0);
  arc(130,150,240,240,270,-25);

  stroke(0, 255, 0);
  arc(130,150,230,230,270,-9);

  stroke(0, 0, 255);
  arc(130,150,220,220,270,90);

  drawSprites();
}