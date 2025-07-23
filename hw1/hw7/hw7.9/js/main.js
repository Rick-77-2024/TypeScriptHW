"use strict";
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
Array.prototype.meinFilter = function (callback) {
    const arr = [];
    for (const item of this) {
        if (callback(item)) {
            arr.push(item);
        }
    }
    return arr;
};
let users = [
    { name: 'Olga', age: 31, status: false },
    { name: 'Sveta', age: 30, status: true },
    { name: 'Pasha', age: 29, status: true },
    { name: 'Irina', age: 28, status: false },
    { name: 'Julia', age: 30, status: true },
    { name: 'Anna', age: 31, status: false },
    { name: 'Kristina', age: 28, status: false },
    { name: 'Forest', age: 29, status: true },
    { name: 'Viktoria', age: 30, status: true },
    { name: 'Sergey', age: 31, status: false },
    { name: 'Oleg', age: 31, status: true }
];
const result = users.meinFilter((user) => user.status);
console.log(result);
