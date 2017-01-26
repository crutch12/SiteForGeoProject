var start = Date.now();

// var hoursTime;
// var minutesTime;
// var secondsTime;

//var times;

function StartTimer() {    
	//times = Math.floor((Date.now() - start));
	//if (document.ready){
	var hoursTime = document.getElementById('hoursTime');
	var minutesTime = document.getElementById('minutesTime');
	var secondsTime = document.getElementById('secondsTime');
	//alert(hoursTime.innerHTML);
    
    Tic(hoursTime, minutesTime, secondsTime);
	//}
	
}

function Tic(hoursTime, minutesTime, secondsTime){

	ShowTime(hoursTime, minutesTime, secondsTime);

	 	setTimeout(function() {
	        ShowTime(hoursTime, minutesTime, secondsTime);
	        Tic(hoursTime, minutesTime, secondsTime);
    }, 100);
}

//startTimer();

function ShowTime(hoursTime, minutesTime, secondsTime){
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