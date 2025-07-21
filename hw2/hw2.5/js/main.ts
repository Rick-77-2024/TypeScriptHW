// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив
// з 21 значенням вичключаємо одразу

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
    { day: 'Thursday', morning: 10, noon: 20, evening: 15 },
    { day: 'Friday', morning: 10, noon: 20, evening: 15 },
    { day: 'Saturday', morning: 10, noon: 20, evening: 15 },
    { day: 'Sunday', morning: 10, noon: 20, evening: 15 },
]

console.log(temperature);
