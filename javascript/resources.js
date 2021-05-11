/*
* I want to put most code involving various resources in here I think
*/

var resource = {name:'berries', type:'food', hunger:'starving', amount:0, collectionRate:1, growth:-1};
var resArray = [resource];

function createResource(resName, resType, startingAmount, startingRate, startingGrowth) {
    resource = {name:resName, type:resType, amount:startingAmount, collectionRate:startingRate, growth:startingGrowth};
    resArray.push(resource);
    createResourcePanel();
}

function findResource(resourceToSearch) {
    for(i = 0; i < resArray.length; i++) {
        if(resArray[i].type == resourceToSearch) {
            return resArray[i];
        }
    }
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