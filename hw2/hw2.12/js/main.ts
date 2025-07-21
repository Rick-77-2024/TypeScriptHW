// Логічні розгалуження:

// #awLXL6TBzg
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент
// на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
console.log('Determine the duration of study more than 5 months');

type Course = {
    title: string;
    monthDuration: number;
};

let coursesAndDurationArray: Course[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    if (course.monthDuration > 5) {
        console.log(`${course.title} Super ${course.monthDuration} months`);
    }
}
