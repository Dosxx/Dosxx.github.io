// JavaScript Document
//global variables
var start = false;
var time = 0;
var recorded;
var interval;


//add key type event listeners

document.onkeypress = function(event){
	"use strict";
	var key = event.key;
	if(key === 's'){
		startTimer();
	}else if(key === 'r'){
		reset();
	}else if(key === 't'){
		asyncrecord();
	}
};


//functions definition
function startTimer(){
	"use strict";
	if(start === false){
		interval = setInterval(function(){
			time++;
			document.getElementById("start").innerHTML = time/100;
		},10);
		start = true;
	}else{
		clearInterval(interval);
		document.getElementById("start").innerHTML = time/100;
		start = false;
	}
	
}
function reset(){
	"use strict";
	clearInterval(interval);
	start = false;
	time = 0;
	document.getElementById("start").innerHTML = 0;
	document.getElementById("record").innerHTML = "";
	interval = null;
}
function asyncrecord(){
	"use strict";
	setTimeout(function(){
		recorded = time/100;
		var recorder = document.getElementById("record");
		var list = document.createElement("li");
		var	listItem = document.createTextNode(recorded.toString());
		list.appendChild(listItem);
		recorder.appendChild(list, function(){
			document.getElementsByTagName("li").innerHTML = recorded;
		});
//		
		//document.getElementById("record").innerHTML = recorded;
	},100);
}