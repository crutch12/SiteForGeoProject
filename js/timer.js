var start = Date.now();
var delay = 1000 / 50;
var tics = 0;

var secLength = 1000;
var minLength = secLength * 60;
var hourLength = minLength * 60;

var hoursTime;
var minutesTime;
var secondsTime;

var timer;

var timerPageName = "timer.html";

var timelineSec;
var timelineMin;
var timelineHour;

function StartTimer() {
    hoursTime = document.getElementById('hoursTime');
    minutesTime = document.getElementById('minutesTime');
    secondsTime = document.getElementById('secondsTime');

    timelineSec = document.getElementById('timelineSec');
    timelineMin = document.getElementById('timelineMin');
    timelineHour = document.getElementById('timelineHour');

    Refresh();
    timer = setInterval(Tic, delay);
}

function Tic() {
    ShowTime();
    tics++;
}

function ShowTime() {
    var passedTime = Math.floor((Date.now() - start) / secLength);

    var hours = Math.floor(passedTime / (60 * 60));
    var minutes = Math.floor((passedTime - hours * 60 * 60) / 60);
    var seconds = Math.floor(passedTime - minutes * 60 - hours * 60 * 60);

    timelineSec.style.width = (((Date.now() - start) % secLength) / secLength) * 100 + '%';
    if (tics % (10 * 2) == 0) {

        timelineMin.style.width = (((Date.now() - start) % minLength) / minLength) * 100 + '%';
    }
    if (tics % (10 * 2 * 60) == 0) {

        timelineHour.style.width = (((Date.now() - start) % hourLength) / hourLength) * 100 + '%';
    }

    hoursTime.innerHTML = PasteZero(hours);
    minutesTime.innerHTML = PasteZero(minutes);
    secondsTime.innerHTML = PasteZero(seconds);
}

function PasteZero(value) {
    if (value.toString().length < 2) {
        return 0 + value.toString();
    }
    return value;
}

window.addEventListener("focus", function (event) {
    Refresh();
}, false);

function Refresh() {
    timelineSec.style.width = (((Date.now() - start) % secLength) / secLength) * 100 + '%';
    timelineMin.style.width = (((Date.now() - start) % minLength) / minLength) * 100 + '%';
    timelineHour.style.width = (((Date.now() - start) % hourLength) / hourLength) * 100 + '%';
}

function StopTimer(pageName) {
    if (pageName != timerPageName) {
        TimerStop();
    }
}

function TimerStop() {
    clearInterval(timer);
}