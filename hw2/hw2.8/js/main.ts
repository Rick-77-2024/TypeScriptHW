// Логічні розгалуження:

// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let dayDate: number = Number(prompt('Enter a number from 1 to 31'));
if (dayDate <= 10) {
    console.log('Date in the first ten days of the month');
} else if (dayDate <= 20){
    console.log('Date in the second decade of the month');
} else if (dayDate <= 31) {
    console.log('Date in the third decade of the month');
} else {
    console.log('Error, enter a number from 1 to 31');
}
