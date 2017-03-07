console.log("first line in JS file: ", Date.now());

var dinoContainer = document.getElementById("dinoContainer");

function makeDom(xhrData){
	var dinosaurString = "";
	var currentDinosaur;
	for(var i=0; i<xhrData.dinosaurs.length; i++){
		currentDinosaur = xhrData.dinosaurs[i];

		dinosaurString += `<div class="col-sm-6 col-md-4">`;
		dinosaurString += `<div class="thumbnail">`;
		dinosaurString += `<img src="${currentDinosaur.url}" alt="dinoMITE">`;
		dinosaurString += `<div class="caption">`;
		dinosaurString += `<h3>${currentDinosaur.name}</h3>`;
		dinosaurString += `<p>Is a ${currentDinosaur.type}</p>`;
		dinosaurString += `<p>Likes to eat ${currentDinosaur.food}</p>`;
		dinosaurString += `</div></div></div>`;
		
	}

	dinoContainer.innerHTML = dinosaurString;

}

function executeThisCodeAfterFileLoaded(){
	console.log("Data returned: ", Date.now());
	var data = JSON.parse(this.responseText);
	// console.log("IT WORKED!!!", data);
	makeDom(data);

}

function executeThisCodeAfterFileFails(){
	// console.log("Not working, booooo");
}


// five lines of code and two functions

var myRequest = new XMLHttpRequest(); //~new~ is a constructor
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "dinosaur.json");
myRequest.send();
// console.log("myRequest", myRequest);

// GET get info out
// POST update something 
// PUT
// DELETE

console.log("last line in JS file: ", Date.now());

























