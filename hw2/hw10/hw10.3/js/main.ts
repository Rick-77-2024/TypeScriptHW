// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

const requestedName: HTMLInputElement = document.createElement('input');
requestedName.type = 'text';
requestedName.placeholder = "Name";
document.body.appendChild(requestedName);
const requestedSurname: HTMLInputElement = document.createElement('input');
requestedSurname.type = 'text';
requestedSurname.placeholder = "Surname";
document.body.appendChild(requestedSurname);
const requestedAge2: HTMLInputElement = document.createElement('input');
requestedAge2.type = 'number';
requestedAge2.placeholder = 'Age';
document.body.appendChild(requestedAge2);
const btn: HTMLButtonElement = document.createElement('button');
btn.style.width = '100px';
btn.style.height = '20px';
btn.innerText = 'Send form';
document.body.appendChild(btn);
const message2: HTMLParagraphElement = document.createElement('p');
document.body.appendChild(message2);
const outputContainer: HTMLDivElement = document.createElement('div');
outputContainer.id = 'output';
document.body.appendChild(outputContainer);
btn.addEventListener('click', () => {
    const name = requestedName.value;
    const surname = requestedSurname.value;
    const age = parseInt(requestedAge2.value);
    const user = {
        name: name,
        surname: surname,
        age: age,
    };
    outputContainer.innerText = user.name + ' ' + user.surname + ' ' + user.age;
});
