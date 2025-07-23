// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div: HTMLDivElement = document.createElement('div');
document.body.appendChild(div);
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('collapse');
div.classList.add('beta');
div.style.backgroundColor = 'grey';
div.style.color = 'orange';
div.style.fontSize = '10rm';
let h1: HTMLHeadingElement = document.createElement("h1");
div.appendChild(h1);
h1.innerText = 'some text';
const cloneDiv = div.cloneNode(true) as HTMLDivElement;
document.body.appendChild(cloneDiv);

