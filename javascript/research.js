/*
* I want to put most code involving various store related codes in here I think
*/

makeResearchButton1('Start gathering sticks', 'This will unlock wood for gathering', 'researchSticks', 10, 'food');
makeResearchButton1('Start gathering stones', 'This will unlock stone for gathering', 'researchStones', 10, 'food');

function researchSticks() {
    var res = findResource('food');
    
    if(res.amount >= 10) {
        res.amount -= 10;
        createResource('sticks', 'wood', 0, 25, 1, 0);
        updateSimple();
        makeHarvestButton('sticks', 'wood');
        document.getElementById('researchSticks').remove();
        makeCraftingButton1('Make a bush beating stick', 'berry1', 5, 'wood');
    }

    if(document.getElementById('researchStones') == null) {
        makeResearchButton2('Invent Oldowan Tools', 'Discover that chipping rocks creates a sharp tools that can be used - unlock crafting options', 'researchOldowan', 10, 'wood', 10, 'stone');
    }
}

function researchStones() {
    var res = findResource('food');

    if(res.amount >= 10) {
        res.amount -= 10;
        createResource('stone', 'stone', 0, 25, 1, 0);
        updateSimple();
        makeHarvestButton('stone', 'stone');
        document.getElementById('researchStones').remove();
    }

    if(document.getElementById('researchSticks') == null) {
        makeResearchButton2('Invent Oldowan Tools', 'Discover that chipping rocks creates a sharp tools that can be used - unlock crafting options', 'researchOldowan', 10, 'wood', 10, 'stone');
    }
}

function researchOldowan() {
    var res1 = findResource('wood');
    var res2 = findResource('stone');

    if(res1.amount >= 10 && res2.amount >= 10) {
        res1.amount -= 10;
        res2.amount -= 10;
        makeCraftingButton2('Make an Oldowan chopper', 'oldowanChopper', 5, 'wood', 5, 'stone');
        document.getElementById('researchOldowan').remove();
        updateSimple();
    }
}

function researchAcheulean () {

}

function researchFireControl () {

}

function researchFriends () {

}

function researchMousterian () {

}

function makeResearchButton1(researchDescription, researchToolTip, researchFunctionName, researchCost, researchCostType) {

    //create the button itself and give it a tooltip class so that it gives info on hover
    var button = document.createElement('button');
    button.className = 'toolTip';

    //create the text to add to the button
    var buttonText = document.createTextNode(researchDescription + ' - ' + researchCost + ' ' + findResource(researchCostType).name);

    //setup the tooltip
    var toolTip = document.createElement('span');
    toolTip.className = 'toolTipText';
    var toolTipText = document.createTextNode(researchToolTip);

    //attach everything together
    toolTip.appendChild(toolTipText);
    button.appendChild(buttonText);
    button.appendChild(toolTip);

    //add an ID that's findable
    button.id = researchFunctionName;

    //add the onClick function
    button.setAttribute('onClick', researchFunctionName+'()');

    //attach it to the webpage
    document.getElementById('unlockedResearch').appendChild(button);
}

function makeResearchButton2(researchDescription, researchToolTip, researchFunctionName, researchCost1, researchCostType1, researchCost2, researchCostType2) {
    var button = document.createElement('button');
    button.className = 'toolTip';
    var buttonText = document.createTextNode(researchDescription + ' - ' + researchCost1 + ' ' + findResource(researchCostType1).name + ', ' + researchCost2 + ' ' + findResource(researchCostType2).name);
    var toolTip = document.createElement('span');
    toolTip.className = 'toolTipText';
    var toolTipText = document.createTextNode(researchToolTip);
    toolTip.appendChild(toolTipText);
    button.appendChild(buttonText);
    button.appendChild(toolTip);
    button.id = researchFunctionName;
    button.setAttribute('onClick', researchFunctionName+'()');
    document.getElementById('unlockedResearch').appendChild(button);
}
