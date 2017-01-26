var start = Date.now();

var hoursTime;
var minutesTime;
var secondsTime;

//var times;

function StartTimer() {    
	//times = Math.floor((Date.now() - start));

	hoursTime = document.getElementById('hoursTime');
	minutesTime = document.getElementById('minutesTime');
	secondsTime = document.getElementById('secondsTime');
    
    Tic();
}

function Tic(){

	ShowTime();

	 	setTimeout(function() {
	        ShowTime();
	        Tic();
    }, 100);
}

//startTimer();

function ShowTime(){
	var passedTime = Math.floor((Date.now() - start) / 1000);

	var hours = Math.floor(passedTime / (60 * 60));
	var minutes = Math.floor((passedTime - hours * 60 * 60) / 60);
	var seconds = Math.floor(passedTime - minutes * 60 - hours * 60 * 60);

	// hoursTime.innerHTML = hours;
	// minutesTime.innerHTML = minutes;
	// secondsTime.innerHTML = seconds;

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