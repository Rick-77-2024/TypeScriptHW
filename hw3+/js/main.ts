// TS. ДЗ 3
// Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
// Сигнатур функції під час виклику foobar<SomeType>(‘/url)
// SomeType – ваш тип відповіді
// url – ваш ендпоінт, з якого чекаємо відповідь

async function callAPI<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json() as T;
}

interface User {
    id: number;
    name: string;
}

async function test() {
    try {
        const user: User = await callAPI<User>('/api/user/123');
        console.log(user.name);
    } catch (error) {
        console.error("Ошибка при запросе:", error);
    }
}

test();
