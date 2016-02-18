//mouse drawing


var flodders =[] //leer

function setup()
{
  var canvas = createCanvas(500,400);
  canvas.parent('sketch');
  background(200);
}

function draw()
{
  background(255,20);
  for(var j = 0; j<flodders.length;j++)
  {
    flodders[j].display('hsl(203,56%,40%)');
    flodders[j].update();
  }
}

function mouseDragged()
{
  flodders.push(new particle(mouseX, mouseY));
}

function particle(_x,_y)
{
  this.x=_x;
  this.y=_y;
//Particel
  this.display=function(col)
  {
      fill(col);
      ellipse(this.x,this.y,10,10);
  }
  this.update=function()
  {
  var w = 3;
  this.x=constrain(this.x + random(-w,w), 30,width); //der Rahmen oben
  this.y=constrain(this.y + random(-w,w), 30,width);
  //damit die Partikel nicht aus dem Rahmen laufen.
  //'constrain'
  }
}
