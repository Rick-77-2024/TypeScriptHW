"use strict";
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
class User {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
let users = [
    new User(1, 'Vladimir', 'Ilyich', 'aaa@gmail.com', '+381'),
    new User(2, 'Jozeff', 'Stalin', 'bbb@gmail.com', '+382'),
    new User(3, 'Eva', 'Brown', 'ccc@gmail.com', '+383'),
    new User(4, 'Kit', 'Gelog', 'ddd@gmail.com', '+384'),
    new User(5, 'Ridley', 'Scott', 'eee@gmail.com', '+385'),
    new User(7, 'Lada', 'Dance', 'fff@gmail.com', '+386'),
    new User(8, 'Klara', 'Luchko', 'ggg@gmail.com', '+387'),
    new User(9, 'Benny', 'Hill', 'hhh@gmail.com', '+388'),
    new User(10, 'Hor', 'Brown', 'iii@gmail.com', '+389'),
    new User(11, 'Terra', 'Inkognita', 'jjj@gmail.com', '+390'),
];
let newUsers = [...users];
console.log(newUsers.sort((a, b) => a.id - b.id));
