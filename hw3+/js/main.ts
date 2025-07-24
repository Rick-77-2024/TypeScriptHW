// TS. ДЗ 3
// Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
// Сигнатур функції під час виклику foobar<SomeType>(‘/url)
// SomeType – ваш тип відповіді
// url – ваш ендпоінт, з якого чекаємо відповідь

async function foobar<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json() as T;
}

// Пример использования:
interface User {
    id: number;
    name: string;
}

async function test() {
    try {
        const user: User = await foobar<User>('/api/user/123');
        console.log(user.name);
    } catch (error) {
        console.error("Ошибка при запросе:", error);
    }
}

test();

/*
async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json() as T;
}
interface User {
    id: number;
    name: string;
}
async function getUser(id: number): Promise<User> {
    const user = await fetchData<User>(`https://api.example.com/users/${id}`);
    return user;
}
getUser(123)
    .then(user => {
        console.log(user.name);
    })
    .catch(error => {
        console.error(error);
    });
*/
