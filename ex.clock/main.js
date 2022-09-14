function clock() {

    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('secondes');

    var newHours = new Data();
    var hor = hours.getHours();
    var min = hours.getMinutes();
    var sec = hours.getSeconds();

    document.getElementById('hours').textContent = hours + ':' + minutes + ':' + seconds;

}