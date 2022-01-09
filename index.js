/////////////////////////////////
//  Rock Paper Scissors  v5.0  //
/////////////////////////////////

var PlayerArea;

window.onload = function() {
    document.getElementById("sc_btn");
    PlayerArea = document.getElementById("player_area");

}

function scClick() {
    PlayerArea.innerHTML="<img src='image/sc.png'/>";
    console.log("가위 클릭했다구");
}

function roClick() {
    PlayerArea.innerHTML="<img src='image/ro.png'/>";
    console.log("바위 클릭했다구");
}

function paClick() {
    PlayerArea.innerHTML="<img src='image/pa.png'/>";
    console.log("보 클릭했다구");
}
