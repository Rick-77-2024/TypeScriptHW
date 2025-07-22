// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

function minNumber(arr) {
    let minNumber = arr[0];
    for (let x = 1; x < arr.length; x++) {
        if (arr[x] < minNumber) {
            minNumber = arr[x];
        }
    }
    return minNumber;
}

const numbers = [20, 4, -15, 8, 25];
const smallNum = minNumber(numbers);
console.log(smallNum);
