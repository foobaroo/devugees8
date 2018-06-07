var userlinkObj = document.getElementById('userlink');
var commentslinkObj = document.getElementById('commentslink');
var adduserlinkObj = document.getElementById('adduserlink');
var addcommentlinkObj = document.getElementById('addcommentlink');
var mainObj = document.getElementById('main');
var adduserObj = document.getElementById('adduser');
var addcommentObj = document.getElementById('addcomment');
var adduserbuttonObj = document.getElementById('adduserbutton');
var addcommentbuttonObj = document.getElementById('addcommentbutton');

userlinkObj.onclick = function() {
    mainObj.innerHTML = '';
    adduserObj.style.display = 'none';   
    addcommentObj.style.display = 'none';   
    loadTable('users');
}

commentslinkObj.onclick = function() {
    mainObj.innerHTML = '';   
    adduserObj.style.display = 'none';   
    addcommentObj.style.display = 'none';     
    loadTable('comments');
}

adduserlinkObj.onclick = function() {
    mainObj.innerHTML = '';   
    adduserObj.style.display = 'block';
    addcommentObj.style.display = 'none';
}

addcommentlinkObj.onclick = function() {
    mainObj.innerHTML = '';
    adduserObj.style.display = 'none';
    addcommentObj.style.display = 'block';
}

function generateTable(a) {
    var tableObj = document.createElement('table');

    for(var i=0;i<a.length;i++) {
        var tr = document.createElement('tr');
        for(var mykey in a[i]) {
            var td = document.createElement('td');
            td.textContent = a[i][mykey];
            tr.appendChild(td);
        }

        tableObj.appendChild(tr);
    }

    return tableObj;
}

adduserbuttonObj.onclick = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://cileria.com:3050/users');
    xhr.setRequestHeader('Content-Type', 'application/json'); // type of body
    xhr.onload = function() {
        if(xhr.status === 200) {
            console.log('success, status code is 200');
            
            var data = xhr.responseText;
            var dataObj = JSON.parse(data);
            
            console.log(data);
            console.log(dataObj);                     
            alert('User has been successfully created!');
        }
    }

    var firstnameinputObj = document.getElementById('firstnameinput');
    var usernameinputObj = document.getElementById('usernameinput');
    var emailinputObj = document.getElementById('emailinput');
    

    var body = {
        name: firstnameinputObj.value, 
        username: usernameinputObj.value, 
        email: emailinputObj.value
    };

    xhr.send(JSON.stringify(body));     
}

addcommentbuttonObj.onclick = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://cileria.com:3050/comments');
    xhr.setRequestHeader('Content-Type', 'application/json'); // type of body
    xhr.onload = function() {
        if(xhr.status === 200) {
            console.log('success, status code is 200');
            
            var data = xhr.responseText;
            var dataObj = JSON.parse(data);
            
            console.log(data);
            console.log(dataObj);                     
            alert('Comment has been successfully created!');
        }
    }

    var commentnameinputObj = document.getElementById('commentnameinput');
    var commentemailinputObj = document.getElementById('commentemailinput');
    var commentbodyinputObj = document.getElementById('commentbodyinput');
    

    var body = {
        name: commentnameinputObj.value, 
        email: commentemailinputObj.value,
        body: commentbodyinputObj.value
    };

    xhr.send(JSON.stringify(body));     
    
}

// var a = [
//     {x:1,b:2,c:3,d:4}, // a[0] 
//     {x:5,b:6,c:7,d:8}, // a[1]
//     {x:9,b:10,c:11,d:12} // a[2]
// ];

// mainObj.appendChild(generateTable(a));


function loadTable(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://cileria.com:3050/'+url);
    xhr.onload = function() {
        if(xhr.status === 200) {
            // console.log('data has arrived' + xhr.responseText);

            var obj = JSON.parse(xhr.responseText);

            console.log(obj);
            mainObj.appendChild(generateTable(obj));
        }
    }

    xhr.send();
}

loadTable('users');