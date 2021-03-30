 var wall  ;
var bullet,speed,weight;
 var thickness;




var hasCollided;





function setup() {
  createCanvas(1300,400);

  thickness=random (22,83)
speed = random (222,321);
weight = random (30,52);


  bullet = createSprite(50, 200, 50, 50);
  bullet.shapeColor = ("red"); 

 bullet.velocityX = speed;

 

wall = createSprite (1200,200,thickness,height/2);
wall.shapeColor = color("grey");




}

function draw() {
  background(255,255,255); 
  
  if(hasCollided(bullet,wall)){

   bullet.velocityX = 0;
    var damage = 0.5 *weight * speed * speed/(thickness * thickness * thickness)

    if(damage>10)
    {
      wall.shapeColor =- color("225");
    }
    

    if(damage<10){
      wall.shapeColor = color("0,225,0")
    }

  }

 

  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x+lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
 return false
}