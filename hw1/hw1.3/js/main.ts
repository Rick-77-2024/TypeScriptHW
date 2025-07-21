// #4N0y5tufA
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a: number = 100;
let b: string = '100';
let c: boolean = true;

console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);

console.log('---Addition task prompt---');
const name_n: string | null = prompt('name?', 'name');
const surname: string | null = prompt('surname?', 'surname');
const age: string | null = prompt('age?', 'age');
