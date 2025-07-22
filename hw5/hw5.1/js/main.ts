// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const rectangle = (a: number, b: number): number => a * b;

const sideA: number = 5;
const sideB: number = 10;
const area: number = rectangle(sideA, sideB);
console.log(area);
