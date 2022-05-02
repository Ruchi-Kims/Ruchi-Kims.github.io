let sidenav = document.getElementById("sidenav")
let menuBtn = document.getElementById("menuBtn")

sidenav.style.right= "-220px";
function clickMe(){
    
    
    
        if(sidenav.style.right== "-220px"){
            sidenav.style.right= "0";
            menu.src = "images/close.png";
            
        }
        else {
            sidenav.style.right= "-220px";
            menu.src = "images/menu.png";
        }

}