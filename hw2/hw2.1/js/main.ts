// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

type ArrType = (number | boolean | string | null | undefined | bigint | any[])[];

let arr: ArrType = [
    [10],
    [true],
    ['text'],
    [3.14],
    [null],
    [undefined],
    [5465486484564],
    [
        [5],
        [10]
    ],
    [
        [true],
        [false]
    ],
    ['final']
];

console.log(arr);
