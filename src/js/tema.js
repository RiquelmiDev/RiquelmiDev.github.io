var iconmode = document.getElementById("iconmode");

iconmode.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        iconmode.src = "src/img/sun.png";
    }else{
        iconmode.src = "src/img/moon.png";
    }
    /*troca de logo*/
    if(document.body.classList.contains("dark-theme")){
        imglogo.src = "src/img/RSlogoBf.png";
    }else{
        imglogo.src = "src/img/RSlogoWf.png";
    }
};

    
