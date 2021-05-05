/*
* I want to put most code involving various resources in here I think
*/


var resourceFood = {name:'food', amount:0, growth:-0.1};
var resourceStick;

var resArray = [resourceFood];

function harvestFood() {
	resourceFood.amount++;
	updateSimple();
}








