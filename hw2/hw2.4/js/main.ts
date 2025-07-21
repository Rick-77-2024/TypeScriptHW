// #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

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
