
//  Rock Paper Scissors  v5.0  //
/////////////////////////////////

var ComArea;
var PlayerArea;
var ImageButton;
var random1;
var random2;
var random3;
var com;

window.onload = function() {
    ComArea = document.getElementById("com_area");
    PlayerArea = document.getElementById("player_area");
    ImageButton = document.getElementById("sc_btn");
    
}

function scClick() {
    PlayerArea.innerHTML="<img src='image/sc.png'/>";
    console.log("가위 클릭했다구");
    random1 = Math.floor(Math.random()*3)+1;

    switch (random1) {
        case 1 :
            ComArea.innerHTML="<img src='image/sc.png'/>"
            break;
        case 2 :
            ComArea.innerHTML="<img src='image/ro.png'/>"
            break;
        case 3 :
            ComArea.innerHTML="<img src='image/pa.png'/>"
            break;
    }
}

function roClick() {
    PlayerArea.innerHTML="<img src='image/ro.png'/>";
    console.log("바위 클릭했다구");
    random2 = Math.floor(Math.random()*3)+1;

    switch (random2) {
        case 1 :
            ComArea.innerHTML="<img src='image/sc.png'/>"
            break;
        case 2 :
            ComArea.innerHTML="<img src='image/ro.png'/>"
            break;
        case 3 :
            ComArea.innerHTML="<img src='image/pa.png'/>"
            break;
    }
}
            
function paClick() {
    PlayerArea.innerHTML="<img src='image/pa.png'/>";
    console.log("보 클릭했다구");
    random3 = Math.floor(Math.random()*3+1);
    console.log(random3);
    switch (random3) {
        case 1 :
            ComArea.innerHTML="<img src='image/sc.png'/>"
            break;
        case 2 :
            ComArea.innerHTML="<img src='image/ro.png'/>"
            break;
        case 3 :
            ComArea.innerHTML="<img src='image/pa.png'/>"
            break;
    }
}
