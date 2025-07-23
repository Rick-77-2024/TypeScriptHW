// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const textUlLi = (text: any, count: any) => {
                document.write("<ul>");
                    for (let x = 0; x < count; ++x) {
                        document.write("<li>" + text + "</li>");
                    }
                document.write("</ul>");
}
textUlLi("Text LI", 5);
