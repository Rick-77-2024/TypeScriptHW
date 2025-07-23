"use strict";
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них
// список
const arrayToList = (arr) => {
    document.write("<ul>");
    for (let x = 0; x < arr.length; x++) {
        document.write("<li>" + arr[x] + "</li>");
    }
    document.write("</ul>");
};
arrayToList([50, true, false, "text", null]);
