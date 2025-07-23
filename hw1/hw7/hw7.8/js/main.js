"use strict";
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name, age, foundSlipper) {
        this.name = name;
        this.age = age;
        this.foundSlipper = foundSlipper;
    }
}
const cinderellas = [
    new Cinderella('Olga', 21, 36),
    new Cinderella('Nata', 59, 41),
    new Cinderella('Sveta', 79, 43),
    new Cinderella('Gallina', 16, 35),
    new Cinderella('Karina', 30, 40),
    new Cinderella('Alevtina', 29, 38),
    new Cinderella('Darina', 44, 45),
    new Cinderella('Irina', 18, 39),
    new Cinderella('Julia', 36, 42),
    new Cinderella('Mahsa', 50, 37),
];
const prince = new Prince('Solovey Razboinik', 19, 43);
const find = cinderellas.find((cinderella) => cinderella.footSize === prince.foundSlipper);
console.log(find);
