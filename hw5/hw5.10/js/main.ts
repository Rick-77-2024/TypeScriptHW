// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

const minNumber = (arr: number[]): number => {
    let min = arr[0];
    for (let x = 1; x < arr.length; x++) {
        if (arr[x] < min) {
            min = arr[x];
        }
    }
    return min;
};

const numbers: number[] = [20, 4, -15, 8, 25];
const smallNum: number = minNumber(numbers);
console.log(smallNum);

