var timer = 60;
var score = 0;
var hitrn = 0;

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#Hitval").textContent = hitrn;
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function makebubble() {
    var clutter = "";
    for (var i = 1; i <= 147; i++) {
        var random = Math.floor(Math.random() * 10);
        clutter += ` <div class="bubble">${random}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
};

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over<h1>`;
        }
    }, 1000);
}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
   var clicknum = Number(dets.target.textContent);
   if(clicknum === hitrn){
    increaseScore();
    makebubble();
    getNewHit();
   } 
});
runTimer();
makebubble();
getNewHit();