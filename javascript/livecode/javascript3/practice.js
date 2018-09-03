//Create Hi Element using dom method and put in main Div.

var hiObject=document.createElement('h1');
console.log(hiObject);

hiObject.innerHTML="Hello I am here from DOM";
hiObject.setAttribute('id','test');

//parent object
var mainDivObject=document.getElementById('mainDiv');
mainDivObject.appendChild(hiObject);
console.log(mainDivObject);

var buttonObj = document.createElement('button');
buttonObj.id ="btn";
buttonObj.innerHTML="Click here";
mainDivObject.appendChild(buttonObj);

/*buttonObj.onclick=function(){
    alert("Hallo i am from onclick without listner");
}*/

buttonObj.addEventListener("click", function() {
    alert("Hallo i am from onclick with listner");
    });

//Task 1:
//– DOMOBJ.appendChild( DOMCHILDOBJECT );
//Please add one image  and button in this main div.

//Task 2:
/*

2.1 :  Add 4 sub div inside main div.please specify id to every sub div like id=one, id=two, id=three, id=four

2.2 : Insert p tag with dummy text at sub div two.
2.3 : Insert img tag with dummy image at sub div four.
2.4 : Insert button tag before the end of the mainDiv with text "Test Me Event"
2.5 : Insert h6 tag before the main Div tag
2.6 : Insert h3 tag just after the main div tag
2.7 : Insert a tag just before the four div tag.
2.8 : Insert p tag after the end of the main div tag.
2.9 : Show all div box with adding border but every div has different border color.
2.10 : Set background color for the p tag and foreground color for the text inside of the p tag.
2.11 : Change a element/tag url link color from the blue to dark red.
2.12 : Apply onclick event to button and Change text "Test Me Event" of the button.
2.13 : Add button and assign text "Change href" and bind the function which change the href of the a tag.
2.14 : Add button and assign text "Calculate" and perform the +, - and / and display in the front/page.
2.15 : Add h4 tag with id "greeting" , text "Hallo DCI" and p tag with id "thedate", text How are you?
2.16 : Add input type "text" and id "myname"
2.17 : Add button with id "saymyname", text "Say hallo".

using the following method.
DOMOBJ1.insertAdjacentElement( position, DOMOBJ2 )
DOMOBJ1.insertAdjacentHTML( position, string )
position = “beforebegin“ => Before DOMOBJ1 itself
position = “afterbegin“ => Inside, before 1st child
position = “beforeend“ => Inside, after last child
position = “afterend“ => After DOMOBJ1 itself

*/