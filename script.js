let flag = true;
$("#player-2").addClass("fade");
$("#player-1").removeClass("fade");
let step = 0;

$(".grid-item").on("click", function(event){
    change(event);
});

function change(event){
    if($("#"+event.delegateTarget.id)[0].innerText == ""){
        step++;
        if(flag){
            $("#"+event.delegateTarget.id).text("x");
            flag = false;
            $("#player-2").toggleClass("fade");
            $("#player-1").toggleClass("fade");
    
        } else{
            $("#"+event.delegateTarget.id).text("o");
            flag = true;
            $("#player-2").toggleClass("fade");
            $("#player-1").toggleClass("fade");
        }
        checkWin();
    }
    if(step==9){
        gameOver();
    }
}

function checkWin(){
    var a1 = $("#a1")[0].innerText;
    var a2 = $("#a2")[0].innerText;
    var a3 = $("#a3")[0].innerText;
    var b1 = $("#b1")[0].innerText;
    var b2 = $("#b2")[0].innerText;
    var b3 = $("#b3")[0].innerText;
    var c1 = $("#c1")[0].innerText;
    var c2 = $("#c2")[0].innerText;
    var c3 = $("#c3")[0].innerText;

    if(a1 != "" && a1 == a2 && a2 == a3){
        gameOver(a1);
    } else if(b1 != "" && b1 == b2 && b2 == b3){
        gameOver(b1);
    } else if(c1 != "" && c1 == c2 && c2 == c3){
        gameOver(c1);
    } else if(a1 != "" && a1 == b1 && b1 == c1){
        gameOver(a1);
    } else if(a2 != "" && a2 == b2 && b2 == c2){
        gameOver(a2);
    } else if(a3 != "" && a3 == b3 && b3 == c3){
        gameOver(a3);
    } else if(a1 != "" && a1 == b2 && b2 == c3){
        gameOver(a1);
    } else if(a3 != "" && a3 == b2 && b2 == c1){
        gameOver(a3);
    } else {
        console.log("no over");
    }
}

function gameOver(player){
    
    setTimeout(function(){
        if(player == "x"){
            alert("player 1 win");
        } else if(player == "o"){
            alert("   yo yo  player 2 you win");
        } else {
            alert("Draw");
        }
        gameReset();
    },100);
}

function gameReset(){
        step = 0;
        $("#player-2").addClass("fade");
        $("#player-1").removeClass("fade");
        flag = true;
        $(".grid-item").text("");
    
}