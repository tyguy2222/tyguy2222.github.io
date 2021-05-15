/*
* This will be everything to do with the crafting tab
*/

function makeCraftingButton1(craftingDescription, craftingFunctionName, craftingCost, craftingCostType) {
    var button = document.createElement('button');
    var buttonText = document.createTextNode(craftingDescription + ' - ' + craftingCost + ' ' + findResource(craftingCostType).name);
    button.appendChild(buttonText);
    button.id = craftingFunctionName;
    button.setAttribute('onClick', craftingFunctionName+'()');
    document.getElementById('crafting').appendChild(button);
}

function makeCraftingButton2(craftingDescription, craftingFunctionName, craftingCost1, craftingCostType1, craftingCost2, craftingCostType2) {
    var button = document.createElement('button');
    var buttonText = document.createTextNode(craftingDescription + ' - ' + craftingCost1 + ' ' + findResource(craftingCostType1).name + ', ' + craftingCost2 + ' ' + findResource(craftingCostType2).name);
    button.appendChild(buttonText);
    button.id = craftingFunctionName;
    button.setAttribute('onClick', craftingFunctionName+'()');
    document.getElementById('crafting').appendChild(button);
}