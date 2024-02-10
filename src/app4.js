function Person(name) {
    this.name = name;
    this.show = function() {
        console.log(this.name);
    }
}

const p1 = new Person('Mohit');
p1.show();
console.log(p1.name);

function doThis() {
    console.log('doThis');
}
doThis();

(function(name) {
    console.log(`Name is ${name}`);
})('Rohit');

// IIFE - Immediately Involed Function Expression
((name) => {
    console.log(`Name is ${name}`);
})('Rohit');

// person receives a value of IIFE which returns an object having a closure with myName
const person = (() => {
    let myName = '';
    return {
        getName: () => { return myName;},
        setName: (name) => { myName = name; },
    };
})();
console.log(person);
person.setName('Ronit');
console.log(person.getName());

const myFunc = () => {
    let myName = '';
    return {
        getName: () => { 
            return myName;
        },
        setName: (name) => { 
            myName = name; 
        },
    };
}
const person2 = myFunc();
console.log(person);
person.setName('Ronit');
console.log(person.getName());