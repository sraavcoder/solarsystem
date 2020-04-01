var x = 700;
var y = 210;
var z = 0;
var a = 700;
var b = 110;
var c = 0.2;
var i = 800;
var o = 50;
var u = 0.4;
var size = 90;
var planet1,planet2,planet3;
var sun,su;

function preload(){
  su = loadImage("sun.png");
  p3 = loadImage("p.png");
  p1 = loadImage("venus.png");
  p2 = loadImage("earth.png");
}
function setup() {
  createCanvas(1400,800);
  
  planet1 = createSprite(x,y,30,30);
  planet1.addImage("pl",p1);
  planet1.scale = 0.1;
  planet1.setCollider("circle",0,0,260);
  planet2 = createSprite(a,b,80,80);
  planet2.addImage("pa",p2);
  planet2.scale = 0.2;
  planet2.setCollider("circle",0,0,190);
  planet3 = createSprite(i,o,60,60);
  planet3.addImage("pn",p3);
  planet3.scale = 0.2;
  planet3.setCollider("circle",0,0,300);
   sun = createSprite(700,350,90,90);
  sun.addImage("s",su);
  sun.scale = 0.2;
  sun.setCollider("circle",0,0,280)

 // x = x + Math.cos(z) * 5;
 // y = y + Math.sin(z) * 5 ;
 
}

function draw() {
  background(0,0,0);  
   z = z + 0.035
  planet1.x = planet1.x+ Math.cos(z)*5;
  planet1.y = planet1.y+Math.sin(z)*5; 
 
    
  c = c + 0.035
  planet2.x = planet2.x+ Math.cos(c)* 10 ;
  planet2.y = planet2.y+ Math.sin(c)* 10 ;


  u = u + 0.0275
  planet3.x = planet3.x + Math.cos(u) * 11 ;
  planet3.y = planet3.y + Math.sin(u) * 11 ;
 
  if(frameCount % 10 == 0){ 
   sun.scale = sun.scale + 0.005; 
   }  

   if(sun.isTouching(planet1)){
     planet1.x = 10000;
   }
   if(sun.isTouching(planet2)){
    planet2.x = 10000;
  }
  if(sun.isTouching(planet3)){
    planet3.x = 10000;
  }


  drawSprites();
}


  
 
