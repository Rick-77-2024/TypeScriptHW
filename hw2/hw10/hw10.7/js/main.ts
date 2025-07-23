// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та
// додає в нього об'єкт сигнатура функції -  addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName: string, objToAdd: any): void {
    if (typeof arrayName === 'string') {
        const storedArray = JSON.parse(localStorage.getItem(arrayName) || '[]');
        storedArray.push(objToAdd);
        localStorage.setItem(arrayName, JSON.stringify(storedArray));
    }
}
addToLocalStorage('myArray', { name: 'Jimmy', age: 130 });
addToLocalStorage('myArray', { name: 'Aladin', age: 15 });

