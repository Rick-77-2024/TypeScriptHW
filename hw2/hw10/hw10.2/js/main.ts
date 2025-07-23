// #j693ca8 ---------------нема відео
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const requestedAge: HTMLInputElement = document.createElement('input');
requestedAge.style.width = '200px';
requestedAge.style.height = '50px';
requestedAge.placeholder = 'Type your age';
document.body.appendChild(requestedAge);
const btnRequestedAge: HTMLButtonElement = document.createElement('button');
btnRequestedAge.style.width = '200px';
btnRequestedAge.style.height = '50px';
btnRequestedAge.innerText = 'Type your age';
document.body.appendChild(btnRequestedAge);
const message: HTMLParagraphElement = document.createElement('p');
message.style.fontSize = '20px';
message.style.fontWeight = 'bold';
document.body.appendChild(message);
btnRequestedAge.addEventListener('click', function () {
    const age = parseInt(requestedAge.value);
    if (isNaN(age)) {
        message.innerText = 'Error!';
        message.style.color = 'orange';
    } else if (age < 18) {
        message.innerText = 'Your age is not allowed!!!';
        message.style.color = 'red';
    } else {
        message.innerText = 'Welcome )))';
        message.style.color = 'green';
    }
});


