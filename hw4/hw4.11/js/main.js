// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

var array = [20, 4, -15, 8, 25];

function sum(arr){
    var arraySum = 0;
    for(var x = 0; x < arr.length; x++){
        arraySum += arr[x];
    }
    console.log(arraySum);
}
sum(array);
