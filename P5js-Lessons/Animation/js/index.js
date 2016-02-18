// Animation

var jim=null;
var hans=null;
var peter=null;
var flodders =[] //leer

function setup()
{
  var canvas = createCanvas(500,400);
  canvas.parent('sketch');
  background(200);

  //schleife= erschaffe 100 Partikel
  for (var i = 0; i<100; i++)
  {
    var p = new particle(random(width), random(height));
    flodders.push(p); //füge die Particle in eine liste ein.
  }
}

function draw()
{
  background(255,20);
  for(var j = 0; j<flodders.length;j++)
  {
    flodders[j].display('hsl(203,56%,40%)');
    flodders[j].update();
  }

  //Individoum
  /*flodders[55].x=10;
  flodders[55].y=10;*/
  flodders[55].display('limegreen');

  /*
  jim.display(color(100,0,255));
  jim.update();
  hans.display('limegreen');
  hans.update();
  peter.display('');
  peter.update();
  */

  /*
  background(250, 20);
  noStroke();
  ellipse(x,y,10,10);
  x++;
  if (x >= width)
  {
    x=0;
  }*/
}

//funktion die Particel erschaft
function particle(_x,_y)
{
  this.x=_x; //'this' macht das "x" ist nur dieser Function zugeordnet.
  this.y=_y;
//Particel
  this.display=function(col) //die 'col' ist frei erfunden, reicht aber die Farbwerte von display weiter an 'fill'.
  {
      fill(col);
      ellipse(this.x,this.y,10,10);
  }
  this.update=function()
  {
  this.x=constrain(this.x + random(-1,1), 30,width); //der Rahmen oben
  this.y=constrain(this.y + random(-1,1), 30,width);
  //damit die Partikel nicht aus dem Rahmen laufen.
  //'constrain'
  }
}
