function clock() {

    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('secondes');

    var newHours = new Date();
    var hor = newHours.getHours();
    var min = newHours.getMinutes();
    var sec = newHours.getSeconds();

    hours,minutes,seconds.innerHTML = `${hor}:${min}:${sec}`;

    /*document.getElementById('hours').textContent = hours + ':' + minutes + ':' + seconds;*/

}