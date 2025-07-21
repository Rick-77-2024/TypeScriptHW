"use strict";
// #qLQLJSeN7i
//
// – є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести числа тільки з непарним індексом
// 4. перебрати циклом for та вивести числа тільки з непарним індексом
// 5. перебрати циклом while та вивести числа тільки парні  значення
// 6. перебрати циклом for та вивести числа тільки парні  значення
// 7. замінити кожне число, кратне 3, на слово “okten”
// 8. вивести масив у зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log('Using WHILE to see non pair indexes');
let x = 0;
while (x < arr.length) {
    if (x % 2 !== 0) {
        console.log(arr[x]);
    }
    x++;
}
console.log('Using FOR to see non pair indexes');
for (let x = 1; x <= arr.length; x++) {
    if (x % 2 !== 0) {
        console.log(arr[x]);
    }
    x++;
}
console.log('Using WHILE to see pair indexes');
let x1 = 0;
while (x1 < arr.length) {
    if (x1 % 2 === 0) {
        console.log(arr[x1]);
    }
    x1++;
}
console.log('Using FOR to see pair indexes');
for (let x = 0; x < arr.length; x += 2) {
    console.log(arr[x]);
}
console.log('Replace a multiple of 3 with the word okten');
for (let x = 0; x < arr.length; x++) {
    if (arr[x] % 3 === 0) {
        arr[x] = "okten";
    }
}
console.log(arr);
console.log('Array in backward way');
for (let x = arr.length - 1; x >= 0; x--) {
    console.log(arr[x]);
}
