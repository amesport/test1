var x = 10
var direction = 5
var y = 10
var direction = 5

function moveBall(){
    const ball = document.getElementById("ball");
    // console.log(ball);
    const lpaddle =document.getElementById("lpaddle");
    const lpaddleRect = lpaddle.getBoundingClientRect();
    const lpaddleRight = lpaddleRect.right;
    lpaddle.style.right = lpaddleRight + "px";
    const rpaddle = document.getElementById(rpaddle);
    const rpaddleRect = rpaddle.getBoundingClientRect();
    const rpaddleLeft = rpaddleRect.left;
    rpaddle.style.left = lpaddleRight + "px";
    const ballRect = ball.getBoundingClientRect();
    const ballLeft = ballRect.left;
    const ballRight = ballRect.right;
    const ballTop = ballRect.top;
    const ballBotoom = ballRect.bottom;
    const field = document.getElementById("field");
    const fieldRect = field.getBoundingClientRect();
    const fieldLeft = fieldRect.left
    const fieldRight = fieldRect.right
    const newBallLeft = ballLeft +8
    ball.style.left = newBallLeft + "px"
    //console.log(ballPos);
    //console.log(ballLeft);
    if (ballRight > rpaddleLeft){
        if (ballRect.top > rpaddleRect.bottom){
            direction = direction * -1
        }
    }
    if (ballLeft < lpaddleRight){
        if (ballRect.bottom < lpaddleRect.top)
        direction = direction * -1
        //consol.log("any")
    }
}
    if (ballRight <= fieldRight && ballLeft >= fieldLeft){
    x += direction
    ball.style.left = x + "px";
}
else if (ballTop <= fieldTop && ballBottom >= fieldbottom){
    y += direction
    ball.style.top = y + "px"
}
if (ballLeft <fieldLeft){
    direction = direction * -1
    x += direction;
    ball.style.left = x + "px";
}
if (ballRight > fieldRight) {
    direction = direction *-1;
    x += direction;
    ball.style.left = x + "px"
}



document.addEventListener("resize",reBuildField)
function reBuildField (){
    field.style.height = window.top.height
}

    window.requestAnimationFrame(moveBall)

moveBall();

