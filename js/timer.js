var myDelay = 1000;
var thisDelay = 1000;
var start = Date.now();
var i = 0;

function startTimer() {    
    setTimeout(function() {

        i++;
        console.log(i);

        ShowTime();
        // calculate the actual number of ms since last time
        //var actual = Date.now() - start;
        // subtract any extra ms from the delay for the next cycle
        //thisDelay = myDelay - (actual - myDelay);
        //start = Date.now();
        // start the timer again

        startTimer();
    }, 1000);
}

startTimer();

function ShowTime(){
        if(document.getElementById('time')){
        	var time = document.getElementById('time');
        	time.innerHTML = i;
        };
}