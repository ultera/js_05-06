
var btnStart = document.querySelector('.button-start');
var btnPause = document.querySelector('.button-pause');
var btnStop = document.querySelector('.button-stop');
var divMilliseconds = document.querySelector('.milliseconds');
var divTimer = document.querySelector('.timer');
var idInterval;
var isStarted = false;
var arrTimer = [0, 0, 0, 0];


btnStart.addEventListener('click', start);
btnPause.addEventListener('click', pause);
btnStop.addEventListener('click', stop);

function start() {
	var beginDate = new Date();

	if(!isStarted) {
		btnStart.style.display = 'none';
		btnPause.style.display = 'block';
	} else {
		btnStart.style.display = 'none';
		btnPause.style.display = 'block';
		arrTimer = divTimer.innerHTML.split(':');
		arrTimer[3] = +divMilliseconds.innerHTML;
		for (var i = 0; i < 4; i++) {
			arrTimer[i] = parseInt(arrTimer[i]);
		}
	}
	
	isStarted = true;

	idInterval = setInterval(function() {
		var delta,
			hours,
			minutes,
			seconds,
			milliseconds,
			time,
			timerValue;

		timerValue = arrTimer[0]*3600000 + arrTimer[1]*60000 + arrTimer[2]*1000 + arrTimer[3];
		delta = new Date() - beginDate + timerValue;
		hours = Math.floor(delta/3600000);

		delta = delta - hours*3600000;
		minutes = Math.floor(delta/60000);

		delta = delta - minutes*60000;
		seconds = Math.floor(delta/1000);

		delta = delta - seconds*1000;
		milliseconds = delta;

    	divMilliseconds.innerHTML = addZeros(milliseconds, 3);
    	time = addZeros(hours, 2) + ':' + addZeros(minutes, 2) + ':' + addZeros(seconds, 2);
    	divTimer.innerHTML = time;

	}, 1);
}

function stop() {
	divMilliseconds.innerHTML = '000';
    divTimer.innerHTML = '00:00:00';
	btnStart.style.display = 'block';
	btnPause.style.display = 'none';
	isStarted = false;
	arrTimer = [0, 0, 0, 0];
	clearInterval(idInterval);
}

function pause() {
	btnStart.style.display = 'block';
	btnPause.style.display = 'none';
	clearInterval(idInterval);
}

function addZeros(str, n) {
	str = String(str);
	while(str.length < n) {
		str = '0' + str;
	}
	return str;
}



