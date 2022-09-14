function clock() {

    var hours = document.getElementById('hours');
    var newHours = new Date();
    var hor = newHours.getHours();
    var min = newHours.getMinutes();
    var sec = newHours.getSeconds();
    var interval

    hours.innerHTML = `${hor}:${min}:${sec}`;
 
}

sec.onload = function () {

    timerSec();
    interval = setInterval(timerSec, 1000);

}

function timerSec() {
    sec++
   
 
}

//document.getSeconds().innerText=sec