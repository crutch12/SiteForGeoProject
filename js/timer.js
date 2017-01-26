var start = Date.now();

//var times;

function StartTimer() {    
	//times = Math.floor((Date.now() - start));

	var time = document.getElementById('time');
    Tic(time);
}

function Tic(time){

		ShowTime(time);

	 	setTimeout(function() {

        //++;

        ShowTime(time);

        Tic(time);
    }, 100);
}

//startTimer();

function ShowTime(time){
	var passedTime = Math.floor((Date.now() - start) / 1000);

	var houres = Math.floor(passedTime / (60 * 60));
	var minutes = Math.floor((passedTime - houres * 60 * 60) / (60));
	var seconds = Math.floor(passedTime - minutes * 60);

	time.innerHTML = houres + " " + minutes + " " + seconds; 
}