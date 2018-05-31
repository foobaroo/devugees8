var addgiftObj = document.getElementById('addgift');

var basket = [];
// make the basket array persistent by storing it
// in the localStorage. i.e. when the user reloads
// all the items will be in the basket and also in
// the list


addgiftObj.onclick = function() {  
    var giftObj = document.getElementById('gift');

    var giftName = giftObj.value;
    if(giftName.length < 3) {
        alert('At least 3 characters.');
        return;
    }

    var newListItem = document.createElement('li');

    newListItem.innerHTML = giftName;
    newListItem.className = 'shopping-item';

    var listObj = document.getElementById('shoppinglist');

    listObj.appendChild(newListItem);
    giftObj.value = '';

    basket.push({
        name: giftName,
        price: 5 + Math.floor(Math.random() * 95)
    });
}   

document.getElementById("gift")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("addgift").click();
    }
});

var removefirstgiftObj = document.getElementById('removefirstgift');

removefirstgiftObj.onclick = function() {
    var listObj = document.querySelectorAll('.shopping-item');

    if(listObj.length > 0)
        listObj[0].remove();
        
    basket.shift();
}

var removelastgiftObj = document.getElementById('removelastgift');
removelastgiftObj.onclick = function() {
    var listObj = document.querySelectorAll('.shopping-item');

    if(listObj.length > 0)
        listObj[listObj.length - 1].remove();    

    basket.pop();
}

var removeObj = document.getElementById('remove');
removeObj.onclick = function() {
    var giftObj = document.getElementById('gift');
    var listObj = document.getElementsByTagName('li');
    for(var i=0;i<listObj.length;i++) {
        if(listObj[i].innerHTML.toLowerCase() === giftObj.value.toLowerCase()) {
            console.log('the position is at: ' + i);
            listObj[i].remove();
            i--;
        }
    }    
    console.log('not found. i = ' + i);

    for(var i=basket.length-1; i > -1; i--) {
        if(basket[i].name.toLowerCase() === giftObj.value.toLowerCase()) {
            basket.splice(i, 1);
        }
    }
    console.log(basket);
}


// function yellowButtonHallo() {
//     alert('I AM THE YELLOW BUTTON');
// }

// document.getElementById('addevent').onclick = function() {
//     var yellowbuttonObj = document.getElementById('yellowbutton');

//     yellowbuttonObj.addEventListener('click', yellowButtonHallo);
// }

// document.getElementById('delevent').onclick = function() {
//     var yellowbuttonObj = document.getElementById('yellowbutton');

//     yellowbuttonObj.removeEventListener('click', yellowButtonHallo);
// }

/* task: 
 add the following functionality to your
 shopping list:

 1) after an item has been put on the list, the textbox should be cleared. when adding an item, only items that have at least 3 characters can be added. otherwise, an error alert appears.
 2) when clicking on the removefirst button, the first item should be removed from the list
 3) same as 2) for the last item
 4) when clicking on the "remove" button, all items with the value of the textbox will be removed

 Basket:

 1) When adding a new item to the shopping list, add
    a new item to the basket array. Each item consists
    of a name and a price. Think of how you can represent
    this in a proper way.

    The price is a random value between 5 and 100. The
    price is not a string, it is a number. Only integers,
    no float.
  
 2) When removing the last or first item, also remove
    the last or first item in the basket array. 

 3) When removing a specific item, also remove the specific
    item in the array.

 4) When the user presses the sum-Button, the total basket
    value will be alerted to the user.

 */

 //
 // task: insert a keyboard event, that reacts to the "return"-key
 //       in the textbox. when the "return" key is pressed, a new
 //       item will be added to the list and to the basket array.
 // 