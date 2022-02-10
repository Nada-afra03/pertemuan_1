let j;
function setup() {
  // put setup code here
  createCanvas(1500,1900);
  j=0;
}

function draw() {
  // put drawing code here
  background(200);
  strokeWeight(6)
  stroke(25,0,100)
  point(60,700)
  line (20,20,50,160)
  fill(173,216,230)
  rect(300,0,20,100)

  strokeWeight(6)
  stroke(62,100,100)
  ellipse(150,80,200,200)
fill(268,0,100)
  strokeWeight(8)
  stroke(25,250,25)
  triangle(300,300,400,400,600,200)
  arc(270,500,40,40,radians(0),radians(270))

  fill(100,10,39)
  beginShape();
vertex(400,450)
vertex(450,500)
vertex(500,400)
  endShape(CLOSE);

for(var i=0;i<=1800;i++){
    x= i
    y= 900 + 20*Math.sin(PI*x/20)
   point(x,y)
  }
  var x=700+20*Math.sin(PI*j/20)
  j+=2
  fill(240,192,35)
  ellipse(x,600,70,70)

}