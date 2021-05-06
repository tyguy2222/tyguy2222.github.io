function gather(resourceToGather) {
	for(i=0;i<resArray.length;i++){
		if(resArray[i].type == resourceToGather) {
			resArray[i].amount += resArray[i].collectionRate;
			updateSimple();
		}
	}
}