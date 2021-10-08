
function pad(num) {
    let s = "00" + num;
    return s.substr(s.length-2);
}

function displayTime(hour, minute, second) {
    let hourEl = document.getElementById("hour");
    hourEl.innerText = pad(hour);
    let minuteEl = document.getElementById("minute");
    minuteEl.innerText = pad(minute);
    let secondEl = document.getElementById("second");
    secondEl.innerText = pad(second);
}

function displayCurrentTime() {
    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    displayTime(hr, min, sec);
}

displayCurrentTime()

setInterval(displayCurrentTime, 1000);
