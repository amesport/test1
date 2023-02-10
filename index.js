var x = 10
var direction = 1

function moveBall(){
    const ball = document.getElementById("ball");
    // console.log(ball);
    const ballPos = ball.getBoundingClientRect();
    const ballLeft = ballPos.left
    const ballRight = ballPos.right
    const field = document.getElementById("field");
    const fieldRect = field.getBoundingClientRect();
    const fieldLeft = fieldRect.left
    const fieldRight = fieldRect.right
    const newBallLeft = ballLeft +1
    ball.style.left = newBallLeft + "px"
    //console.log(ballPos);
    //console.log(ballLeft);
if (ballRight <= fieldRight && ballLeft >= fieldLeft){
    x += direction
    ball.style.left = x + "px";
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

    window.requestAnimationFrame(moveBall)
}moveBall();

