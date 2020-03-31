function renderInstructionScreen(){
    main = document.createElement("div");
    main.className="flex-container";

    var textDiv=document.createElement("div");
    textDiv.className="textDiv";
    textDiv.textContent="The goal is to survive waves of enemy characters by protecting our base. This goal is achieved by building towers, whicha are shooting at enemies, thereby achieving their destruction. The user must survive the waves with the number of life points that are given to me at the start of the game. During the game, the player gains money by neutralizing the enemies, which he can then use to strenghten his towers.";

    var ResumeDiv=document.createElement("div");
    ResumeDiv.className="clickDiv";
    ResumeDiv.textContent="Ok";
    ResumeDiv.addEventListener("click",function(){
        main.remove();
        canvas.hidden=false;
        state=1;
        read=1;
        generateMap();
        mainLoop();
    });

    

    main.appendChild(textDiv);
    main.appendChild(ResumeDiv);
    

    document.body.appendChild(main);
    
    }