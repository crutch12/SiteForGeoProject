var start = Date.now();

function StartTimer() {    
	var seconds = Math.floor((Date.now() - start) / 1000);
	var time = document.getElementById('time');

	ShowTime(seconds, time);

    setTimeout(function() {

        seconds++;
        //console.log(i);

        ShowTime(seconds, time);
        // calculate the actual number of ms since last time
        //var actual = Date.now() - start;
        // subtract any extra ms from the delay for the next cycle
        //thisDelay = myDelay - (actual - myDelay);
        //start = Date.now();
        // start the timer again

        StartTimer();
    }, 60);
}

//startTimer();

function ShowTime(seconds, time){
		time.innerHTML = seconds;  
}