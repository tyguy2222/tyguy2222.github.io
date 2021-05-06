/*
* I want to put most code involving various resources in here I think
*/


var resource = {name:'berries', type:'food', amount:0, collectionRate:1, growth:-1};

var resArray = [resource];

function gather(resourceToGather) {
	for(i=0;i<resArray.length;i++){
		if(resArray[i].type == resourceToGather) {
			resArray[i].amount += resArray[i].collectionRate;
			updateSimple();
		}
	}
}








