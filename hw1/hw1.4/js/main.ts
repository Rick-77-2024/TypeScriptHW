// Логічні розгалуження:

//#bAUsaq6LI
//- Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
console.log('Переменная x больше/меньше ноля');

let x: number = 3;
if (x > 0) {
    console.log('Переменная x = ' + x + ' больше ноля');
} else {
    console.log('Переменная x = ' + x + ' меньше ноля');
}

// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
console.log('Расчёт четверти часа');

let time: number = Number(prompt('Введите число от 1 до 60'));
if (time <= 15) {
    console.log('Время в первой четверти часа');
} else if (time <= 30){
    console.log('Время в второй четверти часа');
} else if (time <= 45) {
    console.log('Время во третей четверти часа');
} else if (time <= 60) {
    console.log('Время в четвёртой четверти часа');
} else {
    console.log('Ошиба, введите число от 1 до 60');
}

// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

console.log('Расчёт декады месяца');

let dayDate: number = Number(prompt('Введите число от 1 до 31'));
if (dayDate <= 10) {
    console.log('Дата в первой декаде месяца');
} else if (dayDate <= 20){
    console.log('Дата во второй декаде месяца');
} else if (dayDate <= 31) {
    console.log('Дата в третей декаде месяца');
} else {
    console.log('Ошиба, введите число от 1 до 31');
}


// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на
// цей день (можна замість плану на день, назву дня англійською).
let plan: string | null = prompt('Введите день недели на англ.');

switch (plan) {
    case 'Monday':
        console.log('Plans on Monday');
        break;
    case 'Tuesday':
        console.log('Plans on Tuesday');
        break;
    case 'Wednesday':
        console.log('Plans on Wednesday');
        break;
    case 'Thursday':
        console.log('Plans on Thursday');
        break;
    case 'Friday':
        console.log('Plans on Friday');
        break;
    case 'Saturday':
        console.log('Plans on Saturday');
        break;
    case 'Sunday':
        console.log('Plans on Sunday');
        break;
    default:
        console.log('Please try again');
}

// #uwsz1RnTQJ1
// - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.
console.log('Сравнение значений двух чисел');

let a: number = Number(prompt('Введите значение пременой a'));
let b: number = Number(prompt('Введите значение пременой b'));

if (a > b) {
    console.log('a > b');
} else if (a === b) {
    console.log('a = b');
} else if (a < b) {
    console.log('a < b');
}

// #iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті,
//     які приводиться до false, а це 0 null undefined і тд).
console.log('Присвоить знчение default ошибочной переменной x ');

let x1: any = 0;
if (!x1) {
    x1 = 'default';
}


// #awLXL6TBzg
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент
// на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
console.log('Опредедить дительность учёбы больше 5 мес ');

type Course = {
    title: string;
    monthDuration: number;
};

let coursesAndDurationArray: Course[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    if (course.monthDuration > 5) {
        console.log(`${course.title} Супер ${course.monthDuration} мес.`);
    }
}