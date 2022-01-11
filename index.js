/*==============================*
|   Rock Paper Scissors v 1.0.0 |
*===============================*/

var ComArea;
var PlayerArea;
var ImageButton;
var random1;
var random2;
var random3;
var com;
var comSpeech;

window.onload = function() {
    ComArea = document.getElementById("com_area");
    PlayerArea = document.getElementById("player_area");
    ImageButton = document.getElementById("sc_btn");
    comSpeech = document.getElementById("computer");
}

function scClick() {
    PlayerArea.innerHTML="<img id='bp' src='image/sc.png'/>";
    console.log("가위 클릭했다구");
    random1 = Math.floor(Math.random()*3)+1;

    switch (random1) {
        case 1 :
            ComArea.innerHTML="<img id='bc' src='image/sc.png'/>";
            comSpeech.innerHTML="가바보신 : 가위!";
            break;
        case 2 :
            ComArea.innerHTML="<img id='bc' src='image/ro.png'/>";
            comSpeech.innerHTML="가바보신 : 바위!";
            break;
        case 3 :
            ComArea.innerHTML="<img id='bc' src='image/pa.png'/>";
            comSpeech.innerHTML="가바보신 : 보!";
            break;
    }
    return 1;
}

function roClick() {
    PlayerArea.innerHTML="<img id='bp' src='image/ro.png'/>";
    console.log("바위 클릭했다구");
    random2 = Math.floor(Math.random()*3)+1;

    switch (random2) {
        case 1 :
            ComArea.innerHTML="<img id='bc' src='image/sc.png'/>";
            comSpeech.innerHTML="가바보신 : 가위!";
            break;
        case 2 :
            ComArea.innerHTML="<img id='bc' src='image/ro.png'/>";
            comSpeech.innerHTML="가바보신 : 바위!";
            break;
        case 3 :
            ComArea.innerHTML="<img id='bc' src='image/pa.png'/>";
            comSpeech.innerHTML="가바보신 : 보!";
            break;
    }
    return 2;
}
            
function paClick() {
    PlayerArea.innerHTML="<img id='bp' src='image/pa.png'/>";
    console.log("보 클릭했다구");
    random3 = Math.floor(Math.random()*3+1);

    switch (random3) {
        case 1 :
            ComArea.innerHTML="<img id='bc' src='image/sc.png'/>";
            comSpeech.innerHTML="가바보신 : 가위!";
            break;
        case 2 :
            ComArea.innerHTML="<img id='bc' src='image/ro.png'/>";
            comSpeech.innerHTML="가바보신 : 바위!";
            break;
        case 3 :
            ComArea.innerHTML="<img id='bc' src='image/pa.png'/>";
            comSpeech.innerHTML="가바보신 : 보!";
            break;
    }
    return 3;
}
