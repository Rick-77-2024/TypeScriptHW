// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const kgNumber = document.getElementById('kgNumber') as HTMLInputElement;
const result = document.getElementById('converResult') as HTMLElement;
if (kgNumber && result) {
    kgNumber.oninput = function () {
        let results = +kgNumber.value * 2.2046;
        result.innerText = `${results} lb`;
    };
}

