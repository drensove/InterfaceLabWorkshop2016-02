//Wiederhollung
// Loops

//var x = 0;
var numberOfCircles = 100;
//var y = 10
//var s = 70

function setup()
{
  var canvas = createCanvas(500,400);
  canvas.parent('sketch');
  background(200);

}

function draw()
{
  background(250, 100);
  noStroke();
/*    for (var i = 0; i < numberOfCircles; i++){
      console.log("i");
      var x = width/2;
      var y = height/2;
      ellipse(x+random(-100,100), y + random(-100,100), 5,5);*/
    for(var x = 0; x < width; x+=10){
      //fill((100/width)*x);
      fill(map(x,0,width,0,360),30,180,20);
      var w = random(5,20);
      for(var y = 0; y < width; y+=10){
        rect(x+random(-100,100),y + random(-100,100),w,w);
      }
    }
}
