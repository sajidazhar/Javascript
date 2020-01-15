<html> 

<head> 
	<title>Timer</title> 
</head> 

<body> 

<div id="timer-section" style="text-align: center"> 
	Timer will appear here! 
</div> 

<div id="output-section"></div> 

<script type="text/javascript"> 

// timer 
var limit = 10000; 

// time interval of 500 millisecond set 
var throttle = 500;	 

//timer is off initially 
var timerON = false;				 
var start ; 
var last ; 
var mousePositions = []; 
 
function makeTime(s) { 
	return s.getHours() +" : " + s.getMinutes() 
		+ " : " + s.getSeconds(); 
} 

function clickEnvoke() { 
	start = (new Date).getTime(); 
	mousePositions.push({ 
		time : { 
			start : makeTime(new Date()) 
		} 
	}); 
	console.log(mousePositions); 
	last = (new Date).getTime(); 
	var time = 10; 
	
	
	timerON = true;				 
	document.removeEventListener('click', clickEnvoke); 
	document.addEventListener('mousemove', mouseUpdate); 
	var timer = setInterval(function () { 
		if (time >= 0) 
			document.getElementById('timer-section').innerHTML = time; 
		else{ 
			
			
			timerON = false; 
			clearInterval(timer); 
			document.removeEventListener('mousemove', mouseUpdate); 

			// JSON data need to converted into string to print as object 
			document.getElementById('timer-section').innerHTML = ""; 
			document.getElementById('timer-section').innerHTML += 
									JSON.stringify(mousePositions); 
		} 
		
		time--; 
	}, 1000); 
} 

function mouseUpdate (event) { 
var now = (new Date).getTime(); 
if (timerON){ 
	if (now - start > limit ) { 
		return document.removeEventListener('mousemove', mouseUpdate); 
	} 

	if (now - last < throttle) { 
		return; 
	} 
	last = now; 
	mousePositions.push({ 
		info : { 
			x : event.pageX, 
			y : event.pageY 
		} 
	}); 

} 
else 
	console.log(mousePositions); 
	
} 


document.addEventListener('DOMContentLoaded', function () { 
	var loadTime = (new Date).getTime(); 
	document.addEventListener('click', clickEnvoke); 
}); 
</script> 
</body> 
</html>					 
