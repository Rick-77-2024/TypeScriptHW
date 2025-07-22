"use strict";
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Cars {
    constructor(model, producer, yearOfBuild, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.yearOfBuild = yearOfBuild;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive() {
        console.log(`we driving car ${this.maxSpeed} km/h`);
    }
    info() {
        for (const key in this) {
            // @ts-ignore
            console.log(key, this[key]);
        }
    }
    increaseMaxSpeed(increasedSpeed) {
        if (increasedSpeed > 0)
            this.maxSpeed = this.maxSpeed + increasedSpeed;
    }
    changeYearOfBuild(yearOfBuild) {
        if (yearOfBuild > 1991)
            this.yearOfBuild = yearOfBuild;
    }
    addedDriver(driver) {
        if (driver)
            this.driver = driver;
    }
}
const car = new Cars('BMW x7', 'Bavaria Motors', 2021, 150, '5.7L');
car.info();
car.increaseMaxSpeed(22);
car.addedDriver({ name: 'Valera' });
car.changeYearOfBuild(2021);
console.log(car);
