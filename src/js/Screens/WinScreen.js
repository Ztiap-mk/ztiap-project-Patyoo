function renderWinScreen(){
    var main = document.createElement("div");
    main.className="flex-container";

    var textDiv=document.createElement("div");
    textDiv.className="textDiv";
    textDiv.textContent="You won!\nScore: X";


    var menuDiv=document.createElement("div");
    menuDiv.className="clickDiv";
    menuDiv.textContent="Menu";
    menuDiv.addEventListener("click",function(){
        main.remove();
        if(soundsOn) menuSelectSound.play();
        renderMenuScreen();
      
    });

    main.appendChild(textDiv);
    main.appendChild(menuDiv);

    document.body.appendChild(main);
    
    }