
let sec=0;
let min=0;
let hour=0;
let timing=true;


let start=document.querySelector(".start");
let stop=document.querySelector(".stop");
let actualtimer=document.querySelector(".timer");

function startTimer(){
	setInterval(function(){
	if (timing==true){
	sec++;
	if (sec==60){
		sec=0;
		min++;
	}
	if (min==60){
		min=0;
		hour++;
	}
	actualtimer.innerHTML=hour+":"+min+":"+sec;}}
	,1000);	
}


function stopTimer(){
	
	sec=0;
	min=0;
	hour=0;
	timing=false;
	actualtimer.innerHTML="0"+hour+":"+"0"+min+":"+"0"+sec;
}

start.addEventListener("click",function(){
	timing=true;
	startTimer();
});

stop.addEventListener("click",function(){
	stopTimer();
	
});