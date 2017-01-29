var start = Date.now();
var delay = 1000/50;
var tics = 0;

var secLength = 1000;
var minLength = secLength * 60;
var hourLength = minLength * 60;

function StartTimer() {    
	var hoursTime = document.getElementById('hoursTime');
	var minutesTime = document.getElementById('minutesTime');
	var secondsTime = document.getElementById('secondsTime');

    ShowTime(hoursTime, minutesTime, secondsTime);
    Tic(hoursTime, minutesTime, secondsTime);
}

function Tic(hoursTime, minutesTime, secondsTime){
	 	setTimeout(function() {
	 		tics++;
	        ShowTime(hoursTime, minutesTime, secondsTime);
	        Tic(hoursTime, minutesTime, secondsTime);
    }, delay);
}

function ShowTime(hoursTime, minutesTime, secondsTime){
	var passedTime = Math.floor((Date.now() - start) / secLength);

	var hours = Math.floor(passedTime / (60 * 60));
	var minutes = Math.floor((passedTime - hours * 60 * 60) / 60);
	var seconds = Math.floor(passedTime - minutes * 60 - hours * 60 * 60);

	var timelineSec = document.getElementById('timelineSec');
	timelineSec.style.width = (((Date.now() - start) % secLength) / secLength) * 100 + '%';

	if (tics % (10 * 2) == 0){
		var timelineMin = document.getElementById('timelineMin');
		timelineMin.style.width = (((Date.now() - start) % minLength) / minLength) * 100 + '%';
	}

	if (tics % (10 * 2 * 60) == 0){
		var timelineHour = document.getElementById('timelineHour');
		timelineHour.style.width = (((Date.now() - start) % hourLength) / hourLength) * 100 + '%';
	}	

	hoursTime.innerHTML = PasteZero(hours);
	minutesTime.innerHTML = PasteZero(minutes);
	secondsTime.innerHTML = PasteZero(seconds);
}

function PasteZero(value){
	if(value.toString().length < 2){
		return 0 + value.toString();
	}
	return value;
}

window.addEventListener("focus", function(event) { 
	Refresh();
}, false);

function Refresh(){
	var hoursTime = document.getElementById('hoursTime');
	var minutesTime = document.getElementById('minutesTime');
	var secondsTime = document.getElementById('secondsTime');

	if (hoursTime && minutesTime && secondsTime){
		var timelineSec = document.getElementById('timelineSec');
		timelineSec.style.width = (((Date.now() - start) % secLength) / secLength) * 100 + '%';

		var timelineMin = document.getElementById('timelineMin');
		timelineMin.style.width = (((Date.now() - start) % minLength) / minLength) * 100 + '%';

		var timelineHour = document.getElementById('timelineHour');
		timelineHour.style.width = (((Date.now() - start) % hourLength) / hourLength) * 100 + '%';
	}
}