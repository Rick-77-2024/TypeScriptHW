// Логічні розгалуження:

// #uwsz1RnTQJ1
// - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.

let a: number = Number(prompt('Enter the value of the variable a'));
let b: number = Number(prompt('Enter the value of the variable b'));

if (a > b) {
    console.log('a > b');
} else if (a === b) {
    console.log('a = b');
} else if (a < b) {
    console.log('a < b');
}
