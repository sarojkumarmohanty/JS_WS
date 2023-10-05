export function fun() {
    console.log('hello fun');
}

export var x = 25;

var y = 'amit';

export class Shape {
    #name;
    constructor(name) {
        this.#name = name;
    }
    get name() {
        return this.name;
    }
    set name(name) {
        this.#name = name;
    }
}





// var fun1 = (function () {
//     var name1 = 'Asit';
//     function add(x, y) {
//         return x + y;
//     }
//     return {
//         add,
//         name1
//     }
// })();

// console.log(name1);