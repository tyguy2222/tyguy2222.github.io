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

