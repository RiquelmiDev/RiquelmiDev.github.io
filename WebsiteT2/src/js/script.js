var iconmode = document.getElementById("iconmode");

iconmode.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        iconmode.src = "src/img/moon.png";
    }else{
        iconmode.src = "src/img/sun.png";
    }
    
    if(document.body.classList.contains("dark-theme")){
        imglogo.src = "src/img/RSlogoWf.png";
    }else{
        imglogo.src = "src/img/RSlogoBf.png";
    }
}