// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при
// натисканні на кнопку зникав елемент з id="text".

let div: HTMLDivElement = document.createElement('div');
div.id = 'text';
div.innerText = 'I use any words I can say)))';
let button: HTMLButtonElement = document.createElement('button');
button.style.width = '50px';
button.style.height = '20px';
button.innerText = 'Done!';
document.body.append(div, button);
button.onclick = function () {
    const textDiv = document.getElementById('text');
    if (textDiv) textDiv.remove();
};


