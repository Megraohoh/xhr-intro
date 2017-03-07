// XMLHttpRequest 
	// allows the transfer of data between client and server
	// JSON - javascript object notation; interchangeable with any server
	// XML - sadness; not as easy to manage

////////////JS SO FAR: ////////////
//////SYNCHRONIS CODE--LIKE STANDING IN LINE TO BE READ//////
var x = 5;
div.innerHTML = x;	

var y = 4;
div.innerHTML += y;

[div.innerHTML is 54]

///////////XHLHttpRequest///////ASYNCHRONIS CODE
//LIKE A SITDOWN RESTAURANT, FOOD IS ALWAYS BEING MADE AND YOU CAN WAIT
//-->gotta use callback functions


var z = some XHR request;

function doStuff(){
	div.innerHTML += z
}

div.addEventListener("click", doStuff);























