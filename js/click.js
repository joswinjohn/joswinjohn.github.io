var clicked = 0;
var time = 0;
var timerstarted = false;

function mouse1down() {
    clicked += 1;
    document.getElementById("clickmain").innerHTML = clicked;
    if (timerstarted == false) {
        var interval = setInterval(timeadd, 1000);
    }
    timerstarted = true;
}

function time1() {
    document.getElementById("clicknum").innerHTML = clicked / 10 + " CPS";
    document.getElementById("clickmain").disabled = true;
}

function timeadd() {
    if (time >= 10) {
        clearInterval(interval)
    }

    time += 1;
    document.getElementById("clicknum").innerHTML = time;
}