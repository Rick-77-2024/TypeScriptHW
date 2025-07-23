// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

type Driver = { [key: string]: any };

function Cars(
    this: any,
    model: string,
    producer: string,
    yearOfBuild: number,
    maxSpeed: number,
    engineCapacity: string
) {
    this.model = model;
    this.producer = producer;
    this.yearOfBuild = yearOfBuild;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function (): void {
        console.log(`we driving car ${this.maxSpeed} km/h`);
    };
    this.info = function (): void {
        for (const key in this) {
            if (Object.prototype.hasOwnProperty.call(this, key)) {
                console.log(key, this[key]);
            }
        }
    };
    this.increaseMaxSpeed = function (increasedSpeed: number): void {
        if (increasedSpeed > 0) this.maxSpeed = this.maxSpeed + increasedSpeed;
    };
    this.changeYearOfBuild = function (yearOfBuild: number): void {
        if (yearOfBuild > 1991) this.yearOfBuild = yearOfBuild;
    };
    this.addedDriver = function (driver: Driver): void {
        if (driver) this.driver = driver;
    };
}

const car = new (Cars as any)('BMW x7', 'Bavaria Motors', 2021, 150, '5.7L');
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(22);
car.addedDriver({ name: 'Valera', experience: 5 });
car.changeYearOfBuild(2024);
console.log(car);