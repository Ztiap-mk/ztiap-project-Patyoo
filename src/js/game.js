export class Game {
    
    constructor() {
  
        this.canvas = document.createElement("CANVAS");
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width=750;
        this.canvas.height=450;
        this.enemy=[];
    }

    start() {
        this.initialize();
    };

    draw() {
        // Clear canvas
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(0, 0, canvas.width, canvas.height)
      
        // Render all objects in scene
        for (i in scene) {
          scene[i].draw()
        }
      }

    initialize() {


        var map = [
           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
           [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

          ];

        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        document.body.appendChild(this.canvas);

        

        var counterx=0;
        var countery=0;
        for (var y=0; y< this.canvas.height; y+=50) {
            for (var x=0; x < this.canvas.width; x+=50) {
                
            //this.ctx.fillStyle='#'+Math.floor(Math.random()*16777215).toString(16);
                 if(map[countery][counterx]===0){this.ctx.fillStyle="black"}
                 else if(map[countery][counterx]===1){this.ctx.fillStyle="white"}
                 else if(map[countery][counterx]===2){this.ctx.fillStyle="green";}
            this.ctx.fillRect(x, y, 50, 50);
            counterx++;

            }
            counterx=0;
            countery++;
        }

       


        // var img = new Image();
        // img.src='tileRoadG.png';
        // //img.src='https://mdn.mozillademos.org/files/5397/rhino.jpg';
        // this.ctx.drawImage(img, 10, 10);

        // var img2 = new Image();
        // img2.src='https://mdn.mozillademos.org/files/5397/rhino.jpg';
        // this.ctx.drawImage(img2 ,10, 10);

    }
}