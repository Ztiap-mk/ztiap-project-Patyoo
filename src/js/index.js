// import { Game } from './game';


// const game = new Game();

// game.start();

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var background2;
var map=[];
var enemies=[];
var towers=[];
var projectiles=[];
var sizeTile=50;
var tick=0;

function render(){
    drawMap();
    title();

}
function update(){
    generateTower();
    generateEnemy();
    shoot();
}
function title()
{
    context.fillStyle = "red";
    context.font = "40px Comic Sans MS";
    context.textAlign = "center";
    context.fillText('Tower', 640, 50);
}
class Tile
{
    constructor(x, y,size,identity)
    {
        this.x = x;
        this.y = y;
        this.size=size;
        this.image = new Image;
        this.image.src="";
        this.speed = 0.5;
        this.rotation = 0;
        this.identity=identity;
        this.matchAsset();
    }

    matchAsset(){
        switch(this.identity){
            case 0: this.image.src="tileRoad.png"; this.speed=0; break;
            case 1: this.image.src="tile.png"; this.speed=0; break;
            case 2: this.image.src="turent1.png"; this.speed=0; break;
            case 3: this.image.src="projectile1.png"; this.speed=5; break;
        }
    }
    create(){
            context.drawImage(this.image, this.x, this.y, this.size, this.size);
    }
  
}

class Enemy{
    constructor(x, y,size,identity)
    {
        this.x = x;
        this.y = y;
        this.size=size;
        this.image = new Image;
        this.image.src="";
        this.speed = 1;
        this.identity=identity;
        this.matchAsset();
    }
    matchAsset(){
        switch(this.identity){
            case 10: this.image.src="tileRedCircle.png"; this.speed=2; break;
        }
    }
    move(){
        if((this.x + this.size) >= 1250 || (this.x) < 0 ) this.speed *= -1;
        this.x += this.speed;

        context.drawImage(this.image, this.x, this.y, this.size, this.size);
    }
}
class Projectile{
    constructor(x, y,size,identity)
    {
        this.x = x;
        this.y = y;
        this.size=size;
        this.image = new Image;
        this.image.src="";
        this.speed = 1;
        this.rotation = 0;
        this.identity=identity;
        this.matchAsset();
    }
    
    matchAsset(){
        switch(this.identity){
            case 3: this.image.src="projectile1.png"; this.speed=5; break;
        }
    }
    acquireEnemy(objectX,objectY){
        
        

        var toObjectX = objectX - this.x;
        var toObjectY = objectY - this.y;
        //this.rotation = Math.atan2(toObjectY, toObjectX);
    
        // Normalize
        var toObjectLength = Math.sqrt(toObjectX * toObjectX + toObjectY * toObjectY);
        toObjectX = toObjectX / toObjectLength;
        toObjectY = toObjectY / toObjectLength;
    
        // Move towards the player
        this.x += toObjectX * this.speed;
        this.y += toObjectY * this.speed;


          this.rotation = Math.atan2(toObjectY, toObjectX);
          console.log(this.rotation);

        //console.log("Object:"+ objectX + " "+objectY+" Enemy:"+ Math.round(this.x) + " "+Math.round(this.y));
        if(objectX==Math.round(this.x) && objectY==Math.round(this.y)){return 1;}
        else{
            context.save();
            //context.translate(this.x,this.y);
             //context.rotate(this.rotation);
             context.drawImage(this.image, this.x, this.y, this.size, this.size);
            context.restore();
            return 0;
        }
       

        //context.drawImage(this.image, this.x, this.y, this.size, this.size);
    }



}

function generateMap(){

    var map1=[
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    ];


    for(var i=0;i<map1.length;i++){
        for(var j=0;j<map1[0].length;j++){
            map.push(new Tile(j*50,100+i*50,sizeTile,map1[i][j]));
        }
    }

}

function drawMap(){
    context.clearRect(0, 0, 1280, 720);
    context.rect(0, 0, 1280,720);
    context.fillStyle = "black";
    context.fill();
    map.forEach(element => element.create());
}
function generateEnemy(){
    

    if(tick%100==0){
        enemies.push(new Enemy(0,100,sizeTile,10));
    }
    enemies.forEach(element => element.move());
}



function shoot(){

    if(tick%100==0){
        towers.forEach(element => projectiles.push(new Projectile(element.x,element.y,sizeTile,3)));
    }
    if(enemies.length>0){
    /*var max = enemies.reduce(function(prev, current) {
        return (prev.x > current.x) ? prev : current
    });
    console.log(max);
    */
   var counter=0;
    projectiles.forEach(element => {

        if(element.acquireEnemy(enemies[0].x,enemies[0].y)==1){console.log("Hit");projectiles.splice(counter,1); enemies.splice(0,1);}
        // else console.log("Nic");
        // console.log(counter);
        counter++;
    });
}
}



function generateTower(){
    towers.forEach(element => element.create());
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  canvas.addEventListener('click', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    console.log(message);  
    towers.push(new Tile((mousePos.x-(mousePos.x%50)),(mousePos.y-(mousePos.y%50)),sizeTile,2));
    }, false);

    window.onload = function()
{   
    this.generateMap();
    main();
}

function main()
{
    tick++;
    render();
    update();
    requestAnimationFrame(main);
}