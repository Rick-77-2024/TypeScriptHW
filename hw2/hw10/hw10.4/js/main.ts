// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки
// буде додавати до неї +1

let counter: string | null = localStorage.getItem('counter');
let counterNum: number = counter ? +counter : 0;
counterNum++;
localStorage.setItem('counter', counterNum.toString());
const counterElem = document.getElementById('counter');
if (counterElem) counterElem.textContent = counterNum.toString();
