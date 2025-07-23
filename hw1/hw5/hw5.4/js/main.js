"use strict";
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const squareOfCylinder = (r, h) => 2 * Math.PI * r * h + 2 * Math.PI * r * r;
const r = 8;
const h = 16;
const areaCylinder = squareOfCylinder(r, h);
console.log('Square of cylinder: ' + areaCylinder);
