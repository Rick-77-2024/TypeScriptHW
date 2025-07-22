// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

type Person = { id: number; name: string; age: number };

const namesArray = (arr: Person[]): void => {
    document.write("<ul>");
    for (let x = 0; x < arr.length; x++) {
        const item = arr[x];
        document.write("<li> Id: " + item.id + " </li>");
        document.write("<li> Name: " + item.name + " </li>");
        document.write("<li> Age: " + item.age + " </li>");
        document.write("<br>");
    }
    document.write("</ul>");
};

namesArray([
    { id: 1, name: "Vasya", age: 220 },
    { id: 2, name: "Petya", age: 30 },
    { id: 3, name: "Olga", age: 40 }
]);
