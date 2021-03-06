function renderPauseScreen(){
    main = document.createElement("div");
    main.className="flex-container";

    var textDiv=document.createElement("div");
    textDiv.className="textDiv";
    textDiv.textContent="The game has been paused";

    var ResumeDiv=document.createElement("div");
    ResumeDiv.className="clickDiv";
    ResumeDiv.textContent="Continue";
    ResumeDiv.addEventListener("click",function(){
        main.remove();
        canvas.hidden=false;
        state=1;
        if(soundsOn) menuSelectSound.play();
        mainLoop();
    });

    var menuDiv=document.createElement("div");
    menuDiv.className="clickDiv";
    menuDiv.textContent="Menu";
    menuDiv.addEventListener("click",function(){
        main.remove();
        enemies=[];
        towers=[];
        projectiles=[];
        map=[];
        tick=0;
        for(var i=0;i<maps[mapChoice].length;i++){
            for(var j=0;j<maps[mapChoice][0].length;j++){
                if(maps[mapChoice][i][j]>4) maps[mapChoice][i][j]=0;
            }
        }
        renderMenuScreen();
        if(soundsOn) menuSelectSound.play();
        backgroundMusic.stop();
    });

    main.appendChild(textDiv);
    main.appendChild(ResumeDiv);
    main.appendChild(menuDiv);

    document.body.appendChild(main);
    }