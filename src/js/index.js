 //import { Enemy } from './Objects/Enemy';


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
var main;
var state=0;
var read=0;

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
function generateMap(){
    var map1=[
        [2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,2,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,2,2,2,2,0,2,0,0,0,2,2,2,2,0,0,0,2,2,2,0,0,0],
        [0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,2,0,0,0,2,0,2,0,0,0],
        [0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,2,2,2,2,2,0,2,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],
    ];


    for(var i=0;i<map1.length;i++){
        for(var j=0;j<map1[0].length;j++){
            map.push(new Tile(j*50,100+i*50,sizeTile,map1[i][j]));
        }
    }

}

function drawMap(){
    context.clearRect(0, 0, 1250, 700);
    context.rect(0, 0, 1250,700);
    context.fillStyle = "black";
    context.fill();
    map.forEach(element => element.create());
}
function generateEnemy(){
    
    if(tick%100==0){
        enemies.push(new Enemy(0,100,sizeTile,0));
    }
    enemies.forEach(element => element.move());
}

function shoot(){

    if(tick%100==0){

        towers.forEach(element => {
  
            if(projectiles.length<enemies.length) projectiles.push(new Projectile(element.x,element.y,sizeTile,0));
        });
    }
    if(enemies.length>0){
    var counter=0;
    projectiles.forEach(element => {
        console.log(element.x+" "+element.y);
        if(element.acquireEnemy(enemies[counter].x,enemies[counter].y)==1){console.log("Hit");projectiles.splice(counter,1); enemies.splice(0,1);}
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

function mainLoop(){
    if(state==1){
    tick++;
    render();
    update();
    
    requestAnimationFrame(mainLoop);
    }
}

window.onload = function(){   

    // generateMap();
    // state=1;
    // mainLoop();


   canvas.hidden=true;
   renderMenuScreen();
}

window.addEventListener("keyup",function name(e){

    if(e.keyCode==80 && state!=0){
        canvas.hidden=true;
        state=0;
        renderPauseScreen();
    }
    if(e.keyCode==27){
        canvas.hidden=true;
        state=0;
        renderEndScreen();
    }

})
   


canvas.addEventListener('click', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    console.log(message);  
    towers.push(new Turent((mousePos.x-(mousePos.x%50)),(mousePos.y-(mousePos.y%50)),sizeTile,0));
    }, false);


