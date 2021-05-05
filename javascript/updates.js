/*
* I want to put most code involving various updates in here I think
*/
function createResourcePanel() {
	for(i=0;i<resArray.length;i++) {
		if(document.getElementById(resArray[i].name+"Counter") == null) {
			var resource = document.createElement('div');
			var resourceText = document.createTextNode(resArray[i].name +': ' + resArray[i].amount.toFixed(1));
			resource.setAttribute('id', resArray[i].name+"Counter");
			resource.appendChild(resourceText);

			document.getElementById('resourcePanel').appendChild(resource);
		}
	}
}

function updateSimple() {
	for(i=0;i<resArray.length;i++) {
		document.getElementById(resArray[i].name+'Counter').innerHTML = resArray[i].name + ': ' + resArray[i].amount.toFixed(1);
	}
}

function update() {
	for(i=0;i<resArray.length;i++) {
		resArray[i].amount += resArray[i].growth;
		if(resArray[i].amount < 0) {
			resArray[i].amount = 0;
		}
		document.getElementById(resArray[i].name+'Counter').innerHTML = resArray[i].name + ': ' + resArray[i].amount.toFixed(1);
	}
}

createResourcePanel();
setInterval(update, 100);
