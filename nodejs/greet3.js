module.exports = class Greetr {
    constructor() {
        this.greeting = 'Hallo World from greet3.js';

        console.log(this.greeting);
    }
}

/*

class: syntactic sugar for function constructors

function Greetr() {
    this.greetig = '...'
}

*/