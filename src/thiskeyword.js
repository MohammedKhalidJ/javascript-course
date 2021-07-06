
// In side the object method this refer to the owner object
"use strict"

// let nameObj = {
//     companyName: 'PK',
//     Year: new Date().getFullYear(),
//     description: function() {
//         return `${this.companyName} ${this.Year}`
//     }
// };

// alert(nameObj.description())

// Alone, this refers to global object

// console.log(this);

// using this keyword inside a function, it refers to global object
// inside function with strict mode, this keyword is undefined

function cmpName() {
    console.log(this);
}

//const cmpName = () => console.log(this);

cmpName();

// this inside event refers to element