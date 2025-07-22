// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap = <T>(arr: T[], index1: number, index2: number): T[] => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
};

console.log(swap([11, 22, 33, 44], 0, 1));

