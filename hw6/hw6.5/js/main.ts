// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//    let str = 'Ревуть воли як ясла повні';
//    let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToWords(str:any): any {
    return str.split(" ");
}

let str: string = "Ревуть воли як ясла повні";
let strArr:any = stringToWords(str);
console.log(strArr);
