// Логічні розгалуження:

// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time: number = Number(prompt('Enter a number from 1 to 60'));

if (time >= 1 && time <= 15) {
    console.log('Time in the first quarter of an hour');
} else if (time <= 30){
    console.log('Time in the second quarter of an hour');
} else if (time <= 45) {
    console.log('Time in the third quarter of an hour');
} else if (time <= 60) {
    console.log('Time in the fourth quarter of an hour');
} else {
    console.log('Error, enter a number from 1 to 60');
}
