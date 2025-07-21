console.log('---First task---');
let hello: string = 'hello';
let owu: string = 'owu';
let ua: string = 'ua';
let one: number = 1;
let ten: number = 10;
let ottr: number = 123;
let PI: number = 3.14;
let num2: number = 2.7;
let tr: boolean = true;
let fs: boolean = false;

console.log(hello); console.log(owu);
console.log(ua); console.log(one);
console.log(ten); console.log(ottr);
console.log(PI); console.log(num2);
console.log(tr); console.log(fs);

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
const name: string | null = prompt('Имя?', 'Имя');
const surname: string | null = prompt('Фамилия?', 'Фамилия');
const age: string | null = prompt('Возраст?', 'Возраст');