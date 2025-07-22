// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(nums:any, direction:any) {
    if (direction === "descending") {
        return nums.sort((a:any, b:any):number => b - a);
    } else {
        return nums.sort((a:any, b:any):number => a - b);
    }
}

let nums:number[] = [11, 21, 3];
let sortedDescending:any = sortNums(nums, "descending");
let sortedAscending:any = sortNums(nums, "ascending");

 console.log(sortNums (nums, 'ascending'));
 console.log(sortNums (nums, 'descending'));
