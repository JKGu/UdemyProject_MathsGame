var isPlaying = false;
var score = 0;
var action;
var time;
var ans;


document.getElementById("startreset").onclick = function(){
    if(isPlaying){
        location.reload();
    }else{
        score = 0;
        isPlaying = true;
        time = 60;
        document.getElementById("scorevalue").innerHTML = score;
        document.getElementById("timeremaining").style.display = "block";
        document.getElementById("startreset").innerHTML = "Reset game";
        generateNewQuestion();
        startCountdown();

    }
}

document.getElementById('box1').onclick = function(){
    if(isPlaying){
        if(ans == 1){
            score += 1;
            document.getElementById("scorevalue").innerHTML = score;
            document.getElementById("correct").style.display = "block";
            setTimeout(function (){
                document.getElementById("correct").style.display = "none";
            }, 1000)

        }else{
            score -= 1;
            document.getElementById("scorevalue").innerHTML = score;
            document.getElementById("wrong").style.display = "block";
            setTimeout(function (){
                document.getElementById("wrong").style.display = "none";
            }, 1000)
        }
        generateNewQuestion();
    }
}

document.getElementById('box2').onclick = function(){
    if(isPlaying){
        if(ans == 2){
            score += 1;
            document.getElementById("scorevalue").innerHTML = score;
            document.getElementById("correct").style.display = "block";
            setTimeout(function (){
                document.getElementById("correct").style.display = "none";
            }, 1000)

        }else{
            score -= 1;
            document.getElementById("scorevalue").innerHTML = score;
            document.getElementById("wrong").style.display = "block";
            setTimeout(function (){
                document.getElementById("wrong").style.display = "none";
            }, 1000)
        }
        generateNewQuestion();
    }
}

document.getElementById('box3').onclick = function(){
    if(isPlaying){
        if(ans == 3){
            score += 1;
            document.getElementById("scorevalue").innerHTML = score;
            document.getElementById("correct").style.display = "block";
            setTimeout(function (){
                document.getElementById("correct").style.display = "none";
            }, 1000)

        }else{
            score -= 1;
            document.getElementById("scorevalue").innerHTML = score;
            document.getElementById("wrong").style.display = "block";
            setTimeout(function (){
                document.getElementById("wrong").style.display = "none";
            }, 1000)
        }
        generateNewQuestion();
    }
}

document.getElementById('box4').onclick = function(){
    if(isPlaying){
        if(ans == 4){
            score += 1;
            document.getElementById("scorevalue").innerHTML = score;
            document.getElementById("correct").style.display = "block";
            setTimeout(function (){
                document.getElementById("correct").style.display = "none";
            }, 1000)

        }else{
            score -= 1;
            document.getElementById("scorevalue").innerHTML = score;
            document.getElementById("wrong").style.display = "block";
            setTimeout(function (){
                document.getElementById("wrong").style.display = "none";
            }, 1000)
        }
        generateNewQuestion();
    }
}

function startCountdown(){
    action = setInterval(function(){
        time -= 1;
        document.getElementById("timeremainingvalue").innerHTML = time;
        if(time == 0){
            clearInterval(action);
            document.getElementById("gameover").style.display = "block";
            document.getElementById("result").innerHTML = score;
            document.getElementById("timeremaining").style.display = "none";
            document.getElementById("correct").style.display = "none";
            document.getElementById("wrong").style.display = "none";
            isPlaying = false;
        }
    }, 1000);
}

function generateNewQuestion(){
    var x = Math.round(Math.random()*100);
    var y = Math.round(Math.random()*100);
    document.getElementById("question").innerHTML = x+"x"+y;
    document.getElementById("question").style.display = "block";
    ans = Math.round(Math.random()*3+1);
    for(i=1; i<5; i++){
        if(i == ans){
            document.getElementById("box"+i).innerHTML = x*y;
        }else{
            document.getElementById("box"+i).innerHTML = Math.round(Math.random()*10000);
        }
    }
}