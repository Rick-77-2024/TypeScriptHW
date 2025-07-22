// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function Paragraph(text: string): void  {
    document.write("<p>" + text + "</p>");
}

Paragraph("I show you how to write in paragraph");
