var seconds = 00
var minutes = 00
var hours = 00
var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');
var interval

function twodigits(digit) {
  if (digit < 10) {
    return('0' + digit);
  } else {
    return(digit);
  }
}


buttonStart.onclick = function () {
  console.log(buttonStart);
  timer()
  interval = setInterval(timer, 1000);

}

buttonStop.onclick = function () {
  clearInterval(interval);

}

buttonReset.onclick = function () {
  clearInterval(interval);
  seconds = 00;
  minutes = 00;
  document.getElementById('timer').innerText = '00:00:00'

}


function timer() {
  seconds++

  if (seconds == 60) {
    minutes++
    seconds = 0
    if (minutes == 60) {
      minutes = 0
      hours++
    }
  }

  document.getElementById('timer').innerText = twodigits(hours) + ':' + twodigits(minutes) + ':' + twodigits(seconds);

}