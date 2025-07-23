// #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

const h1 = document.getElementById('price') as HTMLElement;
let value = +JSON.parse(localStorage.getItem('value') || '10');
if (value < 10) {
    value = 10;
}
if (h1) h1.textContent = `${value}`;
let storageTime = +JSON.parse(localStorage.getItem('storageTime') || '0');
let currentTime = new Date().getTime();
if (currentTime > (storageTime + 10000)) {
    localStorage.setItem('storageTime', JSON.stringify(currentTime));
    let newValue = value + 10;
    localStorage.setItem('value', JSON.stringify(newValue));
}


 