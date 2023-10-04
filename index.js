var timer = 60;
var score = 0;
var rs =0;
function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function makeBubbles() {
    var clutter = "";
for(var i=1;i<=147;i++){
    var a =  Math.floor(Math.random()*10);
    clutter +=  ` <div class="bubble">${a}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}
function runTime() {
    var timeint = setInterval(
        function () {
            if(timer>0){
                timer--;
                document.querySelector("#timer").textContent = timer;
            }
            else{
                clearInterval(timeint);
                document.querySelector("#pbtm").innerHTML = `<h1>Game Over </h1>`;

            
            }
        } , 1000);
}
function hitval() {
      rs =  Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = rs;
}
document.querySelector("#pbtm").addEventListener("click",function (dets) {
    var clicked =  Number(dets.target.textContent);
    if(clicked === rs ){
        increaseScore();
        makeBubbles();
        hitval();
    }
})
runTime();
makeBubbles();
hitval();
