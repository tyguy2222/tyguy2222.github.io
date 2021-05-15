/*
* I want to put most code involving various store related codes in here I think
*/

function researchSticks() {
    var res = findResource('food');
    
    if(res.amount >= 10) {
        res.amount -= 10;
        createResource('sticks', 'wood', 0, 25, 1, 0);
        updateSimple();
        makeHarvestButton('sticks', 'wood');
        document.getElementById('stickResearch').remove();
        makeCraftingButton1('Make a bush beating stick', 'berry1', 5, 'wood');
    }

    if(document.getElementById('stoneResearch') == null) {
        makeResearchButton2('Invent Oldowan Tools', 'researchOldowan', 10, 'wood', 10, 'stone');
    }
}

function researchStones() {
    var res = findResource('food');

    if(res.amount >= 10) {
        res.amount -= 10;
        createResource('stone', 'stone', 0, 25, 1, 0);
        updateSimple();
        makeHarvestButton('stone', 'stone');
        document.getElementById('stoneResearch').remove();
    }

    if(document.getElementById('stickResearch') == null) {
        makeResearchButton2('Invent Oldowan Tools', 'researchOldowan', 10, 'wood', 10, 'stone');
    }
}

function researchOldowan() {

}

function researchAcheulean () {

}

function researchFireControl () {

}

function researchFriends () {

}

function researchMousterian () {

}

function makeResearchButton1(researchDescription, researchFunctionName, researchCost, researchCostType) {
    var button = document.createElement('button');
    var buttonText = document.createTextNode(researchDescription + ' - ' + researchCost + ' ' + findResource(researchCostType).name);
    button.appendChild(buttonText);
    button.id = researchFunctionName;
    button.setAttribute('onClick', researchFunctionName+'()');
    document.getElementById('unlockedResearch').appendChild(button);
}

function makeResearchButton2(researchDescription, researchFunctionName, researchCost1, researchCostType1, researchCost2, researchCostType2) {
    var button = document.createElement('button');
    var buttonText = document.createTextNode(researchDescription + ' - ' + researchCost1 + ' ' + findResource(researchCostType1).name + ', ' + researchCost2 + ' ' + findResource(researchCostType2).name);
    button.appendChild(buttonText);
    button.id = researchFunctionName;
    button.setAttribute('onClick', researchFunctionName+'()');
    document.getElementById('unlockedResearch').appendChild(button);
}
