/*
* I want to put most code involving various store related codes in here I think
*/

function unlockSticks() {
	if(resourceFood.amount >= 50) {
		document.getElementById('stickUpgrade').style.display = "none";
		resArray.push(resourceStick = {name:'stick', amount:0, growth:0});
		createResourcePanel();
	}
}