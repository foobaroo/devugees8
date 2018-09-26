$(document).ready(function() {
    console.log('document ready');
});

let currentIndex = 0;
function addNumber() {
    $('#numbers').append(`
        <h3>${currentIndex}</h3>
    `);
    currentIndex++;
}

function clearNumbers() {
    currentIndex = 0;
    $('#numbers').empty();
}

// callback hell
function addSomeNumbersDelayedCallback() {
    setTimeout(() => {
        addNumber();
        setTimeout(() => {
            addNumber();
            setTimeout(() => {
                addNumber();
                setTimeout(() => {
                    addNumber();
                }, 1000);                
            }, 1000);            
        }, 1000);        
    }, 1000);
}

// promises
function addNumberDelayedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            addNumber();
            // if(Math.random() > 0.5) {
            //     reject();
            // }
            // else {
            //     resolve();
            // }
            resolve();
        }, 1000);
    });
}

function addSomeNumbersDelayedPromise() {
    addNumberDelayedPromise()
    .then(addNumberDelayedPromise)
    .then(addNumberDelayedPromise)
    .then(addNumberDelayedPromise)
    .then(addNumberDelayedPromise)
    .catch((err) => {
        $('#error').html('Error happened, promise rejected')
    });
}

async function addSomeNumbersDelayedAsyncAwait() {
    try {
        await addNumberDelayedPromise();
        await addNumberDelayedPromise();
        await addNumberDelayedPromise();
        await addNumberDelayedPromise();
    }
    catch(err) {
        $('#error').html('Error happened, promise rejected');
    }
}