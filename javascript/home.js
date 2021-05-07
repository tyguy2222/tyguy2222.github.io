//when a gather button is clicked increment it
function gather(resourceToGather) {
	for(i=0;i<resArray.length;i++){
		if(resArray[i].type == resourceToGather) {
			resArray[i].amount += resArray[i].collectionRate;
			updateSimple();
		}
	}
}

makeHarvestButton('berries', 'food');