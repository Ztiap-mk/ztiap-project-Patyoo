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
            case 0: this.image.src="./Assets/Enemy/blackCircle.png"; this.speed=2; break;
            case 1: this.image.src="./Assets/Enemy/blackSquare.png"; this.speed=2; break;
            case 2: this.image.src="./Assets/Enemy/blackTriangle.png"; this.speed=2; break;
            case 3: this.image.src="./Assets/Enemy/whiteCircle.png"; this.speed=5; break;
            case 4: this.image.src="./Assets/Enemy/whiteSquare.png"; this.speed=5; break;
            case 5: this.image.src="./Assets/Enemy/whiteTriangle.png"; this.speed=5; break;
            case 6: this.image.src="./Assets/Enemy/redCircle.png"; this.speed=10; break;
            case 7: this.image.src="./Assets/Enemy/redSquare.png"; this.speed=10; break;
            case 8: this.image.src="./Assets/Enemy/redTriangle.png"; this.speed=10; break;
        }
    }
    move(){
        if((this.x + this.size) >= 1250 || (this.x) < 0 ) this.speed *= -1;
        this.x += this.speed;

        context.drawImage(this.image, this.x, this.y, this.size, this.size);
    }
}