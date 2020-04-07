function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}

function loadMusic(){
     backgroundMusic = new sound("./Sounds/backgroundMusic.mp3");
     backgroundMusic.loop=true;
     pauseSound = new sound("./Sounds/pause.ogg");
     towerShotSound = new sound("./Sounds/towerShot.ogg");
     endSound = new sound("./Sounds/end.ogg");
     enemyDeadSound = new sound("./Sounds/deadEnemyBonus.ogg");
     minusHealthSound = new sound("./Sounds/minusHealt.ogg");
     menuSelectSound = new sound("./Sounds/menu-select.ogg");
     endSound = new sound("./Sounds/end.ogg");
}