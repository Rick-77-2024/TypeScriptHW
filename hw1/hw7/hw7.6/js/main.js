"use strict";
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Cars(model, producer, yearOfBuild, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.yearOfBuild = yearOfBuild;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`we driving car ${this.maxSpeed} km/h`);
    };
    this.info = function () {
        for (const key in this) {
            if (Object.prototype.hasOwnProperty.call(this, key)) {
                console.log(key, this[key]);
            }
        }
    };
    this.increaseMaxSpeed = function (increasedSpeed) {
        if (increasedSpeed > 0)
            this.maxSpeed = this.maxSpeed + increasedSpeed;
    };
    this.changeYearOfBuild = function (yearOfBuild) {
        if (yearOfBuild > 1991)
            this.yearOfBuild = yearOfBuild;
    };
    this.addedDriver = function (driver) {
        if (driver)
            this.driver = driver;
    };
}
const car = new Cars('BMW x7', 'Bavaria Motors', 2021, 150, '5.7L');
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(22);
car.addedDriver({ name: 'Valera', experience: 5 });
car.changeYearOfBuild(2024);
console.log(car);
