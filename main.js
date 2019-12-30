function clock() {
    let today = new Date();

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    document.getElementById('hour').innerHTML = hours + " :";
    document.getElementById('minute').innerHTML = minutes + " :";
    document.getElementById('second').innerHTML = seconds;



}
setInterval(clock, 100);