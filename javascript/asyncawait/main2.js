$(document).ready(function() {
    console.log('document ready');
});

/*
    1 - get user data
    2 - based on the user data, we load the orders
    3 - based on the orders, we want to load recommendations
*/

/*
callback hell

function login(username, password, cb) {
    setTimeout(() => {
        cb({
            username: 'max',
            email: 'max@gmail.com',
            lastLogin: '2018-08-09 15:20:01'
        });
    }, 1000);
}

function getOrdersFrom(user, cb) {
    if(user === 'max') {
        setTimeout(() => {
            cb([
                {name: 'PS4 Pro'},
                {name: 'PSVR'},
                {name: 'Resident Evil 7'}
            ]);
        }, 1000);
    }
}

function getRecommendations(orders, cb) {
    if(orders) {
        setTimeout(() => {
            cb([
                { name: 'Eagle VR', price: 29.99 },
                { name: 'VR Gun0', price: 99.99 },
                { name: 'Swat VR', price: 15.99 }
            ])
        }, 1000);
    }
}

login('max', 'abc123', function(user) {
    $('.container').append('userdata from server: ' + JSON.stringify(user) + '<br>');
    getOrdersFrom(user.username, function(orders) {
        $('.container').append('orderdata from server based on userdata' + JSON.stringify(orders) + '<br>');
        getRecommendations(orders, function(recommendations) {
            $('.container').append('recommendations from server based on orderdata' + JSON.stringify(recommendations) + '<br>');      
        });
    });
});

*/

function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                username: 'max',
                email: 'max@gmail.com',
                lastLogin: '2018-08-09 15:20:01'
            });
        }, 1000);
    });
}

function getOrdersFrom(user) {
    return new Promise((resolve, reject) => {
        if(user === 'max') {
            setTimeout(() => {
                resolve([
                    {name: 'PS4 Pro'},
                    {name: 'PSVR'},
                    {name: 'Resident Evil 7'}
                ]);
            }, 1000);
        }
    });
}

function getRecommendations(orders) {
    return new Promise((resolve, reject) => {
        if(orders) {
            setTimeout(() => {
                resolve([
                    { name: 'Eagle VR', price: 29.99 },
                    { name: 'VR Gun0', price: 99.99 },
                    { name: 'Swat VR', price: 15.99 }
                ])
            }, 1000);
        }
    });
}

function promiseWay() {
    login('max', '123abc')
    .then((user) => {
        $('.container').append('userdata from server: ' + JSON.stringify(user) + '<br>');
        
        return getOrdersFrom(user.username);
    })
    .then((orders) => {
        $('.container').append('orderdata from server based on userdata' + JSON.stringify(orders) + '<br>'); 
        
        return getRecommendations(orders);
    })
    .then((recommendations) => {
        $('.container').append('recommendations from server based on orderdata' + JSON.stringify(recommendations) + '<br>');         
    })
    .catch((e) => {
        console.log(e);
    });
}

async function asyncawaitWay() {
    try {
        let user = await login('max', '123abc');
        $('.container').append('userdata from server: ' + JSON.stringify(user) + '<br>');        

        let orders = await getOrdersFrom(user.username);
        $('.container').append('orderdata from server based on userdata' + JSON.stringify(orders) + '<br>');         

        let recommendations = await getRecommendations(orders);
        $('.container').append('recommendations from server based on orderdata' + JSON.stringify(recommendations) + '<br>');        
    }
    catch(e) {
        console.log('error ' + e);
    }
}

// task: 
//
// 1. create a function adder with two parameters x and cb, that prints //    out x and calls the cb after one second with x + 5
//
// 2. call adder three times consecutively and start with x = 0.
// 3. in steps of each 1 second, you should see 0, 5, 10
// 4. promisify adder and call it three times using promise chains (then //    and catch)
// 5. use async/await to replace the promise chain


