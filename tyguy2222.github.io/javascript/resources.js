/*
* I want to put most code involving various resources in here I think
*/


var resourceFood = {name:'food', amount:50};

var resArray = [resourceFood];


for(i=0;i<resArray.length;i++) {
  var resource = document.createElement('div');
  var resourceText = document.createTextNode(resArray[i].name +': ' + resArray[i].amount);
  resource.setAttribute('id', resArray[i].name+"Counter");
  resource.appendChild(resourceText);

  document.getElementById('container').appendChild(resource);
}

resourceFood.amount--;
resourceFood.amount--;

function update() {
  resourceFood.amount--;
}

setInterval(update, 1000);






