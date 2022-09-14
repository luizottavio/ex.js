var setHours = document.getElementById('set-hours');

function clock() {
    var newHours = new Date();
    var hours = newHours.getHours();
    var minutes = newHours.getMinutes();
    var secondes = newHours.getSeconds();
    //console.log(hours, minutes, secondes)
    
    setHours.innerHTML = `
    ${String(hours).length === 1 ? `0${hours}` : hours}:${String(minutes).length === 1 ? `0${minutes}` : minutes }:${String(secondes).length === 1 ? `0${secondes}` : secondes}`;
}

setInterval(clock, 1000) 


