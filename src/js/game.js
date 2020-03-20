export class Game {
    constructor(canvasId) {
        this.canvasId = canvasId;

        this.canvas = document.getElementById(this.canvasId);
        this.lines = [1,2,3,4];

        this.lines.push('');
        this.ctx = this.canvas.getContext('2d');
    }

    start() {
        this.initialize();
    };

    initialize() {
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
}