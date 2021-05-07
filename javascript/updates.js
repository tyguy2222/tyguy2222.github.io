/*
* I want to put most code involving various updates in here I think
*/

//creates (and updates) the resource panel
function createResourcePanel() {
	for(i=0;i<resArray.length;i++) {
		if(document.getElementById(resArray[i].type+"Counter") == null) {
			var resource = document.createElement('div');
			var resourceText = document.createTextNode(resArray[i].name +': ' + resArray[i].amount);
			resource.setAttribute('id', resArray[i].type+"Counter");
			resource.appendChild(resourceText);

			document.getElementById('resourcePanel').appendChild(resource);
		}
	}
}

//Update the screen WITHOUT modifying any numbers
function updateSimple() {
	for(i=0;i<resArray.length;i++) {
			document.getElementById(resArray[i].type+'Counter').innerHTML = resArray[i].name + ': ' + resArray[i].amount;
	}
}

//Update that runs every second, makes any changes to resources (passive income) and runs updateSimple
function update() {
	for(i=0;i<resArray.length;i++) {
		resArray[i].amount += resArray[i].growth;
		if(resArray[i].amount < 0) {
			resArray[i].amount = 0;
		}
	}
	updateSimple();
}

//make a button that gets used for harvesting,
function makeHarvestButton(name, type) {
    var button = document.createElement('button');
    var buttonText = document.createTextNode('harvest ' + name);
    button.appendChild(buttonText);
    button.id = type + 'Gather';
    button.setAttribute('onClick','gather("'+type+'")');
    document.getElementById('home').appendChild(button);
}

createResourcePanel();
setInterval(update, 1000);
