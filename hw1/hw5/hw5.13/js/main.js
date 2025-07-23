"use strict";
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    const chosenCurrency = currencyValues.find((item) => item.currency === exchangeCurrency);
    if (!chosenCurrency)
        return undefined;
    return sumUAH / chosenCurrency.value;
};
console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'EUR'));
