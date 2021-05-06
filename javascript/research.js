/*
* I want to put most code involving various store related codes in here I think
*/

function researchSticks(cost, costType) {
    for(i=0;i<resArray.length;i++) {
        if(resArray[i].type == costType) {
            if(resArray[i].amount >= cost) {
                resArray[i].amount -= cost;
                updateSimple();
                var button = document.createElement('button');
                var buttonText = document.createTextNode('Harvest Sticks');
                button.appendChild(buttonText);
                button.id = 'stickGather';
                button.setAttribute('onclick','gather("wood")');
                button.style = 'display:none';

                document.getElementById('home').appendChild(button);
                document.getElementById('stickResearch').remove();
            }
        }
    }
}

function researchStones(cost, costType) {
    for(i=0;i<resArray.length;i++) {
        if(resArray[i].type == costType) {
            if(resArray[i].amount >= cost) {
                resArray[i].amount -= cost;
                updateSimple();
                var button = document.createElement('button');
                var buttonText = document.createTextNode('Harvest Stones');
                button.appendChild(buttonText);
                button.id = 'stoneGather';
                button.setAttribute('onclick','gather("stone")');
                button.style = 'display:none';

                document.getElementById('home').appendChild(button);
                document.getElementById('stoneResearch').remove();
            }
        }
    }
}
