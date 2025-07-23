"use strict";
// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Product {
    constructor(title, price, value) {
        this.title = title;
        this.price = price;
        this.value = value;
    }
}
class Client {
    constructor(id, name, surname, email, phone, ...products) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = products;
    }
}
const clients = [
    new Client(1, 'Vladimir', 'Ilyich', 'aaa@gmail.com', '+381', new Product('Beer', 80, '10pcs'), new Product('Hat', 100, '20pcs')),
    new Client(2, 'Jozeff', 'Stalin', 'bbb@gmail.com', '+382', new Product('Juice', 40, '13pcs'), new Product('Book', 100, '20pcs')),
    new Client(3, 'Eva', 'Brown', 'ccc@gmail.com', '+383', new Product('Book', 100, '20pcs'), new Product('Phone', 30000, '15pcs')),
    new Client(4, 'Kit', 'Gelog', 'ddd@gmail.com', '+384', new Product('Book', 100, '20pcs'), new Product('Tickets', 500, '20pcs')),
    new Client(5, 'Ridley', 'Scott', 'eee@gmail.com', '+385', new Product('Milk', 60, '33pcs'), new Product('Book', 100, '20pcs')),
    new Client(6, 'Lada', 'Dance', 'fff@gmail.com', '+386', new Product('Book', 100, '20pcs'), new Product('Water', 15, '55pcs')),
    new Client(7, 'Klara', 'Luchko', 'ggg@gmail.com', '+387', new Product('Book', 100, '20pcs'), new Product('TV', 4000, '10pcs')),
    new Client(8, 'Benny', 'Hill', 'hhh@gmail.com', '+388', new Product('Tape', 200, '300pcs'), new Product('Book', 100, '20pcs')),
    new Client(9, 'Hor', 'Brown', 'iii@gmail.com', '+389', new Product('Book', 100, '20pcs'), new Product('Monitor', 2800, '10pcs')),
    new Client(10, 'Terra', 'Inkognita', 'jjj@gmail.com', '+390', new Product('LapTop', 6000, '11pcs'), new Product('Book', 100, '20pcs')),
];
console.log(clients);
