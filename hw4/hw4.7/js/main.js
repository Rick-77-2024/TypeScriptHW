// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function TextUlLiFor(text, count) {
    document.write("<ul>");
    for (let x = 0; x < count; ++x) {
        document.write("<li>" + text + "</li>");
    }
    document.write("</ul>");
}
    TextUlLiFor("Text LI", 5);
	