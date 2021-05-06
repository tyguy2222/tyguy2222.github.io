/*
* I want to put most code involving various updates in here I think
*/
function createResourcePanel() {
	for(i=0;i<resArray.length;i++) {
		if(document.getElementById(resArray[i].type+"Counter") == null) {
			var resource = document.createElement('div');
			if(resArray[i].type == 'food') {
				var resourceText = document.createTextNode(resArray[i].name +' (' + resArray[i].hunger + '): ' + resArray[i].amount);
			} else {
				var resourceText = document.createTextNode(resArray[i].name +': ' + resArray[i].amount);
			}
			resource.setAttribute('id', resArray[i].type+"Counter");
			resource.appendChild(resourceText);

			document.getElementById('resourcePanel').appendChild(resource);
		}
	}
}

//Update the screen WITHOUT modifying any numbers
function updateSimple() {
	for(i=0;i<resArray.length;i++) {
		if(resArray[i].type == 'food') {
			if(resArray[i].amount <= 10) {
				resArray[i].hunger = 'starving'
				if(document.getElementById('stickGather') != null){
					document.getElementById('stickGather').style.display = 'none';
				}
				if (document.getElementById('stoneGather') != null){
					document.getElementById('stoneGather').style.display = 'none';
				}
			} else if (resArray[i].amount <= 20) {
				resArray[i].hunger = 'hungry'
				if(document.getElementById('stickGather') != null){
					document.getElementById('stickGather').style.display = 'block';
				}
				if (document.getElementById('stoneGather') != null){
					document.getElementById('stoneGather').style.display = 'block';
				}
			} else if (resArray[i].amount <= 30) {
				resArray[i].hunger = 'fed'
			} else if (resArray[i].amount > 30) {
				resArray[i].hunger = 'satisfied'
			}
			document.getElementById(resArray[i].type+'Counter').innerHTML = resArray[i].name +' (' + resArray[i].hunger + '): ' + resArray[i].amount;
		} else {
			document.getElementById(resArray[i].type+'Counter').innerHTML = resArray[i].name + ': ' + resArray[i].amount;
		}
	}
}

//Update that runs every second
function update() {
	for(i=0;i<resArray.length;i++) {
		resArray[i].amount += resArray[i].growth;
		if(resArray[i].amount < 0) {
			resArray[i].amount = 0;
		}
	}
	updateSimple();
}

createResourcePanel();
setInterval(update, 1000);
