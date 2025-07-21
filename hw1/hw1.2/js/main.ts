// #6Qb97gsv
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

console.log('---Second task---');
const firstName: string = 'Vitaliy';
const middleName: string = 'Michailovich';
const lastName: string = 'Turik';
let person: string = firstName + ' ' + middleName + ' ' + lastName;
let person2: string = `${firstName} ${middleName} ${lastName}`;

console.log(person); console.log(person2);

console.log('---Third task---');

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