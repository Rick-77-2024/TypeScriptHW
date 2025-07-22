"use strict";
// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//    let str = 'Ревуть воли як ясла повні';
//    let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
function stringToWords(str) {
    return str.split(" ");
}
let str = "Ревуть воли як ясла повні";
let strArr = stringToWords(str);
console.log(strArr);
