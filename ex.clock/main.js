var setHours = document.getElementById('set-hours');

function clock() {
    var newHours = new Date();
    var hours = newHours.getHours();
    var minutes = newHours.getMinutes();
    var secondes = newHours.getSeconds();
    //console.log(hours, minutes, secondes)

    
    setHours.innerHTML = `${hours}:${minutes}:${secondes}`;
        
}

setInterval(clock, 1000) 

function twodigit(digit) {
    if (digit < 10) {
        return('0' + digit);
    } else {
        return(digit);
    }
   
}
