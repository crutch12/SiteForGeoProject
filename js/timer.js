var start = Date.now();
var seconds;
var time;

function StartTimer() {    
	seconds = Math.floor((Date.now() - start) / 1000);

	ShowTime();

    setTimeout(function() {

        seconds++;
        //console.log(i);

        ShowTime();
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

function ShowTime(){
      	time = document.getElementById('time');
		time.innerHTML = seconds;  
}