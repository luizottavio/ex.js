var seconds = 00
var minutes = 00
var hours = 00
var interval

function twodigits(digit) {
  if (digit < 10) {
    return('0' + digit);
  } else {
    return(digit);
  }
}

function start() {
  timer()
  interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(interval);

  document.getElementById('timer').innerText = minutes + ':' + seconds;

}


function reset() {
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