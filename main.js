
function executeThisCodeAfterFileLoaded(){
	console.log("IT WORKED!!!");
}

function executeThisCodeAfterFileFails(){
	console.log("Not working, booooo");
}


// five lines of code and two functions

var myRequest = new XMLHttpRequest(); //~new~ is a constructor
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "dinosaur.json");
myRequest.send();
console.log("myRequest", myRequest);

// GET get info out
// POST update something 
// PUT
// DELETE


























