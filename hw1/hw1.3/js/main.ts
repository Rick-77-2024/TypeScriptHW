console.log('---Массив из 10 элементов---');

type ArrType = (number | boolean | string | null | undefined | bigint | any[])[];

let arr: ArrType = [
    [10],
    [true],
    ['text'],
    [3.14],
    [null],
    [undefined],
    [5465486484564654894654684698456n],
    [
        [5],
        [10]
    ],
    [
        [true],
        [false]
    ],
    ['final']
];

console.log(arr);

console.log('---Три объекта описываэщие книгу---');

type Book = {
    title: string;
    pageCount: number;
    genre: string;
}

let book: Book = {
    title: 'TITLE',
    pageCount: 200,
    genre: 'PROGRAMMING'
}

console.log(book);

console.log('---Три объекта и массив авторов---');

type Author = {
    name: string;
    age: number;
}

type BookWithAuthors = Book & {
    authors: Author[];
}

let book1: BookWithAuthors = {
    title: 'TITLE',
    pageCount: 200,
    genre: 'PROGRAMMING',
    authors: [
        { name: 'Author1', age: 30 },
        { name: 'Author2', age: 40 },
        { name: 'Author3', age: 50 }
    ]
}

console.log(book1);

console.log('---Десять объектов и пароли пользователей---');

type User = {
    name: string;
    username: string;
    password: string;
}

let users: User[] = [
    { name: 'User1', username: 'UserName1', password: 'password1' },
    { name: 'User2', username: 'UserName2', password: 'password2' },
    { name: 'User3', username: 'UserName3', password: 'password3' },
    { name: 'User4', username: 'UserName4', password: 'password4' },
    { name: 'User5', username: 'UserName5', password: 'password5' },
    { name: 'User6', username: 'UserName6', password: 'password6' },
    { name: 'User7', username: 'UserName7', password: 'password7' },
    { name: 'User8', username: 'UserName8', password: 'password8' },
    { name: 'User9', username: 'UserName9', password: 'password9' },
    { name: 'User10', username: 'UserName10', password: 'password10' }
]

for (let i = 0; i < users.length; i++) {
    console.log(users[i].password);
}

console.log('---Сохранять температуру среды---');

type Temperature = {
    day: string;
    morning: number;
    noon: number;
    evening: number;
}

let temperature: Temperature[] = [
    { day: 'Monday', morning: 10, noon: 20, evening: 15 },
    { day: 'Tuesday', morning: 10, noon: 20, evening: 15 },
    { day: 'Wednesday', morning: 10, noon: 20, evening: 15 },
    { day: 'Thirday', morning: 10, noon: 20, evening: 15 },
    { day: 'Friday', morning: 10, noon: 20, evening: 15 },
    { day: 'Saturday', morning: 10, noon: 20, evening: 15 },
    { day: 'Sunday', morning: 10, noon: 20, evening: 15 },
]

console.log(temperature);