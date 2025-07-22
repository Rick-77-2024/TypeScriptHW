"use strict";
// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
function sortNums(nums, direction) {
    if (direction === "descending") {
        return nums.sort((a, b) => b - a);
    }
    else {
        return nums.sort((a, b) => a - b);
    }
}
let nums = [11, 21, 3];
let sortedDescending = sortNums(nums, "descending");
let sortedAscending = sortNums(nums, "ascending");
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
