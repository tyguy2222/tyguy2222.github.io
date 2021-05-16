/*
* This will be everything to do with the crafting tab
*/

function makeCraftingButton1(craftingDescription, craftingFunctionName, craftingCost, craftingCostType) {
    var button = document.createElement('button');
    var buttonText = document.createTextNode(craftingDescription + ' - ' + craftingCost + ' ' + findResource(craftingCostType).name);
    button.appendChild(buttonText);
    button.id = craftingFunctionName;
    button.setAttribute('onClick', craftingFunctionName+'()');
    document.getElementById('craftableItems').appendChild(button);
}

function makeCraftingButton2(craftingDescription, craftingFunctionName, craftingCost1, craftingCostType1, craftingCost2, craftingCostType2) {
    var button = document.createElement('button');
    var buttonText = document.createTextNode(craftingDescription + ' - ' + craftingCost1 + ' ' + findResource(craftingCostType1).name + ', ' + craftingCost2 + ' ' + findResource(craftingCostType2).name);
    button.appendChild(buttonText);
    button.id = craftingFunctionName;
    button.setAttribute('onClick', craftingFunctionName+'()');
    document.getElementById('craftableItems').appendChild(button);
}

function craftItem(craftedItem) {
    var item = document.createElement('div');
    var itemText = document.createTextNode(craftedItem);
    item.appendChild(itemText);
    item.id = craftedItem;
    document.getElementById('craftedItems').appendChild(item);
}

function berry1 () {
    var res = findResource('wood');

    if(res.amount >= 5) {
        res.amount -= 5;
        craftItem('Berry Stick')
        findResource('food').collectionRate += 1
        document.getElementById('berry1').remove();
    }
}

function oldowanChopper () {
    var res1 = findResource('wood');
    var res2 = findResource('stone');

    if (res1.amount >= 5 && res2.amount >= 5) {
        res1.amount -= 5;
        res2.amount -= 5;
        craftItem('Oldowan Chopper');
        document.getElementById('Berry Stick').remove();
        document.getElementById('oldowanChopper').remove();
        findResource('food').collectionRate += 1;
    }
}