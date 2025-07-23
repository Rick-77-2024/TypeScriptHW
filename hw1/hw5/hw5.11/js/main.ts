// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

const sum = (arr: number[]): number => {
    let arraySum = 0;
    for (let x = 0; x < arr.length; x++) {
        arraySum += arr[x];
    }
    return arraySum;
};

console.log(sum([10, 20, 30]));
