/*
* I want to put most code involving various store related codes in here I think
*/

function researchSticks(cost, costType) {
    var res = findResource(costType);
    
    if(res.amount >= cost) {
        res.amount -= cost;
        createResource('sticks', 'wood', 0, 1, 0);
        updateSimple();
        makeHarvestButton('sticks', 'wood');
        document.getElementById('stickResearch').remove();
        makeResearchButton('Use sticks to beat the bush', 'researchBerry1', 10, 'wood')
    }
}

function researchStones(cost, costType) {
    var res = findResource(costType);

    if(res.amount >= cost) {
        res.amount -= cost;
        createResource('stone', 'stone', 0, 1, 0);
        updateSimple();
        makeHarvestButton('stone', 'stone');
        document.getElementById('stoneResearch').remove();
    }
}

function researchBerry1(cost, costType) {
    var res = findResource(costType);

    if(res.amount >= cost) {
        res.amount -= cost;
        updateSimple();
        findResource('food').collectionRate += 1;
        document.getElementById('researchBerry1').remove();
    }
}

function makeResearchButton(researchDescription, researchFunctionName, researchCost, researchCostType) {
    var button = document.createElement('button');
    var buttonText = document.createTextNode(researchDescription + ' - ' + researchCost + ' ' + findResource(researchCostType).name);
    button.appendChild(buttonText);
    button.id = researchFunctionName;
    button.setAttribute('onClick', researchFunctionName+'(' + researchCost + ', "' + researchCostType + '")');
    document.getElementById('unlockedResearch').appendChild(button);
}