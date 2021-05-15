/*
* I want to put most code involving various updates in here I think
*/

//creates (and updates) the resource panel
function createResourcePanel() {
	for(i=0;i<resArray.length;i++) {
		var res = resArray[i];
		if(document.getElementById(res.type+"Counter") == null) {
			var resource = document.createElement('div');
			var resourceText = document.createTextNode(res.name +': ' + res.amount + '/' + res.maxAmount);
			resource.setAttribute('id', res.type+"Counter");
			resource.appendChild(resourceText);

			document.getElementById('resourcePanel').appendChild(resource);
		}
	}
}

//Update the screen WITHOUT modifying any numbers
function updateSimple() {
	for(i=0;i<resArray.length;i++) {
		var res = resArray[i]
		if(res.amount < 0) {
			res.amount = 0;
		} if (res.amount > res.maxAmount) {
			res.amount = res.maxAmount
		}
		document.getElementById(res.type+'Counter').innerHTML = res.name + ': ' + res.amount + '/' + res.maxAmount;
	}
}

//Update that runs every second, makes any changes to resources (passive income) and runs updateSimple
function update() {
	for(i=0;i<resArray.length;i++) {
		var res = resArray[i];
		res.amount += res.growth;
	}
	updateSimple();
}




createResourcePanel();
setInterval(update, 1000);
