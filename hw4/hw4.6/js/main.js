// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function textUlLi(text) {
    document.write("<ul>");
        document.write("<li>" +  text + "</li>");
        document.write("<li>" +  text + "</li>");
        document.write("<li>" +  text + "</li>")
    document.write("</ul>");
}

textUlLi("Text LI");

