var start = Date.now();

function StartTimer() {    
	var seconds = Math.floor((Date.now() - start) / 1000);
	var time = document.getElementById('time');

	ShowTime(seconds, time);

    Tic(seconds, time);
}

function Tic(seconds, time){
	 setTimeout(function() {

        seconds++;

        ShowTime(seconds, time);

        Tic(seconds, time);
    }, 60);
}

//startTimer();

function ShowTime(seconds, time){
	time.innerHTML = seconds; 
}